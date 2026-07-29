import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrolled, useActiveSection } from '@/hooks/useScroll';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'campaigns', label: 'Work Highlights' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = NAV_ITEMS.map((n) => n.id);

export default function Header() {
  const scrolled = useScrolled(12);
  const { active, setActive } = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-line bg-canvas/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="section-shell flex h-[72px] items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-baseline gap-1.5 select-none active:scale-[0.98]"
          aria-label="Garima Sdhana — home"
        >
          <span className="display text-[22px] tracking-tight text-ink transition-colors duration-200 ease-out-quint group-hover:text-accent">
            Garima
          </span>
          <span className="display text-[22px] tracking-tight text-ink/55 transition-colors duration-200 ease-out-quint group-hover:text-accent/70">
            Sdhana
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`group relative text-sm font-medium transition-colors duration-200 ease-out-quint ${
                active === item.id
                  ? 'text-accent'
                  : 'text-ink/70 hover:text-accent'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ease-spring-soft ${
                  active === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center rounded-xl p-2 text-ink transition-all duration-200 ease-spring-soft hover:bg-line/60 active:scale-95 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} className="transition-transform duration-200 ease-spring-soft" /> : <Menu size={20} className="transition-transform duration-200 ease-spring-soft" />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden border-t border-line bg-canvas transition-all duration-500 md:hidden ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <nav className="section-shell flex flex-col gap-1 py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setActive(item.id);
                setOpen(false);
              }}
              className={`rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200 ease-out-quint ${
                active === item.id
                  ? 'bg-accent-soft text-accent'
                  : 'text-ink/75 hover:bg-line/50'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
