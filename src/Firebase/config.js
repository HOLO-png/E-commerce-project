import firebase from 'firebase';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAdogXCVzxAsV1dGhtfIN1caqVg2CTAxgU',
    authDomain: 'e-commerce-c77f8.firebaseapp.com',
    projectId: 'e-commerce-c77f8',
    storageBucket: 'e-commerce-c77f8.appspot.com',
    messagingSenderId: '143049500533',
    appId: '1:143049500533:web:8a7cbc035644d5839ed53c',
    measurementId: 'G-4RMX6NBG0C',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var auth = firebase.auth();
var db = firebase.firestore();

// auth.useEmulator('http://localhost:9099');
// if (window.location.hostname === 'localhost') {
//     db.useEmulator('localhost', '8080');
// }

export { db, auth };
export default firebase;
