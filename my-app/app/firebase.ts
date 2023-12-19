// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY8D_6G0X2hnt9adsV0X5CRxndbQN1L7I",
  authDomain: "esselife-148c7.firebaseapp.com",
  projectId: "esselife-148c7",
  storageBucket: "esselife-148c7.appspot.com",
  messagingSenderId: "201957792760",
  appId: "1:201957792760:web:4fe34eba74b206f510d40d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
