// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider, ProviderId} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANoGTdmTFOt073GrmqrNzIL6P-lkwzqFM",
  authDomain: "blog-firebase-6a038.firebaseapp.com",
  projectId: "blog-firebase-6a038",
  storageBucket: "blog-firebase-6a038.appspot.com",
  messagingSenderId: "629993676883",
  appId: "1:629993676883:web:242d651a75b3ef1c6266a6",
  measurementId: "G-M7E44X1DVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();