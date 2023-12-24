'use server'
import { cookies } from 'next/headers'


export const removeCookie = () => {
    const store = cookies().get("token");
    cookies().delete(store!.name)
}