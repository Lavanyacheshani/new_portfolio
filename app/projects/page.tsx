import Hero from "../components/projects/Hero"
import ProjectGallery from "../components/projects/ProjectGallery"
import FeaturedProjects from "../components/projects/FeaturedProjects"
import FutureProjects from "../components/projects/FutureProjects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Hero />

      <div className="relative z-10">
        <ProjectGallery />
        <FeaturedProjects />
        <FutureProjects />
      </div>

      {/* Final Visual Seal */}
      <div className="py-20 border-t border-white/5 bg-black flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.5em] text-gray-800 uppercase italic">
            End of Projects Register // Global Sync Complete
          </span>
        </div>
      </div>
    </main>
  )
}
