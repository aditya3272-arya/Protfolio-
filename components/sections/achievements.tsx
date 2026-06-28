'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { achievements, beyondPodium } from '@/lib/portfolio-data'

const medalColor: Record<string, string> = {
  gold: 'text-gold',
  silver: 'text-[oklch(0.8_0.02_250)]',
  bronze: 'text-[oklch(0.65_0.09_50)]',
}

export function Achievements() {
  return (
    <section
      id="awards"
      className="relative border-y border-border bg-card/30 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            06 — The Trophy Wall
          </span>
        </Reveal>
        <Reveal>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Eight podiums. Two national silvers. One relentless standard.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 0.05}>
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5"
              >
                <Trophy className={`h-6 w-6 shrink-0 ${medalColor[a.medal]}`} />
                <div>
                  <h3 className="font-medium text-foreground">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.detail}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
            {beyondPodium.map((b) => (
              <div key={b.label} className="bg-background px-6 py-7 text-center">
                <div className="font-serif text-3xl text-gold">{b.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {b.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
