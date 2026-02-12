"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

// Dynamically import the 3D Scene with no SSR


// Dynamically import the 3D Scene with no SSR
const ThreeDScene = dynamic(() => import("./ThreeDScene"), { ssr: false })

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Function to download CV
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "Lavanya_Cheshani_CV.pdf"
    link.click()
  }

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* 3D Background */}
      {mounted && (
        <div className="absolute inset-0 w-full h-full z-0">
          <ThreeDScene />
        </div>
      )}

      {/* Overlay Content */}
      <div className="z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Glitch Effect Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 relative"
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tight text-white relative z-10 mix-blend-overlay">
            LAVANYA CHESHANI
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 absolute top-0 left-0 z-20 animate-pulse-slow">
            LAVANYA CHESHANI
          </h1>
        </motion.div>

        {/* Dynamic Role Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <div className="text-xl md:text-3xl font-mono text-cyan-300 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-cyan-500/30 inline-block">
            <span className="mr-2 text-purple-400">&gt;</span>
            <TypeAnimation
              sequence={[
                "AI Engineer",
                2000,
                "Machine Learning Expert",
                2000,
                "Full Stack Developer",
                2000,
                "Automation Specialist",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold"
            />
            <span className="ml-2 animate-blink">_</span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Crafting intelligent systems that perceive, reason, and act.
          Specializing in <span className="text-cyan-400 font-semibold">Generative AI</span>,
          <span className="text-purple-400 font-semibold"> RAG Architectures</span>, and
          <span className="text-blue-400 font-semibold"> Scalable ML Pipelines</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link href="/projects" passHref>
            <Button
              className="relative overflow-hidden group bg-transparent border border-cyan-500 text-cyan-400 hover:text-black hover:bg-cyan-500 px-8 py-6 text-lg rounded-none transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 font-bold tracking-wider">VIEW WORK</span>
              <div className="absolute inset-0 h-full w-full bg-cyan-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></div>
            </Button>
          </Link>

          <Button
            onClick={handleDownloadCV}
            className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-6 text-lg rounded-none transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.8)]"
          >
            <span className="relative z-10 font-bold tracking-wider">DOWNLOAD CV</span>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 tracking-[0.3em]">SCROLL</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-500 to-transparent"></div>
      </motion.div>
    </section>
  )
}
