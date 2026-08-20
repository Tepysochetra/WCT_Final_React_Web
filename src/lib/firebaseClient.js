import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🚀 FIX: Updated credentials to link directly with your active 'rupp-wct-final' project nodes
const firebaseConfig = {
  apiKey: "AIzaSyBWtICa7Dns6y7B4P9C1FXMKffSTaVqEBU",
  authDomain: "rupp-wct-final.firebaseapp.com", // 👈 Updated
  projectId: "rupp-wct-final",                   // 👈 Updated to match your true Firebase project ID
  storageBucket: "rupp-wct-final.firebasestorage.app", // 👈 Updated
  messagingSenderId: "36421953963",
  appId: "1:36421953963:web:1bf4c17290444508b73fee"
};

// Initialize the core Firebase connection instance
const app = initializeApp(firebaseConfig);

// Initialize and export your Cloud Firestore database controller
export const db = getFirestore(app);
export default app;
