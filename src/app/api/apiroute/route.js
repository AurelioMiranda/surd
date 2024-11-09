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
  const { orderId, orderReadyProducts, finalPrice, location, userEmail, instagram,
    deliveryAddress, city, postalCode, country, phoneNumber, deliveryNotes } = await req.json();
  console.log(orderReadyProducts)
  console.log(finalPrice)
  console.log(location)
  console.log(userEmail)
  console.log(instagram)
  console.log(deliveryNotes)

  const stickerName = {
    circular: "Sticker Circular",
    custom: "Sticker Customizado",
    square: "Sticker Quadrangular/Retangular",
    glass: "Sticker para vidros",
    instaStickers: "Sticker com @ do Instagram",
    temporary_tattoos: "Tatuagem temporária"
  };

  if (isNaN(finalPrice)) {
    return new Response(JSON.stringify({ message: "Error processing order: Unable to process the price. If the issue persists, DM us @surd.pt on instagram." }), { status: 500 });
  }

  try {
    const emailContent = `
      <h1>Sumário da encomenda</h1>
      <p><strong>Email:</strong> ${userEmail}</p>
      <p><strong>Nome:</strong> ${instagram}</p>
      <p><strong>Enviar para:</strong> ${location}</p>
      <p><strong>Endereço:</strong> ${deliveryAddress}</p>
      <p><strong>Cidade:</strong> ${city}</p>
      <p><strong>Código postal:</strong> ${postalCode}</p>
      <p><strong>País:</strong> ${country}</p>
      <p><strong>Telefone/telemóvel:</strong> ${phoneNumber}</p>
      ${deliveryNotes ? `<p><strong>Notas:</strong> ${deliveryNotes}</p>` : ""}
      <p><strong>Total:</strong> ${finalPrice}€</p>
      <br>
      <p><strong>Produtos:</strong></p>
      <ul>
        ${orderReadyProducts.map(product => `
          <li>
            ${stickerName[product.stickerType]} | ${product.quantity}x | ${product.size} - ${product.price.toFixed(2)}€
            ${product.imageTreatment ? `<br><em>Image Treatment: ${product.imageTreatmentText}</em>` : ""}
            ${product.imageFile ? `<br><img src="${product.imageFile}" alt="Product Image" width="200" />` : ""}
            ${product.chosenFont ? `<br><p><strong>Fonte: </strong>${product.chosenFont}</p>` : ""}
            ${product.instagramText ? `<p><strong>Texto: </strong>${product.instagramText}</p>` : ""}
            <br>
          </li>
        `).join('')}
      </ul>
      <p>Obrigado pela sua encomenda!</p>
    `;


    await sendgrid.send({
      to: [userEmail, 'surd.emailsender@gmail.com'], //, 'stickyourdesign4customer@gmail.com' TODO: when payment ready
      from: 'surd.emailsender@gmail.com',
      subject: 'Confirmação da sua encomenda',
      html: emailContent,
    });
    console.log("Email sent successfully.");

    await addDoc(collection(db, 'orders'), {
      orderReadyProducts,
      finalPrice,
      location,
      userEmail,
      instagram,
      deliveryAddress,
      city,
      postalCode,
      country,
      phoneNumber,
      deliveryNotes,
      timestamp: new Date(),
    });
    console.log("Order and personal info saved in Firebase.");

    // Return success response
    return new Response(JSON.stringify({ message: "Encomenda guardada e email enviado com sucesso, irá ser contactado pela @surd.pt/stickyourdesign4customer@gmail.com brevemente!" }), { status: 200 });
  } catch (error) {
    console.error("Error saving order or sending email:", error);
    return new Response(JSON.stringify({ message: "Erro a guardar encomenda ou a enviar email, contacte stickyourdesign4customer@gmail.com de imediato!" }), { status: 500 });
  }
}
