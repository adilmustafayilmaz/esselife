import {NextRequest, NextResponse} from 'next/server'
import { isAuthPages, verifyJwtToken } from './libs/auth';



export default async function middleware(request: NextRequest) {
    
    const {url, nextUrl, cookies} = request;
    const {value: token} = cookies.get("token") ?? {value: null};



    const hasVerfiedToken = token && verifyJwtToken(token);
    const isAuthPageRequested = isAuthPages(nextUrl.pathname);

    if (isAuthPageRequested) {
        if (!hasVerfiedToken) {
            const response = NextResponse.next();
            return response;
        }

        const response = NextResponse.redirect(new URL("/admin/panel", url));
        return response;

    }


    if (!hasVerfiedToken) {
        return NextResponse.redirect(new URL('/', url));
    }

    return NextResponse.next();
}



export const config = {
    matcher: ["/admin", "/admin/panel"]
}