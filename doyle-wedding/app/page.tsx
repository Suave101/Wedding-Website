import { Pinyon_Script, Cinzel } from 'next/font/google'

// Loading the fonts (Script for names, Cinzel for the "Engraved" look)
const scriptFont = Pinyon_Script({ weight: '400', subsets: ['latin'] })
const serifFont = Cinzel({ weight: ['400', '600'], subsets: ['latin'] })

export default function Home() {
  return (
    // MAIN CONTAINER: Stone Background Color, Centered Content
  <main className="min-h-screen w-full bg-[#781727] text-[#EFD4C4] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* 1. THE ICON (The Ichthys - Rust Color) */}
      <div className="mb-4 opacity-95">
        <svg width="80" height="40" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
           <path d="M160 50C160 30 130 20 100 20C50 20 20 50 20 50C20 50 50 80 100 80C130 80 160 70 160 50" stroke="#EFD4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           <path d="M160 50L190 20" stroke="#EFD4C4" strokeWidth="2" strokeLinecap="round"/>
           <path d="M160 50L190 80" stroke="#EFD4C4" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* 2. THE NAMES (Large, Script - Artwork) */}
      <h1
        className={`${scriptFont.className} engraved text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] mb-4 text-center leading-tight drop-shadow-sm`}
        style={{ fontSize: '3.5rem', lineHeight: 1 }}
      >
        Juanita{' '}
        <span
          className="inline-block align-middle text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.6rem] opacity-95"
          style={{ fontSize: '2rem', margin: '0 0.15rem' }}
        >
          &
        </span>{' '}
        Alexander
      </h1>

      {/* 3. THE DETAILS (Date & Location - Engraved Style) */}
      <div className={`${serifFont.className} flex flex-col items-center gap-4`}>
  <p className="uppercase tracking-[0.18em] text-xs md:text-sm font-semibold border-b border-[#EFD4C4]/20 pb-2" style={{ fontSize: '0.9rem' }}>
          October 10, 2026 • New York City
        </p>

        {/* 4. THE NAVIGATION (Fixed Spacing & Colors) */}
  <nav className="flex flex-wrap justify-center gap-8 mt-6 text-xs md:text-sm font-bold uppercase tracking-widest" style={{display: 'flex', gap: '2rem', justifyContent: 'center'}}>
          <a href="/rsvp" className="transition-all hover:opacity-90">RSVP</a>
          <a href="/invitation" className="transition-all hover:opacity-90">Details</a>
          <a href="/registry" className="transition-all hover:opacity-90">Registry</a>
        </nav>
      </div>
      
    </main>
  )
}
