"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <p className="text-white text-center p-4">{project.description}</p>
          </motion.div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.category}</p>
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
            View Details
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors duration-300">
            GitHub
          </button>
        </div>
      </div>
    </motion.div>
  )
}

