"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "C", level: 80 },
      { name: "Django", level: 75 },
    ],
  },
  {
    category: "Web Technologies",
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "React Native", level: 75 },
      { name: "Flutter", level: 70 },
    ],
  },
  {
    category: "UI/UX Tools",
    items: [
      { name: "Figma", level: 85 },
      { name: "Axure", level: 80 },
    ],
  },
  {
    category: "Version Control & Others",
    items: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "IntelliJ", level: 85 },
      { name: "Photoshop", level: 75 },
    ],
  },
]

export default function TechnicalSkills() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow"
        >
          My Tech Stack & Tools
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <SkillCard key={skillIndex} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ name, level }: { name: string; level: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="bg-gray-600 p-4 rounded-lg cursor-pointer perspective"
      whileHover={{ scale: 1.05 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {!isFlipped ? (
          <div className="text-center">{name}</div>
        ) : (
          <div className="text-center transform rotate-180">
            <div className="h-2 bg-gray-300 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ width: `${level}%` }}
              ></div>
            </div>
            <div className="mt-2">{level}%</div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

