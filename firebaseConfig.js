// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
// import {...} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCJCCFLRkiiZaCjN0IiNrhqEc9xkNwzBck",
  authDomain: "web-cloud-ynov.firebaseapp.com",
  projectId: "web-cloud-ynov",
  storageBucket: "web-cloud-ynov.appspot.com",
  messagingSenderId: "864572196508",
  appId: "1:864572196508:web:a958f5a1710aeaebc40f59",
  measurementId: "G-QM5KYQF0N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);