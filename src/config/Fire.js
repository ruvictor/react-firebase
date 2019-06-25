import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAr7lbbrIdO_gqD4o6KyG1wgdENm76o_xU",
    authDomain: "vicrus-db9d6.firebaseapp.com",
    databaseURL: "https://vicrus-db9d6.firebaseio.com",
    projectId: "vicrus-db9d6",
    storageBucket: "vicrus-db9d6.appspot.com",
    messagingSenderId: "556955009755",
    appId: "1:556955009755:web:0be23fcee30ab1e0"
};

const fire = firebase.initializeApp(config);
export default fire;