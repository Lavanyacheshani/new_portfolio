"use client"

import { motion } from "framer-motion"
import { Calendar, Award, Star, Globe, Users } from "lucide-react"

const timelineEvents = [
  {
    title: "IEEE Member - Ideanix Project",
    role: "Tech Volunteer",
    description: "Started volunteering journey by contributing to the Ideanix project at SLTC, fostering innovation among students.",
    date: "2021",
    icon: <Users className="w-6 h-6 text-blue-400" />,
    color: "bg-blue-500"
  },
  {
    title: "IEEE WIE Assistant Treasurer",
    role: "Leadership Role",
    description: "Selected as Assistant Treasurer for the IEEE Women in Engineering affinity group at SLTC, managing finances and event budgets.",
    date: "2022",
    icon: <Award className="w-6 h-6 text-pink-400" />,
    color: "bg-pink-500"
  },
  {
    title: "Led IEEE WIE Projects",
    role: "Project Lead",
    description: "Spearheaded multiple initiatives and workshops to empower women in technology and engineering fields.",
    date: "2023",
    icon: <Star className="w-6 h-6 text-yellow-400" />,
    color: "bg-yellow-500"
  },
  {
    title: "IEEE Sri Lanka SAC Coordinator",
    role: "National Coordinator",
    description: "Appointed as a member of the Student Activities Committee (SAC), coordinating student branch activities across Sri Lanka.",
    date: "2024",
    icon: <Globe className="w-6 h-6 text-green-400" />,
    color: "bg-green-500"
  },
  {
    title: "IEEE Global CS SYP Coordinator",
    role: "Global Leadership",
    description: "Selected as the IEEE Computer Society SYP Coordinator for the Global Section, overseeing student and young professional activities worldwide.",
    date: "2024 - Present",
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    color: "bg-purple-500"
  },
]

export default function Timeline() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 inline-block mb-4">
            My Volunteering Journey
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From local initiatives to global leadership, a timeline of my impact.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 opacity-30"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ event, index }: { event: any, index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative flex items-center md:items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black border-2 border-white rounded-full z-20 shadow-[0_0_10px_rgba(255,255,255,0.5)] mt-1.5 md:mt-0">
        <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${event.color}`}></div>
      </div>

      {/* Content Card */}
      <div className={`ml-12 md:ml-0 w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} gap-2 mb-4`}>
            <div className={`p-2 rounded-lg bg-white/5 inline-flex ${event.color.replace('bg-', 'text-')}`}>
              {event.icon}
            </div>
            <span className="text-sm font-bold text-blue-400 tracking-wider uppercase">{event.date}</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
            {event.title}
          </h3>
          <p className="text-sm font-medium text-gray-300 mb-3">{event.role}</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
