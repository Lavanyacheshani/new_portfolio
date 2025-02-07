"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function LocationMap() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-electric-blue">My Location</h2>
        {/* Adjusted aspect ratio and height */}
        <div className="mb-6" style={{ height: '500px' }}> {/* Increase the height here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585989437!2d79.9539721!3d6.9892039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sMeepe%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1677886192333!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full bg-electric-blue hover:bg-electric-blue/80 text-white">
              Schedule an In-Person Meeting
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white">
            <DialogHeader>
              <DialogTitle>Schedule a Meeting</DialogTitle>
              <DialogDescription>
                Please provide your details and preferred meeting time. I'll get back to you to confirm the appointment.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p>Meeting scheduling form would go here.</p>
              <p>Include fields for name, email, preferred date/time, and meeting purpose.</p>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </section>
  )
}
