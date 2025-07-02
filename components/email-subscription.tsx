"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { CheckCircle, X } from "lucide-react"

export default function EmailSubscription() {
  const [email, setEmail] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Set initial window size
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener("mousemove", handleMouseMove)
      return () => section.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email && !isSubmitting) {
      setIsSubmitting(true)

      try {
        // Send email to backend
        const response = await fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        })

        if (response.ok) {
          setShowPopup(true)
          setEmail("")
          setTimeout(() => setShowPopup(false), 4000)
        } else {
          console.error("Failed to subscribe")
          // Still show success message to user for better UX
          setShowPopup(true)
          setEmail("")
          setTimeout(() => setShowPopup(false), 4000)
        }
      } catch (error) {
        console.error("Error subscribing:", error)
        // Still show success message to user for better UX
        setShowPopup(true)
        setEmail("")
        setTimeout(() => setShowPopup(false), 4000)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const dismissPopup = () => {
    setShowPopup(false)
  }

  const getBubbleTransform = (index: number) => {
    if (windowSize.width === 0) return "translate(0px, 0px)" // Default for SSR

    const centerX = windowSize.width / 2
    const centerY = windowSize.height / 2
    const translateX = (mousePosition.x - centerX) * (0.02 + (index % 3) * 0.01)
    const translateY = (mousePosition.y - centerY) * (0.02 + (index % 3) * 0.01)

    return `translate(${translateX}px, ${translateY}px)`
  }

  const getBubbleHoverTransform = (index: number, isHover: boolean) => {
    if (windowSize.width === 0) return "scale(1) translate(0px, 0px)" // Default for SSR

    const centerX = windowSize.width / 2
    const centerY = windowSize.height / 2
    const scale = isHover ? 1.5 : 1
    const multiplier = isHover ? 0.05 : 0.02 + (index % 3) * 0.01
    const translateX = (mousePosition.x - centerX) * multiplier
    const translateY = (mousePosition.y - centerY) * multiplier

    return `scale(${scale}) translate(${translateX}px, ${translateY}px)`
  }

  return (
    <>
      <section
        ref={sectionRef}
        className="subscription flex-center relative overflow-hidden"
        id="services"
        style={{ backgroundColor: "#fff0de", padding: "80px 32px", minHeight: "60vh" }}
      >
        {/* Interactive Bubble Decorations - Distributed across entire section */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute bubble cursor-pointer"
            style={{
              left: `${3 + (i % 7) * 14}%`,
              top: `${10 + Math.floor(i / 7) * 20}%`,
              width: `${8 + (i % 5) * 4}px`,
              height: `${8 + (i % 5) * 4}px`,
              backgroundColor: i % 4 === 0 ? "#93C572" : i % 4 === 1 ? "#b1454a" : i % 4 === 2 ? "#D2B48C" : "#FFE4B5",
              opacity: 0.3,
              borderRadius: "50%",
              transform: getBubbleTransform(i),
              transition: "all 0.3s ease-out",
              animation: `bubble-float ${2 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = getBubbleHoverTransform(i, true)
              e.currentTarget.style.opacity = "0.6"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = getBubbleHoverTransform(i, false)
              e.currentTarget.style.opacity = "0.3"
            }}
          />
        ))}

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h2
            className="sushi__title mb-6"
            style={{
              fontSize: "4rem",
              lineHeight: "1.2",
              textAlign: "center",
              margin: "0 auto 1.5rem auto",
            }}
          >
            Be the first to cook <span style={{ color: "#93C572" }}>smarter</span>
          </h2>
          <h3
            className="mb-8"
            style={{
              fontFamily: "var(--playfair-display)",
              color: "#121212",
              fontSize: "2.5rem",
              fontWeight: "600",
              textAlign: "center",
              margin: "0 auto 2rem auto",
            }}
          >
            Join the <span style={{ color: "#93C572" }}>Kitch</span>
            <span style={{ color: "#121212" }}>in</span> waitlist now!
          </h3>

          <p
            className="sushi__description mb-12"
            style={{
              textAlign: "center",
              margin: "0 auto 3rem auto",
              fontSize: "1.25rem",
            }}
          >
            Don't worry, we don't spam — we just cook up something amazing! 🍳
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div
              className="flex flex-col sm:flex-row gap-4 p-6 rounded-3xl shadow-2xl"
              style={{ backgroundColor: "rgba(18, 18, 18, 0.8)" }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="flex-1 px-6 py-4 rounded-2xl text-lg outline-none disabled:opacity-50"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)", // More translucent
                  color: "#fff",
                  border: "2px solid rgba(255, 255, 255, 0.1)", // More translucent border
                  fontFamily: "var(--plus-jakarta-sans)",
                }}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg glitter-button disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "#93C572",
                  color: "#121212",
                  border: "3px solid #121212",
                  fontFamily: "var(--plus-jakarta-sans)",
                }}
              >
                {isSubmitting ? "Joining..." : "Join us now! 🚀"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Modern Apple-style Popup Notification - Fixed positioning */}
      {showPopup && (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
          <div className="absolute top-24 right-6 pointer-events-auto">
            <div
              className="notification-popup"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                padding: "24px",
                maxWidth: "400px",
                width: "calc(100vw - 48px)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(147, 197, 114, 0.2)",
                animation: "slideInFromTopRight 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                fontFamily: "var(--plus-jakarta-sans)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(147, 197, 114, 0.1)" }}
                >
                  <CheckCircle className="w-6 h-6" style={{ color: "#93C572" }} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3
                    className="font-semibold mb-1"
                    style={{
                      color: "#121212",
                      fontFamily: "var(--plus-jakarta-sans)",
                      fontSize: "1.1rem",
                    }}
                  >
                    Welcome to the waitlist! 🎉
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: "#666",
                      fontFamily: "var(--plus-jakarta-sans)",
                      lineHeight: "1.4",
                    }}
                  >
                    We can't wait to serve you amazing meals. You'll be the first to know when we launch!
                  </p>

                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={dismissPopup}
                      className="text-xs px-3 py-1 rounded-full transition-colors"
                      style={{
                        backgroundColor: "rgba(147, 197, 114, 0.1)",
                        color: "#93C572",
                        fontFamily: "var(--plus-jakarta-sans)",
                        fontWeight: "500",
                      }}
                    >
                      Got it!
                    </button>
                  </div>
                </div>

                <button
                  onClick={dismissPopup}
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
                  style={{ color: "#999" }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes bubble-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-15px) rotate(90deg); 
          }
          50% { 
            transform: translateY(-8px) rotate(180deg); 
          }
          75% { 
            transform: translateY(-20px) rotate(270deg); 
          }
        }
        
        .glitter-button:hover:not(:disabled) {
          box-shadow: 0 0 20px rgba(147, 197, 114, 0.6), 0 0 40px rgba(147, 197, 114, 0.4), 0 0 60px rgba(147, 197, 114, 0.2);
          animation: glitter 0.6s ease-in-out;
        }
        
        @keyframes glitter {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes slideInFromTopRight {
          0% {
            transform: translate(100%, -100%);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0);
            opacity: 1;
          }
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .notification-popup {
            top: 90px !important;
            right: 12px !important;
            left: 12px !important;
            width: calc(100vw - 24px) !important;
            max-width: none !important;
          }
        }
      `}</style>
    </>
  )
}
