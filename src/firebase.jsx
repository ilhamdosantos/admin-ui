// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-fd586.firebaseapp.com",
  projectId: "store-tutorial-fd586",
  storageBucket: "store-tutorial-fd586.appspot.com",
  messagingSenderId: "116677537629",
  appId: "1:116677537629:web:94001e76ad5beaa8d542b4",
  measurementId: "G-55LL1S4PY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();