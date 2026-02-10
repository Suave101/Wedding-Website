"use client"
import { Pinyon_Script, Cinzel } from 'next/font/google'
import Envelope from '@/components/Envelope'
import { useState } from 'react'

const scriptFont = Pinyon_Script({ weight: '400', subsets: ['latin'] })
const serifFont = Cinzel({ weight: ['400', '600'], subsets: ['latin'] })

export default function Home() {
  const [openComplete, setOpenComplete] = useState(false)
  return (
    <div className="w-full bg-[#781727] text-[#EFD4C4]">
      
      {/* 1. THE OPENING EXPERIENCE */}
      <section className="h-screen w-full flex items-center justify-center bg-[#5E121E]">
        <Envelope onOpenComplete={() => setOpenComplete(true)} />
      </section>

      {/* 2. THE MAIN WEBSITE (Appears below) */}
  <main className={`min-h-screen flex flex-col items-center justify-center p-4 relative border-t-4 border-[#EFD4C4] transition-opacity duration-700 ${openComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        
        {/* FISH ICON */}
        <div className="mb-8 opacity-90 mt-20">
          <svg width="100" height="50" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M180 50C180 50 140 10 100 10C60 10 20 50 20 50C20 50 60 90 100 90C140 90 180 50 180 50Z" stroke="#EFD4C4" strokeWidth="2" strokeLinecap="round" opacity="0.25"/>
             <path d="M160 50C160 30 130 20 100 20C50 20 20 50 20 50C20 50 50 80 100 80C130 80 160 70 160 50" stroke="#EFD4C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M160 50L190 20" stroke="#EFD4C4" strokeWidth="3" strokeLinecap="round"/>
             <path d="M160 50L190 80" stroke="#EFD4C4" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>

        {/* REST OF CONTENT (Names, Links, Photos) */}
        <h1 className={`${scriptFont.className} text-8xl md:text-9xl mb-6 text-center leading-tight`}>
          Juanita <span className="opacity-70 text-6xl">&</span> Alexander
        </h1>
        
        <div className={`${serifFont.className} text-center mb-20`}>
           <p className="uppercase tracking-[0.25em] border-b border-[#EFD4C4]/30 pb-4 mb-8">
              October 10, 2026 • NYC
           </p>
           
           <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              {/* Photo Card 1 */}
              <div className="w-64 h-80 bg-[#EFD4C4]/10 border border-[#EFD4C4]/20 -rotate-3 p-4">
                 <div className="w-full h-full bg-[#5E121E]/50 flex items-center justify-center">Photo 1</div>
              </div>
              {/* Photo Card 2 */}
              <div className="w-64 h-80 bg-[#EFD4C4]/10 border border-[#EFD4C4]/20 rotate-3 p-4">
                 <div className="w-full h-full bg-[#5E121E]/50 flex items-center justify-center">Photo 2</div>
              </div>
           </div>
        </div>

      </main>
    </div>
  )
}
