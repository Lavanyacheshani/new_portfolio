"use client"

import { motion } from "framer-motion"
import { Users, Globe, Award, TrendingUp, DollarSign } from "lucide-react"

const leadershipRoles = [
  {
    organization: "Google Developer Group Sri Lanka",
    position: "Volunteer",
    year: "2024/25",
    description: "Active volunteer contributing to the success of GDG events and community initiatives.",
    details: "Assisted in organizing tech meetups, workshops, and conferences, fostering a vibrant developer community.",
    achievements: ["Supported major tech events", "Community engagement"],
    icon: <Globe className="w-6 h-6 text-green-400" />,
    color: "from-green-500/20 to-green-500/5",
    border: "group-hover:border-green-500/50"
  },
  {
    organization: "IEEE CS SYP Micro-Mentoring",
    position: "Regional Liaison -  Region 10",
    year: "2024/25",
    description: "Coordinating mentoring activities for the Asia and Pacific region.",
    details: "Acting as a bridge between mentors and mentees, ensuring smooth operation of the micro-mentoring program in Region 10.",
    achievements: ["Regional coordination", "Mentorship program support"],
    icon: <Users className="w-6 h-6 text-blue-400" />,
    color: "from-blue-500/20 to-blue-500/5",
    border: "group-hover:border-blue-500/50"
  },
  {
    organization: "IEEE SLSAC",
    position: "Financial Management Coordinator",
    year: "2024/25",
    description: "Managing financial aspects for the Industry Engagement committee.",
    details: "Responsible for budget handling, financial planning, and resource allocation for industry engagement initiatives.",
    achievements: ["Financial planning", "Resource management"],
    icon: <DollarSign className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500/20 to-purple-500/5",
    border: "group-hover:border-purple-500/50"
  },
  {
    organization: "SLTC IEEE Student Branch",
    position: "Treasurer",
    year: "2024/25",
    description: "Overseeing the financial health of the student branch.",
    details: "Handling accounts, budgeting for events, and ensuring transparent financial reporting for the student branch.",
    achievements: ["Budget management", "Financial reporting"],
    icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
    color: "from-yellow-500/20 to-yellow-500/5",
    border: "group-hover:border-yellow-500/50"
  },
  {
    organization: "SLTC AIESEC",
    position: "Business Development Member",
    year: "2023/24",
    description: "Driving business development and partnerships.",
    details: "Identifying new business opportunities and maintaining relationships with partners to support organizational growth.",
    achievements: ["Partnership development", "Business growth"],
    icon: <TrendingUp className="w-6 h-6 text-orange-400" />,
    color: "from-orange-500/20 to-orange-500/5",
    border: "group-hover:border-orange-500/50"
  },
]

export default function LeadershipRoles() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500 inline-block mb-4">
            Community & Leadership
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Contributing to the tech ecosystem through leadership and volunteering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-gradient-to-br ${role.color} backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-black/30 rounded-xl">
                  {role.icon}
                </div>
                <span className="text-xs font-semibold text-white/50 px-2 py-1 bg-white/5 rounded">
                  {role.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors">{role.organization}</h3>
              <p className="text-sm font-medium text-gray-300 mb-4">{role.position}</p>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {role.description}
              </p>

              <div className="pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {role.achievements.map((item, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-black/30 text-gray-300 rounded-full">
                      ✨ {item}
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
