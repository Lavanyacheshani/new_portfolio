"use client"

import React from "react"
import { motion } from "framer-motion"
import { Target, Rocket, Brain, Globe, Compass, Cpu, Fingerprint, Sparkles } from "lucide-react"

const goals = [
  {
    icon: Brain,
    title: "COGNITIVE RESEARCH",
    description: "Spearheading neural architecture research to bridge the gap between human intuition and machine logic.",
    color: "text-blue-500",
    bg: "bg-blue-500/5",
    border: "border-blue-500/20"
  },
  {
    icon: Globe,
    title: "GLOBAL ARCHITECTURE",
    description: "Deploying enterprise-grade systems that operate at planetary scale with zero-latency protocols.",
    color: "text-purple-500",
    bg: "bg-purple-500/5",
    border: "border-purple-500/20"
  },
  {
    icon: Fingerprint,
    title: "SECURE IDENTITY",
    description: "Developing decentralized authentication paradigms focused on sovereign biometric security.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/20"
  },
  {
    icon: Rocket,
    title: "EXPONENTIAL IMPACT",
    description: "Building autonomous ventures that solve complex societal bottlenecks through disruptive innovation.",
    color: "text-orange-500",
    bg: "bg-orange-500/5",
    border: "border-orange-500/20"
  },
]

export default function PremiumFutureGoals() {
  return (
    <section className="py-40 bg-black relative overflow-hidden">
      {/* Visual background layers */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/[0.03] rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md mb-8">
            <Compass className="w-3 h-3 text-white" />
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-gray-500">Projected Trajectory // 2025+</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-none uppercase">
            FUTURE <br /> <span className="text-white/10 border-text">HORIZONS</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed font-medium uppercase tracking-tight">
            Ambitious targets for continued excellence and
            <span className="text-white"> transformative </span> technological impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-[400px] rounded-[3rem] bg-[#080808] border border-white/5 p-10 flex flex-col justify-between overflow-hidden hover:border-white/20 hover:bg-[#0a0a0a] transition-all duration-500"
            >
              {/* Internal Shine */}
              <div className="absolute top-[-100%] left-[-100%] w-[200%] h-[200%] bg-white/[0.03] -skew-x-[45deg] group-hover:animate-shine transition-none pointer-events-none" />

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${goal.bg} ${goal.border} border flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl`}>
                  <goal.icon size={28} className={goal.color + " group-hover:text-black transition-colors"} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-widest uppercase mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                  {goal.title}
                </h3>
              </div>

              <div className="relative z-10 space-y-8">
                <p className="text-gray-400 text-sm leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                  {goal.description}
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-12 bg-white/5 group-hover:bg-blue-500 transition-all duration-700" />
                  <Sparkles size={14} className="text-gray-600 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>

              {/* Background Index Number */}
              <span className="absolute -bottom-10 -right-4 text-[12rem] font-black text-white/[0.01] pointer-events-none group-hover:text-white/[0.02] transition-colors">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .border-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          text-shadow: none;
        }
      `}</style>
    </section>
  )
}
