import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBswSCdF8Nr4i9oZI5xPVc3tnoMxKjpKpM",
  authDomain: "final-iaw-c1b6a.firebaseapp.com",
  projectId: "final-iaw-c1b6a",
  storageBucket: "final-iaw-c1b6a.appspot.com",
  messagingSenderId: "69095233407",
  appId: "1:69095233407:web:93a1903019097846d22c4a",
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
