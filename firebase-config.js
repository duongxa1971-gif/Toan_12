// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQRrvuoMQzAOzJRanVKiaqhWaVt--0SHA",
  authDomain: "toan-12.firebaseapp.com",
  projectId: "toan-12",
  storageBucket: "toan-12.firebasestorage.app",
  messagingSenderId: "1061642647673",
  appId: "1:1061642647673:web:95f04a687b31972bf33ca8",
  measurementId: "G-G2B0NH199K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
