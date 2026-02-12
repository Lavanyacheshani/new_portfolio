"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin, Mail, Phone, User } from "lucide-react"

export default function About() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-2/5 flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  <Image
                    src="/lavanya-photo.jpg"
                    alt="Lavanya Cheshani"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">🚀</div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Experience</p>
                      <p className="text-xl font-bold text-white">2+ Years</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-3/5"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Hi, I'm <span className="text-cyan-400">Lavanya Cheshani</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                AI/ML Engineer with 2+ years of experience building machine learning, deep learning, and automation
                focused solutions. Skilled in developing end-to-end AI applications using <span className="text-white font-semibold">Azure AI services</span>,
                <span className="text-white font-semibold"> LLM driven architectures</span>, <span className="text-white font-semibold">RAG pipelines</span>, and NLP technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Experienced in real-time analytics, model optimization, and deploying scalable AI systems that deliver
                measurable impact. Passionate about solving complex problems and creating practical, production-ready AI solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InfoItem icon={<MapPin className="w-5 h-5 text-blue-400" />} label="Location" value="Colombo" />
                <InfoItem icon={<Mail className="w-5 h-5 text-pink-400" />} label="Email" value="lavanyacheshani5@gmail.com" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors duration-300">
      <div className="bg-white/10 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  )
}