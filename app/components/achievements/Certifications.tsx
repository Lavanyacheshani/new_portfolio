"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, ShieldCheck, Cpu, Database, Palette, Award, Terminal, HardDrive } from "lucide-react"

const certifications = [
  {
    title: "Meta UX/UI Design",
    issuer: "Meta",
    date: "2024",
    category: "Design",
    icon: Palette,
    id: "CERT-001",
    skills: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "IBM Machine Learning with Python",
    issuer: "IBM",
    date: "2023",
    category: "AI",
    icon: Cpu,
    id: "CERT-002",
    skills: ["Python", "Machine Learning", "Data Analysis", "Neural Networks"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Google Cloud Generative AI",
    issuer: "Google Cloud",
    date: "2024",
    category: "AI",
    icon: Terminal,
    id: "CERT-003",
    skills: ["LLMs", "Prompt Engineering", "AI Applications", "Cloud Computing"],
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "IBM Django App Development",
    issuer: "IBM",
    date: "2023",
    category: "Tech",
    icon: HardDrive,
    id: "CERT-004",
    skills: ["Python", "Django", "Web Development", "Databases"],
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Python & Web Development",
    issuer: "University of Moratuwa",
    date: "2023",
    category: "Tech",
    icon: Database,
    id: "CERT-005",
    skills: ["Python", "HTML/CSS", "JavaScript", "Flask"],
    color: "from-orange-500 to-amber-600"
  },
]

const categories = ["All", "AI", "Tech", "Design"]

export default function PremiumCertifications() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = certifications.filter(cert =>
    (activeFilter === "All" || cert.category === activeFilter) &&
    (cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <section className="py-24 bg-black relative">
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
            <ShieldCheck className="w-3 h-3 text-blue-500" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-500">Credential Verification Hub</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase">
            VALIDATED <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">EXPERTISE</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto uppercase tracking-wide text-xs">
            A repository of professional certifications verified by global institutions.
          </p>
        </motion.div>

        {/* Registry Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 bg-[#0a0a0a] border border-white/5 p-4 rounded-3xl backdrop-blur-3xl">
          <div className="flex flex-wrap gap-2">
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

          <div className="relative group min-w-[300px]">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-700" />
            <input
              type="text"
              placeholder="SEARCH RECOGNITIONS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/5 rounded-full pl-14 pr-8 py-3.5 text-[10px] font-black tracking-[0.2em] focus:bg-white/10 focus:outline-none transition-all placeholder-gray-500"
            />
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, idx) => (
              <CertificationCard key={cert.id} cert={cert} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function CertificationCard({ cert, index }: { cert: any, index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative h-[380px] rounded-[2.5rem] bg-[#0d0d0d] border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${cert.color} opacity-[0.03] group-hover:opacity-[0.1] blur-3xl transition-opacity duration-700`} />

      <div className="relative h-full p-10 flex flex-col justify-between z-10">
        <div>
          <div className="flex justify-between items-start mb-8">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500">
              <cert.icon size={24} />
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{cert.id}</span>
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest mt-1">{cert.date}</span>
            </div>
          </div>

          <h3 className="text-xl font-black text-white tracking-widest uppercase mb-2 leading-tight group-hover:text-blue-400 transition-colors">
            {cert.title}
          </h3>
          <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] group-hover:text-gray-400 transition-colors">
            Issued By: {cert.issuer}
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill: string) => (
              <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[9px] font-bold text-gray-500 uppercase tracking-widest hover:border-white/10 hover:text-white transition-all">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-6 border-t border-white/5">
            <Award size={14} className="text-blue-500" />
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Official Transcript Available</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000 rotate-[15deg] pointer-events-none">
        <cert.icon size={200} />
      </div>
    </motion.div>
  )
}
