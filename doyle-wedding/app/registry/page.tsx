import { Card } from "@/components/ui/card";
import WeddingLayout from "@/components/WeddingLayout";

export default function RegistryPage() {
  return (
    <WeddingLayout>
      <section className="w-full min-h-[80vh] bg-wedding-almond flex items-center justify-center py-20 animate-fade-in">
        <Card className="w-full max-w-lg p-10 bg-wedding-pearl shadow-xl border-wedding-puce">
          <h2 className="text-4xl font-serif font-bold text-wedding-scarlet mb-8 text-center">Registry</h2>
          <p className="text-xl text-wedding-scarlet mb-8 text-center">We appreciate your love and support! Here are some registry links:</p>
          <div className="space-y-4" aria-label="Registry links">
            <a href="https://www.target.com/wedding-registry" target="_blank" rel="noopener noreferrer" className="block bg-wedding-puce text-wedding-pearl w-full px-6 py-3 rounded-lg text-center font-semibold shadow hover:bg-wedding-ruby transition">Target Registry</a>
            <a href="https://www.amazon.com/wedding" target="_blank" rel="noopener noreferrer" className="block bg-wedding-puce text-wedding-pearl w-full px-6 py-3 rounded-lg text-center font-semibold shadow hover:bg-wedding-ruby transition">Amazon Registry</a>
          </div>
        </Card>
      </section>
    </WeddingLayout>
  );
}
