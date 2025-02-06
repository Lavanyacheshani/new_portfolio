"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa"

const taglines = [
  "Transforming ideas into AI-powered realities",
  "Bridging the gap between humans and AI",
  "Innovating at the intersection of AI and software engineering",
  "Crafting intelligent solutions for tomorrow's challenges",
]

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content Container */}
      <div className="z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Side: Profile Image Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/lavanya-photo.jpg"
                alt="Lavanya Cheshani"
                width={300}
                height={400}
                className="rounded-lg border-4 border-blue-500 shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Text and Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-2/3 text-center md:text-left space-y-8"
        >
          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Lavanya Cheshani
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-6">
            AI Enthusiast | Software Engineer | Innovator
          </p>

          {/* Animated Tagline */}
          <motion.div
            key={currentTagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-xl md:text-2xl text-gray-300 h-12 flex items-center justify-center md:justify-start"
          >
            {taglines[currentTagline]}
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-700/50"
            >
              View My Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-700/50"
            >
              Download Resume
            </motion.a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-8">
            <motion.a
              href="https://www.linkedin.com/in/lavanya-cheshani"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://github.com/Lavanyacheshani"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-gray-400 transition-colors duration-300"
            >
              <FaGithub className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/profile.php?id=100094059652800"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebook className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="mailto:lavanyacheshani5@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-red-500 transition-colors duration-300"
            >
              <FaEnvelope className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}