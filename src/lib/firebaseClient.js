import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Updated config parameters specifically matching your screenshot project node
const firebaseConfig = {
  apiKey: "AIzaSyBWtICa7Dns6y7B4P9C1FXMKffSTaVqEBU",
  authDomain: "://firebaseapp.com",
  projectId: "my-react-app-8e8ab", // <-- Changed to match your screenshot ID exactly!
  storageBucket: "my-react-app-8e8ab.firebasestorage.app",
  messagingSenderId: "36421953963",
  appId: "1:36421953963:web:1bf4c17290444508b73fee"
};

// Initialize the core Firebase connection instance
const app = initializeApp(firebaseConfig);

// Initialize and export your Cloud Firestore database controller
export const db = getFirestore(app);
export default app;
