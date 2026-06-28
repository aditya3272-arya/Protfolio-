'use client'

import { Reveal } from '@/components/reveal'
import { globalImpact } from '@/lib/portfolio-data'

export function GlobalImpact() {
  const { story, generationGlobal } = globalImpact

  return (
    <section
      id="global"
      className="relative border-y border-border bg-card/30 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            04 — Beyond Tech · Global Impact
          </span>
        </Reveal>
        <Reveal>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            From a nervous first interview to the{' '}
            <span className="gold-text font-serif italic">Top 120 worldwide.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            The road to The Ethical Leadership Experience (TELE) 2026 with the
            Louis August Jonas Foundation wasn&apos;t a straight line. It&apos;s a
            story of rejection, recommendation, and redemption.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-16">
          <div className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold/60 via-border to-transparent md:left-1/2" />
          <ol className="space-y-12">
            {story.map((item, i) => (
              <li
                key={item.step}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? '' : 'md:[direction:rtl]'
                }`}
              >
                <Reveal>
                  <div className="ml-12 md:ml-0 md:[direction:ltr]">
                    <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 bg-background font-mono text-xs text-gold md:left-1/2 md:-translate-x-1/2">
                      {item.step}
                    </div>
                    <div className="glass rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
                <div className="hidden md:block" />
              </li>
            ))}
          </ol>
        </div>

        {/* TELE highlight + Generation Global */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-gold/30 bg-gold/5 p-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
                  TELE 2026 · LAJF Alumni
                </span>
                <p className="mt-4 text-pretty leading-relaxed text-foreground/90">
                  Selected as one of the{' '}
                  <span className="font-semibold text-gold">
                    Top 120 candidates worldwide
                  </span>{' '}
                  Selected among the top 120 candidates in the entire world for The Ethical Leadership Experience. Awarded a 75% scholarship totaling $300, as well as lifetime access to LAJF Alumni Network membership.
                </p>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="font-serif text-3xl text-gold">120</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Top Worldwide
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl text-gold">75%</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Scholarship
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-background p-8">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {generationGlobal.status}
              </span>
              <h3 className="mt-3 text-xl font-semibold">
                {generationGlobal.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {generationGlobal.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {generationGlobal.topics.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs text-foreground/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
