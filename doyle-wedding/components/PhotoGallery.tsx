export default function PhotoGallery() {
  return (
    <div className="grid grid-cols-2 gap-8" aria-label="Engagement photo gallery">
  <div className="aspect-square bg-[#E2B3C2] rounded-2xl shadow-lg border-8 border-white flex items-center justify-center text-wedding-puce text-xl font-semibold" aria-label="Engagement Photo 1">Engagement Photo 1</div>
  <div className="aspect-square bg-[#E2B3C2] rounded-2xl shadow-lg border-8 border-white flex items-center justify-center text-wedding-puce text-xl font-semibold" aria-label="Engagement Photo 2">Engagement Photo 2</div>
    </div>
  );
}
