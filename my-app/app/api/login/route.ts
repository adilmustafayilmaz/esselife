import { NextRequest, NextResponse } from "next/server";
import { collection, query, where, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../../firebase";
import { SignJWT } from 'jose';
import { getJwtSecretKey } from "../../../libs/auth";





export async function POST (req: NextRequest){

    const fd = await req.formData();

    // Kullanıcının Arayüze girdiği email ve şifre
    const email = fd.get("email");
    const password = fd.get("password")

    // Database işlemleri
    const usersRef = collection(db, "users");

    var check: boolean = false;

    const q = query(usersRef, where("email", "==", email))

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        if (password === doc.data().password) {
            check = true;
        } else {
            check = false;
        }
    });

    if (check) {

        // Generate Token


        const token = await new SignJWT({
            email: email
        }).setProtectedHeader({ alg: "HS512" })
            .setIssuedAt()
            .setExpirationTime('30s')
            .sign(getJwtSecretKey())

        // Set the cookie

        const response = NextResponse.json({
            success: true,
            message: "successfuly login",
        })

        response.cookies.set({
            name: "token",
            value: token,
            path: "/"
        })

        // return response

        return response;


    } else {
        return NextResponse.json({
            success: false,
            message: "Password or Email wrong!!!",
        })
    }
}