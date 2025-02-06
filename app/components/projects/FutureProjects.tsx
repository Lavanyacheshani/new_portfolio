"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useChat } from "ai/react"

export default function FutureProjects() {
  const [chatVisible, setChatVisible] = useState(false)
  const { messages, input, handleInput, handleSubmit } = useChat()

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-glow"
        >
          What's Next? 🚀
        </motion.h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl mb-8">
            I'm always working on exciting new projects. Here's a sneak peek at what's coming up:
          </p>
          <ul className="text-left mb-8 space-y-4">
            <li>🤖 Advanced AI-powered personal assistant</li>
            <li>🌐 Decentralized social media platform</li>
            <li>🎨 AR-enhanced design collaboration tool</li>
          </ul>
          <button
            onClick={() => setChatVisible(!chatVisible)}
            className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 neon-glow"
          >
            {chatVisible ? "Hide AI Chatbot" : "Ask About My Future Projects"}
          </button>
        </div>
        {chatVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mt-8 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4 h-60 overflow-y-auto">
              {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.role === "user" ? "text-blue-400" : "text-green-400"}`}>
                  <strong>{message.role === "user" ? "You: " : "AI: "}</strong>
                  {message.content}
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="text"
                value={input}
                onChange={handleInput}
                placeholder="Ask about my future projects..."
                className="flex-grow px-4 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  )
}

