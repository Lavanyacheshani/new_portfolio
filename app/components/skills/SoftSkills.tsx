"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaReact, FaDatabase } from "react-icons/fa"

const techIcons = [FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaReact, FaDatabase]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const icons: Icon[] = []
    const iconCount = 50

    class Icon {
      x: number
      y: number
      size: number
      icon: typeof FaJava
      rotation: number
      rotationSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 30 + 10
        this.icon = techIcons[Math.floor(Math.random() * techIcons.length)]
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
      }

      update() {
        this.y -= 0.5
        if (this.y < -this.size) this.y = canvas.height + this.size
        this.rotation += this.rotationSpeed
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.font = `${this.size}px "Font Awesome 5 Free"`
        ctx.fillStyle = "rgba(0, 255, 255, 0.2)"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(String.fromCharCode(Number.parseInt(this.icon.iconName, 16)), 0, 0)
        ctx.restore()
      }
    }

    function init() {
      for (let i = 0; i < iconCount; i++) {
        icons.push(new Icon())
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      icons.forEach((icon) => {
        icon.update()
        icon.draw()
      })
      requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-glow"
        >
          Crafting Innovation, One Skill at a Time
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          From mastering cutting-edge technologies to leading impactful projects, I thrive on innovation and
          problem-solving. Explore my expertise!
        </motion.p>
      </div>
    </section>
  )
}

