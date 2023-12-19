'use client'

import React from 'react'

import AddItem from '../../../libs/database/AddItem';
import SignUp from '../../../libs/database/AddUser';


export default function Panel() {


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.currentTarget;

    const email = target.email.value;
    const password = target.password.value;

    SignUp(email,password);

  }

  

  return (
    <>

      <div className='flex justify-center w-full h-[150px]'>

        <form className='flex flex-col justify-around' onSubmit={handleSubmit}>

          <input
            placeholder='email'
            type="text"
            name="email" />

          <input
            placeholder='şifre'
            type='password'
            name='password' />

          <button type='submit'>
            Save
          </button>
        </form>


      </div>


    </>
  )
}
