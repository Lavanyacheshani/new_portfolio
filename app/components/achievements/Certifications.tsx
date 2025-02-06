"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const certifications = [
  {
    title: "Meta UX/UI Design",
    issuer: "Meta",
    date: "2024",
    category: "Design",
    skills: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    title: "IBM Machine Learning with Python",
    issuer: "IBM",
    date: "2023",
    category: "AI",
    skills: ["Python", "Machine Learning", "Data Analysis", "Neural Networks"],
  },
  {
    title: "Google Cloud Generative AI",
    issuer: "Google Cloud",
    date: "2024",
    category: "AI",
    skills: ["LLMs", "Prompt Engineering", "AI Applications", "Cloud Computing"],
  },
  {
    title: "IBM Django App Development",
    issuer: "IBM",
    date: "2023",
    category: "Tech",
    skills: ["Python", "Django", "Web Development", "Databases"],
  },
  {
    title: "Python & Web Development",
    issuer: "University of Moratuwa",
    date: "2023",
    category: "Tech",
    skills: ["Python", "HTML/CSS", "JavaScript", "Flask"],
  },
]

const categories = ["All", "AI", "Tech", "Design"]

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCertifications = certifications.filter(
    (cert) =>
      (selectedCategory === "All" || cert.category === selectedCategory) &&
      (cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Professional Certifications
          </h2>
          <p className="text-gray-400 text-lg">Continuous learning and skill development</p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="text-lg py-2 px-4 cursor-pointer hover:bg-blue-600 transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
          <Input
            type="text"
            placeholder="Search certifications..."
            className="max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative bg-gray-700 text-white backdrop-blur-lg border-gray-600 hover:bg-gray-600 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="outline" className="bg-gray-900/50">
                      {cert.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold">{cert.title}</CardTitle>
                  <p className="text-gray-300">{cert.issuer}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-blue-500/20 text-white">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
