'use client'

import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Image as DreiImage } from '@react-three/drei'
import type { Group } from 'three'
import { gallery } from '@/lib/portfolio-data'

function Carousel({ paused }: { paused: boolean }) {
  const ref = useRef<Group>(null)
  const radius = 3.2
  const count = gallery.length

  useFrame((state, delta) => {
    if (ref.current && !paused) {
      ref.current.rotation.y += delta * 0.25
    }
    if (ref.current) {
      const targetX = state.pointer.y * 0.2
      ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05
    }
  })

  return (
    <group ref={ref}>
      {gallery.map((photo, i) => {
        const angle = (i / count) * Math.PI * 2
        const x = Math.sin(angle) * radius
        const z = Math.cos(angle) * radius
        return (
          <group key={photo.src} position={[x, 0, z]} rotation={[0, angle, 0]}>
            {/* @ts-expect-error drei Image accepts these props */}
            <DreiImage
              url={photo.src}
              scale={[1.7, 2.4]}
              radius={0.08}
              transparent
            />
          </group>
        )
      })}
    </group>
  )
}

export function PhotoCarousel3D() {
  const [paused, setPaused] = useState(false)
  return (
    <div
      className="h-full w-full"
      onPointerDown={() => setPaused(true)}
      onPointerUp={() => setPaused(false)}
      onPointerLeave={() => setPaused(false)}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <spotLight position={[5, 6, 5]} angle={0.4} intensity={1.6} color="#fff3d6" />
          <Carousel paused={paused} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}
