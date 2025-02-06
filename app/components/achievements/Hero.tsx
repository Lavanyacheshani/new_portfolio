"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Sphere, OrbitControls } from "@react-three/drei"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {mounted && (
        <Canvas className="absolute inset-0">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <motion.group
            animate={{ rotateY: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Sphere args={[1.5, 64, 64]}>
              <meshStandardMaterial color="cyan" wireframe />
            </Sphere>
          </motion.group>
          <OrbitControls enableZoom={false} />
        </Canvas>
      )}
      <div className="relative z-10 text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-2xl"
        >
          Pushing Boundaries, Achieving Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl mt-6 max-w-3xl mx-auto opacity-90 text-gray-300"
        >
          A journey of dedication, innovation, and learning. Here are the milestones that define my expertise and
          passion for AI, software engineering, and leadership.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          
        </motion.div>
      </div>

      {/* Floating Particles Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 z-0"
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, x: Math.random() * 100 - 50, opacity: 0 }}
            animate={{
              y: [0, Math.random() * 200 - 100, 0],
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>
    </section>
  )
}
