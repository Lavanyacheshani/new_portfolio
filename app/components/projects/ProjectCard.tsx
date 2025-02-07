"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string
    category: string
    description: string
    image: string
    techStack: string[]
    demoLink?: string
    githubLink: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        />
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
          >
            <p className="text-white text-center">{project.description}</p>
          </motion.div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-blue-400 mb-4">{project.category}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-gray-600 rounded-full text-sm text-gray-300">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

