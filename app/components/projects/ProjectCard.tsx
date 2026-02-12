"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react"
import React from "react"

interface ProjectCardProps {
  project: {
    title: string
    category: string
    description: string
    image: string
    techStack: string[]
    demoLink?: string
    githubLink?: string
    id: number
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative h-[500px] w-full bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Image Container with Parallax Effect */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-6 left-6 z-20">
          <div className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-300">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-10 flex flex-col h-[244px] justify-between z-10">
        <div>
          <h3 className="text-2xl font-black text-white tracking-tighter mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-500">
            {project.title}
          </h3>
          <p className="text-gray-500 line-clamp-2 text-sm leading-relaxed font-medium group-hover:text-gray-300 transition-colors duration-500">
            {project.description}
          </p>
        </div>

        <div className="space-y-6">
          {/* Tech Stack Bubbles */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold text-gray-500 uppercase tracking-widest group-hover:border-white/10 group-hover:text-gray-300 transition-all">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold text-gray-600 uppercase tracking-widest">
                +{project.techStack.length - 3} More
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between border-t border-white/5 pt-6">
            <div className="flex gap-6">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
                >
                  <ExternalLink size={12} className="text-blue-500" /> Discover
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
                >
                  <Github size={12} className="text-purple-500" /> Source
                </a>
              )}
            </div>

            <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500">
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>

      {/* Internal Decorative Ring */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  )
}
