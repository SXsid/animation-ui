"use client"
import React from 'react'
import {motion} from "motion/react"
function Button() {
  return (
    <div className='  [perspective::1000px] [transform-style:preserve-3d] flex justify-center items-center h-screen bg-neutral-900 w-full'
    
    style={{
        backgroundImage:`radial-gradient(circle at 0.5px 0.5px,rgba(255,255,255,0.2) 0.5px ,transparent 0)`,
        backgroundSize:`8px 8px`
        ,backgroundRepeat:"repeat"
    }}
    
    >
    <motion.button
    initial={{
      x:-1000,
      opacity:0
    }}
    animate={{
      x:0,
      opacity:[0,0.2,0.6,1]
    }}
    transition={{
      x: { duration: 1.5, ease: "easeInOut" },
      opacity: { duration: 1.5, ease: "easeInOut" }
    }}
    whileHover={{
        rotateX:20,
        rotateY:-20,
        boxShadow:'0px 20px 50px rgba(8,112,184,0.6)'
    }}
    style={{
        translateZ:100,
        
    }}
    className=' group relative  hover:text-cyan-500 transition-colors duration-300  text-neutral-500 px-12 py-4 rounded-lg bg-black'>Subscribe

    <span className='bg-gradient-to-r from-transparent via-cyan-500 to-transparent absolute h-px bottom-px inset-x-0 w-3/4 mx-auto '></span>
    <span className=' group-hover:block  transition-transform duration-300   hidden  bg-gradient-to-r from-transparent via-cyan-500 to-transparent absolute h-[6px] bottom-px  inset-x-0 w-3/4 blur-sm mx-auto'></span>

    </motion.button>
      
    </div>
  )
}

export default Button
