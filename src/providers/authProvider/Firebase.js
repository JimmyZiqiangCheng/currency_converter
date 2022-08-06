// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH1Fz0lihOhH5Olyc-U-uHrHI0lE6hIhI",
  authDomain: "jimmyscurrency.firebaseapp.com",
  databaseURL: "https://jimmyscurrency.firebaseio.com",
  projectId: "jimmyscurrency",
  storageBucket: "jimmyscurrency.appspot.com",
  messagingSenderId: "179957809245",
  appId: "1:179957809245:web:14327b10086ea3aeb8cdb4",
  measurementId: "G-RVQC09MWE7",
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

export default Firebase;
