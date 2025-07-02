"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header>
      <nav className="header__nav">
        <div className="header__logo">
          <Link href="/">
            <h4>
              <span style={{ color: "#93C572" }}>Kitch</span>
              <span style={{ color: "#121212" }}>in</span>
            </h4>
          </Link>
          <div className="header__logo-overlay" style={{ backgroundColor: "#fff0de" }}></div>
        </div>

        {/* Desktop Menu */}
        <ul className="header__menu">
          <li>
            <Link href="/food">Food</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="header__menu-mobile">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={closeMobileMenu} />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h4 className="text-2xl font-bold">
                <span style={{ color: "#93C572" }}>Kitch</span>
                <span style={{ color: "#121212" }}>in</span>
              </h4>
              <button
                onClick={closeMobileMenu}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="p-6">
              <nav className="space-y-6">
                <Link
                  href="/food"
                  className="block py-3 px-4 text-lg font-medium text-gray-800 hover:text-white hover:bg-green-600 rounded-lg transition-all duration-200"
                  onClick={closeMobileMenu}
                  style={{ fontFamily: "var(--plus-jakarta-sans)" }}
                >
                  🍽️ Food Intelligence
                </Link>
                <Link
                  href="/services"
                  className="block py-3 px-4 text-lg font-medium text-gray-800 hover:text-white hover:bg-green-600 rounded-lg transition-all duration-200"
                  onClick={closeMobileMenu}
                  style={{ fontFamily: "var(--plus-jakarta-sans)" }}
                >
                  🛠️ Our Services
                </Link>
                <Link
                  href="/about"
                  className="block py-3 px-4 text-lg font-medium text-gray-800 hover:text-white hover:bg-green-600 rounded-lg transition-all duration-200"
                  onClick={closeMobileMenu}
                  style={{ fontFamily: "var(--plus-jakarta-sans)" }}
                >
                  📖 About Us
                </Link>
                <Link
                  href="/menu"
                  className="block py-3 px-4 text-lg font-medium text-gray-800 hover:text-white hover:bg-green-600 rounded-lg transition-all duration-200"
                  onClick={closeMobileMenu}
                  style={{ fontFamily: "var(--plus-jakarta-sans)" }}
                >
                  🍛 Menu
                </Link>
              </nav>

              {/* CTA Section in Sidebar */}
              <div className="mt-8 p-4 rounded-2xl" style={{ backgroundColor: "rgba(147, 197, 114, 0.1)" }}>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    color: "#121212",
                    fontFamily: "var(--playfair-display)",
                  }}
                >
                  Join the Waitlist! 🚀
                </h3>
                <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: "var(--plus-jakarta-sans)" }}>
                  Be the first to experience intelligent cooking
                </p>
                <button
                  onClick={() => {
                    closeMobileMenu()
                    // Scroll to waitlist section
                    setTimeout(() => {
                      const waitlistSection = document.getElementById("services")
                      if (waitlistSection) {
                        waitlistSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }, 300)
                  }}
                  className="w-full py-2 px-4 rounded-lg font-medium text-white transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: "#93C572",
                    fontFamily: "var(--plus-jakarta-sans)",
                  }}
                >
                  Join Now
                </button>
              </div>
            </div>

            {/* Sidebar Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500" style={{ fontFamily: "var(--plus-jakarta-sans)" }}>
                India का Food Brain 🧠
              </p>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
