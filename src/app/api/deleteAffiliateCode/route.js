import { db } from "../../../../firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export async function DELETE(req) {
    const { id } = await req.json();

    if (req.method === "DELETE") {
        try {
            const affiliateCodeRef = doc(db, "affiliateCodes", id);
            await deleteDoc(affiliateCodeRef);
            return new Response(JSON.stringify({ message: "Affiliate code removed successfully" }), { status: 200 });
        } catch (error) {
            return new Response(JSON.stringify({ message: "Failed to remove affiliate code" }), { status: 500 });
        }
    } else {
        return new Response(JSON.stringify({ message: "Method not allowed" }), { status: 405 });
    }
}
