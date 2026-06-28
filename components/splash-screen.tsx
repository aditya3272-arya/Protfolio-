'use client'

import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, MeshDistortMaterial, Torus } from '@react-three/drei'
import { AnimatePresence, motion } from 'framer-motion'
import type { Group, Mesh, Points } from 'three'
import * as THREE from 'three'

function Monogram() {
  const ref = useRef<Group>(null)
  const core = useRef<Mesh>(null)
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = t * 0.3
      ref.current.rotation.x = Math.cos(t * 0.4) * 0.2
    }
    if (core.current) {
      core.current.rotation.y = -t * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={ref}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.5, 4]} />
          <MeshDistortMaterial
            color="#e8c170"
            metalness={1}
            roughness={0.15}
            distort={0.35}
            speed={2}
            emissive="#3a2c0a"
            emissiveIntensity={0.5}
          />
        </mesh>
        <Torus args={[2.4, 0.02, 16, 120]} rotation={[Math.PI / 2.2, 0, 0]}>
          <meshStandardMaterial color="#e8c170" metalness={0.9} roughness={0.25} />
        </Torus>
        <Torus args={[2.8, 0.012, 16, 120]} rotation={[Math.PI / 1.6, 0.5, 0]}>
          <meshStandardMaterial color="#cdd6e0" metalness={0.7} roughness={0.35} />
        </Torus>
      </group>
    </Float>
  )
}

function Particles() {
  const ref = useRef<Points>(null)
  const positions = useMemo(() => {
    const count = 600
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 24
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14
    }
    return arr
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.04
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#e8c170"
        transparent
        opacity={0.55}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [exiting, setExiting] = useState(false)

  // Drive the timeline: show, then exit, then notify parent.
  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 3400)
    const doneTimer = setTimeout(onComplete, 4500)
    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* 3D layer */}
          <div className="absolute inset-0">
            <Canvas camera={{ position: [0, 0, 8], fov: 42 }} dpr={[1, 2]}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <spotLight
                  position={[6, 8, 6]}
                  angle={0.4}
                  intensity={2.4}
                  color="#fff3d6"
                />
                <pointLight position={[-6, -4, 4]} intensity={1.2} color="#e8c170" />
                <Monogram />
                <Particles />
                <Environment preset="night" />
              </Suspense>
            </Canvas>
          </div>

          {/* Overlaid copy */}
          <div className="pointer-events-none relative z-10 flex flex-col items-center px-6 text-center">
            <motion.span
              className="mb-[14vh] font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Portfolio
            </motion.span>

            <motion.h1
              className="text-5xl font-semibold tracking-tight text-foreground md:text-7xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Aditya <span className="font-serif italic text-gold">Arya</span>
            </motion.h1>

            <motion.p
              className="mt-[14vh] max-w-xl text-balance font-serif text-xl italic leading-snug text-foreground/90 md:text-2xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
            >
              &ldquo;Not to be the best, rather the only one of my kind.&rdquo;
            </motion.p>
          </div>

          {/* Loader bar */}
          <motion.div
            className="absolute bottom-16 h-px w-48 overflow-hidden bg-foreground/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="h-full bg-gold"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
