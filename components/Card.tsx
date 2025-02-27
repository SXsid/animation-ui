"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import {AnimatePresence, motion} from "motion/react"
const clerkURI ='https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/clerk-uvna1mxd54k50cohb8o2i.png/clerk-nzr7956knokwjx841f6yye.png?_a=DAJFJtWIZAAC'

function Card() {
    const [isOpen,setOpen]=useState(true)
  return (
    <>

   <AnimatePresence>
   {isOpen&&<motion.div
    initial={{
        opacity:0,
        scale:0.9,
        filter:"blur(10px)"
    }}
    animate={{
        opacity:1,
        scale:1,
        filter:"blur(0px)"

    }}
    transition={{
        duration:0.3,
        ease:'easeInOut'
    }}
    exit={{
        opacity:0,
        scale:0.9,
        filter:"blur(10px)"
    }}
   
   
   className='flex justify-center items-center h-screen '>
     
     {/* //main Card */}
     <div className='shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] w-[380px] min-h-[32rem] h-[32rem] rounded-lg flex flex-col p-6 bg-white overflow-hidden '>

            {/* card body */}

        <h1 className='font-bold text-xs mt-1'>Card component</h1>
        <p className='mt-2 text-neutral-500 text-xs'>Clerk's UI components add turn-key simplicity to complex Organization management tasks.</p>
        <div className='flex justify-center items-center'>
               <button 
               onClick={()=>setOpen(false)}
               

               className='flex items-center gap-2 mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-2 py-1 rounded-lg'>
                    <Image src={clerkURI} width={50} height={50} alt='logo' className='w-4 h-4' />
                    Clerk
                    <FaChevronDown className='h-3 w-3 text-neutral-500'/>
                    
                </button> 
        </div>
        <div className='bg-gray-100 flex-1 mt-3 rounded-lg border-dashed border-2 border-neutral-100 relative '>
            <motion.div
            initial={{
                opacity:0,
                scale:0.9,
                filter:"blur(10px)"
            }}
            
            whileHover={{
                opacity:1
                ,scale:1.05,
                filter:"blur(0px)"

            }}
            transition={{
                duration:0.3,
                ease:"easeInOut"
            }}
            
            className='absolute inset-0 w-full h-full bg-white rounded-lg divide-y-2 divide-neutral-200 cursor-pointer'>

        
            <div className="flex items-center gap-3 px-4 py-3 [&amp;:not(:first-child)]:border-t [&amp;:not(:first-child)]:border-gray-400/10  ">
            <div className="flex-none rounded p-0.5 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-900/5">
            <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className="size-9"><path fill="#22C543" fill-rule="evenodd" d="M18 28c5.523 0 10-4.477 10-10S23.523 8 18 8 8 12.477 8 18s4.477 10 10 10Zm-8-10a8 8 0 0 1 8-8v16a8 8 0 0 1-8-8Z" clip-rule="evenodd"></path></svg>
            </div>
            
            <div className="flex-auto text-2xs"><div className="font-book text-gray-950">Bluth Company</div><div className="text-gray-400">Mr. Manager</div></div><div className="flex-none rounded-md shadow-[0_2px_3px_-1px_rgba(0,0,0,0.08),0_1px_rgba(25,28,33,0.02)] ring-1 ring-gray-950/7.5"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-6"><path fill="#5E5F6E" fill-rule="evenodd" clip-rule="evenodd" d="M10.56 6.536A.667.667 0 0 1 11.212 6h1.573a.667.667 0 0 1 .653.536l.221 1.101c.466.178.9.429 1.286.744l1.065-.36a.667.667 0 0 1 .791.298l.787 1.362a.667.667 0 0 1-.137.834l-.845.742c.08.492.08.994 0 1.486l.845.742a.666.666 0 0 1 .137.833l-.786 1.363a.666.666 0 0 1-.792.298l-1.065-.36c-.386.315-.82.566-1.286.744l-.22 1.101a.666.666 0 0 1-.653.536h-1.574a.666.666 0 0 1-.654-.536l-.22-1.101a4.664 4.664 0 0 1-1.286-.744l-1.066.36a.666.666 0 0 1-.79-.298L6.41 14.32a.667.667 0 0 1 .137-.834l.844-.743a4.7 4.7 0 0 1 0-1.485l-.844-.742a.667.667 0 0 1-.138-.833l.787-1.363a.667.667 0 0 1 .791-.298l1.066.36c.386-.315.82-.566 1.286-.744l.22-1.101ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg></div>
            
            </div>


            <div className="flex items-center gap-3 px-4 py-3 [&amp;:not(:first-child)]:border-t [&amp;:not(:first-child)]:border-gray-400/10"><div className="flex-none rounded p-0.5 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-900/5"><svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className="size-9"><path className="stroke-gray-600" stroke-linecap="square" stroke-linejoin="round" stroke-width="4" d="M18 9s4.5 3.6 0 9 0 9 0 9"></path><path stroke="#fff" stroke-linecap="square" stroke-linejoin="round" stroke-width="6" d="M18 9s4.5 3.6 0 9 0 9 0 9" transform="rotate(90 18 18)"></path><path className="stroke-gray-800" stroke-linecap="square" stroke-linejoin="round" stroke-width="4" d="M18 9s4.5 3.6 0 9 0 9 0 9" transform="rotate(90 18 18)"></path></svg></div><div className="flex-auto text-2xs"><div className="font-book text-gray-950">Dunder Mifflin</div><div className="text-gray-400">Asst (to the) Regional Manager</div></div></div>
                

            <div className="flex items-center gap-3 px-4 py-3 [&amp;:not(:first-child)]:border-t [&amp;:not(:first-child)]:border-gray-400/10"><div className="flex-none rounded p-0.5 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-900/5">
            <Image src={clerkURI} width={50} height={50} alt='logo' className='w-10 h-10' /></div><div className="flex-auto text-2xs"><div className="font-book text-gray-950">Personal account</div></div></div>
            <div className="flex items-center gap-3 px-4 py-3 [&amp;:not(:first-child)]:border-t [&amp;:not(:first-child)]:border-gray-400/10"><div className="flex-none rounded p-0.5 shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-900/5">
            <Image src={clerkURI} width={50} height={50} alt='logo' className='w-10 h-10' /></div><div className="flex-auto text-2xs"><div className="font-book text-gray-950">Professional account</div></div></div>

            <div className='flex justify-center items-center gap-2 px-4 py-3 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-gray-400/10'>
                <IoMdAdd className='shadow-[0_2px_3px_rgba(0,0,0,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05)] w-4 h-4' />
                <span className='text-2xs text-gray-950'>Create organization</span>
            </div>
        </motion.div>
        </div>

     </div>
      
    </motion.div>}
   </AnimatePresence>
    </>
  )
}

export default Card
