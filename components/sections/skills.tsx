'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'
import { skills, techStack, platforms } from '@/lib/portfolio-data'

export function Skills() {
  return (
    <section
      id="skills"
      className="relative border-y border-border bg-card/30 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            02 — Skills &amp; Tools
          </span>
        </Reveal>
        <Reveal>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            A toolkit built across code, design, and leadership.
          </h2>
        </Reveal>

        {/* Skill marquee-ish grid */}
        <Reveal delay={0.1}>
          <ul className="mt-12 flex flex-wrap gap-2.5">
            {skills.map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 10) * 0.03, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className="cursor-default rounded-xl border border-border bg-background px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-gold/60 hover:text-foreground"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-border bg-background p-7">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Tech Stack
              </h3>
              <div className="mt-6 space-y-6">
                {Object.entries(techStack).map(([area, items]) => (
                  <div key={area}>
                    <p className="text-sm font-medium text-foreground">{area}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-foreground/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-background p-7">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Platforms &amp; Tools
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {platforms.map((p) => (
                  <span
                    key={p}
                    className="rounded-md border border-border px-2.5 py-1 text-xs text-foreground/80"
                  >
                    {p}
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
