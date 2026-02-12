"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-2">
            {/* Left Side: Call to Action */}
            <div className="p-10 bg-gradient-to-br from-blue-600 to-purple-700 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-16 -mb-16 blur-xl"></div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Let's Collaborate</h2>
                <p className="text-blue-100/80 leading-relaxed mb-6">
                  I'm open to new opportunities, freelance projects, or just a chat about the future of AI.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase tracking-wider">Email Me</p>
                    <p className="font-medium">lavanyacheshani5@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase tracking-wider">Location</p>
                    <p className="font-medium">Colombo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Socials & Form Placeholder */}
            <div className="p-10 flex flex-col justify-center bg-gray-900/50">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Connect on Socials</h3>
                <div className="flex gap-4">
                  <SocialButton href="https://github.com/Lavanyacheshani" icon={<Github className="w-5 h-5" />} label="GitHub" />
                  <SocialButton href="https://www.linkedin.com/in/lavanya-cheshani" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                  <SocialButton href="https://x.com/lavanyacheshani" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <a
                  href="mailto:lavanyacheshani5@gmail.com"
                  className="w-full group relative flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium py-4 rounded-xl transition-all duration-300"
                >
                  <span>Say Hello</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
