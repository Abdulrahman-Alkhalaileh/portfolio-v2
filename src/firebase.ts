// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ31u8ac4lD13n6u-fUvESVq-z9xahrJk",
  authDomain: "portfolio-daa2f.firebaseapp.com",
  projectId: "portfolio-daa2f",
  storageBucket: "portfolio-daa2f.appspot.com",
  messagingSenderId: "1018758280140",
  appId: "1:1018758280140:web:80c940f6521648f1536369",
  measurementId: "G-SR7XQXK0NW"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };