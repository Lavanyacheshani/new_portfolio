"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "C++", icon: "cpp" },
      { name: "Go", icon: "go" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Vue", icon: "vue" },
      { name: "Angular", icon: "angular" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Sass", icon: "sass" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "Django", icon: "django" },
      { name: "Flask", icon: "flask" },
      { name: "Spring Boot", icon: "spring" },
      { name: "GraphQL", icon: "graphql" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Redis", icon: "redis" },
      { name: "Firebase", icon: "firebase" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "AWS", icon: "aws" },
      { name: "Google Cloud", icon: "gcp" },
      { name: "Azure", icon: "azure" },
      { name: "Jenkins", icon: "jenkins" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Figma", icon: "figma" },
      { name: "Postman", icon: "postman" },
      { name: "Jira", icon: "jira" },
    ],
  },
]

export default function SkillGrid() {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Technical Skills</h2>
        {skillCategories.map((category) => (
          <div key={category.name} className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-200">{category.name}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function SkillCard({ skill }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors duration-300">
        <CardHeader className="p-4">
          <CardTitle className="text-lg font-semibold text-center text-gray-200">{skill.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex justify-center">
          <Image
            src={`https://skillicons.dev/icons?i=${skill.icon}`}
            alt={skill.name}
            width={48}
            height={48}
            className="transition-all duration-300 filter hover:brightness-125"
          />
        </CardContent>
      </Card>
    </motion.div>
  )
}

