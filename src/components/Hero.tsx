import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';

const RESUME_URL = 'https://drive.google.com/file/d/1jdy10Nl09linBK_Nd5Gd0uDyBxCFcGDB/view?usp=sharing';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-[72px]">
      <div className="section-shell w-full py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div className="order-2 lg:order-1">
            <p className="eyebrow reveal mb-7">Marketing Creative</p>

            <h1 className="display reveal reveal-delay-1 text-[clamp(2rem,4.6vw,3.6rem)] text-ink">
              Helping brands grow through creative strategy, content and
              thoughtful marketing.
            </h1>

            <div className="reveal reveal-delay-2 mt-8 max-w-xl space-y-4 text-[17px] leading-relaxed text-ink/70">
              <p>Hi, I am <strong className="font-semibold text-ink">Garima Sdhana</strong>.</p>
              <p>
                I create marketing experiences by combining strategy, design,
                storytelling and content that people actually engage with.
              </p>
            </div>

            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#campaigns"
                className="group inline-flex items-center gap-2 rounded-xl2 bg-ink px-7 py-3.5 text-sm font-medium text-white shadow-soft transition-all duration-200 ease-spring-soft hover:bg-accent hover:shadow-lift hover:-translate-y-[3px] hover:scale-[1.02] active:scale-[0.97] active:translate-y-0"
              >
                Work Highlights
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 ease-spring-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-active:translate-x-0 group-active:translate-y-0"
                />
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl2 border border-line px-7 py-3.5 text-sm font-medium text-ink transition-all duration-200 ease-spring-soft hover:border-ink/20 hover:bg-surface hover:shadow-soft hover:-translate-y-0.5 active:scale-[0.97] active:translate-y-0"
              >
                <FileText size={16} strokeWidth={1.75} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right — portrait placeholder */}
          <div className="order-1 lg:order-2">
            <div className="reveal reveal-delay-2 mx-auto max-w-[320px] lg:max-w-[360px]">
              <div className="relative overflow-hidden rounded-xl2 border border-line/60 bg-neutral-50 p-3">
                {/* Portrait frame */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl2 bg-neutral-100">
                  <img
                    src="https://annual-magenta-d0k0xk7c.edgeone.dev/ChatGPT%20Image%20Jan%2026,%202026%20at%2010_11_56%20PM.png"
                    alt="Garima Sdhana"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="reveal reveal-delay-4 absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-ink/40 transition-colors duration-200 ease-out-quint hover:text-accent"
          aria-label="Scroll to about"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.22em]">Scroll</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-all duration-200 ease-spring-soft group-hover:border-accent group-hover:scale-110">
            <ArrowDown size={14} className="animate-bounce" />
          </span>
        </a>
      </div>
    </section>
  );
}
