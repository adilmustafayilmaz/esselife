'use client'
import TextComponent from '@/components/TextComponent'
import React from 'react'

import {motion} from "framer-motion";


export default function Applications() {
    return (
        <>

            <div className='flex flex-col'>

                <motion.div
                    className="box"
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <div className='lg:flex max-lg:flex-col lg:justify-around'>
                        <TextComponent header='Işık' imageName='/isik.jpeg' imageStyle={{objectFit: "cover"}}
                                       style="bg-[#F2FFE9]">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut perferendis rerum
                                laboriosam provident corporis dolorum architecto consectetur rem officiis consequuntur
                            </p>
                        </TextComponent>
                    </div>
                </motion.div>

                <div className='lg:flex max-lg:flex-col lg:justify-around'>

                    <motion.div
                        className="box"
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <TextComponent header='Hypervolt' imageName='/hypervolt1.jpeg' style='bg-[#F2FFE9]'
                                       imageStyle={{objectFit: "cover"}}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut perferendis rerum
                                laboriosam provident corporis dolorum architecto consectetur rem officiis consequuntur f
                                uga ad laborum voluptates eveniet, porro officia magni explicabo impedit nostrum. Sint
                                fa

                            </p>

                        </TextComponent>

                    </motion.div>


                    <motion.div
                        className="box"
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <TextComponent header='Elektrik' imageName='/elektrik.jpeg' imageStyle={{objectFit: "cover"}}
                                       style="bg-[#F2FFE9]">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut perferendis rerum
                                laboriosam provident corporis dolorum architecto consectetur rem officiis consequuntur f
                                uga ad laborum voluptates eveniet, porro officia magni explicabo impedit nostrum. Sint
                                fa
                            </p>

                        </TextComponent>
                    </motion.div>

                </div>


            </div>
        </>
    )
}
