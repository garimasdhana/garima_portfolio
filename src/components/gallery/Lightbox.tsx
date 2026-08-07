import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import type { GalleryItem } from '@/data/campaigns';

type Props = {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({ items, index, onClose, onPrev, onNext }: Props) {
  if (index === null) return null;
  const item = items[index];

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Close — fixed upper-right */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-200 ease-spring-soft hover:scale-110 hover:bg-white/10 hover:text-white active:scale-95"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Previous — vertically centered */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-200 ease-spring-soft hover:scale-110 hover:bg-white/10 hover:text-white active:scale-95 sm:left-8"
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Centered media */}
      <div
        className="relative flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.kind === 'video' && item.video ? (
          <video
            src={item.video}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="max-h-[90vh] max-w-[90vw] rounded-xl2 object-contain"
          />
        ) : item.kind === 'image' && item.src ? (
          <img
            src={item.src}
            alt={item.label}
            className="max-h-[90vh] max-w-[90vw] rounded-xl2 object-contain"
          />
        ) : (
          <div className="flex aspect-[4/3] w-[80vw] max-w-[700px] flex-col items-center justify-center gap-4 rounded-xl2 border border-white/15 bg-white/5 p-10 text-center">
            {item.kind === 'video' ? (
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20">
                <Play size={26} className="translate-x-0.5 text-white/60" fill="currentColor" />
              </div>
            ) : (
              <div className="h-16 w-16 rounded-full border border-white/20" />
            )}
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-white/50">
              {item.label}
            </span>
          </div>
        )}

        {/* Caption overlay — sits below the image without affecting centering */}
        <p className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium uppercase tracking-[0.18em] text-white/50">
          {item.label}
        </p>
      </div>

      {/* Next — vertically centered */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-200 ease-spring-soft hover:scale-110 hover:bg-white/10 hover:text-white active:scale-95 sm:right-8"
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>
    </div>,
    document.body,
  );
}
