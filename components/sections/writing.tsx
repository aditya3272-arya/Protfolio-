'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, FileText } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { writing } from '@/lib/portfolio-data'

export function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
          05 — Writer&apos;s Corner
        </span>
      </Reveal>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Words are <span className="gold-text font-serif italic">another canvas.</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {writing.intro}
            </p>
          </div>
        </Reveal>

        <div className="space-y-5">
          {writing.pieces.map((piece, i) => (
            <Reveal key={piece.title} delay={i * 0.05}>
              <motion.a
                href={piece.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="group block overflow-hidden rounded-3xl border border-border bg-card p-7 transition-colors hover:border-gold/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
                    <FileText className="h-3.5 w-3.5" />
                    {piece.tag}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </div>
                <h3 className="mt-5 text-pretty text-xl font-semibold leading-snug text-foreground">
                  {piece.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {piece.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                  Read the full essay
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
