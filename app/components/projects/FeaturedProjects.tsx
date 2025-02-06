"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const featuredProjects = [
  {
    id: 1,
    title: "HirelyAI",
    description: "AI-driven job platform that categorizes candidate responses into Good, Moderate, and Bad.",
    image: "/projects/hirelyai.jpg",
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "OpenAI", "Python", "Clerk"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Real-Time Stock Market Auction System",
    description:
      "A real-time auction system with bid timing, publisher-subscriber model, and unique client ID tracking.",
    image: "/projects/stock-auction.jpg",
    techStack: ["Python", "WebSocket"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "MedConnect",
    description: "AI-powered medical report analyzer and medication locator for Sri Lanka's healthcare sector.",
    image: "/projects/medconnect.jpg",
    techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "OpenAI API"],
    demoLink: "#",
    githubLink: "#",
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
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            objectFit="cover"
          />
        </div>
        <div className="p-8 md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          <p className="text-gray-300 mb-6">{project.description}</p>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-700 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              href={project.demoLink}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Live Demo
            </a>
            <a
              href={project.githubLink}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

