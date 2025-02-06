"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ProjectCard } from "./ProjectCard"

const projects = [
  {
    id: 1,
    title: "HirelyAI",
    category: "AI & Machine Learning",
    image: "/projects/hirelyai.jpg",
    description: "AI-driven job platform that categorizes candidate responses.",
  },
  {
    id: 2,
    title: "Real-Time Stock Market Auction",
    category: "Full-Stack Applications",
    image: "/projects/stock-auction.jpg",
    description: "Real-time auction system with bid timing and unique client ID tracking.",
  },
  {
    id: 3,
    title: "MedConnect",
    category: "AI & Machine Learning",
    image: "/projects/medconnect.jpg",
    description: "AI-powered medical report analyzer and medication locator.",
  },
  {
    id: 4,
    title: "Canteen Management System",
    category: "Web Development",
    image: "/projects/canteen.jpg",
    description: "Digitalized canteen system for efficient order management.",
  },
  {
    id: 5,
    title: "Food Queue Management",
    category: "Full-Stack Applications",
    image: "/projects/food-queue.jpg",
    description: "Queue management software with customer sorting and real-time updates.",
  },
]

const categories = ["All", "AI & Machine Learning", "Web Development", "UI/UX Design", "Full-Stack Applications"]

export default function ProjectGallery() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = projects.filter((project) => filter === "All" || project.category === filter)

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-glow"
        >
          Project Gallery
        </motion.h2>
        <div className="flex justify-center mb-8 space-x-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category ? "bg-blue-600 text-white neon-glow" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              } transition-colors duration-300 mb-2`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

