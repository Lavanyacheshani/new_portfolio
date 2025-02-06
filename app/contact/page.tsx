import Hero from "../components/contact/Hero"
import ContactForm from "../components/contact/ContactForm"
import Chatbot from "../components/contact/Chatbot"
import SocialContacts from "../components/contact/SocialContacts"
import LocationMap from "../components/contact/LocationMap"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <Chatbot />
        </div>
        <SocialContacts />
        <LocationMap />
      </div>
    </main>
  )
}

