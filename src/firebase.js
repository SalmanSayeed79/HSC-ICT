import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAYS-ahzaTjwcnRpcfD5b6p7xVgTg82RTM",
    authDomain: "hsc-2023-ict.firebaseapp.com",
    projectId: "hsc-2023-ict",
    storageBucket: "hsc-2023-ict.appspot.com",
    messagingSenderId: "702818660359",
    appId: "1:702818660359:web:fbcc0241fb8fe424e97aa2"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth=firebase.auth()

export {auth}