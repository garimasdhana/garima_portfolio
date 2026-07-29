import { Mail, Linkedin, FileText, MapPin } from 'lucide-react';

const INFO = [
  {
    label: 'EMAIL',
    value: 'garimasdhanawork@gmail.com',
    href: 'mailto:garimasdhanawork@gmail.com',
    icon: Mail,
  },
  {
    label: 'LINKEDIN',
    value: '/garimasdhana',
    href: 'https://www.linkedin.com/in/garimasdhana/',
    icon: Linkedin,
  },
  {
    label: 'LOCATION',
    value: 'Noida, India',
    href: null,
    icon: MapPin,
  },
];

const ACTIONS = [
  {
    label: 'Email',
    href: 'mailto:garimasdhanawork@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/garimasdhana/',
    icon: Linkedin,
  },
  {
    label: 'Resume',
    href: '#',
    icon: FileText,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="section-shell">
        {/* Header */}
        <div className="reveal text-center">
          <p className="eyebrow mb-8">Contact</p>
          <h2 className="display mx-auto text-[clamp(2.6rem,6.5vw,5rem)] leading-[1.1] text-ink">
            Let's build something
            <br />
            meaningful.
          </h2>
          <p className="reveal reveal-delay-1 mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-ink/55">
            Whether it's creative strategy, social media, branding or content, I'd love to
            connect. If you have an opportunity, collaboration or just want to chat about
            marketing, feel free to reach out.
          </p>
        </div>

        {/* Action buttons */}
        <div className="reveal reveal-delay-2 mt-12 flex flex-wrap items-center justify-center gap-4">
          {ACTIONS.map((a) => {
            const Icon = a.icon;
            return (
              <a
                key={a.label}
                href={a.href}
                target={a.href.startsWith('http') ? '_blank' : undefined}
                rel={a.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white shadow-soft transition-all duration-200 ease-spring-soft hover:bg-accent hover:shadow-lift hover:-translate-y-[3px] hover:scale-[1.02] active:scale-[0.97] active:translate-y-0"
              >
                <Icon size={16} strokeWidth={1.75} />
                {a.label}
              </a>
            );
          })}
        </div>

        {/* Info row */}
        <div className="mt-20 grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {INFO.map((item) => {
            const Icon = item.icon;
            const inner = (
              <div className="reveal flex flex-col items-center gap-3 py-10 sm:py-8">
                <Icon size={20} strokeWidth={1.5} className="text-ink/30" />
                <p className="text-[10px] font-medium tracking-[0.22em] text-ink/40">
                  {item.label}
                </p>
                <p className="text-[15px] font-medium text-ink/80">{item.value}</p>
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="transition-all duration-200 ease-out-quint hover:[&_svg]:text-accent hover:[&_p:last-child]:text-accent hover:-translate-y-0.5"
              >
                {inner}
              </a>
            ) : (
              <div key={item.label}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
