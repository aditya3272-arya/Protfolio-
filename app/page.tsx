'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { SmoothScroll } from '@/components/smooth-scroll'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { GlobalImpact } from '@/components/sections/global-impact'
import { Writing } from '@/components/sections/writing'
import { Achievements } from '@/components/sections/achievements'
import { GallerySection } from '@/components/sections/gallery-section'
import { FutureGoals } from '@/components/sections/future-goals'
import { Connect } from '@/components/sections/connect'
import { Footer } from '@/components/sections/footer'

const SplashScreen = dynamic(
  () => import('@/components/splash-screen').then((m) => m.SplashScreen),
  { ssr: false },
)

export default function Page() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    if (showSplash) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => document.body.classList.remove('no-scroll')
  }, [showSplash])

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <SmoothScroll>
        <Navbar />
        <main className="relative grain">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <GlobalImpact />
          <Writing />
          <Achievements />
          <GallerySection />
          <FutureGoals />
          <Connect />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  )
}
