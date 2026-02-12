"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Users,
  Calendar,
  Award,
  Zap,
  Globe,
  Target
} from "lucide-react"

const projects = [
  {
    title: "Altium Workshop",
    category: "University",
    role: "Chairperson (IEEE WIE)",
    status: "Completed",
    description: "Organized a nationwide workshop on Altium electronics design in collaboration with Altium Education.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Codemania V4.0",
    category: "University",
    role: "Deputy Head of Programming Team (IEEE CS)",
    status: "Completed",
    description: "Led the programming team in organizing a national-level coding competition.",
    icon: <Award className="w-6 h-6 text-blue-400" />,
    color: "from-blue-400 to-indigo-500"
  },
  {
    title: "InspiHer 2.0",
    category: "University",
    role: "Project Treasurer (IEEE WIE)",
    status: "Completed",
    description: "Managed finances for a women-in-tech inspiration series featuring industry leaders.",
    icon: <Users className="w-6 h-6 text-pink-400" />,
    color: "from-pink-400 to-rose-500"
  },
  {
    title: "DevNexa'23",
    category: "Collaboration",
    role: "Project Coordinator & Treasurer",
    status: "Completed",
    description: "Coordinated a multi-university tech conference across SLTC, OUSL & UWU.",
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    color: "from-purple-400 to-violet-500"
  },
  {
    title: "TechX",
    category: "National",
    role: "Financial Team Member (IEEE CS)",
    status: "Completed",
    description: "Managed significant financial operations for a major national technology exhibition.",
    icon: <Target className="w-6 h-6 text-red-400" />,
    color: "from-red-400 to-orange-500"
  },
  {
    title: "Build with AI",
    category: "National",
    role: "Team Member (GDG Sri Lanka)",
    status: "Completed",
    description: "Contributed to a nationwide initiative promoting AI development and modern applications.",
    icon: <Zap className="w-6 h-6 text-green-400" />,
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "IdeaniX 2.0",
    category: "University",
    role: "Team Member (IEEE CS)",
    status: "Completed",
    description: "Contributed to an innovation idea pitching competition for undergraduates.",
    icon: <Award className="w-6 h-6 text-cyan-400" />,
    color: "from-cyan-400 to-blue-500"
  }
]

export default function VolunteeringProjects() {
  const [activeTab, setActiveTab] = useState("All")

  const filteredProjects = activeTab === "All" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block mb-4">
            Impact Initiatives
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Discover the key projects where I've contributed to community growth and technological advancement.
          </p>
        </motion.div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "University", "Collaboration", "National"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-white/10 ${activeTab === category
                ? "bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)] border-white/20"
                : "bg-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      layout
      className="group relative h-full p-1"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

      <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-2xl shadow-black/50 overflow-hidden">

        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${project.color} opacity-10 rounded-bl-full pointer-events-none`}></div>

        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20`}>
            <div className="text-white">{project.icon}</div>
          </div>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-semibold text-green-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
            {project.status}
          </span>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-blue-400 mb-2">{project.category}</p>
        </div>

        <div className="space-y-3">
          <div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block mb-1">Role</span>
            <p className="text-sm font-medium text-gray-200">{project.role}</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block mb-1">Impact</span>
            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
