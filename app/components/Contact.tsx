"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Let's Connect
        </motion.h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl mb-8">
            I'm always open to new opportunities, collaborations, or just a friendly chat about AI and technology. Feel
            free to reach out!
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              <Twitter className="w-8 h-8" />
            </a>
            <a
              href="mailto:lavanyacheshani5@gmail.com"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-8 h-8" />
            </a>
          </motion.div>
          <motion.a
            href="mailto:lavanyacheshani5@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </section>
  )
}

