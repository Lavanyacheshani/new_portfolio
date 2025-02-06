import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"

export function Particles() {
  const points = useRef()

  const particlesCount = 5000
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  useFrame((state) => {
    const { clock } = state
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3
      points.current.geometry.attributes.position.array[i3] += Math.sin(clock.elapsedTime + i3) * 0.001
      points.current.geometry.attributes.position.array[i3 + 1] += Math.cos(clock.elapsedTime + i3 + 1) * 0.001
      points.current.geometry.attributes.position.array[i3 + 2] += Math.sin(clock.elapsedTime + i3 + 2) * 0.001
    }
    points.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#4fc3f7" sizeAttenuation={true} />
    </points>
  )
}

