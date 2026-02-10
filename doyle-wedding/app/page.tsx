"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pinyon_Script, Cinzel } from 'next/font/google'
import Envelope from '@/components/Envelope'

const scriptFont = Pinyon_Script({ weight: '400', subsets: ['latin'] })
const serifFont = Cinzel({ weight: ['400', '600'], subsets: ['latin'] })

export default function Home() {
  const [view, setView] = useState<'envelope' | 'content'>('envelope')

  return (
    <main className="min-h-screen w-full bg-[#781727] text-[#EFD4C4] overflow-x-hidden">
      <AnimatePresence mode='wait'>
        {view === 'envelope' && (
          <motion.section 
            key="envelope-view"
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 1.0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#5E121E]"
          >
             {/* This connects the envelope to the main site */}
             <Envelope onOpen={() => setView('content')} />
          </motion.section>
        )}

        {view === 'content' && (
          <motion.div
            key="content-view"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-full min-h-screen flex flex-col items-center"
          >
             {/* Top Border Decoration */}
             <div className="w-full h-4 bg-[#EFD4C4]/10 border-b border-[#EFD4C4]/20 mb-12" />

             {/* Header Content */}
             <div className="flex flex-col items-center justify-center p-4 max-w-4xl w-full">
                
                {/* Logo Icon */}
                <div className="mb-6 opacity-80">
                   <div className="w-16 h-16 border-2 border-[#EFD4C4] rotate-45 flex items-center justify-center">
                      <div className="w-12 h-12 border border-[#EFD4C4] flex items-center justify-center -rotate-45">
                          <span className={`${scriptFont.className} text-xl`}>JA</span>
                      </div>
                   </div>
                </div>

                {/* Names */}
                <h1 className={`${scriptFont.className} text-7xl md:text-9xl mb-4 text-center leading-none drop-shadow-lg`}>
                    Juanita <span className="text-5xl opacity-70 block md:inline my-2">&</span> Alexander
                </h1>

                {/* Date & Location */}
                <div className={`${serifFont.className} text-center mb-16 w-full`}>
                    <p className="uppercase tracking-[0.25em] text-xs md:text-sm border-b border-[#EFD4C4]/30 pb-6 mb-8 mx-auto max-w-[300px]">
                        October 10, 2026 • New York City
                    </p>
                    
                    <div className="flex flex-col md:flex-row gap-12 items-center justify-center mt-12 mb-16 relative">
                        
                        <motion.div 
                            initial={{ rotate: -6, opacity: 0, y: 20 }}
                            animate={{ rotate: -3, opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="w-72 bg-white p-4 pb-12 shadow-2xl transform hover:scale-105 hover:rotate-0 transition-all duration-500 text-center"
                        >
                            <div className="w-full aspect-3/4 bg-gray-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                <img src="https://placehold.co/600x800/png?text=Juanita" alt="Juanita" className="w-full h-full object-cover opacity-80" />
                            </div>
                            <p className="mt-4 text-gray-800 font-handwriting text-sm tracking-widest uppercase">The Bride</p>
                        </motion.div>

                        <motion.div 
                            initial={{ rotate: 6, opacity: 0, y: 20 }}
                            animate={{ rotate: 3, opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="w-72 bg-white p-4 pb-12 shadow-2xl transform hover:scale-105 hover:rotate-0 transition-all duration-500 text-center"
                        >
                            <div className="w-full aspect-3/4 bg-gray-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                <img src="https://placehold.co/600x800/png?text=Alexander" alt="Alexander" className="w-full h-full object-cover opacity-80" />
                            </div>
                            <p className="mt-4 text-gray-800 font-handwriting text-sm tracking-widest uppercase">The Groom</p>
                        </motion.div>
                        
                    </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-6 uppercase tracking-widest text-xs md:text-sm mb-20">
                    <button className="px-8 py-4 border border-[#EFD4C4] hover:bg-[#EFD4C4] hover:text-[#781727] transition-all duration-300">
                        RSVP Now
                    </button>
                    <button className="px-8 py-4 border border-[#EFD4C4] hover:bg-[#EFD4C4] hover:text-[#781727] transition-all duration-300">
                        Guest Details
                    </button>
                </div>

             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
