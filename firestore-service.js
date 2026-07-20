(function () {
  'use strict';
  const fb = window.parxoFirebase;
  const state = { user: null, unsub: null, applyingRemote: false, ready: false };
  const docRef = fb.firestore.collection('parxo').doc('main');

  function setStatus(text, ok) {
    const el = document.getElementById('cloudStatus');
    if (el) { el.textContent = text; el.dataset.ok = ok ? '1' : '0'; }
  }
  function showLogin(show) {
    const el = document.getElementById('adminLoginOverlay');
    if (el) el.style.display = show ? 'flex' : 'none';
  }
  function cleanData(data) {
    return JSON.parse(JSON.stringify(data || {}));
  }
  async function push(data) {
    if (!state.user || state.applyingRemote) return;
    setStatus('Cloud में सेव हो रहा है…', true);
    await docRef.set({ ...cleanData(data), updatedAt: firebase.firestore.FieldValue.serverTimestamp(), updatedBy: state.user.email || state.user.uid }, { merge: false });
    setStatus('Cloud Sync चालू', true);
  }
  async function startRealtime(localData) {
    if (state.unsub) state.unsub();
    const snap = await docRef.get();
    if (!snap.exists) await push(localData);
    state.unsub = docRef.onSnapshot(s => {
      if (!s.exists) return;
      const remote = s.data();
      delete remote.updatedAt; delete remote.updatedBy;
      state.applyingRemote = true;
      window.dispatchEvent(new CustomEvent('parxo-cloud-data', { detail: remote }));
      setTimeout(() => { state.applyingRemote = false; }, 50);
      setStatus('Cloud Sync चालू', true);
    }, err => {
      console.error(err); setStatus('Cloud Sync त्रुटि', false);
    });
  }
  async function login(email, password) {
    await fb.auth.signInWithEmailAndPassword(email, password);
  }
  async function logout() { await fb.auth.signOut(); }

  fb.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(console.error);
  fb.auth.onAuthStateChanged(async user => {
    state.user = user || null;
    if (user) {
      showLogin(false);
      setStatus('Cloud से जुड़ रहा है…', true);
      state.ready = true;
      await startRealtime(window.PARXO_GET_DB ? window.PARXO_GET_DB() : {});
    } else {
      if (state.unsub) state.unsub(); state.unsub = null;
      setStatus('Admin Login आवश्यक', false);
      showLogin(true);
    }
  });

  window.PARXO_CLOUD = { push, login, logout, get user(){ return state.user; }, get applyingRemote(){ return state.applyingRemote; } };

  window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('adminLoginForm');
    if (form) form.addEventListener('submit', async e => {
      e.preventDefault();
      const msg = document.getElementById('adminLoginMessage');
      try {
        if (msg) msg.textContent = 'Login हो रहा है…';
        await login(document.getElementById('adminEmail').value.trim(), document.getElementById('adminPassword').value);
        if (msg) msg.textContent = '';
      } catch (err) {
        if (msg) msg.textContent = 'Login नहीं हुआ: Email या Password जाँचें।';
      }
    });
    const out = document.getElementById('adminLogoutBtn');
    if (out) out.addEventListener('click', logout);
  });
})();
