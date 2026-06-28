'use client'

import { Reveal } from '@/components/reveal'
import { about } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
          01 — About
        </span>
      </Reveal>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              {about.heading}
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <ul className="mt-8 flex flex-wrap gap-2">
              {about.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground/80"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="glass rounded-3xl p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Quick Profile
            </h3>
            <dl className="mt-5 space-y-4">
              {about.quickProfile.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-0.5 border-b border-border/60 pb-4 last:border-0 last:pb-0"
                >
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
