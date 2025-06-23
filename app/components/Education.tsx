"use client"

import { motion } from "framer-motion"

const educationData = [
  {
    institution: "SLTC Research University",
    degree: "BSc (Hons) in Software Engineering",
    period: "June 2022 - Present",
  },
  {
    institution: "Badulla Central College",
    degree: "Physical Science (Combined Maths, Chemistry & Physics)",
    period: "2010 - 2019",
  },
]

export default function Education() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-electric-blue"
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-electric-blue">{edu.institution}</h3>
              <p className="text-lg mb-2">{edu.degree}</p>
              <p className="text-gray-400">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

