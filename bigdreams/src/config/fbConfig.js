import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  var firebaseConfig = {
    apiKey: "AIzaSyD7d1iqQVNC0QNpYSe8rp0pC5xudUR826o",
    authDomain: "bigdreams-34d1d.firebaseapp.com",
    databaseURL: "https://bigdreams-34d1d.firebaseio.com",
    projectId: "bigdreams-34d1d",
    storageBucket: "",
    messagingSenderId: "1028447684259",
    appId: "1:1028447684259:web:fc5559e5949c4fdf492116",
    measurementId: "G-WF64WWECTF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
  