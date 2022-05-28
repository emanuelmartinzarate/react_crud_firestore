// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADglE2Iv-AAl3Ltq9ZCoitvu9a5OZD-qQ",
  authDomain: "crud-udemy-react-9cc27.firebaseapp.com",
  projectId: "crud-udemy-react-9cc27",
  storageBucket: "crud-udemy-react-9cc27.appspot.com",
  messagingSenderId: "933756039584",
  appId: "1:933756039584:web:03f83e44676b772994b4c5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}