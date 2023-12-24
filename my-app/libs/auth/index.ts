import { jwtVerify } from "jose";
import { cookies } from 'next/headers'



const AUTH_PAGES = ['/admin'];


export const getJwtSecretKey = () => {
    const secretKey = process.env.JWT_SECRET_KEY

    if (!secretKey) {
        throw new Error("JWT Secret Key is not available")
    }

    return new TextEncoder().encode(secretKey);
}



export async function verifyJwtToken(token: string) {


    try {
        const { payload } = await jwtVerify(token, getJwtSecretKey);

        return payload;
    } catch (error) {

        return null;
    }
}



export function isAuthPages(nextUrl: string) {

    return AUTH_PAGES.some(page => page.startsWith(nextUrl));

}