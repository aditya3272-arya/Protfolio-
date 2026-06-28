'use client'

import dynamic from 'next/dynamic'
import { Reveal } from '@/components/reveal'

const PhotoCarousel3D = dynamic(
  () => import('@/components/photo-carousel-3d').then((m) => m.PhotoCarousel3D),
  { ssr: false },
)

export function GallerySection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
          07 — In Frame
        </span>
      </Reveal>
      <Reveal>
        <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Off the screen — the moments behind the work.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 text-sm text-muted-foreground">
          Drag to pause · the gallery rotates on its own.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 h-[60vh] w-full cursor-grab overflow-hidden rounded-3xl border border-border bg-card/40 active:cursor-grabbing">
          <PhotoCarousel3D />
        </div>
      </Reveal>
    </section>
  )
}
