"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const leadershipRoles = [
  {
    organization: "Google Developer Group Sri Lanka",
    position: "Volunteer",
    year: "2024/25",
    description: "Contributed to organizing tech events and workshops for the developer community.",
    details:
      "Assisted in planning and executing developer meetups, hackathons, and tech talks. Helped in promoting Google technologies and best practices among local developers.",
    achievements: ["Organized 5+ successful tech events", "Mentored 20+ aspiring developers"],
    image: "/images/gdg.jpg",
    category: "Leadership",
    color: "text-green-500",
  },
  {
    organization: "IEEE CS SYP Micro-Mentoring",
    position: "Regional Liaison & Coordinator (Region 10)",
    year: "2024/25",
    description: "Coordinated mentoring programs for young professionals in the IEEE Computer Society.",
    details:
      "Facilitated mentoring sessions between experienced professionals and young IEEE members. Organized virtual events to promote knowledge sharing and career development.",
    achievements: ["Connected 50+ mentors with mentees", "Organized 3 region-wide virtual events"],
    image: "/images/cs.jpg",
    category: "Leadership",
    color: "text-blue-500",
  },
  {
    organization: "IEEE SLSAC",
    position: "Financial Management Coordinator",
    year: "2024/25",
    description: "Managed financial aspects of IEEE Student Activities Committee in Sri Lanka.",
    details:
      "Oversaw budget planning and allocation for various student activities. Ensured proper financial reporting and compliance with IEEE guidelines.",
    achievements: ["Managed a budget of $10,000+", "Implemented a new financial tracking system"],
    image: "/images/slsac.png",
    category: "Leadership",
    color: "text-purple-500",
  },
  {
    organization: "SLTC IEEE Student Branch",
    position: "Treasurer",
    year: "2024/25",
    description: "Handled financial responsibilities for the IEEE Student Branch at SLTC.",
    details:
      "Managed branch finances, prepared financial reports, and ensured proper allocation of funds for various IEEE activities and events.",
    achievements: ["Increased branch funds by 30%", "Successfully organized 4 major events within budget"],
    image: "/images/sltc.jpg",
    category: "Leadership",
    color: "text-yellow-500",
  },
  {
    organization: "SLTC IEEE WIE Subcommittee",
    position: "Financial Deputy Head",
    year: "2023/24",
    description: "Assisted in financial management of Women in Engineering activities at SLTC.",
    details:
      "Supported the Financial Head in budget planning, expense tracking, and financial reporting for WIE events and initiatives.",
    achievements: ["Co-managed 5+ successful WIE events", "Implemented a digital expense tracking system"],
    image: "/images/wie.jpg",
    category: "Leadership",
    color: "text-red-500",
  },
  {
    organization: "SLTC AIESEC",
    position: "Business Development Member",
    year: "2023/24",
    description: "Contributed to business development initiatives for AIESEC.",
    details:
      "Assisted in identifying and pursuing partnership opportunities. Helped in organizing events to promote AIESEC's programs and increase student participation.",
    achievements: ["Secured 3 new partnerships", "Increased student sign-ups by 25%"],
    image: "/images/aiesec-event.jpg",
    category: "Leadership",
    color: "text-orange-500",
  },
]

export default function LeadershipRoles() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-glow"
        >
          Leadership Roles
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:bg-gray-800/70 transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={role.image || "/placeholder.svg"}
                    alt={role.organization}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center">
                    
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">{role.organization}</CardTitle>
                  <CardDescription className="text-gray-400">{role.position} - {role.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{role.description}</p>
                  <ul className="space-y-2 mt-4">
                    {role.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
