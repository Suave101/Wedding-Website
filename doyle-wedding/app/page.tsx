"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pinyon_Script, Cinzel } from 'next/font/google'
import Image from 'next/image'
import Envelope from '@/components/Envelope'

const scriptFont = Pinyon_Script({ weight: '400', subsets: ['latin'] })
const serifFont = Cinzel({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

// --- PHOTO CONFIGURATION ---
const PHOTOS = [
  '/engagementPhotos/20251223_165039.jpg',
  '/engagementPhotos/20251223_165259.jpg',
  '/engagementPhotos/20251223_165727.jpg',
  '/engagementPhotos/cachedImage(1).png',
  '/engagementPhotos/cachedMedia.jpg',
  '/engagementPhotos/IMG_2014.JPG',
  '/engagementPhotos/IMG_2015.JPG',
  '/engagementPhotos/cachedImage(2).png',
  '/engagementPhotos/IMG_2016.JPG',
  '/engagementPhotos/cachedImage.png',
  '/engagementPhotos/IMG_2017.JPG',
  '/engagementPhotos/cachedMedia(1).jpg',
]

const FallingPolaroid = ({ src, index, total }: { src: string, index: number, total: number }) => {
  const startX = (index / total) * 100;
  const rotate = (index % 2 === 0 ? 1 : -1) * (Math.random() * 15 + 5);
  const duration = 20 + Math.random() * 10;
  const delay = index * 3;

  return (
    <motion.div
      initial={{ y: -400, x: `${startX}vw`, rotate: 0, opacity: 0 }}
      animate={{ 
        y: '120vh', 
        rotate: rotate,
        opacity: [0, 1, 1, 0] 
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        delay: delay,
        ease: "linear"
      }}
      className="absolute top-0 w-[150px] md:w-[200px] p-2 pb-8 bg-white shadow-lg transform -translate-x-1/2 will-change-transform border border-gray-200"
      style={{ zIndex: 0 }} 
    >
      <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
        <Image 
          src={src} 
          alt="Engagement Memory" 
          fill 
          className="object-cover"
        />
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [view, setView] = useState<'envelope' | 'content'>('envelope')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <main className="relative min-h-[100dvh] w-full bg-[#EFD4C4] text-[#4E0714] overflow-hidden flex flex-col items-center justify-center p-4">
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#AC5B67_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* --- FALLING PHOTOS LAYER --- */}
      {view === 'content' && isClient && (
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
           {PHOTOS.map((src, i) => (
             <FallingPolaroid key={i} src={src} index={i} total={PHOTOS.length} />
           ))}
        </div>
      )}
      
      <AnimatePresence mode="wait">
        
        {/* VIEW 1: ENVELOPE */}
        {view === 'envelope' && (
          <motion.section
            key="envelope-view"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#4E0714] h-full w-full"
          >
            <Envelope onOpen={() => setView('content')} />
          </motion.section>
        )}

        {/* VIEW 2: THE ROYAL CARD */}
        {view === 'content' && (
          <motion.div
            key="content-view"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            // MASSIVE UPDATE: Max-width 1100px
            className="relative z-10 w-full max-w-[1100px] shadow-[0_35px_60px_-15px_rgba(78,7,20,0.6)]"
          >
            
            <div className="relative bg-[#781727] text-[#EFD4C4] overflow-hidden">
                
                {/* Borders */}
                <div className="absolute inset-3 border border-[#EFD4C4] opacity-40 pointer-events-none" />
                <div className="absolute inset-6 border-[3px] border-[#EFD4C4] pointer-events-none" />
                
                {/* Corners - Scaled Up */}
                <div className="absolute top-6 left-6 w-32 h-32 border-t-[4px] border-l-[4px] border-[#EFD4C4] rounded-tl-none pointer-events-none" />
                <div className="absolute bottom-6 right-6 w-32 h-32 border-b-[4px] border-r-[4px] border-[#EFD4C4] rounded-br-none pointer-events-none" />

                {/* Content - Increased Padding */}
                <div className="relative flex flex-col items-center text-center py-32 px-8 md:py-48 md:px-20 h-full">
                  
                    {/* Header */}
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.5 }}
                        className={`${serifFont.className} text-sm md:text-lg tracking-[0.3em] uppercase text-[#AC5B67] mb-16 font-semibold`}
                    >
                        Together with their families
                    </motion.div>

                    {/* NAMES - MASSIVE SCALING */}
                    <div className="flex flex-col items-center gap-4 mb-16 w-full">
                        <motion.h1 
                            initial={{ opacity: 0, x: -20 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ delay: 0.8, duration: 0.8 }}
                            // 7xl on mobile, 9xl on desktop
                            className={`${serifFont.className} text-6xl md:text-9xl font-bold tracking-[0.1em] text-[#EFD4C4] drop-shadow-sm`}
                        >
                            JUANITA
                        </motion.h1>
                        
                        <motion.span 
                            initial={{ opacity: 0, scale: 0 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ delay: 1.0 }}
                            className={`${scriptFont.className} text-5xl md:text-7xl text-[#E2B3C2] my-4 opacity-80`}
                        >
                           and
                        </motion.span>
                        
                        <motion.h1 
                             initial={{ opacity: 0, x: 20 }} 
                             animate={{ opacity: 1, x: 0 }} 
                             transition={{ delay: 0.8, duration: 0.8 }}
                             // 7xl on mobile, 9xl on desktop
                             className={`${serifFont.className} text-6xl md:text-9xl font-bold tracking-[0.1em] text-[#EFD4C4] drop-shadow-sm`}
                        >
                            ALEXANDER
                        </motion.h1>
                    </div>

                    {/* Invite Line */}
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 1.2 }}
                        className={`${serifFont.className} text-xs md:text-sm tracking-[0.25em] uppercase text-[#AC5B67] mb-16`}
                    >
                        Request the pleasure of your company
                    </motion.div>

                    {/* Divider */}
                    <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: "150px" }} 
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="h-px bg-[#AC5B67] mb-16" 
                    />

                    {/* Details Block */}
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 1.5 }}
                        className="flex flex-col gap-8 mb-20 w-full"
                    >
                         {/* Date */}
                        <div className="flex flex-col items-center">
                            <p className={`${serifFont.className} text-2xl md:text-5xl tracking-[0.15em] font-semibold text-[#EFD4C4]`}>
                                SATURDAY, JUNE 6TH
                            </p>
                            <p className={`${serifFont.className} text-xs md:text-base tracking-[0.3em] text-[#E2B3C2] mt-3`}>
                                TWENTY TWENTY-SIX
                            </p>
                        </div>

                        {/* Time */}
                        <p className={`${serifFont.className} text-sm md:text-lg tracking-[0.2em] text-[#EFD4C4]`}>
                            AT FOUR O'CLOCK IN THE AFTERNOON
                        </p>

                        {/* Location */}
                        <div className="flex flex-col items-center mt-6">
                            <p className={`${serifFont.className} text-xl md:text-3xl tracking-[0.1em] font-bold text-[#EFD4C4] uppercase`}>
                                First Baptist Church
                            </p>
                            <p className={`${serifFont.className} text-xs md:text-lg tracking-[0.15em] text-[#AC5B67] uppercase mt-2`}>
                                Fort Walton Beach, Florida
                            </p>
                        </div>
                    </motion.div>

                    {/* Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 1.8 }}
                        className="flex flex-col md:flex-row gap-6 md:gap-12 z-20"
                    >
                         <a 
                            href="#" 
                            className={`${serifFont.className} px-10 py-4 border border-[#EFD4C4] text-[#EFD4C4] text-sm md:text-lg tracking-[0.25em] hover:bg-[#EFD4C4] hover:text-[#781727] transition-all duration-300 uppercase`}
                        >
                            R.S.V.P.
                        </a>
                         <a 
                            href="#" 
                            className={`${serifFont.className} px-10 py-4 border border-[#EFD4C4] text-[#EFD4C4] text-sm md:text-lg tracking-[0.25em] hover:bg-[#EFD4C4] hover:text-[#781727] transition-all duration-300 uppercase`}
                        >
                            Registry
                        </a>
                    </motion.div>

                </div>
            </div>
            
            {/* Close Button */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-40">
               <button 
                  onClick={() => setView('envelope')} 
                  className={`${serifFont.className} text-[#4E0714] text-xs md:text-sm tracking-widest hover:opacity-100 transition-opacity uppercase`}
                >
                  Close Invitation
                </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}