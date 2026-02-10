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
    <main className="min-h-screen w-full bg-[#781727] text-[#EFD4C4] overflow-x-hidden selection:bg-[#EFD4C4] selection:text-[#781727]">
      <AnimatePresence mode='wait'>
        
        {view === 'envelope' && (
          <motion.section 
            key="envelope-view"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 1.0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#5E121E] h-dvh w-full perspective-1000"
          >
             <Envelope onOpen={() => setView('content')} />
          </motion.section>
        )}

        {view === 'content' && (
          <motion.div
            key="content-view"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full min-h-screen flex flex-col items-center pt-12 md:pt-20 pb-20 px-4"
          >
             <div className="mb-8 opacity-80">
                <div className="w-12 h-12 border border-[#EFD4C4] rotate-45 flex items-center justify-center">
                   <div className="w-8 h-8 border border-[#EFD4C4] flex items-center justify-center -rotate-45">
                       <span className={`${scriptFont.className} text-lg`}>JA</span>
                   </div>
                </div>
             </div>

             {/* Ticket 3 Task: Restore Names */}
             <h1 className={`${scriptFont.className} text-5xl md:text-8xl mb-6 text-center leading-tight drop-shadow-lg max-w-4xl`}>
                 Juanita <span className="opacity-70 text-3xl md:text-6xl mx-2">&</span> Alexander
             </h1>

             <div className={`${serifFont.className} w-full flex flex-col items-center`}>
                 <p className="uppercase tracking-[0.2em] text-[10px] md:text-xs border-y border-[#EFD4C4]/30 py-3 mb-12">
                     October 10, 2026 • New York City
                 </p>
                 
                 {/* Ticket 2 Task: Fix Exploding Images with 'w-64' */}
                 <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center mb-16 relative">
                     
                     <motion.div 
                         initial={{ rotate: -6, opacity: 0, y: 20 }}
                         animate={{ rotate: -3, opacity: 1, y: 0 }}
                         transition={{ delay: 0.5, duration: 0.8 }}
                         className="w-64 bg-[#F5F5F5] p-3 pb-8 shadow-2xl text-center transform hover:scale-105 hover:rotate-0 transition-all duration-500 hover:z-10"
                     >
                         <div className="w-full aspect-3/4 bg-gray-300 overflow-hidden relative">
                             <img src="https://placehold.co/400x530/png?text=Juanita" alt="Juanita" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                         </div>
                         <p className="mt-4 text-[#333] font-serif italic text-sm">The Bride</p>
                     </motion.div>

                     <motion.div 
                         initial={{ rotate: 6, opacity: 0, y: 20 }}
                         animate={{ rotate: 3, opacity: 1, y: 0 }}
                         transition={{ delay: 0.7, duration: 0.8 }}
                         className="w-64 bg-[#F5F5F5] p-3 pb-8 shadow-2xl text-center transform hover:scale-105 hover:rotate-0 transition-all duration-500 hover:z-10"
                     >
                         <div className="w-full aspect-3/4 bg-gray-300 overflow-hidden relative">
                             <img src="https://placehold.co/400x530/png?text=Alexander" alt="Alexander" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                         </div>
                         <p className="mt-4 text-[#333] font-serif italic text-sm">The Groom</p>
                     </motion.div>
                     
                 </div>
             </div>
             
             <div className="flex gap-4 md:gap-8 uppercase tracking-widest text-[10px] md:text-xs">
                 <button className="px-6 py-3 border border-[#EFD4C4] hover:bg-[#EFD4C4] hover:text-[#781727] transition-colors duration-300">RSVP Now</button>
                 <button className="px-6 py-3 border border-[#EFD4C4] hover:bg-[#EFD4C4] hover:text-[#781727] transition-colors duration-300">Details</button>
             </div>

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
