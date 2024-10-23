// api/sendEmail.js
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  console.log("handling send email...")
  if (req.method === "POST") {
    const { products, totalPrice, location } = req.body;
    console.log("post accepted")

    const emailContent = `
      <h1>Order Summary</h1>
      <p>Shipping to: ${location}</p>
      <p>Total Price: ${totalPrice}€</p>
      <ul>
        ${products.map(product => `
          <li>${product.quantity}x ${product.stickerType} (${product.size}) - ${product.price}€</li>
        `).join('')}
      </ul>
    `;

    try {
      await sendgrid.send({
        to: 'aureliomiranda0912@gmail.com',  // Replace with the recipient's email
        from: 'aureliomiranda0912@gmail.com',   // Replace with your verified sender email
        subject: 'Your Order Confirmation',
        html: emailContent,
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Email sending failed." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
