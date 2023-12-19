import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { storage } from './firebase'
import { getDownloadURL, ref } from 'firebase/storage'


getDownloadURL(ref(storage, 'gs://esselife-148c7.appspot.com/images/doctor.webp'))
.then((url) => {
    const img = document.getElementById("myimg")
    img?.setAttribute('src',url)
})


export default function Home() {


    return (
        <>


            <div className="flex md:flex-row max-md:flex-col justify-around items-center md:h-screen max-md:h-screen">

                <Link href="/contact" className='flex justify-center w-1/2 h-1/2 items-center'>

                    <div className='relative w-1/2 h-full max-md:w-screen max-md:h-full'>
                        <Image src="https://firebasestorage.googleapis.com/v0/b/esselife-148c7.appspot.com/o/images%2Fdoctor.webp?alt=media&token=8a4f43a1-7f7e-4b3a-8c87-6e5f2ac6877a"
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
                        <Image src="https://firebasestorage.googleapis.com/v0/b/esselife-148c7.appspot.com/o/images%2Fdiet.png?alt=media&token=db7e647f-41d8-4c28-a112-da76531f345e"
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
