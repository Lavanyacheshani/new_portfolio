"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

type Tab = "Experience" | "Education"

const experienceData = [
  {
    period: "2020 - Present",
    title: "Freelancer",
    company: "Fiverr",
    description: "Working as a freelance professional in:",
    bullets: ["Full Stack Developer", "Logo Designer"],
  },
  {
    period: "2020 - 2021",
    title: "Trainee Banker",
    company: "Commercial Bank Badulla",
  },
]

const educationData = [
  {
    period: "June 2022 - Present",
    title: "BSc (Hons) in Software Engineering",
    institution: "SLTC Research University",
  },
  {
    period: "2010 - 2019",
    title: "General Certificate of Education (Advanced Level)",
    institution: "Badulla Central College",
    description: "Physical Science (Combined Maths, Chemistry & Physics)",
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
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Tabs List with Spacing */}
        <div className="flex justify-center mb-16">
          <div className="border-b border-gray-700 w-full flex justify-center gap-x-16">
            {(["Experience", "Education"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-12 py-4 text-lg font-medium relative transition-colors duration-300",
                  activeTab === tab
                    ? "text-blue-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500"
                    : "text-gray-400 hover:text-blue-400",
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 ml-8 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
          
          {/* Adjust vertical spacing of timeline items */}
          <div className="space-y-16">
            {getActiveData().map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 ml-7 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-blue-500/20" />
                <div className="text-gray-400 mb-1 text-sm font-medium">{item.period}</div>
                <h3 className="text-2xl font-bold text-blue-500 mb-2">{item.title}</h3>
                <div className="text-lg font-semibold text-gray-300 mb-2">
                  {item.company || item.institution || item.organization}
                </div>
                {item.description && <p className="text-gray-300 mb-4">{item.description}</p>}
                {item.bullets && (
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="text-gray-300">{bullet}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}