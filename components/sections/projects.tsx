'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/portfolio-data'

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <motion.article
      ref={ref}
      style={{ y }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 md:p-10"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gold/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-5xl font-semibold text-foreground/10">
          0{index + 1}
        </span>
        <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
          {project.accent}
        </span>
      </div>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
        {project.name}
        <span className="ml-2 text-base font-normal text-muted-foreground">
          — {project.subtitle}
        </span>
      </h3>
      <p className="mt-1 text-sm text-gold/90">{project.status}</p>

      <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {project.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 text-sm text-foreground/80"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-foreground/75"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
          03 — Selected Work
        </span>
      </Reveal>
      <Reveal>
        <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Products built to matter — not just to ship.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
