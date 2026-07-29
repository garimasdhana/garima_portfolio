import type { GalleryItem } from '@/data/campaigns';
import GalleryCard from '@/components/gallery/GalleryCard';
import Lightbox from '@/components/gallery/Lightbox';
import { useGalleryLightbox } from '@/components/gallery/useGalleryLightbox';

type Props = { items: GalleryItem[] };

// Noida Vibes layout:
// [0-2] Videos (portrait, primary focus — large featured row)
// [3-5] Creatives (square, supporting row)
export default function NoidaVibesGallery({ items }: Props) {
  const lb = useGalleryLightbox(items.length);
  const videos = items.slice(0, 3);
  const creatives = items.slice(3, 6);

  return (
    <>
      {/* Videos — primary focus, portrait reels */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
        {videos.map((item, i) => (
          <GalleryCard key={i} item={item} onOpen={() => lb.open(i)} className="aspect-[9/16] sm:max-w-[320px] sm:mx-auto" />
        ))}
      </div>

      {/* Creatives — supporting row */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-6">
        {creatives.map((item, i) => (
          <GalleryCard key={i} item={item} onOpen={() => lb.open(3 + i)} className="aspect-[4/5]" />
        ))}
      </div>

      <Lightbox items={items} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
    </>
  );
}
