// Import the functions you need from the SDKs you need
import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzq1cK-mamPmn9U-XxPIm4bzlzWuiGwPU",
  authDomain: "diagnostic-app-4d0d7.firebaseapp.com",
  projectId: "diagnostic-app-4d0d7",
  storageBucket: "diagnostic-app-4d0d7.appspot.com",
  messagingSenderId: "1015560446031",
  appId: "1:1015560446031:web:0b7b5c13316b127ed5ca3a",
  measurementId: "G-77N2EJ7EH6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firestore
 
const db = getFirestore();
 
//Provider de google
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider,
    app
}