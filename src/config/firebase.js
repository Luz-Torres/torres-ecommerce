
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCzkHxMCpiZnrH_QjlgcyejPWFYoyXrPVE",
    authDomain: "rubikhaus-ecommerce.firebaseapp.com",
    projectId: "rubikhaus-ecommerce",
    storageBucket: "rubikhaus-ecommerce.firebasestorage.app",
    messagingSenderId: "674306303996",
    appId: "1:674306303996:web:ab1fd51c9b3b7ed08d7479"
};

export const createFirebaseApp = () => initializeApp(firebaseConfig);
export const db = getFirestore(initializeApp(firebaseConfig));