// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqgr4daeMGCXefp1duRgO-j_g1Bf-334Q",
  authDomain: "payment-472f5.firebaseapp.com",
  projectId: "payment-472f5",
  storageBucket: "payment-472f5.appspot.com",
  messagingSenderId: "341011671012",
  appId: "1:341011671012:web:1fd06d82870fd499d849f1",
  measurementId: "G-G5CE46BDWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);