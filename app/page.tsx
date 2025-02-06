import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import ExperienceEducation from "./components/ExperienceEducation"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <ExperienceEducation />
      <Contact />
    </main>
  )
}

