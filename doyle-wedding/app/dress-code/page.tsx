"use client"
import { Pinyon_Script } from 'next/font/google'
import Link from 'next/link'

const scriptFont = Pinyon_Script({ weight: '400', subsets: ['latin'] })

// We are forcing the red color here to bypass Tailwind completely. 
// If this red is too dark/light, just tweak this hex code!
const themeRed = '#8b1c1c'; 

export default function DressCode() {
  return (
    <main 
      className="min-h-screen w-full p-4 md:p-8" 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f6ebe4', /* Your almond background */
        color: themeRed 
      }}
    >
      
      {/* THE MASTER CONTAINER */}
      <div 
        className="w-full max-w-5xl p-6 md:p-10 shadow-xl" 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2.5rem',
          border: `1px solid ${themeRed}`
        }}
      >

        {/* TOP TITLE BOX */}
        <div className="text-center w-full" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 className="text-4xl md:text-5xl tracking-[0.2em] uppercase mb-4">
            Dress Code
          </h1>
          <p className="tracking-widest uppercase text-xs md:text-sm pb-4 w-11/12 md:w-3/4" style={{ borderBottom: `1px solid ${themeRed}` }}>
            We kindly ask our guests to dress in semi-formal attire.
          </p>
        </div>

        {/* MIDDLE SECTION: Gentlemen / Ladies */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', width: '100%' }}>
          
          {/* Gentlemen Box */}
          <div className="p-8 md:p-10 text-center" style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: `1px solid ${themeRed}` }}>
            <h3 className="text-2xl md:text-3xl tracking-[0.2em] uppercase mb-6">
              Gentlemen
            </h3>
            <p className="tracking-widest leading-loose text-sm md:text-base">
              Suits are requested but ties are optional.<br/>Light, breathable fabrics are encouraged!
            </p>
          </div>

          {/* Ladies Box */}
          <div className="p-8 md:p-10 text-center" style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: `1px solid ${themeRed}` }}>
            <h3 className="text-2xl md:text-3xl tracking-[0.2em] uppercase mb-6">
              Ladies
            </h3>
            <p className="tracking-widest leading-loose text-sm md:text-base">
              Long sundresses, midi-length dresses, or knee-length dresses are great!<br/>Please choose light, comfortable fabrics suitable for June in Florida!
            </p>
          </div>

        </div>

        {/* SCRIPT SIGN-OFF */}
        <div className="text-center w-full my-2">
          <span className={`${scriptFont.className} text-4xl md:text-5xl opacity-90`}>
            Thank you, we deeply appreciate you!
          </span>
        </div>

        {/* BOTTOM BUTTONS: ALWAYS STACKED */}
        {/* flexDirection: 'column' ensures they are always on top of each other */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', alignItems: 'center' }}>
          <Link 
            href="/" 
            className="py-4 tracking-[0.2em] uppercase text-center w-full max-w-lg"
            style={{ 
              border: `1px solid ${themeRed}`, 
              textDecoration: 'none', // Removes underline
              color: themeRed,        // Forces it to stay red, never purple
              display: 'block'
            }}
          >
            Main Page
          </Link>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSc75H7CJqIjHufBt04MRI1b9VrnsNkc_j73UItGTnlAwcMMxQ/viewform" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="py-4 tracking-[0.2em] uppercase text-center w-full max-w-lg"
            style={{ 
              border: `1px solid ${themeRed}`, 
              textDecoration: 'none', // Removes underline
              color: themeRed,        // Forces it to stay red, never purple
              display: 'block'
            }}
          >
            R.S.V.P.
          </a>
        </div>

      </div>
    </main>
  )
}