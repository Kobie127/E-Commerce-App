import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAZqvxx8ns6hwHy76H7vNfPElL1PXkMXIw",
    authDomain: "e-commerce-a34f2.firebaseapp.com",
    databaseURL: "https://e-commerce-a34f2.firebaseio.com",
    projectId: "e-commerce-a34f2",
    storageBucket: "e-commerce-a34f2.appspot.com",
    messagingSenderId: "332280222555",
    appId: "1:332280222555:web:f46361dd8a66be6e39007e"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;