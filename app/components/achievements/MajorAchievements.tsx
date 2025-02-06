"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const achievements = [
  {
    title: "ICE 2024 – Best Pitch Award",
    category: "Competitions",
    event: "Innovation Creativity Entrepreneurship (ICE) 2024",
    project: "Campus යමු – AI-powered University Program Recommender",
    mentors: "Assoc. Prof. Suranga Nanayakkara, Moritz Messerschmidt, Melani Jayasuriya",
    highlight: "Won among 32 top young innovators in Sri Lanka.",
  },
  {
    title: "TECH-TRIATHLON 2024 Finalist",
    category: "Competitions",
    event: "TECH-TRIATHLON 2024",
    project: "Government-level AI solution for Sri Lanka's tourism industry",
    focus: "Innovation, user-centered design, and technical feasibility",
  },
  {
    title: "Chairperson of VERTEXTECH",
    category: "Leadership",
    organization: "IEEE WIE SLTC",
    highlight: "Organized a nationwide workshop on Altium electronics design in collaboration with Altium Education.",
  },
  {
    title: "IEEE Volunteering Leadership",
    category: "Leadership",
    role: "Regional Liaison & Coordinator – IEEE CS SYP Micro Mentoring (Region 10)",
    highlight: "Led international collaborations and mentoring programs.",
  },
]

const categories = ["All", "Tech", "Leadership", "AI", "Competitions"]

export default function MajorAchievements() {
  const [filter, setFilter] = useState("All")

  const filteredAchievements = achievements.filter((achievement) => filter === "All" || achievement.category === filter)

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-glow"
        >
          Major Achievements
        </motion.h2>
        <div className="flex justify-center mb-8 space-x-4 flex-wrap">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={filter === category ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => setFilter(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gold-500">{achievement.title}</CardTitle>
                  <CardDescription>{achievement.event || achievement.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{achievement.project || achievement.role}</p>
                  {achievement.mentors && <p className="mb-2">Mentors: {achievement.mentors}</p>}
                  {achievement.focus && <p className="mb-2">Focus: {achievement.focus}</p>}
                  <p className="font-semibold text-electric-blue">{achievement.highlight}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

