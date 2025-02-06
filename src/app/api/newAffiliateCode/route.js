import { db } from "../../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req) {
    if (req.method === "POST") {
        const { code, percentage } = await req.json();

        try {
            const affiliateCodesCollection = collection(db, "affiliateCodes");
            await addDoc(affiliateCodesCollection, {
                code,
                percentage,
                active: true,
            });

            return new Response(JSON.stringify({ message: "Affiliate code added successfully" }), { status: 200 }, { headers: { "Cache-Control": "no-store" } });
        } catch (error) {
            return new Response(JSON.stringify({ message: "Failed to add affiliate code" }), { status: 500 }, { headers: { "Cache-Control": "no-store" } });
        }
    } else {
        return new Response(JSON.stringify({ message: "Method not allowed" }), { status: 405 }, { headers: { "Cache-Control": "no-store" } });
    }
}
