"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Search } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "Developed a conversational AI using OpenAI's GPT-3 for customer support.",
    category: "AI Projects",
    image: "/project1.jpg",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "E-commerce Platform",
    description: "Built a full-stack e-commerce solution using the MERN stack.",
    category: "Web Apps",
    image: "/project2.jpg",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Mobile App UI Redesign",
    description: "Revamped the user interface for a popular fitness tracking app.",
    category: "UI/UX",
    image: "/project3.jpg",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Blockchain Voting System",
    description: "Developed a secure, transparent voting system using blockchain technology.",
    category: "Full-Stack",
    image: "/project4.jpg",
    demoLink: "#",
    githubLink: "#",
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("")
  const [category, setCategory] = useState("All")

  const filteredProjects = projects.filter(
    (project) =>
      (category === "All" || project.category === category) &&
      project.title.toLowerCase().includes(filter.toLowerCase()),
  )

  return (
    <section className="py-20 bg-gray-800" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="relative mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search projects..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex space-x-4">
            {["All", "AI Projects", "Web Apps", "UI/UX", "Full-Stack"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg ${
                  category === cat ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                } transition-colors duration-300`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

