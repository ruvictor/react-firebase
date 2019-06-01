import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCLd66Ub-WmGSc5CLrXD5-8fllwzKvwk1g",
    authDomain: "react-firebase-fad93.firebaseapp.com",
    databaseURL: "https://react-firebase-fad93.firebaseio.com",
    projectId: "react-firebase-fad93",
    storageBucket: "react-firebase-fad93.appspot.com",
    messagingSenderId: "629714215230",
    appId: "1:629714215230:web:b77ecc29ec775221"
};

const fire = firebase.initializeApp(config);
export default fire;