// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "warehouse-manage-assignment-11.firebaseapp.com",
  apiKey: "AIzaSyBFLWjRivFV3SCBwrtEEPILimZd_wplg-8",
  projectId: "warehouse-manage-assignment-11",
  storageBucket: "warehouse-manage-assignment-11.appspot.com",
  messagingSenderId: "209937875532",
  appId: "1:209937875532:web:b1d804a6e8cee23c0e6ae9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;