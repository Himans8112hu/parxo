// PARXO Firebase configuration (first PARXO Web App)
const firebaseConfig = {
  apiKey: "AIzaSyAlynGO8Jil2_Brm5mZjZUl6BRfT8s8fF8",
  authDomain: "parxo-3196a.firebaseapp.com",
  projectId: "parxo-3196a",
  storageBucket: "parxo-3196a.firebasestorage.app",
  messagingSenderId: "957751656616",
  appId: "1:957751656616:web:bb2ff0f29d56fe3a04829d",
  measurementId: "G-JYSLD5RWEZ"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
window.parxoFirebase = {
  app: firebase.app(),
  auth: firebase.auth(),
  firestore: firebase.firestore(),
  storage: firebase.storage()
};
