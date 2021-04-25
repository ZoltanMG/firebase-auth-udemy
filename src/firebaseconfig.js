import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAhc5GPZlmltwHOOEylOAwgAAnZf5aLgQY",
    authDomain: "auth-udemy-9abdd.firebaseapp.com",
    projectId: "auth-udemy-9abdd",
    storageBucket: "auth-udemy-9abdd.appspot.com",
    messagingSenderId: "574645348401",
    appId: "1:574645348401:web:394f681ec1411d5e538d10",
    measurementId: "G-EEGGKKFR2F"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth()

  export {auth}