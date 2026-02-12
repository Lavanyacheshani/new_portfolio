"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote, UserCheck, Mail, Phone } from "lucide-react"

const references = [
  {
    name: "Dr. Mohamed Azmeer",
    role: "Head - Dept. of Applied IT, SLTC",
    image: "/placeholder.svg",
    email: "azmeerm@sltc.ac.lk",
    phone: "+94 777348691"
  },
  {
    name: "Mr. Suresh Peiris",
    role: "Lead - GDG Sri Lanka | Co-Founder Inforwaves",
    image: "/placeholder.svg",
    email: "suresh@inforwaves.com",
    phone: "+94 772540020"
  },
]

export default function References() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 inline-block mb-4">
            Professional References
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Endorsements from industry leaders and academic mentors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {references.map((ref, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div className="relative bg-gray-900 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
                <div className="absolute top-4 right-4 text-white/5 group-hover:text-blue-500/20 transition-colors">
                  <Quote size={60} />
                </div>

                <div className="flex items-center gap-6 mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-blue-500 transition-colors bg-gray-800">
                    {/* Use generic user icon if placeboholder is empty/svg */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                      <UserCheck className="w-8 h-8 text-gray-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{ref.name}</h3>
                    <p className="text-sm text-gray-400 max-w-[200px] leading-tight mt-1">{ref.role}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <a href={`mailto:${ref.email}`} className="text-sm hover:underline">{ref.email}</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                    <Phone className="w-4 h-4 text-purple-500" />
                    <a href={`tel:${ref.phone}`} className="text-sm hover:underline">{ref.phone}</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
