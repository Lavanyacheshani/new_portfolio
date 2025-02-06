import Hero from "../components/achievements/Hero"
import Achievements from "../components/achievements/Achievements"
import Certifications from "../components/achievements/Certifications"
import Timeline from "../components/achievements/Timeline"
import FutureGoals from "../components/achievements/FutureGoals"

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Achievements />
      <Certifications />
      <Timeline />
      <FutureGoals />
    </main>
  )
}

