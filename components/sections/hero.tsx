'use client'

import { motion } from 'framer-motion'
import { HeroScene } from '@/components/hero-scene'
import { profile, stats } from '@/lib/portfolio-data'

const word = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  const headline = ['Become', 'the', 'only', 'one', 'of', 'my', 'kind.']

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* 3D backdrop */}
      <div className="absolute inset-0 -z-0 opacity-90">
        <HeroScene />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {profile.role}
        </motion.span>

        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
          {headline.map((w, i) => (
            <motion.span
              key={w + i}
              custom={i}
              variants={word}
              initial="hidden"
              animate="show"
              className={`mr-[0.25em] inline-block ${
                w === 'only' || w === 'kind.' ? 'font-serif italic text-gold' : ''
              }`}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {profile.name} — student developer &amp; designer from {profile.location}.
          Turning ideas into award-winning digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card px-5 py-4">
              <div className="font-serif text-2xl text-gold md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  )
}
