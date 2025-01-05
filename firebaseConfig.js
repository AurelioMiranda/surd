import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "surd-4315d.firebaseapp.com",
    projectId: "surd-4315d",
    storageBucket: "surd-4315d.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: "G-KYLG45N6PD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
