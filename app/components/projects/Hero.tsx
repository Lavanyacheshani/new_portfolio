"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars, Float } from "@react-three/drei"
import { Particles } from "./Particles"

function GeometricShapes() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      {/* Central Abstract Form */}
      <mesh position={[0, 0, 0]} scale={1.5}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#4299e1" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Floating Cubes */}
      <mesh position={[3, 2, -2]} rotation={[1, 1, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#805ad5" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-3, -1, -1]} rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="#ec4899" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[2, -3, 1]} rotation={[0, 0.5, 0.5]}>
        <dodecahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.9} roughness={0.1} />
      </mesh>
    </Float>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-gray-900 z-0 pointer-events-none"></div>

      {mounted && (
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#4299e1" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />

            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
            <GeometricShapes />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
      )}

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-blue-300 backdrop-blur-md">
            Portfolio Showcase
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">
            Building the Future
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            With Intelligent Code
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          A curated collection of my work in <span className="text-white font-medium">AI Engineering</span>,
          <span className="text-white font-medium"> Full Stack Development</span>, and <span className="text-white font-medium">System Architecture</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </motion.div>

      </div>
    </section>
  )
}
