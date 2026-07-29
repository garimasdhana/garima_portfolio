import type { GalleryItem } from '@/data/campaigns';
import GalleryCard from '@/components/gallery/GalleryCard';
import Lightbox from '@/components/gallery/Lightbox';
import { useGalleryLightbox } from '@/components/gallery/useGalleryLightbox';

type Props = { items: GalleryItem[] };

// Freelance layout — 6 videos, reel-heavy, primary focus.
// Alternating portrait/landscape for editorial rhythm.
export default function FreelanceGallery({ items }: Props) {
  const lb = useGalleryLightbox(items.length);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
        <GalleryCard item={items[0]} onOpen={() => lb.open(0)} className="col-span-2 aspect-[16/9]" />
        <GalleryCard item={items[1]} onOpen={() => lb.open(1)} className="aspect-[9/16] row-span-2" />
        <GalleryCard item={items[2]} onOpen={() => lb.open(2)} className="aspect-[4/3]" />
        <GalleryCard item={items[3]} onOpen={() => lb.open(3)} className="aspect-[4/3]" />
        <GalleryCard item={items[4]} onOpen={() => lb.open(4)} className="col-span-2 aspect-[16/9]" />
        <GalleryCard item={items[5]} onOpen={() => lb.open(5)} className="col-span-2 aspect-[16/9] sm:col-span-1 sm:aspect-[9/16]" />
      </div>

      <Lightbox items={items} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
    </>
  );
}
