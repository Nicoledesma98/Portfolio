// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlrRA2uAlADYemq4e1Te8FfaIB0CsSKgY",
  authDomain: "portafolio-nicoledesma.firebaseapp.com",
  projectId: "portafolio-nicoledesma",
  storageBucket: "portafolio-nicoledesma.appspot.com",
  messagingSenderId: "647188927172",
  appId: "1:647188927172:web:ff5954adbe4f3351a6ef91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firestore
const db = getFirestore(app)

export default db