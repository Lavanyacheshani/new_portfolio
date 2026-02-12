"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Innovators Inc.",
    text: "Lavanya's expertise in AI and software engineering helped us create a cutting-edge solution that revolutionized our business processes.",
  },
  {
    name: "Jane Smith",
    company: "Digital Frontiers",
    text: "Working with Lavanya was a game-changer for our startup. Her innovative approach to problem-solving and deep understanding of AI technologies set us apart from the competition.",
  },
  {
    name: "Alex Johnson",
    company: "Future Systems",
    text: "Lavanya's ability to bridge the gap between complex AI concepts and practical applications is truly remarkable. She's an asset to any team lucky enough to work with her.",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Testimonials & Achievements
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8"
          >
            <p className="text-lg mb-4">{testimonials[currentTestimonial].text}</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-400">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>
          </motion.div>
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-semibold mb-4"
            >
              Awards & Recognition
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="list-disc list-inside text-left max-w-md mx-auto"
            >
              <li className="mb-2">ICE 2024 Best Pitch Award</li>
              <li className="mb-2">IEEE INSL Outstanding Contribution</li>
              <li>Top 10 AI Innovators Under 30</li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}

