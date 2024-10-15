
// Firebase.jsx
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue, update } from "firebase/database";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref as storageRef } from "firebase/storage"; // Correct import for Firebase storage
 
 
const firebaseConfig = {
    apiKey: "AIzaSyCJtozIiZTIJNobTA4rcJhvzFqWn2CvWaM",
    authDomain: "coding-c245a.firebaseapp.com",
    projectId: "coding-c245a",
    storageBucket: "coding-c245a.appspot.com",
    messagingSenderId: "616359113635",
    appId: "1:616359113635:web:221906edb1a25bb148a016",
    measurementId: "G-Q0X01BF7FS"
  };
 
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
 
export { database, ref, set, push, onValue, firestore, collection, addDoc,update,storage,storageRef };

