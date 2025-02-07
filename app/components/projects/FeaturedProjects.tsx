"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "HirelyAI",
    description: "AI-driven job platform that categorizes candidate responses into Good, Moderate, and Bad categories.",
    image: "/projects/hirelyai.jpg",
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "OpenAI", "Clerk"],
    demoLink: "https://hirelyai-lavanya.netlify.app/",
    githubLink: "https://github.com/Lavanyacheshani/Job-hire-project",
    features: [
      "AI-powered response analysis",
      "Real-time candidate evaluation",
      "Secure authentication with Clerk",
      "Comprehensive dashboard for recruiters",
    ],
  },
  {
    id: 2,
    title: "AI Mock Interview App",
    description: "An intelligent interview preparation platform that simulates real interview scenarios.",
    image: "/projects/mock.jpg",
    techStack: ["React", "Node.js", "OpenAI API", "Express", "MongoDB"],
    githubLink: "https://github.com/Lavanyacheshani/AI-Mock-Interview-App",
    features: [
      "Dynamic question generation",
      "Real-time feedback system",
      "Interview performance analytics",
      "Customizable interview scenarios",
    ],
  },
  {
    id: 3,
    title: "GameHub",
    description: "Modern gaming platform built with React and TypeScript, offering an immersive gaming experience.",
    image: "/projects/gamehub.jpg",
    techStack: ["React", "TypeScript", "Vite", "CSS"],
    githubLink: "https://github.com/Lavanyacheshani/GameHub",
    features: [
      "Responsive game interface",
      "Real-time game status updates",
      "Social gaming features",
      "Cross-platform compatibility",
    ],
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-glow"
        >
          Featured Projects
        </motion.h2>
        <div className="space-y-20">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 neon-glow"
    >
      <div className="md:flex">
        <div className="md:w-1/2">
          <div className="relative h-full min-h-[300px]">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="p-8 md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          <p className="text-gray-300 mb-6">{project.description}</p>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-300">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-700 rounded text-sm text-blue-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors duration-300"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

