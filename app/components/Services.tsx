"use client"

import { motion } from "framer-motion"
import { Bot, Code2, Cpu, Globe, BrainCircuit, LineChart } from "lucide-react"

const services = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-cyan-400" />,
    title: "AI & Machine Learning Solutions",
    description: "Developing custom ML models, deep learning architectures, and predictive analytics systems to solve complex business problems.",
    tags: ["TensorFlow", "PyTorch", "Scikit-learn"]
  },
  {
    icon: <Bot className="w-8 h-8 text-purple-400" />,
    title: "GenAI & LLM Integration",
    description: "Building intelligent agents, RAG pipelines, and fine-tuning Large Language Models for specialized domain applications.",
    tags: ["LangChain", "OpenAI", "RAG"]
  },
  {
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    title: "Full Stack Development",
    description: "Creating scalable, high-performance web applications with modern frameworks, ensuring seamless user experiences.",
    tags: ["React", "Next.js", "Node.js"]
  },
  {
    icon: <Cpu className="w-8 h-8 text-emerald-400" />,
    title: "Automation & Workflow Optimization",
    description: "Designing automated workflows and intelligent bots to streamline operations and enhance productivity.",
    tags: ["n8n", "Python Scripts", "APIs"]
  },
  {
    icon: <LineChart className="w-8 h-8 text-orange-400" />,
    title: "Data Analytics & Visualization",
    description: "Transforming raw data into actionable insights through advanced statistical analysis and interactive dashboards.",
    tags: ["Pandas", "PowerBI", "SQL"]
  },
  {
    icon: <Globe className="w-8 h-8 text-pink-400" />,
    title: "Cloud & MLOps",
    description: "Deploying and managing AI solutions on cloud platforms, ensuring scalability, security, and reliability.",
    tags: ["Azure", "AWS", "Docker"]
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="services">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block mb-4">
            Specialized Services
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Delivering cutting-edge AI and software solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg"></div>

              <div className="relative z-10">
                <div className="mb-6 p-4 bg-black/50 rounded-2xl w-fit border border-white/10 group-hover:border-white/20 transition-colors shadow-inner">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed min-h-[80px]">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-white/5 text-gray-300 rounded-md border border-white/5 group-hover:border-white/10 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
