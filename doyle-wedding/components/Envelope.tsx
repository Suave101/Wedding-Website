"use client"
"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Pinyon_Script, Cinzel } from 'next/font/google'

const scriptFont = Pinyon_Script({ weight: '400', subsets: ['latin'] })
const serifFont = Cinzel({ weight: ['400', '600'], subsets: ['latin'] })

interface EnvelopeProps {
  onOpen?: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [zIndexFlow, setZIndexFlow] = useState(false)

  const handleOpen = () => {
    if (isOpen) return
    setIsOpen(true)
    
    // 1. Flip Z-Index halfway through opening so letter sits ON TOP of the flap
    setTimeout(() => {
        setZIndexFlow(true)
    }, 300)

    // 2. Trigger the page transition
    setTimeout(() => {
      if (onOpen) onOpen()
    }, 2500)
  }

  return (
    <div className="flex items-center justify-center w-full h-full perspective-1000">
      <motion.div 
        className="relative w-[min(90vw,500px)] aspect-[1.6/1] cursor-pointer"
        onClick={handleOpen}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        
        {/* HINT TEXT */}
        <div className={`absolute -top-16 left-0 right-0 text-center transition-all duration-500 ${isOpen ? 'opacity-0' : 'opacity-70 animate-pulse'}`}>
           <span className={`${serifFont.className} text-[#EFD4C4] tracking-[0.3em] text-xs md:text-sm`}>
             TAP TO OPEN
           </span>
        </div>

        {/* --- LAYER 1: BACK OF ENVELOPE --- */}
        <div className="absolute inset-0 bg-[#3D0A12] rounded-sm shadow-2xl" />

        {/* --- LAYER 2: THE LETTER --- */}
        {/* Fixed: Used translate-x-1/2 for perfect geometric centering */}
        <motion.div 
          className="absolute left-1/2 bottom-0 w-[90%] bg-[#F2E8DE] shadow-md flex flex-col items-center justify-start pt-6 text-[#781727] origin-bottom"
          initial={{ height: '90%', x: "-50%", y: 0 }}
          animate={isOpen ? { y: -180, height: '120%' } : { y: 0, height: '90%' }}
          transition={{ 
            y: { delay: 0.4, duration: 1.2, ease: "easeInOut" },
            height: { delay: 0.4, duration: 1.2 }
          }}
          style={{ zIndex: 10 }}
        >
          {/* Paper Texture */}
          <div className="absolute inset-0 opacity-10 bg-black/5" />
          
          {/* Letter Content */}
          <div className="relative z-10 flex flex-col items-center w-full px-4 text-center">
            <h1 className={`${scriptFont.className} text-3xl md:text-5xl mb-2`}>
                J & A
            </h1>
            <div className="h-px w-12 bg-[#781727]/30 mb-2"></div>
            <p className={`${serifFont.className} text-[9px] md:text-[10px] tracking-[0.2em] uppercase`}>
                You are invited
            </p>
            <p className={`${serifFont.className} text-[9px] md:text-[10px] mt-4 font-bold`}>
                OCTOBER 10, 2026
            </p>
          </div>
        </motion.div>

        {/* --- LAYER 3: THE POCKET (SVG) --- */}
        <svg 
            className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-2xl"
            viewBox="0 0 500 312" 
            preserveAspectRatio="none"
            style={{ zIndex: 20 }}
        >
            <path d="M0,312 L0,0 L250,180 L500,0 L500,312 Z" fill="#781727" />
            <path d="M0,0 L250,180 L500,0" fill="none" stroke="#8E1C2E" strokeWidth="2" />
        </svg>

        {/* --- LAYER 4: THE FLAP (SVG) --- */}
        <motion.div
            className="absolute inset-x-0 top-0 h-1/2 origin-top"
            initial={{ rotateX: 0 }}
            animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ 
                zIndex: zIndexFlow ? 5 : 30, // Flap goes behind letter after opening
                transformStyle: 'preserve-3d' 
            }}
        >
             <svg 
                className="w-full h-full overflow-visible drop-shadow-lg"
                viewBox="0 0 500 156" 
                preserveAspectRatio="none"
             >
                <path d="M0,0 L250,156 L500,0 Z" fill="#8E1C2E" />
             </svg>
             
             {/* Wax Seal */}
             <motion.div 
               animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
               className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#B59453] rounded-full flex items-center justify-center shadow-md border-2 border-[#94763E]"
             >
                 <span className={`${scriptFont.className} text-[#3D0A12] text-lg`}>JA</span>
             </motion.div>
        </motion.div>

      </motion.div>
    </div>
  )
}
