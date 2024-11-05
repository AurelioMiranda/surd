import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "surd-4315d.firebaseapp.com",
  projectId: "surd-4315d",
  storageBucket: "surd-4315d.appspot.com",
  messagingSenderId: "796007463693",
  appId: "1:796007463693:web:f4f7cf4ea1c0df8b9e4e44",
  measurementId: "G-KYLG45N6PD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function POST(req) {
  try {
    const { discountCodeTemp } = await req.json(); 

    if (!discountCodeTemp) {
      return new Response(JSON.stringify({ message: "Discount code is missing." }), { status: 400 });
    }

    const discountsRef = collection(db, 'discountCodes');
    const q = query(discountsRef, where('code', '==', discountCodeTemp)); 
    
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const discountDocuments = [];

      querySnapshot.forEach((doc) => {
        discountDocuments.push({
          id: doc.id, // Document ID
          ...doc.data(), // Document data
        });
      });

      console.log("Found discount documents:", discountDocuments);
      
      return new Response(JSON.stringify({ discounts: discountDocuments }), { status: 200 });
    } else {
      console.log("No discount found for code:", discountCodeTemp);
      return new Response(JSON.stringify({ message: "No discount found for the provided code." }), { status: 404 });
    }
  } catch (error) {
    console.error("Error retrieving discount document: ", error);
    return new Response(JSON.stringify({ message: "Error retrieving discount document: " + error }), { status: 500 });
  }
}