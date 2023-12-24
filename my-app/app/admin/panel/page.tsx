'use client'
import React from 'react'
import { cookies } from 'next/headers'
import { removeCookie } from '../../../libs/signout/indext';
import { useRouter } from 'next/navigation';


export default function Panel() {

  const router = useRouter();

  const deleteCookie = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    removeCookie();
    router.push("/");

  }
  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-center items-center'>

        <h1 className='text-lg font-black'>PANEL PAGE</h1>
        <button onClick={deleteCookie}>Çıkış Yap</button>

      </div>

    </>
  )
}

