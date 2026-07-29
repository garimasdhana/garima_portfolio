const CATEGORIES: { title: string; tags: string[] }[] = [
  {
    title: 'Strategy',
    tags: [
      'Brand Strategy',
      'Content Strategy',
      'Campaign Planning',
      'Social Media Marketing',
      'Consumer Research',
      'Creative Strategy',
      'Marketing Analytics',
      'Content Planning',
      'Copywriting',
      'Storytelling',
      'Creator Partnerships',
      'Performance Analysis',
    ],
  },
  {
    title: 'Creative Execution',
    tags: [
      'Graphic Design',
      'Video Editing',
      'Website Design',
      'Presentation Design',
      'Creative Direction',
      'Visual Storytelling',
      'Reel Editing',
      'Thumbnail Design',
      'Social Media Design',
      'Content Production',
    ],
  },
  {
    title: 'Platforms & Tools',
    tags: [
      'Canva',
      'Figma',
      'Adobe Illustrator',
      'Bolt.new',
      'After Effects',
      'Premiere Pro',
      'CapCut',
      'Filmora',
      'ChatGPT',
      'Claude',
      'Perplexity',
      'Notion',
      'Meta Business Suite',
      'Google Workspace',
    ],
  },
  {
    title: 'Interests',
    tags: [
      'Consumer Psychology',
      'Content Strategy',
      'Marketing Design',
      'Creative Problem Solving',
      'Customer Experience (CX)',
      'Human-Centred Design',
      'AI Workflows',
      'Brand Experience',
      'Influencer Marketing',
      'Trend Forecasting',
      'Performance Marketing',
      'Customer Insights',
      'Product Thinking',
      'Creator Economy',
    ],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-24 border-t border-line py-28 sm:py-36">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow reveal mb-6">Capabilities</p>
          <h2 className="display reveal reveal-delay-1 text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
            The skills and
            <span className="display-italic text-accent"> tools behind my work.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg leading-relaxed text-ink/65">
            Strategy, creativity and the tools I use to bring ideas to life.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-12">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} border-t border-line pt-10`}
            >
              <h3 className="display text-xl text-ink sm:text-2xl">
                {cat.title}
              </h3>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {cat.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-canvas px-4 py-2 text-sm font-medium text-ink/65 transition-all duration-200 ease-spring-soft hover:border-accent/40 hover:bg-accent-soft hover:text-ink hover:-translate-y-0.5 active:scale-95"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
