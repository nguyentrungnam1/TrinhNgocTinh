import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqL6aIqdRp-B2Fq1X2CaSgG2vRHTTJTYk",
  authDomain: "reactnativefirebase-23495.firebaseapp.com",
  projectId: "reactnativefirebase-23495",
  storageBucket: "reactnativefirebase-23495.appspot.com",
  messagingSenderId: "171119224756",
  appId: "1:171119224756:web:3131c173924ff7453df4e1",
  measurementId: "G-PBL3WM710S"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
