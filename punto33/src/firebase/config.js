// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtV6gH6lMlX9biV9g8c7HZxjbMOmDJi_Y",
  authDomain: "rj-punto33.firebaseapp.com",
  projectId: "rj-punto33",
  storageBucket: "rj-punto33.appspot.com",
  messagingSenderId: "741839135147",
  appId: "1:741839135147:web:5f0596bf0eca5708dfb2ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)