//  step 1 Authentication
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//  step 2 Authentication
const config = {
  apiKey: 'AIzaSyDN4rZfO1NH8EyBV_6YxM6KtTfuFKeViyQ',
  authDomain: 'bank-app-3ef11.firebaseapp.com',
  projectId: 'bank-app-3ef11',
  storageBucket: 'bank-app-3ef11.appspot.com',
  messagingSenderId: '150150212607',
  appId: '1:150150212607:web:c44b822d6889be0bc815ca',
  measurementId: 'G-SQEQC23LPC',
};

//  step 3 Authentication
firebase.initializeApp(config);

//  step 4 Authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// step 5 Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// step 1 add firestore collection
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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// step 6
export default firebase;
