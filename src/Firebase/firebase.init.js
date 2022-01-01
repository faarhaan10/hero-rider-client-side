// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


// Initialize Firebase
const firebaseAuthentication = () => initializeApp(firebaseConfig);
console.log(firebaseConfig)
export default firebaseAuthentication;