"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaComments,
  FaHandshake,
  FaPuzzlePiece,
  FaRandom,
  FaClock,
  FaRocket,
  FaSearch,
  FaBook,
  FaLightbulb,
  FaStar
} from "react-icons/fa"
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
    color: "from-blue-500 to-cyan-400",
    description: "Effectively conveying ideas and information",
    example: "Led a team presentation on a complex AI project, breaking down technical concepts for non-technical stakeholders.",
    importance: "Clear communication is crucial in tech for collaboration, explaining complex ideas, and ensuring project success.",
  },
  {
    name: "Team Collaboration",
    icon: FaHandshake,
    color: "from-purple-500 to-pink-500",
    description: "Working effectively with others to achieve common goals",
    example: "Coordinated with cross-functional teams to deliver a full-stack web application, ensuring seamless integration between frontend and backend components.",
    importance: "Collaboration is essential in tech for leveraging diverse skills, solving complex problems, and delivering comprehensive solutions.",
  },
  {
    name: "Problem-Solving",
    icon: FaPuzzlePiece,
    color: "from-emerald-500 to-teal-400",
    description: "Analyzing issues and finding effective solutions",
    example: "Debugged a critical performance issue in a production application, identifying and optimizing a database query that improved response times by 70%.",
    importance: "Problem-solving is at the core of technology, enabling innovation and overcoming technical challenges.",
  },
  {
    name: "Adaptability",
    icon: FaRandom,
    color: "from-orange-500 to-yellow-500",
    description: "Quickly adjusting to new technologies and methodologies",
    example: "Rapidly learned and implemented a new frontend framework mid-project to meet changing client requirements.",
    importance: "The fast-paced nature of tech requires constant adaptation to new tools, languages, and methodologies.",
  },
  {
    name: "Time Management",
    icon: FaClock,
    color: "from-indigo-500 to-purple-500",
    description: "Efficiently organizing and prioritizing tasks",
    example: "Successfully managed multiple project deadlines, delivering a mobile app, website redesign, and API integration within a tight timeframe.",
    importance: "Effective time management ensures timely project delivery and balances multiple responsibilities in tech roles.",
  },
  {
    name: "Leadership",
    icon: FaRocket,
    color: "from-red-500 to-orange-500",
    description: "Guiding and motivating teams towards success",
    example: "Led a team of developers in an open-source project, coordinating efforts and mentoring junior contributors.",
    importance: "Leadership skills drive innovation, inspire teams, and guide projects to successful completion in the tech industry.",
  },
  {
    name: "Attention to Detail",
    icon: FaSearch,
    color: "from-sky-500 to-blue-600",
    description: "Meticulously focusing on accuracy and quality",
    example: "Conducted thorough code reviews, identifying and addressing potential security vulnerabilities before deployment.",
    importance: "Precision is crucial in tech for writing clean code, ensuring security, and delivering high-quality software products.",
  },
  {
    name: "Continuous Learning",
    icon: FaBook,
    color: "from-green-500 to-emerald-600",
    description: "Constantly acquiring new knowledge and skills",
    example: "Proactively learned and implemented machine learning techniques to enhance a recommendation system, improving user engagement by 25%.",
    importance: "The rapidly evolving tech landscape requires a commitment to ongoing learning and skill development.",
  },
]

export default function SoftSkills() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <FaStar className="w-3 h-3 text-yellow-500" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Human Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Interpersonal <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Dynamics</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            The fundamental qualities that drive collaboration, innovation, and
            sustainable technological growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((skill, index) => (
            <SoftSkillCard key={index} skill={skill} index={index} />
          ))}
          {/* Decorative Filler for "Empty Box" request */}
          <div className="hidden lg:flex group relative h-64 overflow-hidden rounded-3xl border border-dashed border-white/10 bg-white/[0.01] flex-col items-center justify-center gap-4 text-center p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.03]">
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-full border border-dashed border-white/5 opacity-20"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <FaStar className="w-10 h-10 text-gray-800 group-hover:text-gray-600 transition-colors duration-500" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-800 italic group-hover:text-gray-700 transition-colors">Expanding Potential</span>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SoftSkillCard({ skill, index }: { skill: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-64 cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06]"
          >
            {/* Background Gradient Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

            <div className="relative z-10 h-full p-8 flex flex-col items-center justify-center text-center gap-6">
              <div className="relative group/icon">
                {/* Rotating Outer Ring */}
                <motion.div
                  className={`absolute -inset-4 rounded-full border border-dashed border-white/10 opacity-40 group-hover:opacity-100 group-hover:border-white/30 transition-opacity duration-700`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Floating Sparkles */}
                <motion.div
                  className="absolute -top-6 -right-6 text-yellow-500/30 group-hover:text-yellow-500/60 transition-colors"
                  animate={{ y: [0, -5, 0], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaStar size={12} />
                </motion.div>

                <div className={`p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 relative overflow-hidden`}>
                  <skill.icon className={`text-5xl bg-clip-text text-transparent bg-gradient-to-br ${skill.color} relative z-10`} />

                  {/* Subtle Icon Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} blur-2xl opacity-10 group-hover:opacity-30 transition-opacity -z-10`} />

                  {/* Internal Shine Line */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {skill.description}
                </p>
              </div>

              {/* Bottom "Detailed view" indicator */}
              <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400">View Details</span>
              </div>
            </div>

            {/* Shine effect simulation */}
            <motion.div
              className="absolute top-0 -left-full w-1/2 h-full bg-white/10 -skew-x-[45deg] pointer-events-none"
              animate={isHovered ? { left: ["100%", "200%"] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-xl bg-[#090909] border-white/10 text-white backdrop-blur-2xl">
          <DialogHeader>
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} p-[1px] mb-6`}>
              <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                <skill.icon className="text-3xl" />
              </div>
            </div>
            <DialogTitle className="text-4xl font-extrabold tracking-tight mb-2">
              {skill.name}
            </DialogTitle>
            <DialogDescription className="text-gray-400 text-lg leading-relaxed">
              {skill.description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-8 space-y-8">
            <div className="relative pl-6 border-l-2 border-white/10">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-400 mb-3">
                <FaLightbulb className="w-3 h-3" /> Real-world Application
              </h4>
              <p className="text-gray-300 leading-relaxed italic border-white/5 border p-4 rounded-xl bg-white/[0.02]">
                "{skill.example}"
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-2">Strategic Importance</h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {skill.importance}
              </p>
            </div>
          </div>

          {/* Decorative Corner */}
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-10 blur-3xl -z-10`} />
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
