import { db } from "./../../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export async function GET(req) {
    if (req.method === "GET") {
        try {
            const affiliatesCollection = collection(db, "affiliateCodes");
            const affiliatesSnapshot = await getDocs(affiliatesCollection);
            const affiliates = affiliatesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), _ts: Date.now() }));

            return new Response(JSON.stringify(affiliates), {
                status: 200,
                headers: {
                    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0",
                }
            });
        } catch (error) {
            return new Response(JSON.stringify({ message: "Failed to fetch affiliate codes" }), {
                status: 500,
                headers: {
                    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0",
                }
            });
        }
    } else {
        return new Response(JSON.stringify({ message: "Method not allowed" }), {
            status: 405,
            headers: {
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                "Pragma": "no-cache",
                "Expires": "0",
            }
        });
    }
}
