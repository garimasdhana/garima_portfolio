import type { GalleryItem } from '@/data/campaigns';
import GalleryCard from '@/components/gallery/GalleryCard';
import Lightbox from '@/components/gallery/Lightbox';
import { useGalleryLightbox } from '@/components/gallery/useGalleryLightbox';

type Props = { items: GalleryItem[] };

// AS Marketing layout (agency-oriented, mixed orientation):
// [0-3] Videos — 2 landscape + 2 portrait, interleaved
// [4-6] Creatives — mixed portrait/landscape
// [7]   Presentation Design — featured full-width landscape
export default function AsMarketingGallery({ items }: Props) {
  const lb = useGalleryLightbox(items.length);
  const videos = items.slice(0, 4);
  const creatives = items.slice(4, 7);
  const presentation = items[7];

  return (
    <>
      {/* Videos — mixed landscape/portrait, agency grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        <GalleryCard item={videos[0]} onOpen={() => lb.open(0)} className="col-span-2 aspect-[16/9]" />
        <GalleryCard item={videos[1]} onOpen={() => lb.open(1)} className="aspect-[3/4]" />
        <GalleryCard item={videos[2]} onOpen={() => lb.open(2)} className="aspect-[3/4]" />
        <GalleryCard item={videos[3]} onOpen={() => lb.open(3)} className="col-span-2 aspect-[16/9]" />
      </div>

      {/* Creatives — mixed */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-6">
        <GalleryCard item={creatives[0]} onOpen={() => lb.open(4)} className="aspect-[3/4]" />
        <GalleryCard item={creatives[1]} onOpen={() => lb.open(5)} className="aspect-[4/3]" />
        <GalleryCard item={creatives[2]} onOpen={() => lb.open(6)} className="aspect-[3/4]" />
      </div>

      {/* Presentation Design — featured deliverable */}
      {presentation && (
        <div className="mt-6 sm:mt-8">
          <GalleryCard item={presentation} onOpen={() => lb.open(7)} className="aspect-[16/9]" />
        </div>
      )}

      <Lightbox items={items} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
    </>
  );
}
