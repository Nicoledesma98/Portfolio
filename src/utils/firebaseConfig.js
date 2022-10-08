// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5v-qpQ4TA9LqFIR2OB9XDVyXo2SC83XY",
  authDomain: "portfolio-nico-4bb96.firebaseapp.com",
  projectId: "portfolio-nico-4bb96",
  storageBucket: "portfolio-nico-4bb96.appspot.com",
  messagingSenderId: "536792552700",
  appId: "1:536792552700:web:6e3d8f36a78aefd088b379",
  measurementId: "G-H1X6SMGEZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);