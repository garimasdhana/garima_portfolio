import { Linkedin, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'campaigns', label: 'Work Highlights' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/garimasdhana/',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:garimasdhanawork@gmail.com',
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="section-shell py-16">
        <div className="flex flex-col items-center gap-10">
          {/* Identity */}
          <div className="text-center">
            <p className="display text-2xl text-ink">Garima Sdhana</p>
            <p className="mt-1.5 text-sm text-ink/50">Marketing Creative</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-ink/60 transition-colors duration-200 ease-out-quint hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink/55 transition-all duration-200 ease-spring-soft hover:border-accent hover:text-accent hover:-translate-y-1 hover:scale-105 active:scale-95"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 border-t border-line pt-8 text-center">
          <p className="text-xs text-ink/40">
            © 2026 Garima Sdhana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
