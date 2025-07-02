"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const scrollToWaitlist = () => {
    // Redirect to home page and scroll to waitlist
    window.location.href = "/#services"
  }

  return (
    <div style={{ backgroundColor: "#fff0de", maxWidth: "1280px", margin: "0 auto", minHeight: "100vh" }}>
      <Header />

      <section style={{ padding: "80px 32px" }}>
        <div className="text-center mb-16">
          <p
            className="sushi__subtitle"
            style={{
              textAlign: "center",
              margin: "0 auto 1rem auto",
              fontSize: "1.125rem",
            }}
          >
            About Us / हमारे बारे में
          </p>
          <h1
            className="sushi__title"
            style={{
              textAlign: "center",
              margin: "0 auto 1.5rem auto",
              fontSize: "4rem",
              lineHeight: "1.1",
            }}
          >
            🌱 The Story Behind <span style={{ color: "#93C572" }}>Kitchin</span>
          </h1>
        </div>

        <div className="max-w-5xl mx-auto space-y-20">
          {/* Story Section - No images, just flowing text */}
          <div className="space-y-8">
            <p
              className="sushi__description"
              style={{
                fontSize: "1.3rem",
                textAlign: "center",
                fontFamily: "var(--plus-jakarta-sans)",
              }}
            >
              Every great product begins with a small daily frustration.
            </p>
            <p
              className="sushi__description"
              style={{
                fontSize: "1.3rem",
                textAlign: "center",
                fontFamily: "var(--plus-jakarta-sans)",
              }}
            >
              For us, it was that one question — <strong>"What should I eat today?"</strong>
            </p>
            <p
              className="sushi__description"
              style={{
                fontSize: "1.1rem",
                textAlign: "center",
                opacity: 0.8,
                fontFamily: "var(--plus-jakarta-sans)",
              }}
            >
              Not just once in a while, but <em>every single day</em>. At 9PM after work. On Sunday mornings. When
              friends came over. When the fridge was full, yet nothing felt right.
            </p>
            <p
              className="sushi__description"
              style={{
                fontSize: "1.1rem",
                textAlign: "center",
                opacity: 0.8,
                fontFamily: "var(--plus-jakarta-sans)",
              }}
            >
              Ordering online was expensive. Cooking at home meant guessing, overbuying, and wasting. Grocery apps
              offered a million SKUs but zero clarity. And meal kits? They felt robotic — rigid, soulless, and mostly
              built for the West.
            </p>

            <div className="text-center py-12">
              <p
                className="sushi__subtitle"
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                  fontFamily: "var(--plus-jakarta-sans)",
                }}
              >
                We realized something deeper:
              </p>
              <p
                className="sushi__title"
                style={{
                  fontSize: "1.8rem",
                  color: "#b1454a",
                  marginBottom: "1rem",
                  textAlign: "center",
                  fontFamily: "var(--playfair-display)",
                }}
              >
                Food isn't just fuel. It's identity. Mood. Health. Culture. Memory.
              </p>
              <p
                className="sushi__description"
                style={{
                  fontSize: "1.1rem",
                  textAlign: "center",
                  fontFamily: "var(--plus-jakarta-sans)",
                }}
              >
                But somewhere along the way, food decisions became stressful — not joyful.
              </p>
            </div>

            {/* Crazy Question Section with Animated Animals */}
            <div
              className="relative py-16 px-16 rounded-3xl overflow-hidden"
              style={{ backgroundColor: "transparent" }}
            >
              {/* Left Animal - Bigger and better positioned */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2024%2C%202025%2C%2005_29_54%20PM-rzMfNXZHJRqgdYTgZyLNBcs3DuQWLr.png"
                  alt="Mouse chef cooking with vegetables"
                  width={180}
                  height={180}
                  className="kitchin-bouncing-animal"
                  style={{ objectFit: "contain" }}
                  loading="eager"
                  priority
                />
              </div>

              {/* Right Animal - Bigger and better positioned */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2024%2C%202025%2C%2005_29_53%20PM-7oV0IwNumGIvb3YUeeigjzgOPwAroZ.png"
                  alt="Bears cooking with vegetables"
                  width={180}
                  height={180}
                  className="kitchin-bouncing-animal"
                  style={{ objectFit: "contain" }}
                  loading="eager"
                  priority
                />
              </div>

              {/* Center Text - Adjusted padding */}
              <div className="text-center px-56 lg:px-56 md:px-40 sm:px-32 xs:px-24">
                <p
                  className="sushi__title"
                  style={{
                    fontSize: "2rem",
                    color: "#121212",
                    marginBottom: "1rem",
                    textAlign: "center",
                    fontFamily: "var(--playfair-display)",
                  }}
                >
                  So we asked a crazy question:
                </p>
                <p
                  className="sushi__description"
                  style={{
                    fontSize: "1.3rem",
                    color: "#121212",
                    marginBottom: "0.5rem",
                    textAlign: "center",
                    fontFamily: "var(--plus-jakarta-sans)",
                  }}
                >
                  What if there was an operating system for eating?
                </p>
                <p
                  className="sushi__description"
                  style={{
                    fontSize: "1.3rem",
                    color: "#121212",
                    marginBottom: "1.5rem",
                    textAlign: "center",
                    fontFamily: "var(--plus-jakarta-sans)",
                  }}
                >
                  Something that thinks like your mom, plans like a nutritionist, and delivers with care?
                </p>
                <p
                  className="sushi__title"
                  style={{
                    fontSize: "2.5rem",
                    color: "#93C572",
                    margin: 0,
                    textAlign: "center",
                    fontFamily: "var(--playfair-display)",
                  }}
                >
                  That vision became Kitchin.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA with whimsical animations */}
          <div className="text-center py-16 relative overflow-hidden">
            {/* Interactive Bubble Decorations */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bubble cursor-pointer"
                style={{
                  left: `${5 + (i % 6) * 15}%`,
                  top: `${15 + Math.floor(i / 6) * 20}%`,
                  width: `${6 + (i % 4) * 3}px`,
                  height: `${6 + (i % 4) * 3}px`,
                  backgroundColor: i % 3 === 0 ? "#93C572" : i % 3 === 1 ? "#b1454a" : "#D2B48C",
                  opacity: 0.25,
                  borderRadius: "50%",
                  animation: `bubble-float ${3 + (i % 3)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}

            {/* Floating Kitchen Doodles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 text-3xl opacity-20 kitchin-animate-float-slow">🥄</div>
              <div className="absolute top-20 right-20 text-2xl opacity-15 kitchin-animate-float-medium">🌿</div>
              <div className="absolute bottom-20 left-20 text-2xl opacity-20 kitchin-animate-float-fast">🍴</div>
              <div className="absolute top-40 left-1/3 text-xl opacity-15 kitchin-animate-float-slow">🥢</div>
              <div className="absolute bottom-30 right-30 text-3xl opacity-20 kitchin-animate-float-medium">🌱</div>
              <div className="absolute top-60 right-1/4 text-2xl opacity-15 kitchin-animate-float-fast">🥣</div>
            </div>

            <h2
              className="sushi__title kitchin-animate-pulse-gentle"
              style={{
                textAlign: "center",
                marginBottom: "1.5rem",
                fontFamily: "var(--playfair-display)",
                fontSize: "2.5rem",
              }}
            >
              That's the future we're building.
            </h2>
            <p
              className="sushi__description kitchin-animate-pulse-gentle"
              style={{
                textAlign: "center",
                marginBottom: "2rem",
                fontFamily: "var(--plus-jakarta-sans)",
                fontSize: "1.2rem",
              }}
            >
              One ingredient kit. One meal. One user at a time.
            </p>
            <p
              className="sushi__title kitchin-animate-pulse-gentle"
              style={{
                color: "#93C572",
                textAlign: "center",
                marginBottom: "3rem",
                fontFamily: "var(--playfair-display)",
                fontSize: "3rem",
                fontWeight: "800",
              }}
            >
              Welcome to <span style={{ color: "#93C572" }}>Kitch</span>
              <span style={{ color: "#121212" }}>in</span>.
            </p>
            <button
              onClick={scrollToWaitlist}
              className="kitchin-glitter-green-button kitchin-animate-bounce-gentle px-12 py-4 rounded-3xl font-bold text-xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#93C572",
                color: "#121212",
                fontFamily: "var(--plus-jakarta-sans)",
                border: "3px solid #121212",
              }}
            >
              Join Our Journey 🚀
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
