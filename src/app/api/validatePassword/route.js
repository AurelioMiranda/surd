import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "surd-4315d.firebaseapp.com",
  projectId: "surd-4315d",
  storageBucket: "surd-4315d.appspot.com",
  messagingSenderId: "796007463693",
  appId: "1:796007463693:web:f4f7cf4ea1c0df8b9e4e44",
  measurementId: "G-KYLG45N6PD"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const db = getFirestore();

export async function POST(req) {
  if (req.method === 'POST') {
    const { password } = await req.json();

    try {
      let t1 = process.env.FIREBASE_T_1;
      let t2 = process.env.FIREBASE_T_2;
      const docRef = doc(db, t1, t2);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let t3 = process.env.FIREBASE_T_3;
        const correctPassword = docSnap.data()[t3];
        console.log(correctPassword)
        console.log(password)
        if (password === correctPassword) {
          return new Response(JSON.stringify({ success: true }), { status: 200 });
        }
        return new Response(JSON.stringify({ success: false, message: "Invalid password" }), { status: 401 });
      }

      return new Response(JSON.stringify({ success: false, message: "Password not set" }), { status: 404 });
    } catch (error) {
      return new Response(JSON.stringify({ success: false, message: "Server error" }), { status: 500 });
    }
  }

  return new Response(JSON.stringify({ success: false, message: "Not allowed" }), { status: 405 });
}