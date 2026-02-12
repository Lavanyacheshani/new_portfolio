import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Header from "./components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Lavanya Cheshani - AI Enthusiast | Software Engineer | Innovator",
  description:
    "Portfolio website of Lavanya Cheshani, showcasing expertise in AI, software engineering, and innovation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

