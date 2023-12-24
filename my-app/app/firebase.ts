// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgC-1STxHBp2F6jGzIg3AH9bnlDmjDVls",
  authDomain: "esselife-fd5fe.firebaseapp.com",
  projectId: "esselife-fd5fe",
  storageBucket: "esselife-fd5fe.appspot.com",
  messagingSenderId: "168165012376",
  appId: "1:168165012376:web:e78091d36218c484e5b1ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)