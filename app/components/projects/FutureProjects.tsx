"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useChat } from "ai/react"
import { Zap, Cpu, Orbit, Sparkles, Send, Brain, Fingerprint } from "lucide-react"

const roadmap = [
  {
    icon: Brain,
    title: "NEURAL ASSISTANT",
    status: "PROTOTYPING",
    description: "Advanced AI-powered personal assistant with contextual long-term memory."
  },
  {
    icon: Fingerprint,
    title: "DECENTRALIZED SOCIAL",
    status: "RESEARCH",
    description: "Web3 social architecture focused on absolute data sovereignty."
  },
  {
    icon: Orbit,
    title: "AR COLLABORATION",
    status: "CONCEPT",
    description: "Immersive 3D design workspace for distributed hardware engineering."
  }
]

export default function FutureProjects() {
  const [chatVisible, setChatVisible] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#3b82f610_0%,transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
            <Zap className="w-3 h-3 text-blue-500" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-400">R&D Roadmap // 2025</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase">
            FUTURE <span className="text-gray-800 italic">HORIZONS</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed font-medium">
            Exploring the intersection of <span className="text-white">autonomous intelligence </span>
            and future technology paradigms.
          </p>
        </motion.div>

        {/* Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {roadmap.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-96 p-10 rounded-[3rem] bg-[#090909] border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-8 h-8 text-blue-500" />
                  </div>
                  <span className="text-[9px] font-black tracking-[0.3em] text-gray-700 uppercase mb-2 block">{item.status}</span>
                  <h3 className="text-2xl font-black text-white tracking-tighter mb-4 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.description}</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-1 flex-grow bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-1/3 animate-pulse" />
                  </div>
                  <span className="text-[9px] font-black text-gray-800 uppercase tracking-widest">33% SYNCED</span>
                </div>
              </div>

              {/* Background Large Icon */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 scale-[2] rotate-12">
                <item.icon size={250} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Consultation Terminal */}
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setChatVisible(!chatVisible)}
            className="w-full relative group h-24 rounded-full border border-white/10 bg-[#090909] overflow-hidden flex items-center justify-center gap-4 hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Cpu className={`w-5 h-5 ${chatVisible ? 'text-blue-500' : 'text-gray-500'} group-hover:text-blue-500 transition-colors`} />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 group-hover:text-white transition-colors">
              {chatVisible ? "CLOSE SYSTEM LINK" : "INITIALIZE AI CONSULTATION"}
            </span>
            <Sparkles className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-y-[-10px]" />
          </button>

          <AnimatePresence>
            {chatVisible && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 bg-[#090909] border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-3xl shadow-2xl"
              >
                <div className="p-10 h-[400px] overflow-y-auto space-y-6 custom-scrollbar">
                  {messages.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-20">
                      <Brain size={64} className="mb-4" />
                      <p className="text-xs font-black uppercase tracking-[0.3em]">AWAITING INPUT QUERY...</p>
                    </div>
                  )}
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] px-6 py-4 rounded-3xl text-sm font-medium leading-relaxed ${message.role === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-white/5 border border-white/10 text-gray-300"
                        }`}>
                        <span className="text-[9px] font-black uppercase tracking-widest opacity-50 block mb-2">{message.role}</span>
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-3xl">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-white rounded-full animate-bounce" />
                          <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0.2s]" />
                          <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="p-6 bg-black/40 border-t border-white/10 flex gap-4">
                  <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="QUERY THE FUTURE PROJECTS ARCHIVE..."
                    className="flex-grow bg-white/5 border border-white/5 rounded-full px-8 py-4 text-[10px] font-black tracking-[0.2em] focus:outline-none focus:border-white/20 transition-all placeholder-gray-800"
                  />
                  <button
                    type="submit"
                    className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all active:scale-95"
                  >
                    <Send size={18} />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
