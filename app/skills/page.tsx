import Hero from "../components/skills/Hero"
import SkillGrid from "../components/skills/SkillGrid"
import SoftSkills from "../components/skills/SoftSkills"

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Hero />
      <SkillGrid />
      <SoftSkills />
    </main>
  )
}

