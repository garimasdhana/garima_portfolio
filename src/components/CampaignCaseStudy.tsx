import { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CAMPAIGNS } from '@/data/campaigns';
import TripIqGallery from '@/components/gallery/TripIqGallery';
import NoidaVibesGallery from '@/components/gallery/NoidaVibesGallery';
import AsMarketingGallery from '@/components/gallery/AsMarketingGallery';
import FreelanceGallery from '@/components/gallery/FreelanceGallery';

const GALLERY_COMPONENT: Record<string, React.ComponentType<{ items: typeof CAMPAIGNS[number]['caseStudy']['gallery'] }>> = {
  'tripiq': TripIqGallery,
  'noida-vibes': NoidaVibesGallery,
  'as-marketing': AsMarketingGallery,
  'freelance': FreelanceGallery,
};

type Props = {
  slug: string;
  onBack: () => void;
  onOpen: (slug: string) => void;
};

export default function CampaignCaseStudy({ slug, onBack, onOpen }: Props) {
  const campaign = CAMPAIGNS.find((c) => c.slug === slug);
  const index = CAMPAIGNS.findIndex((c) => c.slug === slug);
  const next = CAMPAIGNS[(index + 1) % CAMPAIGNS.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!campaign) return null;
  const cs = campaign.caseStudy;

  return (
    <div className="animate-fade-in">
      {/* Top bar — sits below the fixed header */}
      <div className="border-b border-line pt-[72px]">
        <div className="section-shell flex items-center justify-between py-6">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition-colors duration-200 ease-out-quint hover:text-accent active:scale-[0.98]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 ease-spring-soft group-hover:-translate-x-1"
            />
            Back
          </button>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-ink/40">
            Case Study
          </span>
        </div>
      </div>

      {/* Hero — Category, Title, Tagline */}
      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow reveal mb-6">{campaign.tag}</p>
            <h1 className="display reveal reveal-delay-1 text-[clamp(2.5rem,6vw,4.5rem)] text-ink">
              {campaign.brand}
            </h1>
            <p className="reveal reveal-delay-2 mt-4 text-xl leading-relaxed text-ink/55">
              {campaign.tagline}
            </p>
          </div>

          {/* Meta cards — Role / Timeline / Tools */}
          <div className="reveal reveal-delay-3 mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-line bg-surface/70 p-5 transition-all duration-300 ease-spring-soft hover:border-accent/20 hover:shadow-soft">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink/40">
                My Role
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{cs.role}</p>
            </div>
            <div className="rounded-xl border border-line bg-surface/70 p-5 transition-all duration-300 ease-spring-soft hover:border-accent/20 hover:shadow-soft">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink/40">
                Timeline
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{cs.timeline}</p>
            </div>
            <div className="rounded-xl border border-line bg-surface/70 p-5 transition-all duration-300 ease-spring-soft hover:border-accent/20 hover:shadow-soft">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink/40">
                Tools Used
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{cs.tools}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <h2 className="display reveal text-2xl text-ink">The Opportunity</h2>
            <p className="reveal reveal-delay-1 max-w-[70ch] text-lg leading-[1.75] text-ink/70">
              {cs.opportunity}
            </p>
          </div>
        </div>
      </section>

      {/* My Contribution */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <h2 className="display reveal text-2xl text-ink">My Contribution</h2>
            <p className="reveal reveal-delay-1 max-w-[70ch] text-lg leading-[1.75] text-ink/70">
              {cs.contribution}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="section-shell">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow reveal mb-4">Featured Work</p>
            <h2 className="display reveal reveal-delay-1 text-2xl text-ink sm:text-3xl">
              A selection of creatives from this project.
            </h2>
          </div>
          <div className="reveal reveal-delay-2">
            {(() => {
              const GalleryComponent = GALLERY_COMPONENT[campaign.slug];
              return GalleryComponent ? <GalleryComponent items={cs.gallery} /> : null;
            })()}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="section-shell">
          <h2 className="display reveal mb-12 text-2xl text-ink">Impact</h2>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl2 border border-line bg-line">
            {cs.performance.map((p, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 4) + 1} bg-white p-8 text-center sm:p-10`}
              >
                <p className="display text-3xl text-ink sm:text-4xl">
                  {p.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <h2 className="display reveal text-2xl text-ink">Key Learnings</h2>
            <ul className="reveal reveal-delay-1 space-y-4">
              {cs.learnings.map((l, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/70"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <h2 className="display reveal text-2xl text-ink">Reflection</h2>
            <p className="display-italic reveal reveal-delay-1 max-w-[70ch] text-xl leading-[1.75] text-ink/75">
              {cs.reflection}
            </p>
          </div>
        </div>
      </section>

      {/* Next campaign */}
      <section className="border-t border-line py-16">
        <div className="section-shell">
          <button
            onClick={() => onOpen(next.slug)}
            className="group flex w-full items-center justify-between rounded-xl2 border border-line p-8 transition-all duration-300 ease-spring-soft hover:border-accent hover:shadow-lift hover:-translate-y-0.5 active:scale-[0.99] sm:p-10"
          >
            <div className="text-left">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink/40">
                Next Project
              </p>
              <p className="display mt-2 text-2xl text-ink transition-colors duration-200 ease-out-quint group-hover:text-accent sm:text-3xl">
                {next.brand}
              </p>
            </div>
            <ArrowRight
              size={24}
              className="text-ink/40 transition-all duration-200 ease-spring-soft group-hover:translate-x-2 group-hover:text-accent"
            />
          </button>
        </div>
      </section>
      {/* Back to Work Highlights */}
      <section className="border-t border-line py-16">
        <div className="section-shell">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition-colors duration-200 ease-out-quint hover:text-accent active:scale-[0.98]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 ease-spring-soft group-hover:-translate-x-1"
            />
            Back to Work Highlights
          </button>
        </div>
      </section>
    </div>
  );
}
