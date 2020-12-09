//import * as firebase from 'firebase';

import firebase from 'firebase/app';
import 'firebase/firestore';

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD4XO-w__YfWsa5dzjUvETrTFQjKgXBnwM",
    authDomain: "chat-app-186bb.firebaseapp.com",
    projectId: "chat-app-186bb",
    storageBucket: "chat-app-186bb.appspot.com",
    messagingSenderId: "882369530519",
    appId: "1:882369530519:web:6e926765c140f6ad0477d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;