"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Java", icon: "java", description: "Object-oriented programming language" },
      { name: "Python", icon: "python", description: "Versatile language for AI and web development" },
      { name: "C", icon: "c", description: "Low-level programming language" },
      { name: "Django", icon: "django", description: "High-level Python web framework" },
      { name: "TypeScript", icon: "typescript", description: "Typed superset of JavaScript" },
      { name: "C++", icon: "cpp", description: "Extension of the C programming language" },
      { name: "Kotlin", icon: "kotlin", description: "Modern programming language for Android development" },
      { name: "GoLang", icon: "go", description: "Statically typed, compiled language" },
    ],
  },
  {
    name: "Web Technologies",
    skills: [
      { name: "HTML", icon: "html", description: "Markup language for web pages" },
      { name: "PHP", icon: "php", description: "Server-side scripting language" },
      { name: "CSS", icon: "css", description: "Style sheet language for web design" },
      { name: "JavaScript", icon: "javascript", description: "Programming language for web development" },
      { name: "SASS", icon: "sass", description: "CSS preprocessor scripting language" },
      { name: "Tailwind CSS", icon: "tailwind", description: "Utility-first CSS framework" },
      { name: "Next.js", icon: "nextjs", description: "React framework for production" },
      { name: "Astro", icon: "astro", description: "Static site builder for the modern web" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", icon: "mongodb", description: "NoSQL database program" },
      { name: "MySQL", icon: "mysql", description: "Relational database management system" },
      { name: "Firebase", icon: "firebase", description: "Google-backed application development platform" },
      { name: "PostgreSQL", icon: "postgresql", description: "Advanced open-source relational database" },
      { name: "Redis", icon: "redis", description: "In-memory data structure store" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "MERN Stack", icon: "react", description: "MongoDB, Express, React, Node.js" },
      { name: "React Native", icon: "react", description: "Framework for building mobile applications" },
      { name: "Flutter", icon: "flutter", description: "UI software development kit" },
      { name: "Spring Boot", icon: "spring", description: "Java-based framework for creating microservices" },
      { name: "FastAPI", icon: "fastapi", description: "Modern, fast web framework for building APIs with Python" },
      { name: "Express.js", icon: "express", description: "Web application framework for Node.js" },
    ],
  },
  {
    name: "Development Tools",
    skills: [
      { name: "VS Code", icon: "vscode", description: "Source-code editor by Microsoft" },
      { name: "IntelliJ", icon: "intellij", description: "Integrated development environment" },
      { name: "Git", icon: "git", description: "Distributed version control system" },
      { name: "GitHub", icon: "github", description: "Web-based hosting service for version control using Git" },
      { name: "GitLab", icon: "gitlab", description: "Web-based DevOps lifecycle tool" },
      { name: "Docker", icon: "docker", description: "Platform for developing, shipping, and running applications" },
      { name: "Postman", icon: "postman", description: "API development and testing tool" },
      { name: "Kubernetes", icon: "kubernetes", description: "Open-source container-orchestration system" },
    ],
  },
];

export default function SkillGrid() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <section className={`py-12 ${isDarkMode ? "dark" : ""}`}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-center text-electric-blue">Technical Skills</h2>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="px-4 py-2 bg-electric-blue text-white rounded-md hover:bg-electric-blue/80 transition-colors"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gold-500">{category.name}</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {category.skills.map((skill, skillIndex) => (
              <SkillCard key={skillIndex} skill={skill} index={skillIndex} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function SkillCard({ skill, index }) {
  return (
    <Dialog>
      <DialogTrigger>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <motion.div
                className="flex flex-col items-center bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Image
                  src={`https://skillicons.dev/icons?i=${skill.icon}`}
                  alt={skill.name}
                  width={48}
                  height={48}
                />
                <p className="mt-2 text-white text-sm">{skill.name}</p>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{skill.description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{skill.name}</DialogTitle>
          <DialogDescription>{skill.description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
