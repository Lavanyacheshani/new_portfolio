"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Search, ExternalLink, Github, Code2, Layers } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Multi Agent System for U.S. Stock Selection",
    description: "AI-driven multi agent system analyzing financial, technical, and sentiment data to recommend top U.S. stocks using Python, LangChain, and CrewAI.",
    category: "AI Projects",
    image: "/placeholder.svg",
    demoLink: "#",
    githubLink: "https://github.com/lavanyacheshani/Stock-Agent",
    tags: ["Python", "LangChain", "CrewAI", "Streamlit"]
  },
  {
    title: "Predictive Service Request Agent",
    description: "Predictive ML model using Azure ML Studio to classify service request outcomes, integrated with a web agent for instant predictions.",
    category: "AI Projects",
    image: "/placeholder.svg",
    demoLink: "#",
    githubLink: "#",
    tags: ["Azure ML", "Python", "REST API"]
  },
  {
    title: "Mental Health AI Chatbot",
    description: "Multi-model chatbot combining rule-based, retrieval, and deep learning architectures (LSTM/CNN/GRU) trained on mental-health datasets.",
    category: "AI Projects",
    image: "/placeholder.svg",
    demoLink: "#",
    githubLink: "https://github.com/lavanyacheshani/MentalHealthAIChatbot",
    tags: ["TensorFlow", "Keras", "NLP", "Python"]
  },
  {
    title: "Virtual FAQ Assistant",
    description: "RAG enabled FAQ assistant using Watson Assistant to answer questions from PDFs and policies.",
    category: "AI Projects",
    image: "/placeholder.svg",
    demoLink: "#",
    githubLink: "#",
    tags: ["IBM Watson", "RAG", "Cloud"]
  },
  {
    title: "Price Prediction Models",
    description: "Regression based price prediction models for cars and properties using exploratory data analysis and ML pipelines.",
    category: "AI Projects",
    image: "/placeholder.svg",
    demoLink: "#",
    githubLink: "https://github.com/lavanyacheshani/Prediction-Model",
    tags: ["Scikit-learn", "Pandas", "Regression"]
  },
  {
    title: "AI-Powered Sexual Health Companion",
    description: "Full stack AI driven web platform providing private sexual health support, featuring AI based symptom analysis and secure telehealth consultations.",
    category: "Full-Stack",
    image: "/placeholder.svg",
    demoLink: "#",
    githubLink: "https://github.com/lavanyacheshani/safetal",
    tags: ["React", "Node.js", "TensorFlow", "Blockchain"]
  },
  {
    title: "HirelyAI – AI Job Hiring Platform",
    description: "Full stack platform where AI evaluates candidate answers and classifies responses, supporting recruiter dashboards.",
    category: "Full-Stack",
    image: "/placeholder.svg",
    demoLink: "#",
    githubLink: "https://github.com/lavanyacheshani/Job-hire-project",
    tags: ["React", "TypeScript", "OpenAI API"]
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
    <section className="py-24 bg-black relative" id="projects">
      {/* Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 inline-block mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400">Exploring the frontiers of AI and Software Engineering</p>
        </motion.div>

        {/* Controls */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-black rounded-lg">
              <input
                type="text"
                placeholder="Search projects..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {["All", "AI Projects", "Full-Stack"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${category === cat
                    ? "bg-blue-600 border-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                    : "bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
              >
                {/* Image Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1">
                      {project.category === "AI Projects" ? <Code2 className="w-3 h-3" /> : <Layers className="w-3 h-3" />}
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 relative z-20">
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 min-h-[60px]">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags?.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-white/5 text-gray-300 rounded hover:bg-white/10 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <a
                      href={project.demoLink}
                      className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
