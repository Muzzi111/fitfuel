// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAded1lQsP550LqzSLBDa8Z4ku7IKfSKjM",
  authDomain: "fitfuel-e91a9.firebaseapp.com",
  projectId: "fitfuel-e91a9",
  storageBucket: "fitfuel-e91a9.firebasestorage.app",
  messagingSenderId: "3619707698",
  appId: "1:3619707698:web:2f1880c53f005fa2e2952b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export  default db