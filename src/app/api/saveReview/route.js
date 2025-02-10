import { db } from "../../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req) {
    if (req.method === "POST") {
        const { email, displayName, review, rating } = await req.json();

        try {
            const reviewsCollection = collection(db, "reviews");
            await addDoc(reviewsCollection, {
                email, 
                displayName, 
                review, 
                rating
            });

            return new Response(JSON.stringify({ message: "Avaliação enviada com sucesso." }), { status: 200 });
        } catch (error) {
            return new Response(JSON.stringify({ message: "Falha ao enviar avaliação." }), { status: 500 });
        }
    } else {
        return new Response(JSON.stringify({ message: "Não autorizado." }), { status: 405 });
    }
}
