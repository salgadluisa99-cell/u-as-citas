// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// 1. IMPORTA FIRESTORE (La base de datos)
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpLeCZkvslN8x_JSGzUXvIXIaQZ88BDtg",
  authDomain: "lustyle-spa.firebaseapp.com", // Asegúrate de rellenar este también
  projectId: "lustyle-spa",
  storageBucket: "lustyle-spa.firebasestorage.app",
  messagingSenderId: "878710810045",
  appId: "1:878710810045:web:3f80a3b58affd3660fded4",
  measurementId: "G-F386MQGMKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 2. INICIALIZA FIRESTORE Y EXPÓRTALO
const db = getFirestore(app);
export { db };

window.FIREBASE_CONFIG = null;