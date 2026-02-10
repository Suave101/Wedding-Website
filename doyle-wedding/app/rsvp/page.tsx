import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WeddingLayout from "@/components/WeddingLayout";

export default function RSVPPage() {
  return (
    <WeddingLayout>
      <section className="w-full min-h-[80vh] bg-wedding-almond flex items-center justify-center py-20 animate-fade-in">
        <Card className="w-full max-w-lg p-10 bg-wedding-pearl shadow-xl border-wedding-puce">
          <h2 className="text-4xl font-serif font-bold text-wedding-scarlet mb-8 text-center">RSVP</h2>
          <form className="space-y-6" aria-label="RSVP form">
            <Input placeholder="Your Name" className="bg-wedding-pearl border-wedding-puce text-wedding-scarlet focus:border-wedding-scarlet focus:ring-wedding-scarlet" />
            <Input placeholder="Email" className="bg-wedding-pearl border-wedding-puce text-wedding-scarlet focus:border-wedding-scarlet focus:ring-wedding-scarlet" />
            <Input placeholder="Number of Guests" type="number" className="bg-wedding-pearl border-wedding-puce text-wedding-scarlet focus:border-wedding-scarlet focus:ring-wedding-scarlet" />
            <Button className="bg-[#AC5B67] text-white hover:bg-[#781727] w-full text-lg font-semibold py-3 rounded-md transition">Submit RSVP</Button>
          </form>
        </Card>
      </section>
    </WeddingLayout>
  );
}
