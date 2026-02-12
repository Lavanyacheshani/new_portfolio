"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Briefcase, GraduationCap, Calendar, Building } from "lucide-react"

type Tab = "Experience" | "Education"

interface TimelineItem {
  period: string
  title: string
  company?: string
  institution?: string
  description?: string
  bullets?: string[]
}

const experienceData: TimelineItem[] = [
  {
    period: "Nov 2025 – Feb 2026",
    title: "AI Developer Lead",
    company: "Creotizant",
    description: "Designed and deployed AI-powered chatbots and automated workflows using n8n, integrating LLMs with web apps, APIs, and databases to streamline business processes and customer interactions.",
  },
  {
    period: "Sep 2025 – Nov 2025",
    title: "AI Researcher Intern",
    company: "Astakon Labs",
    description: "Developed and fine-tuned LLM and agent-based workflows for real-world automation tasks. Built and optimized ML pipelines using Python and Azure AI services.",
  },
  {
    period: "Mar 2025 – Sep 2025",
    title: "Full Stack Developer Intern",
    company: "AIML",
    description: "Utilized modern technologies including React, Next.js, TypeScript, Material UI, Tailwind CSS, Redux, Axios, Node.js, Express.js and MySQL throughout the development process.",
  },
]

const educationData: TimelineItem[] = [
  {
    period: "June 2022 - Present",
    title: "BSc (Hons) in Software Engineering",
    institution: "SLTC Research University",
  },
  {
    period: "2020",
    title: "G.C.E. Advanced Level (Maths)",
    institution: "Badulla Central College",
  },
  {
    period: "2016",
    title: "G.C.E. Ordinary Level",
    institution: "Badulla Central College",
  },
]

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState<Tab>("Experience")

  const getActiveData = () => {
    switch (activeTab) {
      case "Experience":
        return experienceData
      case "Education":
        return educationData
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block mb-4">
            My Journey
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A timeline of my professional experience and educational background.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/10 flex">
            {(["Experience", "Education"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden",
                  activeTab === tab
                    ? "text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab === "Experience" ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 w-0.5 h-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent transform -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 w-0.5 h-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent md:hidden" />

          <div className="space-y-12">
            <AnimatePresence mode="wait">
              {getActiveData().map((item, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "relative flex flex-col md:flex-row gap-8 md:gap-0",
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  )}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black border-2 border-cyan-400 rounded-full transform -translate-x-1/2 mt-1.5 z-20 shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                    <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* Content Card */}
                  <div className="md:w-1/2 pl-12 md:pl-0">
                    <div className={cn(
                      "relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group",
                      index % 2 === 0 ? "md:ml-12" : "md:mr-12 text-left md:text-right"
                    )}>
                      {/* Connector Line (Desktop) */}
                      <div className={cn(
                        "hidden md:block absolute top-6 h-px w-12 bg-gradient-to-r from-cyan-500/50 to-transparent",
                        index % 2 === 0 ? "-left-12" : "-right-12 rotate-180"
                      )}></div>

                      <div className={cn("flex flex-col gap-2 mb-4", index % 2 === 0 ? "items-start" : "md:items-end items-start")}>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h3>
                        <div className={cn("flex items-center gap-2 text-purple-300 font-medium", index % 2 !== 0 && "md:flex-row-reverse")}>
                          <Building className="w-4 h-4" />
                          <span>{item.company || item.institution}</span>
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}