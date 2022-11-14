// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcEEIDnfdiV9YOhl-imDm1RBz_F0EqQJw",
  authDomain: "fire-contact-project-621c5.firebaseapp.com",
  databaseURL: "https://fire-contact-project-621c5-default-rtdb.firebaseio.com",
  projectId: "fire-contact-project-621c5",
  storageBucket: "fire-contact-project-621c5.appspot.com",
  messagingSenderId: "432467363137",
  appId: "1:432467363137:web:0c0af6af9fad751ae40dc0",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
