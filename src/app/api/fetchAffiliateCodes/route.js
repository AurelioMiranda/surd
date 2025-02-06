import { db } from "./../../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export async function GET(req) {
    if (req.method === "GET") {
        try {
            const ordersCollection = collection(db, "affiliateCodes");
            const ordersSnapshot = await getDocs(ordersCollection);
            const orders = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            return new Response(JSON.stringify(orders), {
                status: 200,
                headers: { "Cache-Control": "no-store" },
            });
        } catch (error) {
            return new Response(JSON.stringify({ message: "Failed to fetch affiliate codes" }), {
                status: 500,
                headers: { "Cache-Control": "no-store" },
            });
        }
    } else {
        return new Response(JSON.stringify({ message: "Method not allowed" }), {
            status: 405,
            headers: { "Cache-Control": "no-store" },
        });
    }
}
