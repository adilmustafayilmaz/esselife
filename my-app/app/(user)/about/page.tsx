'use client'

import { LinearGradient } from 'react-text-gradients'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast'
import Typewriter from 'typewriter-effect'

export default function About() {
    return (
        <>
            <div className='flex justify-center flex-col items-center'>

                <div className='flex justify-center my-10'>
                    <Button onClick={() => {
                        toast.success("Al sana toast!!!")
                    }}>Make me a toast</Button>
                </div>




                <div className="bg-gradient-to-r from-[#C8E4B2] to-[#9ED2BE] inline-block text-transparent bg-clip-text font-extrabold">
                        <Typewriter
                            options={{
                                strings: ['ESRA KAMA', 'SULTAN KARANTUNA'],
                                autoStart: true,
                                loop: true,
                            }} />
                </div>
            </div>
        </>
    )
}
