import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {






    return (
        <>


            <div className="flex md:flex-row max-md:flex-col justify-around items-center md:h-screen max-md:h-screen">

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
        </>
    )
}
