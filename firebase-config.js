// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyADOYoR6NGkYe8M37fsGnkLkLBdYNcrvuc",
  authDomain: "gym-manager-c4f66.firebaseapp.com",
  projectId: "gym-manager-c4f66",
  storageBucket: "gym-manager-c4f66.firebasestorage.app",
  messagingSenderId: "815310245660",
  appId: "1:815310245660:web:859c74a5cfa8f66b0d34d9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);