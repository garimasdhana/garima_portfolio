import { useCountUp } from '@/hooks/useCountUp';

type Stat = {
  label: string;
  numeric: number | null;
  suffix: string;
  display: string;
};

const STATS: Stat[] = [
  { label: 'Instagram Accounts Managed', numeric: 3, suffix: '+', display: '' },
  { label: 'Creative Assets Designed', numeric: 200, suffix: '+', display: '' },
  { label: 'Videos Edited', numeric: 50, suffix: '+', display: '' },
  { label: 'High Performing Campaigns', numeric: null, suffix: '', display: 'Multiple' },
];

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const { ref, value } = useCountUp(stat.numeric);
  const shown = stat.numeric === null ? stat.display : `${value}${stat.suffix}`;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-surface px-6 py-10 text-center transition-all duration-300 ease-spring-soft hover:shadow-soft hover:-translate-y-0.5"
    >
      <p
        className={`display text-3xl text-ink sm:text-4xl ${
          stat.numeric === null ? '' : 'tabular-nums'
        }`}
      >
        {shown}
      </p>
      <p className="mt-3 text-xs leading-snug text-ink/55">{stat.label}</p>
      <span className="sr-only">{index}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-28 sm:py-40">
      <div className="section-shell">
        {/* Centered editorial layout — max 700px */}
        <div className="mx-auto max-w-[700px] text-center">
          <p className="eyebrow reveal mb-8">About</p>

          <h2 className="display reveal reveal-delay-1 text-[clamp(2rem,4.8vw,3.5rem)] text-ink">
            Designing with creativity.
            <br />
            <span className="display-italic text-accent">
              Thinking like a marketer.
            </span>
          </h2>

          <div className="reveal reveal-delay-2 mt-10 space-y-6 text-lg leading-[1.75] text-ink/70">
            <p>
              I am a marketing creative with experience across social media,
              content creation, graphic design and video editing.
            </p>
            <p>
              Working with travel brands, agency clients and freelance projects
              has taught me how ideas become campaigns and how creativity
              performs when backed by strategy.
            </p>
            <p className="text-ink/60">
              I am currently building my career towards brand strategy,
              creative campaigns and marketing that connects business goals
              with human behaviour.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal reveal-delay-3 mx-auto mt-20 grid max-w-[700px] grid-cols-2 gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-4">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
