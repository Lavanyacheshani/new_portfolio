"use client"

import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, OrbitControls, Stars, Sphere, MeshDistortMaterial, Trail } from "@react-three/drei"
import { Suspense, useRef, useMemo } from "react"
import * as THREE from "three"

function ConnectedGlobe() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Sphere args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#10b981"
          emissive="#064e3b"
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.8}
          distort={0.2}
          speed={1.5}
        />
      </Sphere>
      <Sphere args={[1.55, 32, 32]}>
        <meshBasicMaterial color="#34d399" wireframe transparent opacity={0.1} />
      </Sphere>
      <Satellite radius={2.2} speed={1} color="#6ee7b7" offset={0} />
      <Satellite radius={2.5} speed={0.8} color="#a7f3d0" offset={2} />
      <Satellite radius={1.9} speed={1.2} color="#34d399" offset={4} />
    </group>
  )
}

function Satellite({ radius, speed, color, offset }: { radius: number, speed: number, color: string, offset: number }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime() * speed + offset
      ref.current.position.x = Math.sin(time) * radius
      ref.current.position.z = Math.cos(time) * radius
      ref.current.position.y = Math.sin(time * 0.5) * (radius * 0.3)
    }
  })

  return (
    <Trail width={2} length={8} color={new THREE.Color(color)} attenuation={(t) => t * t}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </Trail>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#10b981" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#059669" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ConnectedGlobe />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-gray-900 z-0 pointer-events-none"></div>

      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-emerald-300 backdrop-blur-md">
            Global Impact & Leadership
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Empowering Global
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500">
            Communities
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Driving sustainable change through <span className="text-white font-medium">technical mentorship</span>,
          strategic <span className="text-white font-medium">community growth</span>, and
          <span className="text-emerald-400 font-medium"> impact-focused </span> volunteerism.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-emerald-500 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  )
}
