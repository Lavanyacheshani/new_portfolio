"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, Code2, BrainCircuit, Layers, Sparkles, Terminal } from "lucide-react"
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
    description: "An AI-powered interview preparation tool that simulates real interview scenarios and provides feedback.",
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
    <section className="py-24 bg-black relative overflow-hidden" id="gallery">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/[0.02] rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <Terminal className="w-3 h-3 text-blue-500" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">Project Index // V1.0</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
            EXPLORE THE <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">ARCHIVE</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            A comprehensive catalog of my research and development in
            <span className="text-white"> intelligent systems </span> and modern software architecture.
          </p>
        </motion.div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-6 mb-16 px-6 py-6 bg-[#090909] border border-white/10 rounded-[2rem] backdrop-blur-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 px-4 py-2 mr-4 border-r border-white/10">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Filter By</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`relative px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-500 shadow-2xl ${filter === category
                  ? "bg-white text-black"
                  : "bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
              >
                {category}
                {filter === category && (
                  <motion.div
                    layoutId="active-filter"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="relative group min-w-[300px]">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-hover:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="SEARCH THE REGISTER..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/5 rounded-full pl-14 pr-8 py-3.5 text-[10px] font-black tracking-[0.2em] focus:bg-white/10 focus:border-white/20 focus:outline-none transition-all placeholder-gray-700"
            />
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-40 bg-[#090909] rounded-[3rem] border border-dashed border-white/5">
            <Sparkles className="w-12 h-12 text-gray-800 mx-auto mb-6 opacity-20" />
            <p className="text-gray-700 text-sm font-black tracking-widest uppercase italic">The registry returned null results for this query.</p>
          </div>
        )}
      </div>
    </section>
  )
}
