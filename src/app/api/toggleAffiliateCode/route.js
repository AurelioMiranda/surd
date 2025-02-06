import { db } from "../../../../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export async function PATCH(req) {
    const { id, active } = await req.json();

    if (req.method === "PATCH") {
        try {
            const affiliateCodeRef = doc(db, "affiliateCodes", id);
            await updateDoc(affiliateCodeRef, { active });
            return new Response(JSON.stringify({ message: "Affiliate code updated successfully" }), { status: 200 }, { headers: { "Cache-Control": "no-store" } });
        } catch (error) {
            return new Response(JSON.stringify({ message: "Failed to update affiliate code" }), { status: 500 }, { headers: { "Cache-Control": "no-store" } });
        }
    } else {
        return new Response(JSON.stringify({ message: "Method not allowed" }), { status: 405 }, { headers: { "Cache-Control": "no-store" } });
    }
}
