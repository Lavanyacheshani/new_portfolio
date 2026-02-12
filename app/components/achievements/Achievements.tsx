"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trophy, Medal, Award, Star, Search, Filter, ArrowUpRight, Crown, Sparkles, Target, Zap } from "lucide-react"
import Image from "next/image"

const achievements = [
  {
    title: "ICE 2024 - Best Pitch Award",
    subtitle: "INNOVATION CHALLENGE FOR ENGINEERS",
    category: "Competitions",
    icon: Trophy,
    description: "Secured the prestigious Best Pitch award among 32 top innovators in Sri Lanka for an AI-powered educational system.",
    details: ["Mentored by Assoc. Prof. Suranga Nanayakkara", "Developed 'Campus යමු' AI Recommender", "Top-tier presentation recognition"],
    color: "from-yellow-400 to-amber-600",
    image: "/achievements/ice-2024.jpg",
    metric: "1st Place"
  },
  {
    title: "IEEE INSL Provincial Winner",
    subtitle: "INNOVATION NATION SRI LANKA",
    category: "Tech",
    icon: Medal,
    description: "Led a 4-member team to First Runner-up position in the provincial showcase for technical excellence.",
    details: ["Team Leadership & Coordination", "Rapid Prototype Development", "Scalable Solution Design"],
    color: "from-blue-400 to-indigo-600",
    image: "/achievements/ieee-insl.jpg",
    metric: "Runner-up"
  },
  {
    title: "Coderally 4.0 National Top 10",
    subtitle: "ALGORITHMIC EXCELLENCE",
    category: "Algorithms",
    icon: Target,
    description: "Ranked within the top 10 national teams in a high-intensity algorithmic competition with 100+ participants.",
    details: ["Complex Problem Solving", "Dynamic Programming Mastery", "Data Structure Optimization"],
    color: "from-purple-400 to-fuchsia-600",
    image: "/achievements/coderally.jpg",
    metric: "Top 10"
  },
  {
    title: "IEEE CS Star Volunteer",
    subtitle: "GLOBAL RECOGNITION",
    category: "Leadership",
    icon: Crown,
    description: "Featured in the IEEE CS COMPUTE Magazine global edition for outstanding contributions to the tech community.",
    details: ["International Collaboration", "Community Growth Leadership", "Mentorship Programs"],
    color: "from-emerald-400 to-teal-600",
    image: "/achievements/ieee.jpg",
    metric: "Global Star"
  }
]

const categories = ["All", "Competitions", "Tech", "Algorithms", "Leadership"]

export default function PremiumAchievements() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = achievements.filter(a =>
    (activeFilter === "All" || a.category === activeFilter) &&
    a.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="achievements">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#3b82f605_0%,transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,#8b5cf605_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 mb-8">
            <Crown className="w-3 h-3 text-yellow-500" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-yellow-500">Hall of Fame // Excellence</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-none uppercase">
            MAJOR <br /> <span className="text-white/10 border-text">MILESTONES</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Chronicles of technical prowess, strategic leadership, and
            <span className="text-white"> award-winning </span> innovation across global platforms.
          </p>
        </motion.div>

        {/* Dynamic Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-6 mb-20 px-8 py-6 bg-[#090909] border border-white/5 rounded-[2.5rem] backdrop-blur-2xl">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-500 ${activeFilter === cat ? "text-black bg-white" : "text-gray-500 hover:text-white bg-white/5"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative group min-w-[320px]">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-hover:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="SEARCH THE MILESTONES..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/5 rounded-full pl-14 pr-8 py-4 text-[10px] font-black tracking-[0.2em] focus:bg-white/10 focus:border-white/10 focus:outline-none transition-all placeholder-gray-500"
            />
          </div>
        </div>

        {/* Achievement Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <AchievementCard key={item.title} item={item} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
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

function AchievementCard({ item, index }: { item: any, index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-[600px] rounded-[3rem] bg-[#0c0c0c] border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-700 hover:shadow-2xl hover:shadow-black"
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000`} />

      {/* Visual Header */}
      <div className="relative h-2/5 overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-all duration-1000 scale-100 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/40 to-transparent" />

        {/* Metric Badge */}
        <div className="absolute top-8 right-8 z-20">
          <div className={`px-5 py-2 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest shadow-2xl overflow-hidden relative`}>
            <span className="relative z-10">{item.metric}</span>
            <motion.div
              className="absolute inset-0 bg-gray-200"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-12 flex flex-col justify-between h-3/5 z-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
              <item.icon className={`w-5 h-5 bg-clip-text text-transparent bg-gradient-to-br ${item.color}`} />
            </div>
            <span className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase">{item.subtitle}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-6 leading-none group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-gray-300 transition-colors mb-8">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.details.map((detail: string, i: number) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5">
                <Zap size={10} className="text-yellow-500" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-white/5 pt-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Authenticated Milestone</span>
          </div>

          <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      {/* Large Decorative Watermark */}
      <div className="absolute -bottom-20 -left-20 text-white/[0.01] pointer-events-none group-hover:text-white/[0.03] transition-all duration-1000 scale-150 rotate-[-15deg]">
        <item.icon size={300} />
      </div>
    </motion.div>
  )
}
