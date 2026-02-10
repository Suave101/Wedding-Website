import Link from "next/link";

export default function Navbar() {
  return (
  <nav className="flex flex-wrap justify-center gap-8 border-b-4 border-[rgba(120,23,39,0.2)] pb-4 mt-4" aria-label="Main navigation" style={{display: 'flex', gap: '2rem', justifyContent: 'center'}}>
      <Link href="/" className="nav-link font-serif font-bold text-lg text-wedding-ruby hover:text-wedding-scarlet hover:underline transition">Home</Link>
      <Link href="/rsvp" className="nav-link font-serif font-bold text-lg text-wedding-ruby hover:text-wedding-scarlet hover:underline transition">RSVP</Link>
      <Link href="/invitation" className="nav-link font-serif font-bold text-lg text-wedding-ruby hover:text-wedding-scarlet hover:underline transition">Invitation</Link>
      <Link href="/registry" className="nav-link font-serif font-bold text-lg text-wedding-ruby hover:text-wedding-scarlet hover:underline transition">Registry</Link>
    </nav>
  );
}
