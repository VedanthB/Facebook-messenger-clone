import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCS7vAkPzzcXMykQIoZTiG9bqMelv9njf8",
    authDomain: "facebook-messenger-clone-64deb.firebaseapp.com",
    projectId: "facebook-messenger-clone-64deb",
    storageBucket: "facebook-messenger-clone-64deb.appspot.com",
    messagingSenderId: "491217093347",
    appId: "1:491217093347:web:ef10c02b67c5639dbfbbd6",
    measurementId: "G-CJSLXRPG9K"
});

const db = firebaseApp.firestore();

export default db ; 