"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Activity, Circle, Flag, GitCommit, Radio, Rocket } from "lucide-react"

const timelineEvents = [
  {
    year: "2024",
    title: "ICE 2024 BEST PITCH CHAMPION",
    description: "Evaluated as top innovator among 32 national competitors for scalable AI solutions.",
    icon: Flag,
    tags: ["INNOVATION", "WINNER"]
  },
  {
    year: "2023",
    title: "IEEE INSL PROVINCIAL RUNNER-UP",
    description: "Strategic technical leadership resulting in a major provincial competitive win.",
    icon: Rocket,
    tags: ["TECH", "LEADERSHIP"]
  },
  {
    year: "2023",
    title: "PROFESSIONAL CREDENTIAL CLUSTER",
    description: "Successfully validated expertise through Meta, IBM, and Google Cloud certifications.",
    icon: GitCommit,
    tags: ["SKILLS", "MASTERY"]
  },
  {
    year: "2022",
    title: "ENGINEERING ODYSSEY INITIATED",
    description: "Began advanced Software Engineering research and development at SLTC University.",
    icon: Radio,
    tags: ["START", "ENROLLMENT"]
  }
]

export default function PremiumTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section ref={containerRef} className="py-40 bg-black relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
            <Activity className="w-3 h-3 text-blue-500" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-400">Chronological Evolution // Logs</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase">
            THE <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">PATHWAY</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto uppercase tracking-wide text-xs italic">
            A non-linear sequence of growth, breakthroughs, and strategic milestones.
          </p>
        </motion.div>

        {/* Timeline Core */}
        <div className="relative max-w-5xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2">
            <motion.div
              className="absolute top-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"
              style={{ height: "100%", scaleY: pathLength, transformOrigin: "top" }}
            />
          </div>

          <div className="space-y-40">
            {timelineEvents.map((event, idx) => (
              <TimelineEntry key={idx} event={event} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineEntry({ event, index }: { event: any, index: number }) {
  const isEven = index % 2 === 0

  return (
    <div className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}
      >
        <div className="relative group">
          <span className="text-4xl md:text-6xl font-black text-white/5 absolute -top-10 left-0 md:left-auto md:right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            {event.year}
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-widest uppercase mb-4 group-hover:text-blue-400 transition-colors">
            {event.title}
          </h3>
          <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6">
            {event.description}
          </p>
          <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            {event.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[8px] font-black text-gray-700 uppercase tracking-widest">{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Timeline Marker */}
      <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="w-10 h-10 rounded-2xl bg-black border border-white/20 flex items-center justify-center hover:border-blue-500 transition-colors"
        >
          <event.icon size={16} className="text-blue-500" />
        </motion.div>
      </div>

      {/* Year Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className={`hidden md:block w-5/12 ${isEven ? 'pl-16' : 'pr-16 text-right'}`}
      >
        <span className="text-8xl font-black text-white/5 hover:text-white/10 transition-colors cursor-default">
          {event.year}
        </span>
      </motion.div>
    </div>
  )
}
