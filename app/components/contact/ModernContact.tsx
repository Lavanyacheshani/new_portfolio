"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaEnvelope,
    FaWhatsapp,
    FaArrowRight,
    FaCopy,
    FaGlobe,
    FaBolt,
    FaFingerprint,
    FaSatellite,
    FaRobot
} from "react-icons/fa"
import { HiSparkles } from "react-icons/hi"

const contactGateways = [
    {
        title: "Professional Network",
        platform: "LinkedIn",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/lavanya-cheshani",
        color: "from-blue-600 to-indigo-600",
        description: "For formal collaborations and industry networking.",
        action: "Bridge Connection"
    },
    {
        title: "Source Code",
        platform: "GitHub",
        icon: FaGithub,
        link: "https://github.com/Lavanyacheshani",
        color: "from-gray-700 to-black",
        description: "Explore my cognitive architectures and repositories.",
        action: "Access Terminal"
    },
    {
        title: "Direct Intelligence",
        platform: "Email",
        icon: FaEnvelope,
        link: "mailto:lavanyacheshani5@gmail.com",
        color: "from-red-500 to-orange-500",
        description: "The primary node for direct and urgent synchronization.",
        action: "Send Signal"
    }
]

export default function ModernContact() {
    const [copied, setCopied] = useState(false)

    const copyEmail = () => {
        navigator.clipboard.writeText("lavanyacheshani5@gmail.com")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section className="py-24 relative overflow-hidden bg-black">
            {/* Neural Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20 border-b border-white/10 pb-12">
                        <div className="max-w-2xl text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                                <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">Communication Node</span>
                            </motion.div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase">
                                ESTABLISH <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">CONNECTIVITY</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                The terminal is open for signal transmission. Select a
                                <span className="text-white"> synchronization protocol </span>
                                below to initiate a link.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-end gap-4"
                        >
                            <button
                                onClick={copyEmail}
                                className="group relative flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Master Node Address</span>
                                    <span className="text-lg font-mono text-blue-400">lavanyacheshani5@gmail.com</span>
                                </div>
                                <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-white/50 group-hover:text-blue-400 transition-colors">
                                    {copied ? <FaBolt className="text-green-400" /> : <FaCopy />}
                                </div>

                                <AnimatePresence>
                                    {copied && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute -top-12 right-0 px-4 py-2 bg-green-500 text-black text-[10px] font-black rounded-full"
                                        >
                                            COPIED TO CLIPBOARD
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    </div>

                    {/* Gateway Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactGateways.map((gate, idx) => (
                            <GatewayCard key={idx} gate={gate} index={idx} />
                        ))}
                    </div>

                    {/* Bottom Intelligence Section */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-10 flex items-center justify-between">
                            <div className="relative z-10 max-w-md">
                                <FaSatellite className="text-3xl text-indigo-400 mb-6" />
                                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">Satellite Pulse</h3>
                                <p className="text-gray-400 font-medium">Global synchronization active. Response latency depends on regional timezone nodes.</p>
                            </div>
                            <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10 scale-[2] pointer-events-none group-hover:scale-[2.5] transition-transform duration-1000">
                                <FaGlobe className="text-white text-9xl" />
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-10 flex flex-col items-center justify-center text-center gap-6">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow" />
                                <FaRobot className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-blue-500" />
                            </div>
                            <div>
                                <h4 className="text-sm font-black text-white tracking-[0.3em] uppercase mb-1">AI Liaison</h4>
                                <p className="text-[10px] font-bold text-gray-500">Autonomous Filtering Active</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function GatewayCard({ gate, index }: { gate: any, index: number }) {
    return (
        <motion.a
            href={gate.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative block h-[450px] rounded-[2.5rem] border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/30 transition-all duration-500"
        >
            {/* Hover Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-b ${gate.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />

            <div className="relative h-full p-10 flex flex-col items-center justify-between z-10">
                <div className="text-center flex flex-col items-center gap-6">
                    <div className="relative">
                        {/* Orbital Ring */}
                        <motion.div
                            className="absolute -inset-6 rounded-full border border-dashed border-white/5 opacity-50 group-hover:opacity-100 group-hover:border-white/20 transition-all duration-700"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <div className={`w-20 h-20 rounded-3xl bg-black/60 border border-white/10 flex items-center justify-center backdrop-blur-xl group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500 relative overflow-hidden`}>
                            <gate.icon className={`text-4xl bg-clip-text text-transparent bg-gradient-to-br ${gate.color} relative z-10`} />
                            <div className={`absolute inset-0 bg-gradient-to-br ${gate.color} blur-2xl opacity-10 group-hover:opacity-40 transition-opacity`} />
                            {/* Shine Animation */}
                            <div className="absolute top-[-100%] left-[-100%] w-[200%] h-[200%] bg-white/10 -skew-x-[45deg] group-hover:animate-shine transition-none pointer-events-none" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <span className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase">{gate.title}</span>
                        <h3 className="text-3xl font-black text-white tracking-tighter mt-2">{gate.platform}</h3>
                    </div>
                </div>

                <div className="text-center space-y-8">
                    <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-500 text-sm leading-relaxed px-2">
                        {gate.description}
                    </p>

                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/5 bg-black/40 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl overflow-hidden relative">
                        <span className="text-[10px] font-black uppercase tracking-widest relative z-10">{gate.action}</span>
                        <FaArrowRight className="text-xs relative z-10 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>

            {/* Internal Fingerprint Decor */}
            <div className="absolute -bottom-20 -left-20 text-white/[0.02] scale-150 rotate-12 blur-sm pointer-events-none group-hover:text-white/[0.05] transition-colors duration-700">
                <FaFingerprint size={300} />
            </div>
        </motion.a>
    )
}
