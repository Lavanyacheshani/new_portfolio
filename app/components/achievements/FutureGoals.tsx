"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Rocket, Brain, Globe } from "lucide-react"

const goals = [
  {
    icon: Brain,
    title: "Advanced AI Research",
    description: "Contribute to cutting-edge AI research and development projects",
  },
  {
    icon: Globe,
    title: "International Recognition",
    description: "Achieve recognition in global tech competitions and conferences",
  },
  {
    icon: Target,
    title: "Industry Leadership",
    description: "Take on leadership roles in major tech initiatives",
  },
  {
    icon: Rocket,
    title: "Innovation Impact",
    description: "Create solutions that make a positive impact on society",
  },
]

export default function FutureGoals() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Future Goals
          </h2>
          <p className="text-gray-400 text-lg">Ambitious targets for continued growth and achievement</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 h-full">
                <CardHeader>
                  <goal.icon className="w-12 h-12 text-blue-500 mb-4" />
                  <CardTitle className="text-xl font-bold text-white">{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{goal.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

