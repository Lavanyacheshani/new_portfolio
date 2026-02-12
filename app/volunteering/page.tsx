import Hero from "../components/volunteering/Hero"
import LeadershipRoles from "../components/volunteering/LeadershipRoles"
import VolunteeringProjects from "../components/volunteering/VolunteeringProjects"
import Timeline from "../components/volunteering/Timeline"
import Testimonials from "../components/volunteering/Testimonials"

export default function VolunteeringPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <LeadershipRoles />
      <VolunteeringProjects />
      <Timeline />
    </main>
  )
}

