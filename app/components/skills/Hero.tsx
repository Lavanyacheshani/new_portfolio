"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls, Stars, Text3D, Center } from "@react-three/drei"
import { Suspense, useMemo } from "react"
import * as THREE from "three"

function Technology({ position, color, text }: { position: [number, number, number]; color: string; text: string }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.4} />
      </mesh>
      <mesh position={position} scale={0.4}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="white" metalness={1} roughness={0} />
      </mesh>
    </Float>
  )
}

function FloatingTechGrid() {
  const techs = [
    { text: "Python", color: "#306998", pos: [-3, 2, -2] },
    { text: "React", color: "#61DAFB", pos: [3, 2, -1] },
    { text: "AI", color: "#FF6B6B", pos: [0, 3, -3] },
    { text: "Azure", color: "#0078D4", pos: [-2, -2, -1] },
    { text: "Node", color: "#339933", pos: [2, -2, -2] },
  ] as const

  return (
    <group>
      {techs.map((tech, i) => (
        <Technology key={i} position={tech.pos as [number, number, number]} color={tech.color} text={tech.text} />
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#4299e1" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <FloatingTechGrid />
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
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-purple-300 backdrop-blur-md">
            Expertise & Toolkit
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Mastering the
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            Art of Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          My arsenal of <span className="text-white font-medium">technologies</span>, <span className="text-white font-medium">frameworks</span>, and <span className="text-white font-medium">methodologies</span> designed to build scalable, intelligent systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-purple-500 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  )
}
