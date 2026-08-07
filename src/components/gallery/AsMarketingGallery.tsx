import type { GalleryItem } from '@/data/campaigns';
import GalleryCard from '@/components/gallery/GalleryCard';
import Lightbox from '@/components/gallery/Lightbox';
import { useGalleryLightbox } from '@/components/gallery/useGalleryLightbox';

type Props = { items: GalleryItem[] };

// AS Marketing layout:
// [0-3] Reel Covers (portrait 9:16, featured row)
// [4-7] Instagram Reels (portrait 9:16, 4-up)
export default function AsMarketingGallery({ items }: Props) {
  const lb = useGalleryLightbox(items.length);
  const reelCovers = items.slice(0, 4);
  const reels = items.slice(4, 8);
  const all = items;

  const openAt = (globalIndex: number) => () => lb.open(globalIndex);

  return (
    <>
      {/* Reel Covers — featured row */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        {reelCovers.map((item, i) => (
          <GalleryCard key={i} item={item} onOpen={openAt(i)} className="aspect-[9/16]" />
        ))}
      </div>

      {/* Instagram Reels — 4-up grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-8 sm:grid-cols-4 sm:gap-5">
        {reels.map((item, i) => (
          <GalleryCard key={i} item={item} onOpen={openAt(4 + i)} className="aspect-[9/16]" />
        ))}
      </div>

      <Lightbox items={all} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
    </>
  );
}
