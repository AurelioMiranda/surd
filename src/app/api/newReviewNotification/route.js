import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
    const { email, displayName, review, rating } = await req.json();

    try {
        const emailContent = `
      <h1>Sumário da Avaliação</h1>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Nome:</strong> ${displayName}</p>
      <p><strong>Avaliação:</strong> ${review}</p>
      <p><strong>Estrelas:</strong> ${rating} estrelas</p>
      <br>
      <p>Realizar análise à avaliação de imediato!</p>
    `;
        await sendgrid.send({
            to: ['surd.emailsender@gmail.com'],
            from: 'surd.emailsender@gmail.com',
            subject: 'Nova avaliação de encomenda',
            html: emailContent,
        });
        console.log("Email sent successfully.");

        return new Response(JSON.stringify({ message: "Notification email sent!" }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ message: "Error sending notification email!" }), { status: 500 });
    }
}
