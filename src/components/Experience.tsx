const EXPERIENCE = [
  {
    company: 'TripIQ',
    role: 'Senior Content Creator',
    duration: 'Feb 2026 – Present',
    desc: 'Worked across marketing, design, and content strategy to strengthen the company\'s digital presence. Managed multiple Instagram accounts, created social media creatives, travel content, marketing assets, and short-form videos while planning content calendars, analyzing performance metrics, managing creator collaborations, and supporting business growth initiatives.',
    tags: ['Content Strategy', 'Social Media', 'Analytics', 'Graphic Design', 'Video Editing'],
  },
  {
    company: 'AS Marketing',
    role: 'Creative Design Intern',
    duration: 'Mar 2025 – Jan 2026',
    desc: 'Designed digital marketing assets, branding materials, presentations, and promotional content for clients across luxury lighting, architecture hardware, manufacturing, and wellness industries. Collaborated with the creative team on campaigns, visual storytelling, and content production.',
    tags: ['Agency', 'Creative Design', 'Motion', 'Brand Content'],
  },
  {
    company: 'Freelance',
    role: 'Marketing Designer',
    duration: 'Feb 2024 – Feb 2026',
    desc: 'Worked with creators and businesses creating presentations, branding assets and social media content.',
    tags: ['Freelance', 'Creative Direction', 'Presentation Design', 'Social Media'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line py-28 sm:py-36">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow reveal mb-6">Experience</p>
          <h2 className="display reveal reveal-delay-1 text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
            The places that
            <span className="display-italic text-accent"> shaped my experience.</span>
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-6">
          {EXPERIENCE.map((e, i) => (
            <article
              key={e.company}
              className={`reveal reveal-delay-${i + 1} group rounded-xl2 border border-line bg-canvas p-8 transition-all duration-300 ease-spring-soft hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift active:scale-[0.99] sm:p-10`}
            >
              <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
                {/* Left — company + role */}
                <div className="lg:col-span-4">
                  <span className="display text-sm text-ink/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="display mt-4 text-2xl text-ink transition-colors duration-200 ease-out-quint group-hover:text-accent sm:text-3xl">
                    {e.company}
                  </h3>
                  <p className="mt-1.5 text-[15px] font-medium text-accent/80">
                    {e.role}
                  </p>
                  <p className="mt-2 text-sm text-ink/45">{e.duration}</p>
                </div>

                {/* Right — description + tags */}
                <div className="lg:col-span-8">
                  <p className="text-[16px] leading-relaxed text-ink/70">
                    {e.desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-ink/60 transition-all duration-200 ease-spring-soft group-hover:border-accent/40 group-hover:text-ink/80 group-hover:-translate-y-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
