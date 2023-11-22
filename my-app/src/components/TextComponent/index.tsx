import React from 'react'
import { LinearGradient } from 'react-text-gradients'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

export interface Props {
  header: string
  children?: React.ReactNode
  imageName: string
  imageStyle?: React.CSSProperties
  style?: string
}


export default function TextComponent({ header, children, imageName, imageStyle, style }: Props) {

  return (
    <div className={`flex justify-center max-md:flex-col md:my-10 max-md:my-6 `}>


      <div className={`bg-[#FFF] rounded-3xl border-2 border-[#B0D9B1] md:mx-3 max-md:mx-4 md:px-5 max-md:px-4 md:py-3 max-md:py-2 shadow-md md:hover:shadow-[#D0E7D2] max-md:space-y-2 ${style}`}>

        <div className="bg-gradient-to-r from-[#C8E4B2] to-[#9ED2BE] inline-block text-transparent bg-clip-text font-extrabold text-[30px]">
          <Typewriter
            options={{
              strings: header,
              autoStart: true,
              loop: false,
            }} />
        </div>

        <div className='flex max-md:flex-col justify-around md:h-[550px] md:py-4 max-md:p-4 max-md:h-[550px] max-md:space-y-10'>

          <div className='md:w-6/12 max-md:w-full max-md:h-2/3'>

            <div className='relative w-full h-full'>
              <Image
                src={imageName}
                alt=''
                fill
                priority
                sizes='1x'
                style={imageStyle}
                className="rounded-3xl" />
            </div>


          </div>

          <div className='md:w-4/12 overflow-scroll max-md:w-full max-md:h-1/3'>
            {children}
          </div>


        </div>


      </div>

    </div>
  )
}
