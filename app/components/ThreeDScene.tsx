"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars, Float, PerspectiveCamera, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

function AICore() {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
        }
    })

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} scale={2}>
                <icosahedronGeometry args={[1, 1]} />
                <MeshDistortMaterial
                    color="#4299e1"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
            <mesh scale={2.2}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#805ad5"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </Float>
    )
}

function ParticleField() {
    const count = 2000
    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            // Create a spherical distribution
            const r = 20 * Math.cbrt(Math.random())
            const theta = Math.random() * 2 * Math.PI
            const phi = Math.acos(2 * Math.random() - 1)

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
            positions[i * 3 + 2] = r * Math.cos(phi)
        }
        return positions
    }, [count])

    const pointsRef = useRef<THREE.Points>(null)

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
        }
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.6} sizeAttenuation={true} />
        </points>
    )
}

export default function ThreeDScene() {
    return (
        <div className="absolute inset-0 w-full h-full -z-10 bg-black">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#4299e1" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#9f7aea" />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <AICore />
                <ParticleField />

                <fog attach="fog" args={['#000000', 5, 30]} />
            </Canvas>
        </div>
    )
}
