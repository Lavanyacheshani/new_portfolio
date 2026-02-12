"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Cpu, Server, Terminal, Cloud } from "lucide-react"

const skills = [
  {
    category: "Programming Languages",
    icon: <Code className="w-6 h-6 text-blue-400" />,
    items: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "SQL", level: 85 },
      { name: "Java", level: 80 },
      { name: "Bash", level: 75 },
    ],
  },
  {
    category: "Machine Learning & Deep Learning",
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    items: [
      { name: "Scikit-learn", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 85 },
      { name: "Keras", level: 80 },
      { name: "XGBoost", level: 80 },
    ],
  },
  {
    category: "Generative AI & LLMs",
    icon: <Terminal className="w-6 h-6 text-green-400" />,
    items: [
      { name: "LangChain", level: 90 },
      { name: "RAG Pipelines", level: 90 },
      { name: "OpenAI Agents", level: 85 },
      { name: "Hugging Face", level: 85 },
      { name: "Prompt Engineering", level: 90 },
    ],
  },
  {
    category: "Cloud & MLOps",
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    items: [
      { name: "Azure AI", level: 85 },
      { name: "Azure ML Studio", level: 85 },
      { name: "Docker", level: 80 },
      { name: "AWS SageMaker", level: 75 },
      { name: "Google Vertex AI", level: 75 },
    ],
  },
  {
    category: "Backend & Frontend",
    icon: <Globe className="w-6 h-6 text-pink-400" />,
    items: [
      { name: "FastAPI", level: 85 },
      { name: "Flask", level: 85 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 80 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <Server className="w-6 h-6 text-orange-400" />,
    items: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "Jupyter Notebook", level: 90 },
    ],
  },
]

export default function TechnicalSkills() {
  return (
    <section className="py-24 bg-black/90 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 inline-block mb-4">
            Technical Mastery
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            My technical arsenal for building intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-cyan-400 text-xs font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1) }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/30 skew-x-12 animate-shimmer"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
