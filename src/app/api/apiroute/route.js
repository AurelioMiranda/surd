// api/sendEmail.js
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const { products, finalPrice, location } = await req.json(); // Use req.json() to parse the request body

  const emailContent = `
    <h1>Order Summary</h1>
    <p>Shipping to: ${location}</p>
    <p>Total Price: ${finalPrice}€</p>
    <p>TESTING MESSAGE ONLY! IGNORE!!</p>
    <ul>
      ${products.map(product => `
        <li>${product.quantity}x ${product.stickerType} (${product.size}) - ${product.price}€</li>
      `).join('')}
    </ul>

  `;

  try {
    await sendgrid.send({
      to: 'aureliomiranda0912@gmail.com',
      from: 'surd.emailsender@gmail.com',
      subject: 'Your Order Confirmation',
      html: emailContent,
    });
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error details:", error.response.body);
  }
}

// You can add other HTTP methods as needed, for example:
export async function GET(req) {
  return new Response(JSON.stringify({ message: "GET method not implemented" }), { status: 200 });
}
