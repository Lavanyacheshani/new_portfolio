"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaComments, FaHandshake, FaPuzzlePiece, FaRandom, FaClock, FaRocket, FaSearch, FaBook } from "react-icons/fa"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const softSkills = [
  {
    name: "Communication",
    icon: FaComments,
    description: "Effectively conveying ideas and information",
    example:
      "Led a team presentation on a complex AI project, breaking down technical concepts for non-technical stakeholders.",
    importance:
      "Clear communication is crucial in tech for collaboration, explaining complex ideas, and ensuring project success.",
  },
  {
    name: "Team Collaboration",
    icon: FaHandshake,
    description: "Working effectively with others to achieve common goals",
    example:
      "Coordinated with cross-functional teams to deliver a full-stack web application, ensuring seamless integration between frontend and backend components.",
    importance:
      "Collaboration is essential in tech for leveraging diverse skills, solving complex problems, and delivering comprehensive solutions.",
  },
  {
    name: "Problem-Solving",
    icon: FaPuzzlePiece,
    description: "Analyzing issues and finding effective solutions",
    example:
      "Debugged a critical performance issue in a production application, identifying and optimizing a database query that improved response times by 70%.",
    importance:
      "Problem-solving is at the core of technology, enabling innovation and overcoming technical challenges.",
  },
  {
    name: "Adaptability",
    icon: FaRandom,
    description: "Quickly adjusting to new technologies and methodologies",
    example:
      "Rapidly learned and implemented a new frontend framework mid-project to meet changing client requirements.",
    importance:
      "The fast-paced nature of tech requires constant adaptation to new tools, languages, and methodologies.",
  },
  {
    name: "Time Management",
    icon: FaClock,
    description: "Efficiently organizing and prioritizing tasks",
    example:
      "Successfully managed multiple project deadlines, delivering a mobile app, website redesign, and API integration within a tight timeframe.",
    importance:
      "Effective time management ensures timely project delivery and balances multiple responsibilities in tech roles.",
  },
  {
    name: "Leadership",
    icon: FaRocket,
    description: "Guiding and motivating teams towards success",
    example:
      "Led a team of developers in an open-source project, coordinating efforts and mentoring junior contributors.",
    importance:
      "Leadership skills drive innovation, inspire teams, and guide projects to successful completion in the tech industry.",
  },
  {
    name: "Attention to Detail",
    icon: FaSearch,
    description: "Meticulously focusing on accuracy and quality",
    example:
      "Conducted thorough code reviews, identifying and addressing potential security vulnerabilities before deployment.",
    importance:
      "Precision is crucial in tech for writing clean code, ensuring security, and delivering high-quality software products.",
  },
  {
    name: "Continuous Learning",
    icon: FaBook,
    description: "Constantly acquiring new knowledge and skills",
    example:
      "Proactively learned and implemented machine learning techniques to enhance a recommendation system, improving user engagement by 25%.",
    importance: "The rapidly evolving tech landscape requires a commitment to ongoing learning and skill development.",
  },
]

export default function SoftSkills() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-electric-blue">Soft Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {softSkills.map((skill, index) => (
          <SoftSkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  )
}

function SoftSkillCard({ skill, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <skill.icon className="text-4xl mb-2 text-electric-blue" />
            <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-electric-blue opacity-25 rounded-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-electric-blue flex items-center">
              <skill.icon className="mr-2" />
              {skill.name}
            </DialogTitle>
            <DialogDescription className="text-gray-300">{skill.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Real-world Example:</h4>
            <p className="text-sm text-gray-300 mb-4">{skill.example}</p>
            <h4 className="font-semibold mb-2">Why it Matters in Tech:</h4>
            <p className="text-sm text-gray-300">{skill.importance}</p>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

