"use client"

import { Linkedin, Instagram, Mail, Heart } from "lucide-react"

export default function Footer() {
  const handleSocialClick = (platform: string) => {
    const links = {
      linkedin: "https://linkedin.com",
      instagram: "https://www.instagram.com/inmykitchin/",
      email: "mailto:inmykitchin@gmail.com",
    }

    if (platform === "email") {
      window.location.href = links[platform]
    } else {
      window.open(links[platform as keyof typeof links], "_blank")
    }
  }

  return (
    <footer
      className="w-full py-12 px-8"
      style={{
        backgroundColor: "#fff0de",
        maxWidth: "1280px",
        margin: "0 auto",
        borderTop: "1px solid rgba(18, 18, 18, 0.1)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-8">
          {/* Logo */}
          <h3
            className="text-3xl font-bold mb-4"
            style={{
              fontFamily: "var(--playfair-display)",
              color: "#121212",
            }}
          >
            <span style={{ color: "#93C572" }}>Kitch</span>
            <span style={{ color: "#121212" }}>in</span>
          </h3>

          {/* Tagline */}
          <p
            className="text-lg mb-6"
            style={{
              fontFamily: "var(--plus-jakarta-sans)",
              color: "#121212",
              opacity: 0.7,
              fontWeight: "400",
            }}
          >
            India का Food Brain
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => handleSocialClick("linkedin")}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{
                backgroundColor: "rgba(18, 18, 18, 0.05)",
                border: "1px solid rgba(18, 18, 18, 0.1)",
              }}
            >
              <Linkedin size={20} color="#121212" />
            </button>
            <button
              onClick={() => handleSocialClick("instagram")}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{
                backgroundColor: "rgba(18, 18, 18, 0.05)",
                border: "1px solid rgba(18, 18, 18, 0.1)",
              }}
            >
              <Instagram size={20} color="#121212" />
            </button>
            <button
              onClick={() => handleSocialClick("email")}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{
                backgroundColor: "rgba(18, 18, 18, 0.05)",
                border: "1px solid rgba(18, 18, 18, 0.1)",
              }}
            >
              <Mail size={20} color="#121212" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6" style={{ borderTop: "1px solid rgba(18, 18, 18, 0.1)" }}>
          <p
            className="text-sm flex items-center justify-center gap-2"
            style={{
              fontFamily: "var(--plus-jakarta-sans)",
              color: "#121212",
              opacity: 0.6,
            }}
          >
            © 2025 Kitchin. Made with <Heart size={14} color="#93C572" fill="#93C572" /> for India's food lovers.
          </p>
        </div>
      </div>
    </footer>
  )
}
