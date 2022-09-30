import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

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
const app = firebase.initializeApp(firebaseConfig);


const firestore = app.firestore();
// export const database = {
//   formatDocument: (doc) => ({ id: doc.id, ...doc.data() }),
//   getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
//   // files: (userId) => firestore.collection("gd").doc(userId).collection("files"),
//   // materials: () => firestore.collection("gc-materials"),
//   todos: () => firestore.collection("todos"),
//   users: () => firestore.collection("users"),
// };
// console.log(firebase);
export const auth = app.auth();
export const storage = app.storage();
export default app;