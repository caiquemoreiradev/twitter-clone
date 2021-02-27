import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAzwskitXYyMnKZiQVrNAlSHK9Kr3YYSJM",
    authDomain: "twitter-clone-d0fd7.firebaseapp.com",
    databaseURL: "https://twitter-clone-d0fd7.firebaseio.com",
    projectId: "twitter-clone-d0fd7",
    storageBucket: "twitter-clone-d0fd7.appspot.com",
    messagingSenderId: "527899034371",
    appId: "1:527899034371:web:f49bb85827a7ecd3029f36",
    measurementId: "G-0QHWGM94KF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

