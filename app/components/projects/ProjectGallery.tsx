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
    description: "AI-driven job platform that categorizes candidate responses into Good, Moderate, and Bad categories.",
    techStack: ["React", "TypeScript", "Node.js", "OpenAI", "Clerk"],
    demoLink: "https://hirelyai-lavanya.netlify.app/",
    githubLink: "https://github.com/Lavanyacheshani/Job-hire-project",
  },
  {
    id: 2,
    title: "AI Mock Interview",
    category: "AI & Machine Learning",
    image: "/projects/mock.jpg",
    description:
      "An AI-powered interview preparation tool that simulates real interview scenarios and provides feedback.",
    techStack: ["React", "Node.js", "OpenAI API", "Express"],
    githubLink: "https://github.com/Lavanyacheshani/AI-Mock-Interview-App",
  },
  {
    id: 3,
    title: "GameHub",
    category: "Web Development",
    image: "/projects/gamehub.jpg",
    description: "A modern gaming platform built with React and TypeScript, featuring game discovery and reviews.",
    techStack: ["React", "TypeScript", "Vite", "CSS"],
    githubLink: "https://github.com/Lavanyacheshani/GameHub",
  },
  {
    id: 4,
    title: "The Sterling Manor",
    category: "Web Development",
    image: "/projects/sterling-manor.jpg",
    description: "Elegant hotel website with booking functionality and virtual tours.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/Lavanyacheshani/The_Sterling_Manor",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    category: "Full-Stack Applications",
    image: "/projects/ecommerce.jpg",
    description: "Feature-rich online shopping platform with secure payment integration.",
    techStack: ["MERN Stack", "Redux", "Stripe", "JWT"],
    githubLink: "https://github.com/Lavanyacheshani/E-commerce-website",
  },
  {
    id: 6,
    title: "E-learning Platform",
    category: "Full-Stack Applications",
    image: "/projects/elearning.jpg",
    description: "Comprehensive learning management system with video courses and assessments.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/Lavanyacheshani/E-learning-platform",
  },
  {
    id: 7,
    title: "Real-Time Stock Market Auction",
    category: "Full-Stack Applications",
    image: "/projects/stock-auction.jpg",
    description: "Real-time auction system with bid timing and unique client ID tracking.",
    techStack: ["Python", "WebSocket", "React", "MongoDB"],
    githubLink: "https://github.com/Lavanyacheshani/Real-Time-Stock-Market-Auction",
  },
  {
    id: 8,
    title: "Bookstore App",
    category: "Web App Development",
    image: "/projects/bookstore.jpg",
    description: "Digital bookstore with inventory management and user reviews.",
    techStack: ["Flutter", "Firebase"],
    githubLink: "https://github.com/Lavanyacheshani/Bookstore-app",
  },
  {
    id: 9,
    title: "Canteen Management System",
    category: "Full-Stack Applications",
    image: "/projects/canteen.jpg",
    description: "Digitalized canteen system for efficient order management and inventory tracking.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/Lavanyacheshani/canteen-managment-system",
  },
]

const categories = ["All", "AI & Machine Learning", "Web Development", "Full-Stack Applications"]

export default function ProjectGallery() {
  const [filter, setFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter(
    (project) =>
      (filter === "All" || project.category === filter) &&
      project.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full ${
                  filter === category
                    ? "bg-blue-600 text-white neon-glow"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                } transition-colors duration-300`}
              >
                {category}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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

