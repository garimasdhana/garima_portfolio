import { ArrowUpRight } from 'lucide-react';
import type { GalleryItem } from '@/data/campaigns';
import GalleryCard from '@/components/gallery/GalleryCard';
import Lightbox from '@/components/gallery/Lightbox';
import { useGalleryLightbox } from '@/components/gallery/useGalleryLightbox';

const INSTAGRAM_URL = 'https://www.instagram.com/tripiqnow';

type Props = { items: GalleryItem[] };

// TripIQ layout:
// [0-1]   Reel Covers (portrait, featured row)
// [2-5]   Instagram Posts (square, 4-up)
// [6]     Travel Itinerary (landscape, larger)
// [7-9]   Insights screenshots (square, grouped)
export default function TripIqGallery({ items }: Props) {
  const lb = useGalleryLightbox(items.length);
  const reelCovers = items.slice(0, 2);
  const igPosts = items.slice(2, 6);
  const itinerary = items[6];
  const insights = items.slice(7, 10);
  const all = items;

  const openAt = (globalIndex: number) => () => lb.open(globalIndex);

  return (
    <>
      {/* Reel Covers — featured pair */}
      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        {reelCovers.map((item, i) => (
          <GalleryCard key={i} item={item} onOpen={openAt(i)} className="aspect-[9/16] sm:max-w-[260px] sm:mx-auto" />
        ))}
      </div>

      {/* Instagram Posts — 4-up grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-8 sm:grid-cols-4 sm:gap-5">
        {igPosts.map((item, i) => (
          <GalleryCard key={i} item={item} onOpen={openAt(2 + i)} />
        ))}
      </div>

      {/* Travel Itinerary — larger landscape */}
      {itinerary && (
        <div className="mt-6 sm:mt-8">
          <GalleryCard item={itinerary} onOpen={openAt(6)} className="aspect-[16/9] sm:col-span-2" />
        </div>
      )}

      {/* Insights screenshots — grouped */}
      <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8 sm:gap-5">
        {insights.map((item, i) => (
          <GalleryCard key={i} item={item} onOpen={openAt(7 + i)} />
        ))}
      </div>

      {/* Instagram CTA */}
      <div className="mt-12 flex justify-center sm:mt-16">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink/70 transition-all duration-300 ease-spring-soft hover:border-accent hover:text-accent hover:shadow-soft active:scale-[0.98]"
        >
          View TripIQ on Instagram
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 ease-spring-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>

      <Lightbox items={all} index={lb.index} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
    </>
  );
}
