import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyCwXgN4POHefZR55TNUD8P7k7wgJpM5gv0",
    authDomain: "clone-c640e.firebaseapp.com",
    projectId: "clone-c640e",
    storageBucket: "clone-c640e.appspot.com",
    messagingSenderId: "733700806217",
    appId: "1:733700806217:web:7ec20458d9fc380e829198",
    measurementId: "G-J10RW0MZN6"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth }