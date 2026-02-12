"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles } from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Achievements", href: "/achievements" },
  { name: "Volunteering", href: "/volunteering" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed w-full top-0 left-0 z-[100] transition-all duration-500 py-4 px-6 md:px-12 pointer-events-none">
      <div className={`
        mx-auto flex items-center justify-between transition-all duration-500 pointer-events-auto
        ${scrolled
          ? "max-w-4xl px-6 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          : "max-w-7xl px-0 py-2 bg-transparent border-transparent"
        }
      `}>
        {/* Unique Signature Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl group-hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
              {/* Animated Neural Pulse */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-transparent"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <span className="relative z-10 text-2xl font-black italic tracking-tighter text-white group-hover:scale-110 transition-transform duration-500">
                LC
              </span>
            </div>

            {/* Signature Dot Trace */}
            <motion.div
              className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full blur-[2px]"
              animate={{ opacity: [1, 0.4, 1], scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:flex flex-col"
          >
            <span className="text-[10px] font-black tracking-[0.4em] text-gray-400 group-hover:text-blue-400 transition-colors uppercase">Creative Entity</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Active System</span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-bold tracking-tight' transition-colors group"
              >
                <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                  {item.name}
                </span>

                {/* Active Indicator (Pill) */}
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/5 backdrop-blur-md"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}

                {/* Hover Indicator */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5 rounded-full -z-10" />
              </Link>
            )
          })}
        </nav>

        {/* Mobile Action/Menu Button */}
        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <a
            href="mailto:lavanyacheshani5@gmail.com"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all duration-300 active:scale-95"
          >
            Hire Me
            <Sparkles className="w-3 h-3" />
          </a>

          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-lg z-40 pointer-events-auto md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[80%] h-full bg-black border-l border-white/10 z-50 p-8 flex flex-col pointer-events-auto md:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-black tracking-tighter text-white">MENU</span>
                <button onClick={() => setIsOpen(false)} className="p-2 text-gray-400 hover:text-white">
                  <X size={32} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-3xl font-black tracking-tighter transition-colors ${pathname === item.href ? "text-blue-500" : "text-white"}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-12 border-t border-white/10">
                <p className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-4">Let's Connect</p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10" />
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10" />
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
