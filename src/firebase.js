import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBBsrJIJiZXmmJbnxfY1wyJvXLqC8mmf9I",
    authDomain: "instagram-clone-react-722de.firebaseapp.com",
    projectId: "instagram-clone-react-722de",
    storageBucket: "instagram-clone-react-722de.appspot.com",
    messagingSenderId: "837681567497",
    appId: "1:837681567497:web:31d94751cba42faa6165d8",
    measurementId: "G-0BQ9CQFTFL"
});


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage}