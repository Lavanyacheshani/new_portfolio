"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    description: "A complete overhaul of an e-commerce platform to improve user experience and increase conversions.",
    image: "/case-studies/ecommerce-redesign.jpg",
    before: "/case-studies/ecommerce-before.jpg",
    after: "/case-studies/ecommerce-after.jpg",
  },
  {
    id: 2,
    title: "Healthcare App UI/UX",
    description: "Designing an intuitive and accessible healthcare app for patients and doctors.",
    image: "/case-studies/healthcare-app.jpg",
    before: "/case-studies/healthcare-before.jpg",
    after: "/case-studies/healthcare-after.jpg",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-glow"
        >
          Bringing Ideas to Life with Design & Innovation
        </motion.h2>
        <div className="space-y-20">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudyCard({ caseStudy }) {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="md:flex">
        <div className="md:w-1/2 p-8">
          <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
          <p className="text-gray-300 mb-6">{caseStudy.description}</p>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Process:</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>User Research & Persona Creation</li>
              <li>Wireframes & Prototyping</li>
              <li>Final UI Designs & User Testing</li>
            </ul>
          </div>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
            onClick={() => setShowAfter(!showAfter)}
          >
            {showAfter ? "View Before" : "View After"}
          </button>
        </div>
        <div className="md:w-1/2 relative h-80 md:h-auto">
          <Image
            src={showAfter ? caseStudy.after : caseStudy.before}
            alt={caseStudy.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
            {showAfter ? "After" : "Before"}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

