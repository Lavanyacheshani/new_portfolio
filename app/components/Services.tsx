"use client"

import { motion } from "framer-motion"
import { Rocket, Palette, Globe, BotIcon as Robot, Code } from "lucide-react"

const services = [
  {
    icon: Rocket,
    title: "Project Management",
    description: "Agile methodologies, Scrum, workflow optimization",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Wireframing, prototyping, user research, Figma/Axure",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Full-stack, MERN stack, modern UI",
  },
  {
    icon: Robot,
    title: "AI & Machine Learning",
    description: "OpenAI, Python ML models, AI-driven solutions",
  },
  {
    icon: Code,
    title: "Software Engineering",
    description: "Backend APIs, databases, scalable architectures",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center relative inline-block"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            My Services
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400"></span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <service.icon className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                Learn More &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

