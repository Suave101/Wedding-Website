import Navbar from "@/components/Navbar";
import IchthysIcon from "@/components/Ichthys";

export default function WeddingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-wedding-almond flex flex-col">
      <header className="bg-wedding-scarlet text-wedding-pearl py-8 shadow-lg">
        <div className="container mx-auto flex flex-col items-center">
          <IchthysIcon className="w-14 h-14 text-wedding-pearl mb-4" />
          <Navbar />
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <footer className="bg-wedding-puce text-wedding-pearl py-4 text-center mt-10">
        <span className="font-serif">With love, Juanita & Alexander Doyle &mdash; 2026</span>
      </footer>
    </div>
  );
}
