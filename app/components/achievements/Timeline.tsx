"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const timelineEvents = [
  {
    year: 2024,
    title: "ICE 2024 Best Pitch Award Winner",
    description: "Recognized for outstanding innovation and presentation skills",
  },
  {
    year: 2023,
    title: "IEEE INSL Provincial Competition First Runner-up",
    description: "Led team to achieve significant recognition in technical competition",
  },
  {
    year: 2023,
    title: "Multiple Certifications Achievement",
    description: "Completed certifications from Meta, IBM, and Google Cloud",
  },
  {
    year: 2022,
    title: "Started Software Engineering Journey",
    description: "Began BSc (Hons) in Software Engineering at SLTC Research University",
  },
]

export default function Timeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={containerRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Achievement Timeline
          </h2>
          <p className="text-gray-400 text-lg">A journey of continuous growth and success</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"
            style={{ scaleY: scrollYProgress }}
          />

          {timelineEvents.map((event, index) => (
            <TimelineEvent key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({ event, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"} relative`}>
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-lg border border-gray-700"
        >
          <div className="text-3xl font-bold text-blue-500 mb-2">{event.year}</div>
          <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
          <p className="text-gray-400">{event.description}</p>
        </motion.div>
      </div>
      <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10">
        <div className="absolute w-8 h-8 bg-blue-500/30 rounded-full -inset-2 animate-pulse" />
      </div>
    </motion.div>
  )
}

