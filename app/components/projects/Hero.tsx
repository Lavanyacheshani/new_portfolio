"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Particles } from "./Particles"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {mounted && (
        <Canvas className="absolute inset-0">
          <Particles />
        </Canvas>
      )}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-glow"
        >
          Innovating the Future, One Project at a Time
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          I am passionate about creating AI-driven applications, intuitive UI/UX designs, and impactful web solutions.
          Explore my work below!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 neon-glow">
            Explore My Projects
          </button>
          
        </motion.div>
      </div>
    </section>
  )
}

