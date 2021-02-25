//import * as firebase from 'firebase/app';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
//import '@firebase/firestore/dist/esm/index';

//var firebase = require('firebase/app');
//require('firebase/auth');
//require('firebase/database');
//require("firebase/firestore");


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