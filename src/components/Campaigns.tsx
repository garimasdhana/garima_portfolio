import { ArrowRight, Plane, Building2, Laptop, Briefcase, type LucideIcon } from 'lucide-react';
import { CAMPAIGNS } from '@/data/campaigns';

type Props = {
  onOpen: (slug: string) => void;
};

const ICON_MAP: Record<string, LucideIcon> = {
  'tripiq': Plane,
  'noida-vibes': Building2,
  'as-marketing': Laptop,
  'freelance': Briefcase,
};

export default function Campaigns({ onOpen }: Props) {
  return (
    <section
      id="campaigns"
      className="scroll-mt-24 border-t border-line py-28 sm:py-36"
    >
      <div className="section-shell">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="eyebrow reveal mb-6">Work Highlights</p>
          <h2 className="display reveal reveal-delay-1 text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
            Marketing work,
            <span className="display-italic text-accent"> measured by impact.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-6 max-w-lg text-[15px] leading-relaxed text-ink/55">
            Real marketing work where I combined creative execution, content
            strategy, social media management and performance analysis.
          </p>
        </div>

        {/* Campaign cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {CAMPAIGNS.map((c) => {
            const Icon = ICON_MAP[c.slug] ?? Briefcase;
            return (
              <article
                key={c.slug}
                className="reveal group cursor-pointer overflow-hidden rounded-xl2 border border-line bg-surface shadow-soft transition-all duration-300 ease-spring-soft hover:shadow-lift hover:-translate-y-1 hover:border-accent/25 active:scale-[0.99]"
                onClick={() => onOpen(c.slug)}
              >
                {/* Icon */}
                <div className="flex justify-center pt-10 pb-2">
                  <Icon
                    size={72}
                    strokeWidth={1.25}
                    className="text-ink/80 transition-all duration-300 ease-spring-soft group-hover:scale-110 group-hover:-rotate-3 group-hover:text-accent"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full border border-line px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-ink/50">
                      {c.tag}
                    </span>
                  </div>

                  <h3 className="display mt-4 text-2xl text-ink transition-colors duration-200 ease-out-quint group-hover:text-accent">
                    {c.brand}
                  </h3>

                  <p className="mt-2 text-[15px] leading-relaxed text-ink/55">
                    {c.tagline}
                  </p>

                  {/* Metrics */}
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                    {c.metrics.map((m) => (
                      <li
                        key={m}
                        className="flex items-center gap-2 text-[12px] text-ink/55"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent/50" />
                        {m}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-5">
                    <span className="group/btn inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 group-hover/btn:text-accent">
                      Explore Project
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
