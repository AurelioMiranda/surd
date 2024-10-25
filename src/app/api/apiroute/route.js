import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import sendgrid from "@sendgrid/mail";

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

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const { products, finalPrice, location, userEmail, instagram } = await req.json();

  if (isNaN(finalPrice)) {
    return new Response(JSON.stringify({ message: "Error processing order: Unable to process the price. If the issue persists, DM us @surd.pt on instagram." }), { status: 500 });
  }

  try {
    const emailContent = `
      <h1>Order Summary</h1>
      <p><strong>Email:</strong> ${userEmail}</p>
      <p><strong>Instagram:</strong> ${instagram}</p>
      <p><strong>Shipping to:</strong> ${location}</p>
      <p><strong>Total Price:</strong> ${finalPrice}€</p>
      <ul>
        ${products.map(product => `
          <li>
            ${product.quantity}x ${product.stickerType} (${product.size}) - ${product.price}€
            ${product.imageTreatment ? `<br><em>Image Treatment: ${product.imageTreatmentText}</em>` : ""}
          </li>
        `).join('')}
      </ul>
      <p>Thank you for your order!</p>
    `;


    await sendgrid.send({
      to: [userEmail, 'surd.emailsender@gmail.com'], //, 'stickyourdesign4customer@gmail.com' TODO: when payment ready
      from: 'surd.emailsender@gmail.com',
      subject: 'Your Order Confirmation',
      html: emailContent,
    });
    console.log("Email sent successfully.");

    await addDoc(collection(db, 'orders'), {
      products,
      finalPrice,
      location,
      userEmail,
      instagram,
      timestamp: new Date()
    });
    console.log("Order and personal info saved in Firebase.");

    // Return success response
    return new Response(JSON.stringify({ message: "Order saved and email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error saving order or sending email: ", error);
    return new Response(JSON.stringify({ message: "Error saving order or sending email: " + error }), { status: 500 });
  }
}
