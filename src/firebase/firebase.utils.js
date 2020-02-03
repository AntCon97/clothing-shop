import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 const config = {
    apiKey: "AIzaSyDmKWJfaN6pnmKlUKvpw5XYpqpZqRuwOfM",
    authDomain: "clothing-shop-5a5d1.firebaseapp.com",
    databaseURL: "https://clothing-shop-5a5d1.firebaseio.com",
    projectId: "clothing-shop-5a5d1",
    storageBucket: "clothing-shop-5a5d1.appspot.com",
    messagingSenderId: "61437731612",
    appId: "1:61437731612:web:9e0bc1ce3d68fe632810d9",
    measurementId: "G-JKTN4Y4C17"
  };

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;