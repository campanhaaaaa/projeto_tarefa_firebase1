// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI1tm0pjAsujfuY43nSh74BVBAvHDLGtY",
  authDomain: "projetotarefa-8e4d3.firebaseapp.com",
  projectId: "projetotarefa-8e4d3",
  storageBucket: "projetotarefa-8e4d3.appspot.com",
  messagingSenderId: "5425146928",
  appId: "1:5425146928:web:a967978a8d88a9ec8a51f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)