'use client'
import { motion } from 'framer-motion';
import React from 'react'



export default function Appointment() {
  return (
      <>

          <motion.div
              className="box"
              initial={{opacity: 0, scale: 0.5}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01]
              }}>

          </motion.div>
      </>
  )
}
