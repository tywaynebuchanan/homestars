import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyC4YlSa44tY9NbB7b2FSYOyfKUwOiGAA5A",
    authDomain: "rubi-ba56e.firebaseapp.com",
    projectId: "rubi-ba56e",
    storageBucket: "rubi-ba56e.appspot.com",
    messagingSenderId: "918738900993",
    appId: "1:918738900993:web:bea5678feb2ebf62838800",
    measurementId: "G-DLNEZERL6X"
};

  let fire = firebase.initializeApp(firebaseConfig);
  let db = fire.firestore();
  export {db,fire};

