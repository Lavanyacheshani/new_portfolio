"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"  // ✅ Import Link
import { useState, useEffect } from "react"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa"

const taglines = [
  "Transforming ideas into AI-powered realities",
  "Bridging the gap between humans and AI",
  "Innovating at the intersection of software engineering",
]

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Function to download CV
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "Lavanya_Cheshani_CV.pdf"
    link.click()
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content Container */}
      <div className="z-10 container mx-auto px-2 sm:px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Left Side: Profile Image Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0"
        >
          <div className="bg-white/10 backdrop-blur-md p-3 sm:p-6 rounded-2xl shadow-2xl border border-white/20 relative w-full max-w-xs">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <Image
                src="/lavanya-photo.jpg"
                alt="Lavanya Cheshani"
                width={300}
                height={400}
                className="rounded-lg border-4 border-blue-500 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 w-full h-auto object-cover"
                sizes="(max-width: 768px) 90vw, 300px"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Text & Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left w-full md:w-2/3"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Lavanya Cheshani
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl mb-4 md:mb-8 text-gray-300">
            AI Enthusiast | Software Engineer | Innovator
          </p>

          {/* Tagline Animation */}
          <div className="h-16 md:h-20 mb-6 md:mb-8">
            <TypeAnimation
              sequence={taglines.flatMap((tagline) => [tagline, 2000])}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="text-lg xs:text-xl md:text-3xl text-blue-300"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Link href="/projects" passHref>
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                View My Work
              </Button>
            </Link>
            <Button
              onClick={handleDownloadCV}
              variant="outline"
              size="lg"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="w-6 h-10 border-2 border-white rounded-full p-1 flex justify-center"
        >
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </motion.div>
      </div>
    </section>
  )
}
