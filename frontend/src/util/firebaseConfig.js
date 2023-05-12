// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfLukGgv6T2p4Ra3O0vicYdnbHItjTnag",
    authDomain: "paf-project--foodies.firebaseapp.com",
    projectId: "paf-project--foodies",
    storageBucket: "paf-project--foodies.appspot.com",
    messagingSenderId: "710083796672",
    appId: "1:710083796672:web:d1cd50a2abc2cc58d81725",
    measurementId: "G-LD3TRFK725"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;