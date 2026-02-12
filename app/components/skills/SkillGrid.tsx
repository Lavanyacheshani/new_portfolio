"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  Cpu,
  Globe,
  Database,
  Server,
  Code2,
  Terminal,
  Layers,
  PenTool,
  Sparkles,
  Zap,
  Activity,
  Box
} from "lucide-react"

const skillCategories = [
  {
    name: "Languages",
    icon: <Code2 className="w-6 h-6 text-yellow-400" />,
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "C++", icon: "cpp" },
      { name: "Go", icon: "go" },
      { name: "Rust", icon: "rust" },
      { name: "Dart", icon: "dart" },
    ],
  },
  {
    name: "Frontend",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Vue", icon: "vue" },
      { name: "Angular", icon: "angular" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Sass", icon: "sass" },
      { name: "Flutter", icon: "flutter" },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="w-6 h-6 text-green-400" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "Django", icon: "django" },
      { name: "Flask", icon: "flask" },
      { name: "Spring Boot", icon: "spring" },
      { name: "GraphQL", icon: "graphql" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "NestJS", icon: "nestjs" },
    ],
  },
  {
    name: "Database",
    icon: <Database className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Redis", icon: "redis" },
      { name: "Firebase", icon: "firebase" },
      { name: "Supabase", icon: "supabase" },
      { name: "Neo4j", icon: "neo4j" },
    ],
  },
  {
    name: "DevOps & Cloud",
    icon: <Layers className="w-6 h-6 text-orange-400" />,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "AWS", icon: "aws" },
      { name: "Google Cloud", icon: "gcp" },
      { name: "Azure", icon: "azure" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Terraform", icon: "terraform" },
    ],
  },
  {
    name: "AI & Data Science",
    icon: <Cpu className="w-6 h-6 text-pink-400" />,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "Scikit-Learn", icon: "scikitlearn" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
      { name: "OpenCV", icon: "opencv" },
      { name: "Hugging Face", icon: "huggingface" },
    ],
  },
  {
    name: "Tools & Design",
    icon: <PenTool className="w-6 h-6 text-cyan-400" />,
    color: "from-cyan-500 to-teal-500",
    skills: [
      { name: "Git", icon: "git" },
      { name: "VS Code", icon: "vscode" },
      { name: "Figma", icon: "figma" },
      { name: "Postman", icon: "postman" },
      { name: "Jira", icon: "jira" },
      { name: "Notion", icon: "notion" },
    ],
  },
]

export default function SkillGrid() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Core Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white/40 inline-block mb-4">
            Technical <span className="text-white">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            A high-performance toolkit for building complex intelligent systems.
          </p>
        </motion.div>

        <div className="space-y-20">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ category, index }: { category: any, index: number }) {
  // Logic to calculate how many empty slots exist in the grid
  // On large screens (8 cols), we might want to fill gaps
  // However, responsive grids usually just stack.
  // We'll add 1 or 2 "Empty boxes" with icons to enhance the section as requested.

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-white/10 backdrop-blur-md`}>
          {category.icon}
        </div>
        <div>
          <h3 className="text-2xl font-black text-white tracking-tight">{category.name}</h3>
          <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-500 to-transparent mt-1"></div>
        </div>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 via-white/5 to-transparent ml-4"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {category.skills.map((skill: any, i: number) => (
          <SkillCard key={skill.name} skill={skill} category={category} index={i} />
        ))}
        {/* Fillers for "Empty Box" request */}
        <FillerCard color={category.color} />
      </div>
    </motion.div>
  )
}

function SkillCard({ skill, category, index }: { skill: any, category: any, index: number }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`group relative bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-2xl hover:shadow-black h-32`}
    >
      <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
        <Image
          src={`https://skillicons.dev/icons?i=${skill.icon}`}
          alt={skill.name}
          fill
          className="object-contain"
        />
      </div>
      <span className="text-xs font-bold text-gray-500 group-hover:text-white transition-colors text-center uppercase tracking-widest">
        {skill.name}
      </span>

      {/* Background Glow */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl -z-10`}></div>
    </motion.div>
  )
}

function FillerCard({ color }: { color: string }) {
  const icons = [Zap, Activity, Box, Sparkles]
  const RandomIcon = icons[Math.floor(Math.random() * icons.length)]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="hidden sm:flex group relative bg-white/[0.01] border border-dashed border-white/10 rounded-2xl p-6 flex-col items-center justify-center gap-4 transition-all duration-300 h-32 hover:border-white/20 hover:bg-white/[0.02]"
    >
      <div className="relative">
        <motion.div
          className={`absolute -inset-2 rounded-full border border-dashed border-white/5 opacity-20`}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <RandomIcon className={`w-6 h-6 text-gray-800 opacity-40 group-hover:opacity-60 transition-opacity`} />
      </div>
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-2xl -z-10`} />
    </motion.div>
  )
}
