"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useChat } from "ai/react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import type React from "react" // Added import for React

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    // Simulate sending message
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSending(false)
    setName("")
    setEmail("")
    setMessage("")
    // Here you would typically send the message to your backend
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
    handleInputChange(e)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-electric-blue">Send Me a Message</h2>
      <form onSubmit={handleSendMessage} className="space-y-4">
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-700 border-electric-blue"
          required
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-700 border-electric-blue"
          required
        />
        <Textarea
          placeholder="Your Message"
          value={message}
          onChange={handleMessageChange}
          className="bg-gray-700 border-electric-blue h-32"
          required
        />
        {messages.length > 0 && (
          <div className="text-sm text-gray-400">
            <strong>AI Suggestion:</strong> {messages[messages.length - 1].content}
          </div>
        )}
        <Button
          type="submit"
          className="w-full bg-electric-blue hover:bg-electric-blue/80 text-white"
          disabled={isSending}
        >
          {isSending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </motion.div>
  )
}

