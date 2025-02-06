"use client"

import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa"

const socialContacts = [
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/lavanya-cheshani",
    description: "Connect with me professionally",
  },
  {
    title: "GitHub",
    icon: FaGithub,
    link: "https://github.com/Lavanyacheshani",
    description: "Check out my projects and contributions",
  },
  {
    title: "Twitter",
    icon: FaTwitter,
    link: "https://x.com/lavanyacheshani",
    description: "Follow me for tech insights and updates",
  },
  {
    title: "Email",
    icon: FaEnvelope,
    link: "mailto:lavanyacheshani5@gmail.com",
    description: "Send me an email directly",
  },
  {
    title: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://wa.me/947XXXXXXXX",
    description: "Message me on WhatsApp",
  },
]

export default function SocialContacts() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-electric-blue">Connect With Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialContacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <contact.icon className="text-4xl text-electric-blue mr-4" />
              <h3 className="text-xl font-semibold">{contact.title}</h3>
            </div>
            <p className="text-gray-300 mb-4">{contact.description}</p>
            <span className="text-electric-blue hover:underline">Connect &rarr;</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

