import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-My11Ms8vANHwKqc-y2wPpmClG4raMmY",
    authDomain: "relb-d7b8d.firebaseapp.com",
    projectId: "relb-d7b8d",
    storageBucket: "relb-d7b8d.appspot.com",
    messagingSenderId: "931270825476",
    appId: "1:931270825476:web:cf4d825e13b799773d4751",
    measurementId: "G-P2DP3YDQ8H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;