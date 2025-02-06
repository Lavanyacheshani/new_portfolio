"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const timelineEvents = [
  { year: 2022, event: "Started journey in tech volunteering" },
  { year: 2023, event: "Took on first leadership role in IEEE WIE" },
  { year: 2023, event: "Organized Codemania V4.0" },
  { year: 2024, event: "Became Regional Liaison for IEEE CS SYP" },
  { year: 2024, event: "Led Altium Workshop initiative" },
  { year: 2025, event: "Future goals in tech community leadership" },
]

export default function Timeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={containerRef} className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-glow"
        >
          My Volunteering Journey
        </motion.h2>
        <div className="relative">
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-electric-blue"
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
      className={`flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`w-1/2 ${
          index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
        } bg-gray-700 p-4 rounded-lg shadow-lg`}
      >
        <h3 className="text-2xl font-bold text-electric-blue mb-2">{event.year}</h3>
        <p>{event.event}</p>
      </div>
    </motion.div>
  )
}

