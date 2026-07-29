import { useEffect, useRef, useState } from 'react';

/**
 * Adds the `is-visible` class to any element with the `reveal` class
 * once it scrolls into view. Runs once on mount and observes all
 * matching elements in the document. Supports per-item stagger via
 * `data-reveal-delay` attribute (in ms).
 */
export function useScrollReveal(dependency?: unknown) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay;
            if (delay) {
              el.style.transitionDelay = `${delay}ms`;
            }
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dependency]);
}

/**
 * Tracks whether the page has been scrolled past a threshold.
 */
export function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

/**
 * Returns the id of the section currently most in view, for active nav state.
 */
export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '');
  const ticking = useRef(false);
  const locked = useRef<string | null>(null);

  const setActiveLocked = (id: string) => {
    locked.current = id;
    setActive(id);
  };

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        ticking.current = false;
        const offset = window.innerHeight * 0.35;
        let current = sectionIds[0] ?? '';
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;
          const top = el.getBoundingClientRect().top;
          if (top - offset <= 0) current = id;
        }
        if (locked.current) {
          const lockedEl = document.getElementById(locked.current);
          if (lockedEl) {
            const lockedTop = lockedEl.getBoundingClientRect().top;
            if (lockedTop - offset <= 0) {
              locked.current = null;
            } else {
              current = locked.current;
            }
          }
        }
        setActive(current);
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);

  return { active, setActive: setActiveLocked };
}
