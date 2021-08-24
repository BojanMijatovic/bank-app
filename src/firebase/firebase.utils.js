//  step 1
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//  step 2
const config = {
  apiKey: 'AIzaSyDN4rZfO1NH8EyBV_6YxM6KtTfuFKeViyQ',
  authDomain: 'bank-app-3ef11.firebaseapp.com',
  projectId: 'bank-app-3ef11',
  storageBucket: 'bank-app-3ef11.appspot.com',
  messagingSenderId: '150150212607',
  appId: '1:150150212607:web:c44b822d6889be0bc815ca',
  measurementId: 'G-SQEQC23LPC',
};

//  step 3
firebase.initializeApp(config);

//  step 4
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// step 5
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// step 6
export default firebase;
