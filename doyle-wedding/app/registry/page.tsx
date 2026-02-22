"use client"
import { Pinyon_Script, Cinzel } from 'next/font/google'
import Link from 'next/link'

const scriptFont = Pinyon_Script({ weight: '400', subsets: ['latin'] })
const serifFont = Cinzel({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

export default function Registry() {
  return (
    <main className="relative min-h-screen w-full bg-[#EFD4C4] text-[#4E0714] overflow-x-hidden flex flex-col items-center justify-center">
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#AC5B67_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* VIEW: THE ROYAL SCROLLING CARD */}
      {/* Adjusted the width and added max-width so it sits perfectly on large screens */}
      <div className="relative z-10 w-[95vw] md:w-[85vw] max-w-5xl my-10">
        
        <div className="relative bg-[#781727] text-[#EFD4C4] shadow-[0_35px_60px_-15px_rgba(78,7,20,0.8)]">
            
            {/* Inner Borders */}
            <div className="absolute inset-4 border border-[#EFD4C4] opacity-40 pointer-events-none z-10" />
            <div className="absolute inset-8 border-[2px] border-[#EFD4C4] pointer-events-none z-10" />

            {/* Main Content Container - Massive top and bottom padding to fix the squishing */}
            <div className="relative flex flex-col items-center text-center px-12 pt-32 pb-24 z-20">
                
                {/* Header */}
                <h1 className={`${serifFont.className} text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.1em] text-[#EFD4C4] mb-6 uppercase`}>
                    Registry
                </h1>
                
                {/* Script text */}
                <div className={`${scriptFont.className} text-3xl md:text-5xl lg:text-6xl text-[#EFD4C4] mb-10 opacity-90`}>
                    Your presence at our wedding is the greatest gift of all.
                </div>

                {/* Subtitle */}
                <div className={`${serifFont.className} text-sm md:text-xl lg:text-2xl tracking-[0.2em] uppercase text-[#EFD4C4] mb-12`}>
                    If you wish to honor us with a gift, we are registered at:
                </div>

                {/* --- THE STACKED LIST DESIGN --- */}
                {/* This forces the links to stretch the full width of the container with borders between them */}
                <div className="mt-4 flex flex-col">
                    <a 
                        href="https://www.dillards.com/registry/JuanitaDiaz-AlexanderDoyle/133888560?cm_mmc=TransactionEmail-_-WeddingRegistryShare-_-Body-_-ViewWeddingRegistry" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`${serifFont.className} block w-full py-6 md:py-8 border-t border-[#EFD4C4] text-[#EFD4C4] text-xl md:text-3xl lg:text-4xl tracking-[0.2em] hover:bg-[#EFD4C4] hover:text-[#781727] transition-all duration-300 uppercase`}
                    >
                        Dillard's
                    </a>
                    <a 
                        href="https://www.amazon.com/wedding/guest-view/232EXVIN7SKJO" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`${serifFont.className} block w-full py-6 md:py-8 border-t border-[#EFD4C4] text-[#EFD4C4] text-xl md:text-3xl lg:text-4xl tracking-[0.2em] hover:bg-[#EFD4C4] hover:text-[#781727] transition-all duration-300 uppercase`}
                    >
                        Amazon
                    </a>
                    <a 
                        href="https://www.crateandbarrel.com/gift-registry/juanita-diaz-and-alexander-doyle/r7503375" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`${serifFont.className} block w-full py-6 md:py-8 border-t border-[#EFD4C4] text-[#EFD4C4] text-xl md:text-3xl lg:text-4xl tracking-[0.2em] hover:bg-[#EFD4C4] hover:text-[#781727] transition-all duration-300 uppercase`}
                    >
                        Crate & Barrel
                    </a>
                    <Link 
                        href="/" 
                        className={`${serifFont.className} block w-full py-6 md:py-8 border-t border-[#EFD4C4] text-[#EFD4C4] text-xl md:text-3xl lg:text-4xl tracking-[0.2em] hover:bg-[#EFD4C4] hover:text-[#781727] transition-all duration-300 uppercase`}
                    >
                        Main Page
                    </Link>
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc75H7CJqIjHufBt04MRI1b9VrnsNkc_j73UItGTnlAwcMMxQ/viewform?usp=sharing&ouid=108416974325640632758" 
                        target="_blank"
                        rel="noopener noreferrer"
                        // The last item gets a bottom border as well
                        className={`${serifFont.className} block w-full py-6 md:py-8 border-t border-b border-[#EFD4C4] text-[#EFD4C4] text-xl md:text-3xl lg:text-4xl tracking-[0.2em] hover:bg-[#EFD4C4] hover:text-[#781727] transition-all duration-300 uppercase`}
                    >
                        R.S.V.P.
                    </a>
                </div>

            </div>
        </div>
      </div>
    </main>
  )
}