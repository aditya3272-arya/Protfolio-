'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Loader2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { FORMSPREE_ID, profile, socials } from '@/lib/portfolio-data'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Connect() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="connect" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
              09 — Let&apos;s Connect
            </span>
          </Reveal>
          <Reveal>
            <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Collaboration, a competition, or just a{' '}
              <span className="gold-text font-serif italic">conversation.</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              I&apos;m always open to connecting with curious, driven people. Drop
              a message and I&apos;ll get back to you.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-gold/50"
                  >
                    <span className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">
                        {s.label}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {s.handle}
                      </span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="glass flex flex-col gap-4 rounded-3xl p-7"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold"
                placeholder="you@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold"
                placeholder="Tell me about it..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity disabled:opacity-70"
            >
              {status === 'submitting' && (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}
              {status === 'success' && <Check className="h-4 w-4" />}
              {status === 'success'
                ? 'Message sent — thank you!'
                : status === 'submitting'
                  ? 'Sending...'
                  : 'Send message'}
            </motion.button>

            {status === 'error' && (
              <p className="text-sm text-destructive">
                Something went wrong. Please try again or reach out via socials.
              </p>
            )}
            <p className="text-center text-xs text-muted-foreground">
              {profile.location}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
