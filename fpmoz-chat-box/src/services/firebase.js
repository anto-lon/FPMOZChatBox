//import * as firebase from 'firebase';

import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDKeW2uzY-bEuxPudOGHvzJof1tm-S0_W0",
    authDomain: "chat-app-df101.firebaseapp.com",
    projectId: "chat-app-df101",
    storageBucket: "chat-app-df101.appspot.com",
    messagingSenderId: "1076644266721",
    appId: "1:1076644266721:web:65b3f96ab9d0e7b619ada0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();

  export {db, firebase};