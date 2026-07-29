import { useRef } from 'react';
import { Play } from 'lucide-react';
import type { GalleryItem } from '@/data/campaigns';

const ASPECT_CLASS: Record<GalleryItem['aspect'], string> = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
};

type Props = {
  item: GalleryItem;
  onOpen: () => void;
  className?: string;
};

export default function GalleryCard({ item, onOpen, className = '' }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = item.kind === 'video';

  const handleEnter = () => {
    if (isVideo && item.video && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };
  const handleLeave = () => {
    if (isVideo && item.video && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <button
      onClick={onOpen}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`group relative overflow-hidden rounded-xl2 border border-line bg-neutral-50 transition-all duration-300 ease-spring-soft hover:shadow-lift hover:-translate-y-1 hover:border-accent/20 active:scale-[0.99] ${ASPECT_CLASS[item.aspect]} ${className}`}
    >
      {item.kind === 'image' && item.src ? (
        <img
          src={item.src}
          alt={item.label}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 ease-spring-soft group-hover:scale-[1.04]"
        />
      ) : isVideo && item.video ? (
        <>
          <video
            ref={videoRef}
            src={item.video}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/25 transition-opacity duration-200 ease-out-quint group-hover:opacity-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-white/10 backdrop-blur-sm transition-transform duration-300 ease-spring-soft group-hover:scale-90">
              <Play size={22} className="translate-x-0.5 text-white/90" fill="currentColor" />
            </div>
          </div>
        </>
      ) : isVideo ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-line/60">
            <Play size={18} className="translate-x-0.5 text-ink/35" fill="currentColor" />
          </div>
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink/35">
            {item.label}
          </span>
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 text-center">
          <div className="h-12 w-12 rounded-full border border-line/60" />
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink/35">
            {item.label}
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-200 ease-out-quint group-hover:opacity-100">
        <span className="p-5 text-xs font-medium uppercase tracking-[0.14em] text-white/90">
          {item.label}
        </span>
      </div>
    </button>
  );
}
