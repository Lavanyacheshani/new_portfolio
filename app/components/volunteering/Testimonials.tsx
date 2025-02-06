"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Dr. Jane Smith",
    role: "IEEE WIE Advisor",
    image: "/testimonials/jane-smith.jpg",
    quote:
      "Lavanya's leadership in our IEEE WIE chapter has been transformative. Her dedication and innovative ideas have significantly increased engagement and impact.",
  },
  {
    name: "John Doe",
    role: "GDG Sri Lanka Lead",
    image: "/testimonials/john-doe.jpg",
    quote:
      'Working with Lavanya on the "Build with AI" initiative has been a pleasure. Her technical skills and ability to motivate others are truly impressive.',
  },
  {
    name: "Sarah Lee",
    role: "SLTC IEEE Student Branch Chair",
    image: "/testimonials/sarah-lee.jpg",
    quote:
      "As our treasurer, Lavanya not only managed our finances impeccably but also brought fresh ideas that helped us organize more impactful events.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-glow"
        >
          What Others Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-64"
    >
      <Card
        className="w-full h-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer perspective"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <CardContent className="p-6 h-full flex items-center justify-center">
          <motion.div
            className="w-full h-full"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {!isFlipped ? (
              <div className="flex flex-col items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-electric-blue">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            ) : (
              <div className="transform rotate-180 flex items-center justify-center h-full">
                <p className="text-sm">{testimonial.quote}</p>
              </div>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

