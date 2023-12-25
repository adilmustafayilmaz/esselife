'use client'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


export default async function Admin() {

  const router = useRouter();

  const submitHandler = async (event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    

    const fd = new FormData(event.currentTarget);
    // -----------------------------------------------------------------------------------------------------
    // BU KISIM KULLANICI KAYDETMEK İÇİN KULLANABİLİRSİN DİĞER KISIM KULLANICI GİRİŞİ İÇİN KULLANABİLİRSİN.
    // *****************************************************************************************************
    // fetch("/api/register", {
    //   method: "POST",
    //   body: fd
    // }).then(res => res.json()).then(data => {
    //   if (data.success) {
    //     toast.success(data.message)
    //   } else {
    //     toast.error(data.message)
    //   }
    // })
    // -----------------------------------------------------------------------------------------------------

    fetch ("/api/login", {
      method: "POST",
      body: fd
    }).then(res => res.json()).then(data => {
      if(data.success){
        toast.success("Successfuly Login")
      
        router.push("/admin/panel")
        
      } else {
        toast.error(data.message)
      }
    })
  }


  return (
    <>
      <div className='md:h-screen md:w-full md:flex md:justify-center md:items-center max-md:h-screen max-md:flex max-md:justify-center max-md:items-center'>
        <form className='md:w-1/6 md:h-1/4 max-md:h-1/2 max-md:w-5/6 max-md:items-center flex flex-col justify-around border-2 border-black rounded-xl p-6' onSubmit={submitHandler}>
          <input placeholder='E-mail'
            type='text'
            name='email'
            className='w-full border-2 border-black rounded-xl text-center' />
          <input placeholder='Şifre'
            type='password'
            name='password'
            className='w-full border-2 border-black rounded-xl text-center' />
          <button type='submit'>
            Giriş Yap
          </button>
        </form>
      </div>

    </>
  )
}