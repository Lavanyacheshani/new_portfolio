"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Trophy, Award, Star, Medal } from "lucide-react";
import Image from "next/image";

const achievements = [
  {
    title: "ICE 2024 - Best Pitch Award",
    category: "Tech",
    icon: Trophy,
    description: "Won the Best Pitch award at the Innovation Challenge for Engineers 2024",
    details: [
      "Presented an AI-powered University Program Recommender",
      "Competed against 32 top young innovators",
      "Received mentorship from industry leaders",
    ],
    color: "text-yellow-500",
    image: "/achievements/ice-2024.jpg",
  },
  {
    title: "IEEE INSL Provincial Competition",
    category: "Tech",
    icon: Medal,
    description: "First Runner-up in the IEEE INSL Provincial Competition",
    details: ["Led a team of 4 members", "Developed an innovative solution", "Recognized for technical excellence"],
    color: "text-blue-500",
    image: "/achievements/ieee-insl.jpg",
  },
  {
    title: "Coderally 4.0",
    category: "Tech",
    icon: Star,
    description: "Top 10 Teams in National Coding Competition",
    details: [
      "Solved complex algorithmic challenges",
      "Demonstrated strong problem-solving skills",
      "Competed against 100+ teams",
    ],
    color: "text-purple-500",
    image: "/achievements/coderally.jpg",
  },
  {
    title: "Codemania - First Runner-up",
    category: "Tech",
    icon: Medal,
    description: "Achieved First Runner-up position in Codemania ('use client')",
    details: [
      "Developed an efficient full-stack solution",
      "Optimized for performance and usability",
      "Competed against top university teams",
    ],
    color: "text-indigo-500",
    image: "/achievements/codemania.jpg",
  },
  {
    title: "Recognized as a Star Volunteer.",
    category: "Volunteerism",
    icon: Star,
    description: "Featured in the first global edition of IEEE CS COMPUTE Magazine for outstanding contributions to TechX as a volunteer.",
    details: [
      "Recognized for dedication and effort in supporting TechX",
      "Acknowledged for exemplary volunteerism in the IEEE community",
    ],
    color: "text-blue-500",
    image: "/achievements/ieee.jpg",
  },
  
  {
    title: "AI Hackathon Winner",
    category: "AI",
    icon: Trophy,
    description: "First place in National AI Hackathon",
    details: [
      "Developed an AI-powered healthcare solution",
      "Implemented advanced machine learning algorithms",
      "Presented to a panel of industry experts",
    ],
    color: "text-red-500",
    image: "/achievements/ai-hackathon.jpg",
  },
]

const categories = ["All", "AI", "Tech", "Leadership"]

export default function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredAchievements = achievements.filter(
    (achievement) =>
      (selectedCategory === "All" || achievement.category === selectedCategory) &&
      achievement.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Major Achievements
          </h2>
          <p className="text-gray-400 text-lg">Milestones that mark my journey of excellence</p>
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
            placeholder="Search achievements..."
            className="max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAchievements.map((achievement, index) => (
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
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center">
                    <achievement.icon className={`w-8 h-8 ${achievement.color} mr-2`} />
                    <Badge variant="secondary" className="bg-gray-800/80">
                      {achievement.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">{achievement.title}</CardTitle>
                  <CardDescription className="text-gray-400">{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {achievement.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        {detail}
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
