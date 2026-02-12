import Hero from "../components/contact/Hero"
import ModernContact from "../components/contact/ModernContact"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <div className="relative z-10 -mt-20">
        <ModernContact />
      </div>

      {/* Decorative Finish */}
      <div className="py-20 border-t border-white/5 bg-black">
        <div className="container mx-auto px-4 text-center">
          <span className="text-[10px] font-bold tracking-[0.5em] text-gray-800 uppercase italic">
            Secure Connection Established // Data Transmission Ready
          </span>
        </div>
      </div>
    </main>
  )
}
