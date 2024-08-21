

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGY_8bt5XNQCBlxzfm8kLfHW-VnxOaAtQ",
    authDomain: "esp32-data-1064c.firebaseapp.com",
    databaseURL: "https://esp32-data-1064c-default-rtdb.firebaseio.com",
    projectId: "esp32-data-1064c",
    storageBucket: "esp32-data-1064c.appspot.com",
    messagingSenderId: "756454158230",
    appId: "1:756454158230:web:a7a2692dae8d4ac33bf7b7",
    measurementId: "G-10E8HGZ7H4"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


firebase.initializeApp(firebaseConfig);

import { 
    getFirestore, doc, getDoc, getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField 
} 
from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

