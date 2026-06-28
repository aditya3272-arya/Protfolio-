'use client'

import { Reveal } from '@/components/reveal'
import { futureGoals } from '@/lib/portfolio-data'

export function FutureGoals() {
  return (
    <section className="relative border-y border-border bg-card/30 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            08 — The Road Ahead
          </span>
        </Reveal>
        <Reveal>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Where this is all heading.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {futureGoals.map((goal, i) => (
            <Reveal key={goal.title} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-background p-6">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                  {goal.term}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{goal.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {goal.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
