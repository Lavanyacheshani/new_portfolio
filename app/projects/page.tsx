import Hero from "../components/projects/Hero"
import ProjectGallery from "../components/projects/ProjectGallery"
import FeaturedProjects from "../components/projects/FeaturedProjects"
import CaseStudies from "../components/projects/CaseStudies"
import FutureProjects from "../components/projects/FutureProjects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Hero />
      <ProjectGallery />
      <FeaturedProjects />
      <FutureProjects />
    </main>
  )
}

