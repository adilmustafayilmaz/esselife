'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "@/styles/progressbar.css"
import { motion } from "framer-motion";

export default function Home() {

    return (
        <>
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <div className="flex md:flex-row max-md:flex-col justify-around items-center md:h-screen max-md:h-screen">

                    <Link href="/contact" className='flex justify-center w-1/2 h-1/2 items-center'>

                        <div className='relative w-1/2 h-full max-md:w-screen max-md:h-full'>
                            <Image src="/doctor.webp"
                                alt=''
                                fill
                                sizes="1x"
                                priority
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                    </Link>


                    <Link href="/contact" className='flex justify-center w-1/2 h-1/2 items-center'>

                        <div className='relative w-1/2 h-full max-md:w-screen max-md:h-full'>
                            <Image src="/diet.png"
                                alt=''
                                fill
                                sizes="1x"
                                priority
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                    </Link>

                </div>
            </motion.div>
        </>
    )
}
