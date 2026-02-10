import { Card } from "@/components/ui/card";
import WeddingLayout from "@/components/WeddingLayout";

export default function InvitationPage() {
  return (
    <WeddingLayout>
      <Card className="w-full max-w-lg p-10 bg-wedding-pearl shadow-xl border-wedding-puce animate-fade-in">
        <h2 className="text-4xl font-serif font-bold text-wedding-scarlet mb-8 text-center">You're Invited!</h2>
        <p className="text-xl text-wedding-puce mb-8 text-center">Join us for our wedding celebration.</p>
        <div className="bg-wedding-ruby rounded-xl p-6 text-wedding-pearl text-center text-lg font-semibold shadow-lg animate-fade-in">
          <p className="mb-2">Date: <span className="font-bold">June 20, 2026</span></p>
          <p className="mb-2">Location: <span className="font-bold">The Grand Venue</span></p>
          <p>Time: <span className="font-bold">4:00 PM</span></p>
        </div>
      </Card>
    </WeddingLayout>
  );
}
