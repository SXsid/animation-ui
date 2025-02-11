"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion ,useMotionTemplate,useScroll, useTransform} from 'motion/react'

function Scroll() {
    const ref =useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target:ref
    })
    const rotateX = useTransform(scrollYProgress,[0,0.1],[10,0])
    const y = useTransform(scrollYProgress,[0,0.1],[0,200])
    const scale = useTransform(scrollYProgress,[0,0.1],[0.8,1.1])
    const textScale = useTransform(scrollYProgress,[0,0.1],[1,0.8])
    const opacity = useTransform(scrollYProgress,[0,0.1],[1,0.4])
    const blur = useTransform(scrollYProgress,[0,0.1],[0,5])
    const finalBlur = useMotionTemplate`blur(${blur}px)`
  return (
    <div className='flex items-center mt-[300px] h-[400vh] w-full flex-col [perspective:800px] [transform-style:preserve-3d]'>
       <motion.h1 
       style={{
        scale:textScale,
        opacity,
        filter:finalBlur
       }}
       className='font-bold text-center text-6xl'>Unleash the power of <br/>Trading</motion.h1>
       <motion.div 
       style={{
        rotateX:rotateX,
        translateZ:"50px",
        y,
        scale
       }}
       className='bg-white border border-neutral-100 w-[600px] h-[500px] -mt-8 p-2 rounded-3xl '>
        <div className='bg-black w-full h-full rounded-[16px] p-2'>
            <div className='bg-neutral-100 h-full w-full rounded-[8px] '>
                <Image src={"https://www.wallstreetzen.com/blog/wp-content/uploads/2022/11/thinkorswim-papermoney.png"} alt='image' className='w-full h-full'
                width={1024} height={1024}/>
            </div>
        </div>
       </motion.div>
    </div>
  )
}

export default Scroll
 