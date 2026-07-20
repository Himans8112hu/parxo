import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlynGO8Jil2_Brm5mZjZUl6BRfT8s8fF8",
  authDomain: "parxo-3196a.firebaseapp.com",
  projectId: "parxo-3196a",
  storageBucket: "parxo-3196a.firebasestorage.app",
  messagingSenderId: "957751656616",
  appId: "1:957751656616:web:bb2ff0f29d56fe3a04829d",
  measurementId: "G-JYSLD5RWEZ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
