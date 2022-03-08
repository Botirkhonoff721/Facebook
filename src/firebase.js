import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBUi0nyjo6i_1-n7POFDtWDYG58YrUTYLA",
  authDomain: "facebook-clone-56868.firebaseapp.com",
  projectId: "facebook-clone-56868",
  storageBucket: "facebook-clone-56868.appspot.com",
  messagingSenderId: "175639469301",
  appId: "1:175639469301:web:fe6bcfc72d54c9b6a2b9bc",
  measurementId: "G-PTR55Q34HK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;


