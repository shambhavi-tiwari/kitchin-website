import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--playfair-display",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--plus-jakarta-sans",
})

export const metadata: Metadata = {
  title: "Kitchin - India का Food Brain",
  description: "Discover what to eat next, with food that thinks before you do",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2029%2C%202025%2C%2003_52_37%20PM-CyWYWQcb8SuqdFsEftAVXnfFG8F66I.png",
    shortcut:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2029%2C%202025%2C%2003_52_37%20PM-CyWYWQcb8SuqdFsEftAVXnfFG8F66I.png",
    apple:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2029%2C%202025%2C%2003_52_37%20PM-CyWYWQcb8SuqdFsEftAVXnfFG8F66I.png",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${plusJakartaSans.variable}`}>{children}</body>
    </html>
  )
}
