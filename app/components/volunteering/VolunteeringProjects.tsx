"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const projects = [
  {
    title: "Altium Workshop",
    category: "University",
    role: "Chairperson (IEEE WIE)",
    status: "Completed",
    description: "Organized a nationwide workshop on Altium electronics design in collaboration with Altium Education."
  },
  
  {
    title: "Codemania V4.0",
    category: "University",
    role: "Deputy Head of Programming Team (IEEE CS)",
    status: "Completed",
    description: "Led the programming team in organizing a national-level coding competition."
  },
  {
    title: "InspiHer 2.0",
    category: "University",
    role: "Project Treasurer (IEEE WIE)",
    status: "Completed",
    description: "Managed finances for a women-in-tech inspiration series featuring industry leaders."
  },
  {
    title: "DevNexa'23",
    category: "Collaboration",
    role: "Project Coordinator & Treasurer (SLTC, OUSL & UWU)",
    status: "Completed",
    description: "Coordinated a multi-university tech conference and managed its finances."
  },
  {
    title: "TechX",
    category: "National",
    role: "Financial Team Member (IEEE CS)",
    status: "Completed",
    description: "Managed finances for a national-level technology exhibition and competition."
  },
  {
    title: "Build with AI",
    category: "National",
    role: "Team Member (GDG Sri Lanka)",
    status: " Completed",
    description: "Contributing to a nationwide initiative to promote AI development and applications."
  },
  {
    title: "IdeaniX",
    category: "University",
    role: "Team Member (IEEE CS)",
    status: "Completed",
    description: "Contributing to a innovation idea project."
  }
]

export default function VolunteeringProjects() {
  const [activeTab, setActiveTab] = useState("All")

  const filteredProjects = activeTab === "All" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-glow"
        >
          Key Volunteering Projects
        </motion.h2>
        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800">
            {[
              "All", 
              "University", 
              "Collaboration", 
              "National"
            ].map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveTab(category)}
                className={`data-[state=active]:bg-electric-blue data-[state=active]:text-white ${activeTab === category ? 'bg-electric-blue text-white' : ''}`}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {filteredProjects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <Card className="bg-gray-800 hover:bg-gray-700 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-electric-blue">{project.title}</CardTitle>
        <CardDescription>{project.role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-400 mb-2">{project.status}</p>
        <p className="text-sm">{project.description}</p>
      </CardContent>
    </Card>
  )
}
