import { addDoc, collection } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../firebase";

export async function POST(req: NextRequest) {
    
    const fd = await req.formData()

    return await addDoc(collection(db, "users"), {
        email: fd.get("email"),
        password: fd.get("password")
    }).then((data) => {
        if (data) {
            return NextResponse.json({
                success: true,
                message: "success",
                data: data
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "error",
                data: {}
            })
        }
    }).catch((error) => {
        return NextResponse.json({
            success: false,
            message: "error-db",
            data: error.message
        })
    })
    
}