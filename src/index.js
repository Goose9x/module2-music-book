// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setAppActiveScreen, setContentActiveScreen } from "./view/index";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlAjnLlOVb6w_v_8LMYpL8S-P3EU53VTg",
  authDomain: "module2-musook.firebaseapp.com",
  projectId: "module2-musook",
  storageBucket: "module2-musook.appspot.com",
  messagingSenderId: "186320057820",
  appId: "1:186320057820:web:d2777a60ac6e1dbdb04b19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
// Initialize Cloud Storage and get a reference to the service
export const db = getFirestore(app);
setAppActiveScreen("loginPage");

// setAppActiveScreen("mainPage");
// setContentActiveScreen("homePage");
