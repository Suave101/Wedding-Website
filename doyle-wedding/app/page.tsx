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
  '/engagementPhotos/20251223_165814.jpg',
  '/engagementPhotos/20251223_170231.jpg',
  '/engagementPhotos/cachedImage(1).png',
  '/engagementPhotos/cachedImage(2).png',
  '/engagementPhotos/cachedImage(3).png',
  '/engagementPhotos/cachedImage(4).png',
  '/engagementPhotos/cachedImage(5).png',
  '/engagementPhotos/cachedImage(6).png',
  '/engagementPhotos/cachedImage(7).png',
  '/engagementPhotos/cachedImage.png',
  '/engagementPhotos/cachedMedia(1).jpg',
  '/engagementPhotos/cachedMedia(2).jpg',
  '/engagementPhotos/cachedMedia.jpg',
  '/engagementPhotos/IMG_2011.jpg',
  '/engagementPhotos/IMG_2013.jpg',
  '/engagementPhotos/IMG_2014.JPG',
  '/engagementPhotos/IMG_2015.JPG',
  '/engagementPhotos/IMG_2016.JPG',
  '/engagementPhotos/IMG_2017.JPG',
]

const FallingPolaroid = ({ src, index, total }: { src: string, index: number, total: number }) => {
  const startX = Math.random() * 90;
  const rotate = (Math.random() * 30) - 15;
  const duration = 15 + Math.random() * 10;
  const delay = index * 0.8;

  return (
    <motion.div
      initial={{ y: -300, x: `${startX}vw`, rotate: 0, opacity: 0 }}
      animate={{ 
        y: '120vh', 
        rotate: rotate,
        opacity: [0, 1, 1, 1, 0] 
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        delay: delay,
        ease: "linear"
      }}
      className="fixed top-0 w-[140px] md:w-[180px] p-2 pb-8 bg-white shadow-lg will-change-transform border border-gray-200 pointer-events-none"
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
    <main className="relative min-h-screen w-full bg-[#EFD4C4] text-[#4E0714] overflow-x-hidden flex flex-col items-center">
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#AC5B67_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* --- FALLING PHOTOS LAYER --- */}
      {view === 'content' && isClient && (
        <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
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

        {/* VIEW 2: THE ROYAL SCROLLING CARD */}
        {view === 'content' && (
          <motion.div
            key="content-view"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            // UPDATE: Removed max-width, set strictly to 80vw, added 10vh vertical margins
            className="relative z-10 w-[80vw] my-[10vh]"
          >
            
            <div className="relative bg-[#781727] text-[#EFD4C4] overflow-hidden shadow-[0_35px_60px_-15px_rgba(78,7,20,0.6)]">
                
                {/* Borders */}
                <div className="absolute inset-3 border border-[#EFD4C4] opacity-40 pointer-events-none" />
                <div className="absolute inset-6 border-[3px] border-[#EFD4C4] pointer-events-none" />
                
                {/* Corners */}
                <div className="absolute top-6 left-6 w-32 h-32 border-t-[4px] border-l-[4px] border-[#EFD4C4] rounded-tl-none pointer-events-none" />
                <div className="absolute bottom-6 right-6 w-32 h-32 border-b-[4px] border-r-[4px] border-[#EFD4C4] rounded-br-none pointer-events-none" />

                <div className="relative flex flex-col items-center text-center w-full">
                  
                    {/* --- 1. THE BAPTIST CROSS --- */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        // Scaled to fit comfortably within the card's top section
                        className="w-full h-[70vh] flex items-center justify-center my-12"
                    >
                        <svg width="100%" height="100%" viewBox="0 0 100 200" preserveAspectRatio="xMidYMid meet" className="drop-shadow-lg opacity-90">
                            <rect x="48" y="10" width="4" height="180" fill="#EFD4C4" />
                            <rect x="25" y="60" width="50" height="4" fill="#EFD4C4" />
                        </svg>
                    </motion.div>


                    {/* --- 2. THE TEXT CONTENT --- */}
                    <div className="px-8 md:px-20 pb-20 w-full">
                        {/* Intro */}
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ delay: 1.0 }}
                            className={`${serifFont.className} text-sm md:text-xl tracking-[0.3em] uppercase text-[#AC5B67] mb-16 font-semibold`}
                        >
                            Together with their families
                        </motion.div>

                        {/* NAMES */}
                        <div className="flex flex-col items-center gap-4 mb-16 w-full">
                            <motion.h1 
                                initial={{ opacity: 0, x: -20 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ delay: 1.2, duration: 0.8 }}
                                // Fluid text sizing for the new wide layout
                                className={`${serifFont.className} text-5xl lg:text-8xl xl:text-9xl font-bold tracking-[0.1em] text-[#EFD4C4] drop-shadow-sm`}
                            >
                                JUANITA
                            </motion.h1>
                            
                            <motion.span 
                                initial={{ opacity: 0, scale: 0 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                transition={{ delay: 1.4 }}
                                className={`${scriptFont.className} text-5xl md:text-7xl text-[#E2B3C2] my-4 opacity-80`}
                            >
                               and
                            </motion.span>
                            
                            <motion.h1 
                                 initial={{ opacity: 0, x: 20 }} 
                                 animate={{ opacity: 1, x: 0 }} 
                                 transition={{ delay: 1.2, duration: 0.8 }}
                                 className={`${serifFont.className} text-5xl lg:text-8xl xl:text-9xl font-bold tracking-[0.1em] text-[#EFD4C4] drop-shadow-sm`}
                            >
                                ALEXANDER
                            </motion.h1>
                        </div>

                        {/* Invite Line */}
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ delay: 1.6 }}
                            className={`${serifFont.className} text-xs md:text-lg tracking-[0.25em] uppercase text-[#AC5B67] mb-16`}
                        >
                            Request the pleasure of your company
                        </motion.div>

                        {/* Divider */}
                        <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: "30%" }} 
                            transition={{ delay: 1.7, duration: 0.8 }}
                            className="h-px bg-[#AC5B67] mx-auto mb-16" 
                        />

                        {/* Details Block */}
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ delay: 1.8 }}
                            className="flex flex-col gap-12 mb-20 w-full"
                        >
                             {/* Date */}
                            <div className="flex flex-col items-center">
                                <p className={`${serifFont.className} text-3xl md:text-6xl tracking-[0.15em] font-semibold text-[#EFD4C4]`}>
                                    SATURDAY, JUNE 6TH
                                </p>
                                <p className={`${serifFont.className} text-sm md:text-xl tracking-[0.3em] text-[#E2B3C2] mt-4`}>
                                    TWENTY TWENTY-SIX
                                </p>
                            </div>

                            {/* Time */}
                            <p className={`${serifFont.className} text-lg md:text-2xl tracking-[0.2em] text-[#EFD4C4]`}>
                                AT FOUR O'CLOCK IN THE AFTERNOON
                            </p>

                            {/* Location */}
                            <div className="flex flex-col items-center mt-6">
                                <p className={`${serifFont.className} text-2xl md:text-4xl tracking-[0.1em] font-bold text-[#EFD4C4] uppercase`}>
                                    First Baptist Church
                                </p>
                                <p className={`${serifFont.className} text-sm md:text-xl tracking-[0.15em] text-[#AC5B67] uppercase mt-2`}>
                                    Fort Walton Beach, Florida
                                </p>
                            </div>
                        </motion.div>

                        {/* Links */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 2.0 }}
                            className="flex flex-col md:flex-row justify-center gap-6 md:gap-16 z-20 mb-20"
                        >
                             <a 
                                href="https://docs.google.com/forms/d/e/1FAIpQLSc75H7CJqIjHufBt04MRI1b9VrnsNkc_j73UItGTnlAwcMMxQ/viewform?usp=sharing&ouid=108416974325640632758" 
                                className={`${serifFont.className} px-12 py-5 border border-[#EFD4C4] text-[#EFD4C4] text-lg md:text-xl tracking-[0.25em] hover:bg-[#EFD4C4] hover:text-[#781727] transition-all duration-300 uppercase`}
                            >
                                R.S.V.P.
                            </a>
                        </motion.div>
                        
                        {/* --- 3. THE ICHTHYS (FISH) --- */}
                        <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 2.2 }}
                           className="flex flex-col items-center justify-center pb-10 gap-4"
                        >
                           <svg width="80" height="40" viewBox="0 0 100 50" fill="none" stroke="#EFD4C4" strokeWidth="2" className="opacity-60">
                              <path d="M80,25 C100,25 100,50 80,50 C20,50 0,25 20,0 C40,-25 100,25 100,25" />
                           </svg>
                        </motion.div>

                    </div>

                </div>
            </div>
            
            {/* Close Button - Fixed to bottom center */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
               <button 
                  onClick={() => setView('envelope')} 
                  className={`${serifFont.className} text-[#4E0714] bg-[#EFD4C4]/90 backdrop-blur-md px-6 py-3 rounded-full text-xs md:text-sm tracking-widest hover:bg-white hover:scale-105 transition-all shadow-xl uppercase border border-[#AC5B67]/20`}
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