'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Environment,
  Float,
  MeshDistortMaterial,
  Icosahedron,
  Torus,
} from '@react-three/drei'
import type { Group, Mesh } from 'three'

function Knot() {
  const ref = useRef<Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = t * 0.15
    ref.current.rotation.y = t * 0.2
  })
  return (
    <Icosahedron ref={ref} args={[1.6, 6]}>
      <MeshDistortMaterial
        color="#e8c170"
        metalness={0.9}
        roughness={0.15}
        distort={0.32}
        speed={1.6}
        emissive="#2a1f06"
        emissiveIntensity={0.5}
      />
    </Icosahedron>
  )
}

function Rings() {
  const ref = useRef<Group>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = t * 0.1
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.4
  })
  return (
    <group ref={ref}>
      <Torus args={[2.7, 0.012, 16, 120]}>
        <meshStandardMaterial color="#e8c170" metalness={0.8} roughness={0.3} />
      </Torus>
      <Torus args={[3.2, 0.008, 16, 120]} rotation={[0.6, 0.3, 0]}>
        <meshStandardMaterial color="#cdd6e0" metalness={0.6} roughness={0.4} />
      </Torus>
    </group>
  )
}

function Rig() {
  useFrame((state) => {
    const x = state.pointer.x * 0.6
    const y = state.pointer.y * 0.4
    state.camera.position.x += (x - state.camera.position.x) * 0.04
    state.camera.position.y += (y - state.camera.position.y) * 0.04
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.45} />
        <spotLight position={[8, 8, 8]} angle={0.3} intensity={2.2} color="#fff3d6" />
        <pointLight position={[-6, -3, 2]} intensity={1.4} color="#e8c170" />
        <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1.1}>
          <Knot />
        </Float>
        <Rings />
        <Rig />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  )
}
