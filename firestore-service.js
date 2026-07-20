(function () {
  'use strict';

  const fb = window.parxoFirebase;
  const state = {
    user: null,
    unsub: null,
    applyingRemote: false,
    started: false,
    saveInProgress: false,
    queuedData: null
  };

  const docRef = fb.firestore.collection('parxo').doc('main');

  function setStatus(text, ok) {
    const el = document.getElementById('cloudStatus');
    if (!el) return;
    el.textContent = text;
    el.dataset.ok = ok ? '1' : '0';
  }

  function showLogin(show) {
    const el = document.getElementById('adminLoginOverlay');
    if (el) el.style.display = show ? 'flex' : 'none';
  }

  function cleanData(data) {
    return JSON.parse(JSON.stringify(data || {}));
  }

  function isValidDatabase(data) {
    return !!data && Array.isArray(data.products) && Array.isArray(data.parchas);
  }

  function stripMetadata(data) {
    const copy = cleanData(data);
    delete copy.updatedAt;
    delete copy.updatedBy;
    delete copy.schemaVersion;
    return copy;
  }

  async function waitForLocalDatabase() {
    for (let i = 0; i < 100; i += 1) {
      if (typeof window.PARXO_GET_DB === 'function') {
        const current = window.PARXO_GET_DB();
        if (isValidDatabase(current)) return cleanData(current);
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    return { products: [], parchas: [], customers: [], settings: {} };
  }

  async function writeNow(data) {
    if (!state.user || state.applyingRemote) return;
    state.saveInProgress = true;
    setStatus('Cloud में सेव हो रहा है…', true);
    try {
      await docRef.set({
        ...cleanData(data),
        schemaVersion: 2,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedBy: state.user.email || state.user.uid
      }, { merge: false });
      setStatus('Cloud Sync चालू', true);
    } finally {
      state.saveInProgress = false;
      if (state.queuedData) {
        const next = state.queuedData;
        state.queuedData = null;
        await writeNow(next);
      }
    }
  }

  async function push(data) {
    if (!state.user || state.applyingRemote || !isValidDatabase(data)) return;
    if (state.saveInProgress) {
      state.queuedData = cleanData(data);
      return;
    }
    return writeNow(data);
  }

  function applyRemote(data) {
    if (!isValidDatabase(data)) return;
    state.applyingRemote = true;
    window.dispatchEvent(new CustomEvent('parxo-cloud-data', {
      detail: stripMetadata(data)
    }));
    setTimeout(() => { state.applyingRemote = false; }, 150);
  }

  async function startRealtime() {
    if (state.started || !state.user) return;
    state.started = true;
    const localData = await waitForLocalDatabase();

    try {
      const firstSnapshot = await docRef.get();
      if (!firstSnapshot.exists) {
        await push(localData);
      } else {
        const remoteData = firstSnapshot.data();
        const remoteIsEmpty = isValidDatabase(remoteData) &&
          remoteData.products.length === 0 && remoteData.parchas.length === 0;
        const localHasData = localData.products.length > 0 || localData.parchas.length > 0;

        if (!isValidDatabase(remoteData) || (remoteIsEmpty && localHasData)) {
          await push(localData);
        } else {
          applyRemote(remoteData);
        }
      }

      if (state.unsub) state.unsub();
      state.unsub = docRef.onSnapshot(snapshot => {
        if (!snapshot.exists || snapshot.metadata.hasPendingWrites) return;
        applyRemote(snapshot.data());
        setStatus('Cloud Sync चालू', true);
      }, error => {
        console.error('Firestore realtime error:', error);
        setStatus('Cloud Sync त्रुटि', false);
      });
    } catch (error) {
      console.error('Firestore start error:', error);
      setStatus('Cloud से कनेक्शन नहीं हुआ', false);
    }
  }

  async function login(email, password) {
    return fb.auth.signInWithEmailAndPassword(email, password);
  }

  async function logout() {
    return fb.auth.signOut();
  }

  fb.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(console.error);

  fb.auth.onAuthStateChanged(async user => {
    state.user = user || null;
    state.started = false;

    if (user) {
      showLogin(false);
      setStatus('Cloud से जुड़ रहा है…', true);
      await startRealtime();
    } else {
      if (state.unsub) state.unsub();
      state.unsub = null;
      setStatus('Admin Login आवश्यक', false);
      showLogin(true);
    }
  });

  window.PARXO_CLOUD = {
    push,
    login,
    logout,
    get user() { return state.user; },
    get applyingRemote() { return state.applyingRemote; }
  };

  window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('adminLoginForm');
    if (form) {
      form.addEventListener('submit', async event => {
        event.preventDefault();
        const message = document.getElementById('adminLoginMessage');
        try {
          if (message) message.textContent = 'Login हो रहा है…';
          await login(
            document.getElementById('adminEmail').value.trim(),
            document.getElementById('adminPassword').value
          );
          if (message) message.textContent = '';
        } catch (error) {
          console.error('Login error:', error);
          if (message) message.textContent = 'Login नहीं हुआ: Email या Password जाँचें।';
        }
      });
    }

    const logoutButton = document.getElementById('adminLogoutBtn');
    if (logoutButton) logoutButton.addEventListener('click', logout);
  });
})();
