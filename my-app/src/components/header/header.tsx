'use client'
import "@/styles/progressbar.css"
import { motion, useScroll, useSpring } from "framer-motion";
import Link from 'next/link'
import { useEffect } from 'react'
import { LinearGradient } from 'react-text-gradients'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog";




export default function Header() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  useEffect(() => {

    const test = document.querySelector("header") as HTMLElement

    document.addEventListener("scroll", () => {

      if (document.documentElement.scrollTop > 60) {
        test.classList.add("!bg-[#F5F7F8]")
        test.classList.add("!bg-[#F5F7F8]/75")
      }
      else {
        test.classList.remove("!bg-[#F5F7F8]")
        test.classList.remove("!bg-[#F5F7F8]/75")

      }
    })
  }, [])



  return (

    <header className="w-full md:px-10 max-md:px-7 border-b-2 text-[20px] transition ease-in duration-300">

      <div className="flex justify-between h-20 items-center max-lg:justify-betweeen">

        <Link href="/">
          <h1 className="font-bold text-4xl max-md:text-3xl">
            <LinearGradient gradient={['to left', '#9ED2BE ,#C8E4B2']} fallbackColor="black" className=''>
              ESSELIFE
            </LinearGradient></h1>
        </Link>

        <div className="lg:hidden flex md:justify-end">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className='border-[#B0D9B1]'>
                <LinearGradient gradient={['to left', '#9ED2BE ,#C8E4B2']} fallbackColor="black">
                  MENU
                </LinearGradient>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] max-sm:max-w-[325px] bg-[#fff]/75">
              <DialogHeader>
                <DialogTitle className=" border-b-2 border-[#000]">Menu</DialogTitle>
                <DialogDescription className="flex flex-col space-y-5">

                <DialogClose asChild>
                    <Button type="button" variant="outline" asChild className="border-2 border-[#B0D9B1] shadow-xl bg-[#fff]"><Link href="/" >Ana Sayfa</Link></Button>
                  </DialogClose>

                  <DialogClose asChild>
                    <Button type="button" variant="outline" asChild className="border-2 border-[#B0D9B1] shadow-xl bg-[#fff]"><Link href="/about">Hakkımızda</Link></Button>
                  </DialogClose>

                  <DialogClose asChild>
                    <Button type="button" variant="outline" asChild className="border-2 border-[#B0D9B1] shadow-xl bg-[#fff]"><Link href="/applications">İşlemlerimiz</Link></Button>
                  </DialogClose>

                  <DialogClose asChild>
                    <Button type="button" variant="outline" asChild className="border-2 border-[#B0D9B1] shadow-xl bg-[#fff]"><Link href="/appointment">Randevu</Link></Button>
                  </DialogClose>

                  <DialogClose asChild>
                    <Button type="button" variant="outline" asChild className="border-2 border-[#B0D9B1] shadow-xl bg-[#fff]"><Link href="/contact">İletişim</Link></Button>
                  </DialogClose>

                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>          

        </div>

        <div className=" space-x-10 max-lg:hidden">
          <Link href="/" className='text-[#3C6255]'>Anasayfa</Link>
          <Link href="/about" className='text-[#3C6255]'>Hakkımızda</Link>
          <Link href="/applications" className='text-[#3C6255]'>İşlemlerimiz</Link>
          <Link href="/contact" className='text-[#3C6255]'>Contact</Link>
          <Link href="/appointment" className='text-[#3C6255]'>Randevu Al</Link>
        </div>

      </div>

      <motion.div className="progress-bar" style={{ scaleX }} />

    </header>

  )
}
