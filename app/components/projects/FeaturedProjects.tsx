"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Zap, ShieldCheck, Activity, Target } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "HirelyAI",
    subtitle: "COGNITIVE RECRUITMENT ENGINE",
    description: "An industry-grade AI platform designed to revolutionize the hiring process through automated cognitive response analysis and candidate classification.",
    image: "/projects/hirelyai.jpg",
    techStack: ["React", "TypeScript", "Node.js", "OpenAI"],
    demoLink: "https://hirelyai-lavanya.netlify.app/",
    githubLink: "https://github.com/Lavanyacheshani/Job-hire-project",
    stats: [
      { label: "ACURACY", value: "98.5%", icon: Target },
      { label: "LATENCY", value: "<200ms", icon: Activity },
      { label: "UPTIME", value: "99.9%", icon: ShieldCheck }
    ]
  },
  {
    id: 2,
    title: "AI Mock Interview App",
    subtitle: "INTELLIGENT PREPARATION MATRIX",
    description: "Simulating high-stakes interview environments with real-time feedback loops and dynamic behavioral mapping to optimize candidate performance.",
    image: "/projects/mock.jpg",
    techStack: ["React", "Node.js", "Express", "OpenAI"],
    githubLink: "https://github.com/Lavanyacheshani/AI-Mock-Interview-App",
    stats: [
      { label: "DYNAMICS", value: "REAL-TIME", icon: Zap },
      { label: "SECURITY", value: "AES-256", icon: ShieldCheck },
      { label: "ANALYSIS", value: "NEURAL", icon: Activity }
    ]
  }
]

export default function FeaturedProjects() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#3b82f608_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-32 text-left"
        >
          <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase mb-4 block">Case Studies</span>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-none">
            CORE <br /> <span className="text-gray-900 border-text">MILESTONES</span>
          </h2>
        </motion.div>

        <div className="space-y-64">
          {featuredProjects.map((project, idx) => (
            <FeaturedProjectRow key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .border-text {
          -webkit-text-stroke: 1px #262626;
          text-shadow: none;
        }
      `}</style>
    </section>
  )
}

function FeaturedProjectRow({ project, index }: { project: any, index: number }) {
  const isEven = index % 2 === 0

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20`}>
      {/* Image Block */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-3/5"
      >
        <div className="relative aspect-[16/10] group rounded-[3rem] overflow-hidden border border-white/5">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* Overlay Tech Badges */}
          <div className="absolute bottom-10 left-10 flex gap-4">
            {project.techStack.map((tech: string) => (
              <span key={tech} className="px-4 py-2 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-white">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Content Block */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-2/5 space-y-12"
      >
        <div>
          <span className="text-[10px] font-black tracking-[0.5em] text-blue-400 uppercase mb-4 block">{project.subtitle}</span>
          <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">{project.title}</h3>
          <p className="text-gray-400 text-lg leading-relaxed font-medium">
            {project.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-8 py-10 border-y border-white/5">
          {project.stats.map((stat: any) => (
            <div key={stat.label}>
              <div className="flex items-center gap-2 mb-2">
                <stat.icon size={14} className="text-gray-700" />
                <span className="text-[9px] font-black text-gray-700 uppercase tracking-widest">{stat.label}</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">{stat.value}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-8">
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ExternalLink size={18} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-white transition-colors">Launch Experience</span>
            </a>
          )}
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <Github size={18} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-white transition-colors">Access Terminal</span>
          </a>
        </div>
      </motion.div>
    </div>
  )
}
