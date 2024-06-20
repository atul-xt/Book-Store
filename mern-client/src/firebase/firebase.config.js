// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_mD2ofWyTdmACkcizD6GA6HPN0UlYQX0",
  authDomain: "mern-book-inventory-e1a35.firebaseapp.com",
  projectId: "mern-book-inventory-e1a35",
  storageBucket: "mern-book-inventory-e1a35.appspot.com",
  messagingSenderId: "111647289686",
  appId: "1:111647289686:web:0cbaf76bc8710e3dcc66f7",
  measurementId: "G-9977FT2178"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;