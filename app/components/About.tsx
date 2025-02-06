"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useChat } from "ai/react"

export default function About() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-white"
          >
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hi, I'm Lavanya Cheshani
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              I'm a passionate software engineer and AI enthusiast with a knack for creating innovative solutions.
              With expertise in project management, UI/UX design, web development, and AI/ML, I strive to bridge
              the gap between cutting-edge technology and practical applications.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to make a positive impact. I'm always
              excited to take on new challenges and collaborate on projects that push the boundaries of what's possible.
            </p>
          </motion.div>

          {/* Chatbot Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ask Me Anything
            </h3>
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl flex flex-col">
              {/* Chat Messages Container */}
              <div className="h-72 overflow-y-auto space-y-4 p-4 bg-gray-700 rounded-lg scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                {messages.length === 0 ? (
                  <p className="text-gray-400 text-center text-lg">Start a conversation...</p>
                ) : (
                  messages.map((message, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg text-white ${
                        message.role === "user"
                          ? "bg-blue-600 self-end text-right"
                          : "bg-gray-600 self-start text-left"
                      }`}
                    >
                      <strong className="font-semibold">{message.role === "user" ? "You: " : "Lavanya: "}</strong>
                      <p className="mt-1">{message.content}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Chat Input Form */}
              <form onSubmit={handleSubmit} className="mt-6 flex">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask me about my skills, projects, or services..."
                  className="flex-grow px-5 py-3 bg-gray-700 text-white rounded-l-xl focus:outline-none placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-r-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}