"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const workExperience = [
  {
    title: "AI & Software Development Projects",
    organization: "Freelance/Intern",
    year: "2023-Present",
    description:
      "Worked on various AI and software development projects, gaining hands-on experience in cutting-edge technologies.",
    details:
      "Developed machine learning models for predictive analytics, created responsive web applications using React and Node.js, and contributed to open-source AI projects.",
  },
  {
    title: "Banking Trainee",
    organization: "Commercial Bank Badulla",
    year: "2020-2021",
    description:
      "Gained valuable experience in the banking sector, focusing on customer service and financial operations.",
    details:
      "Assisted in daily banking operations, learned about financial products and services, and developed strong communication skills while interacting with customers.",
  },
]

const volunteeringExperience = [
  {
    title: "Volunteer",
    organization: "Google Developer Group Sri Lanka",
    year: "2024-2025",
    description: "Contributed to organizing tech events and workshops for the developer community.",
    details:
      "Assisted in planning and executing developer meetups, hackathons, and tech talks. Helped in promoting Google technologies and best practices among local developers.",
  },
  {
    title: "Regional Liaison (R10)",
    organization: "IEEE CS SYP Micro-Mentoring",
    year: "2023-2024",
    description: "Facilitated mentoring programs for young professionals in the IEEE Computer Society.",
    details:
      "Coordinated mentoring sessions between experienced professionals and young IEEE members. Organized virtual events to promote knowledge sharing and career development.",
  },
  {
    title: "Financial Management Coordinator",
    organization: "IEEE SLSAC",
    year: "2022-2023",
    description: "Managed financial aspects of IEEE Student Activities Committee in Sri Lanka.",
    details:
      "Oversaw budget planning and allocation for various student activities. Ensured proper financial reporting and compliance with IEEE guidelines.",
  },
  {
    title: "Treasurer",
    organization: "SLTC IEEE Student Branch",
    year: "2021-2022",
    description: "Handled financial responsibilities for the IEEE Student Branch at SLTC.",
    details:
      "Managed branch finances, prepared financial reports, and ensured proper allocation of funds for various IEEE activities and events.",
  },
  {
    title: "Business Development Member",
    organization: "AIESEC",
    year: "2020-2021",
    description: "Contributed to business development initiatives for AIESEC.",
    details:
      "Assisted in identifying and pursuing partnership opportunities. Helped in organizing events to promote AIESEC's programs and increase student participation.",
  },
]

export default function Experience() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow"
        >
          Where I've Gained Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
            <Timeline experiences={workExperience} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Volunteering Roles</h3>
            <Timeline experiences={volunteeringExperience} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Timeline({ experiences }: { experiences: any[] }) {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-white font-bold">{experience.year.slice(2, 4)}</span>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold">{experience.title}</h4>
            <p className="text-gray-400">{experience.organization}</p>
            <p className="mt-2">{experience.description}</p>
            <ExperienceDetails details={experience.details} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function ExperienceDetails({ details }: { details: string }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mt-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
      {isExpanded && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-2 text-gray-300"
        >
          {details}
        </motion.p>
      )}
    </div>
  )
}

