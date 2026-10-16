// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNB0nhXzQZftu2EcjJBiZ8bbnCxx1gSoQ",
  authDomain: "proyectocarvajal-16.firebaseapp.com",
  projectId: "proyectocarvajal-16",
  storageBucket: "proyectocarvajal-16.firebasestorage.app",
  messagingSenderId: "1081088970305",
  appId: "1:1081088970305:web:33f0fbff000b87ae3ec0c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);