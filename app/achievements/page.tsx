import Hero from "../components/achievements/Hero"
import Achievements from "../components/achievements/Achievements"
import Certifications from "../components/achievements/Certifications"
import Timeline from "../components/achievements/Timeline"
import FutureGoals from "../components/achievements/FutureGoals"

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Hero />

      <div className="relative z-10 bg-black">
        {/* Achievements Section */}
        <Achievements />

        {/* Certifications Section */}
        <div className="border-t border-white/5">
          <Certifications />
        </div>

        {/* Timeline Section */}
        <div className="border-t border-white/5">
          <Timeline />
        </div>

        {/* Future Goals Section */}
        <div className="border-t border-white/10 bg-[#050505]">
          <FutureGoals />
        </div>
      </div>

      {/* Finishing Visual Seal */}
      <div className="py-24 border-t border-white/5 bg-black flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.6em] text-gray-800 uppercase italic">
            Credential Index Locked // Global Verification Complete
          </span>
        </div>
      </div>
    </main>
  )
}
