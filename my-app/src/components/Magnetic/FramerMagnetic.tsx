'use client'
import React, { Children, useState } from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export interface Props {
    children?: React.ReactNode
}
export default function FramerMagnetic({ children }: Props) {


    const ref = useRef<any>(null);

    const [position, setPosition] = useState({ x: 0, y: 0 })

    const mouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { width, height, left, top} = ref.current?.getBoundingClientRect();
        const x = clientX - ( left + width / 2 );
        const y = clientY - (top + height / 2);
        setPosition({x, y})
    }

    const mouseLeave = (e: React.BaseSyntheticEvent) => {
        setPosition({x: 0 , y: 0})
    }

    const {x, y} = position;
    return (
        <motion.div
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            ref={ref}
            animate={{x , y}}
            transition={{type: "spring", stiffness: 100, damping: 15, mass: 0.5}}
        >
            { children }
            
        </motion.div>
    )
}
