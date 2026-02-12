import dynamic from "next/dynamic"
import { Suspense } from "react"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import ExperienceEducation from "./components/ExperienceEducation"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import LoadingSpinner from "./components/LoadingSpinner"

const DynamicParticleBackground = dynamic(() => import("./components/ParticleBackground"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <DynamicParticleBackground />
      </Suspense>
      <Hero />
      <Services />
      <About />
      <ExperienceEducation />
      <Contact />
    </main>
  )
}

