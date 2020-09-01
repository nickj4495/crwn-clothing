import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATYZ2FM88clvNID2lhounPQm70zqPaS3k",
  authDomain: "crwn-db-a9bd8.firebaseapp.com",
  databaseURL: "https://crwn-db-a9bd8.firebaseio.com",
  projectId: "crwn-db-a9bd8",
  storageBucket: "crwn-db-a9bd8.appspot.com",
  messagingSenderId: "977840885673",
  appId: "1:977840885673:web:2c527f5d6ae74022857eb8",
  measurementId: "G-T1JHVB3JFW",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
