// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2Ry-HRwzWiGul_a2b4QETPZx5t7MKfh4",
  authDomain: "ecommerceapp-starshopify.firebaseapp.com",
  databaseURL: "https://ecommerceapp-starshopify-default-rtdb.firebaseio.com",
  projectId: "ecommerceapp-starshopify",
  storageBucket: "ecommerceapp-starshopify.appspot.com",
  messagingSenderId: "600460757590",
  appId: "1:600460757590:web:82ff5b074f53d8c50a89f7",
  measurementId: "G-96FDV8PB95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app)