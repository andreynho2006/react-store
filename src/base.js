import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({    
    apiKey: "AIzaSyCSKSQrhcA8XJFJRT9TjdUJuSU6rjv4X0o",
    authDomain: "catch-of-the-day-andrei-cirlan.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-andrei-cirlan.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a names export
export { firebaseApp }

// This is a default export
export default base;