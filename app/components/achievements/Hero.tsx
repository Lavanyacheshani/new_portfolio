"use client"

import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, OrbitControls, Stars, Icosahedron, MeshTransmissionMaterial, Sparkles } from "@react-three/drei"
import { Suspense, useRef } from "react"
import * as THREE from "three"

function AchievementArtifact() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef}>
        <Icosahedron args={[1, 0]}>
          <MeshTransmissionMaterial
            resolution={1024}
            distortion={0.25}
            color="#FFD700"
            thickness={3.0}
            anisotropy={1}
            chromaticAberration={0.1}
            background={new THREE.Color("black")}
          />
        </Icosahedron>
        <Icosahedron args={[1.2, 0]}>
          <meshStandardMaterial color="#FDB931" wireframe transparent opacity={0.3} />
        </Icosahedron>
        <group rotation={[Math.PI / 3, 0, 0]}>
          <mesh>
            <torusGeometry args={[1.8, 0.05, 16, 100]} />
            <meshStandardMaterial color="#FFFFFF" metalness={1} roughness={0.1} emissive="#FFFFFF" emissiveIntensity={0.5} />
          </mesh>
        </group>
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <mesh>
            <torusGeometry args={[2.2, 0.05, 16, 100]} />
            <meshStandardMaterial color="#FDB931" metalness={1} roughness={0.1} emissive="#FDB931" emissiveIntensity={0.2} />
          </mesh>
        </group>
      </group>
    </Float>
  )
}

function FloatingOrbs() {
  const orbs = Array.from({ length: 8 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 4
    ] as [number, number, number],
    color: Math.random() > 0.5 ? "#FDB931" : "#E5E4E2",
    scale: Math.random() * 0.2 + 0.1
  }))

  return (
    <group>
      {orbs.map((orb, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={1} floatIntensity={1}>
          <mesh position={orb.position}>
            <sphereGeometry args={[orb.scale, 32, 32]} />
            <meshStandardMaterial color={orb.color} metalness={0.9} roughness={0.1} />
          </mesh>
        </Float>
      ))}
      <Sparkles count={80} scale={10} size={3} speed={0.4} opacity={0.4} color="#FDB931" />
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#FDB931" />
      <spotLight position={[-10, -5, -10]} angle={0.5} penumbra={1} intensity={2} color="#4c1d95" />
      <pointLight position={[0, 0, 2]} intensity={1} color="white" />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      <AchievementArtifact />
      <FloatingOrbs />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-gray-900 z-0 pointer-events-none"></div>

      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-yellow-400 backdrop-blur-md">
            Milestones & Recognition
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Triumphs of
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
            Dedication
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Celebrating a track record of <span className="text-white font-medium">technical breakthroughs</span>,
          strategic <span className="text-white font-medium">leadership</span>, and recognition on <span className="text-yellow-400 font-medium">global stages</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-yellow-500 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  )
}
