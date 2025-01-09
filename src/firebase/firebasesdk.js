
// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEnCMOXfW0b7NyT1eHayPpTqNjA-y45pE",
    authDomain: "wireman-9e4e6.firebaseapp.com",
    projectId: "wireman-9e4e6",
    storageBucket: "wireman-9e4e6.firebasestorage.app",
    messagingSenderId: "590297181331",
    appId: "1:590297181331:web:67a293d09134907acbf166",
    measurementId: "G-YG3H62PDNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

export { db };
