"use client"

import { motion } from "framer-motion"

const certifications = [
  { name: "Meta UX/UI Design", issuer: "Meta" },
  { name: "IBM Machine Learning with Python", issuer: "IBM" },
  { name: "Google Cloud Generative AI", issuer: "Google Cloud" },
  { name: "IBM Django App Development", issuer: "IBM" },
  { name: "Python & Web Development", issuer: "University of Moratuwa" },
]

const achievements = [
  {
    name: "ICE 2024 - Best Pitch",
    description: "Won the Best Pitch award at the Innovation Challenge for Engineers 2024",
  },
  {
    name: "IEEE INSL Provincial Competition - 1st Runner-Up",
    description: "Secured the first runner-up position in the IEEE INSL Provincial Competition",
  },
  {
    name: "Coderally 4.0 - Top 10 Teams",
    description: "Finished in the top 10 teams at Coderally 4.0, a national coding competition",
  },
]

export default function Certifications() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow"
        >
          Certifications & Recognitions
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} name={cert.name} issuer={cert.issuer} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} name={achievement.name} description={achievement.description} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CertificationCard({ name, issuer }: { name: string; issuer: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
    >
      <h4 className="font-semibold">{name}</h4>
      <p className="text-gray-400">{issuer}</p>
    </motion.div>
  )
}

function AchievementCard({ name, description }: { name: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
    >
      <h4 className="font-semibold">{name}</h4>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

