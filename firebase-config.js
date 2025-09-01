// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyArjsx7xwbbqbdV_A6VSnXC9TASseYXlJo",
  authDomain: "broker-c3877.firebaseapp.com",
  projectId: "broker-c3877",
  storageBucket: "broker-c3877.firebasestorage.app",
  messagingSenderId: "964627010986",
  appId: "1:964627010986:web:05ecec107f24922b9f87d3",
  measurementId: "G-52V77GN72L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
