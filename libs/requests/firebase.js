// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMEmlGjZnOfTdXXntDioV0Yzf4N_T8Gx0",
  authDomain: "react-native-learning-95c17.firebaseapp.com",
  projectId: "react-native-learning-95c17",
  storageBucket: "react-native-learning-95c17.appspot.com",
  messagingSenderId: "334927072081",
  appId: "1:334927072081:web:bd9ada5caf01160f46e170",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firestore = getFirestore();
