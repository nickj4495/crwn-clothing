import firebase from "firebase/app"; // import from firebase/app, otherwise we would install alot of unnecessary dependencies
import "firebase/firestore"; // database
import "firebase/auth"; // authentication

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // document reference

  const snapShot = await userRef.get(); // document snapshot

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        // can only set data with document reference, not snapshot
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // prompt will always trigger the google popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
