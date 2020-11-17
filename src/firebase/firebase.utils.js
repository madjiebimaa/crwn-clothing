import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAMVncWRkAle4EhTVJS_qF9fJbBpMUCv7Q",
  authDomain: "crwn-db-4e873.firebaseapp.com",
  databaseURL: "https://crwn-db-4e873.firebaseio.com",
  projectId: "crwn-db-4e873",
  storageBucket: "crwn-db-4e873.appspot.com",
  messagingSenderId: "1019306821390",
  appId: "1:1019306821390:web:119288bf1c1282dfe3795f",
  measurementId: "G-29NNQZZSLH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
