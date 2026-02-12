"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

const commonQuestions = [
  "Tell me about your services!",
  "Can we collaborate on an AI project?",
  "How can I schedule a meeting?",
]

export default function Chatbot() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const [isOpen, setIsOpen] = useState(false)

  const handleQuickQuestion = (question: string) => {
    handleSubmit({ preventDefault: () => {}, currentTarget: { elements: { input: { value: question } } } } as any)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-electric-blue">AI Assistant</h2>
      {!isOpen ? (
        <div className="space-y-4">
          <p className="text-gray-300">Quick answers to common questions:</p>
          {commonQuestions.map((question, index) => (
            <Button
              key={index}
              onClick={() => {
                setIsOpen(true)
                handleQuickQuestion(question)
              }}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white"
            >
              {question}
            </Button>
          ))}
          <Button
            onClick={() => setIsOpen(true)}
            className="w-full bg-electric-blue hover:bg-electric-blue/80 text-white"
          >
            Start Chat
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <ScrollArea className="h-[300px] w-full rounded-md border p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block p-2 rounded-lg ${message.role === "user" ? "bg-electric-blue text-white" : "bg-gray-700 text-white"}`}
                >
                  {message.content}
                </span>
              </div>
            ))}
          </ScrollArea>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-grow bg-gray-700 border-electric-blue"
            />
            <Button type="submit" className="bg-electric-blue hover:bg-electric-blue/80 text-white">
              Send
            </Button>
          </form>
        </div>
      )}
    </motion.div>
  )
}

