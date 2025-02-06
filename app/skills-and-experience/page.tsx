import Hero from "../components/skills/Hero"
import SkillGrid from "../components/skills/SkillGrid"
import SoftSkills from "../components/skills/SoftSkills"

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <SkillGrid />
        <SoftSkills />
      </div>
    </main>
  )
}

