"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import LoadingScreen from "@/components/loading-screen"
import Header from "@/components/header"
import EmailSubscription from "@/components/email-subscription"
import Footer from "@/components/footer"
import { Play, ArrowUpRight } from "lucide-react"

export default function HomePage() {
  const [showLoading, setShowLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollToWaitlist = () => {
    if (typeof window !== "undefined") {
      const waitlistSection = document.getElementById("services")
      if (waitlistSection) {
        waitlistSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  if (!isClient) {
    return (
      <div style={{ backgroundColor: "#fff0de", maxWidth: "1280px", margin: "0 auto" }}>
        <Header />
        <section className="hero">
          <div className="hero-image">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2024%2C%202025%2C%2005_30_19%20PM-WUTQoY8iPE5Z1MHDJIbEHETO5MHlhq.png"
              alt="Indian woman showing Kitchin Food Brain app in traditional kitchen"
              width={550}
              height={750}
              className="hero-image-main"
              style={{
                animation: "none",
                borderBottomLeftRadius: "2rem",
                borderBottomRightRadius: "2rem",
              }}
              priority
              loading="eager"
            />
            <div className="hero-image__overlay" style={{ backgroundColor: "#fff0de" }}></div>
          </div>
          <div className="hero-content">
            <div className="hero-content-info">
              <h1>
                Discover what to eat next, with food that <span style={{ color: "#93C572" }}>thinks</span> before you do
              </h1>
              <p>Experience the joy of effortless, home-cooked meals — fresh, local, and ready when you are.</p>
              <div className="hero-content__buttons">
                <button onClick={scrollToWaitlist} className="hero-content__order-button">
                  Join Waitlist
                </button>
                <Link href="/food">
                  <button className="hero-content__play-button">
                    <Play className="w-6 h-6 mr-3" />
                    Explore Food
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  if (showLoading) {
    return <LoadingScreen onLoadingComplete={() => setShowLoading(false)} />
  }

  return (
    <div style={{ backgroundColor: "#fff0de", maxWidth: "1280px", margin: "0 auto" }}>
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2024%2C%202025%2C%2005_30_19%20PM-WUTQoY8iPE5Z1MHDJIbEHETO5MHlhq.png"
            alt="Indian woman showing Kitchin Food Brain app in traditional kitchen"
            width={550}
            height={750}
            className="hero-image-main"
            style={{
              animation: "none",
              borderBottomLeftRadius: "2rem",
              borderBottomRightRadius: "2rem",
            }}
            priority
            loading="eager"
          />
          <div className="hero-image__overlay" style={{ backgroundColor: "#fff0de" }}></div>
        </div>

        <div className="hero-content">
          <div className="hero-content-info">
            <h1>
              Discover what to eat next, with food that <span style={{ color: "#93C572" }}>thinks</span> before you do
            </h1>
            <p>Experience the joy of effortless, home-cooked meals — fresh, local, and ready when you are.</p>

            <div className="hero-content__buttons">
              <button onClick={scrollToWaitlist} className="hero-content__order-button">
                Join Waitlist
              </button>
              <Link href="/food">
                <button className="hero-content__play-button">
                  <Play className="w-6 h-6 mr-3" />
                  Explore Food
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-us" id="about-us" style={{ backgroundColor: "#fff0de" }}>
        <div className="about-us__content">
          <p className="sushi__subtitle">About Us / हमारे बारे में</p>
          <h3 className="sushi__title">
            Our mission is to bring <span style={{ color: "#93C572" }}>clarity</span> and{" "}
            <span style={{ color: "#93C572" }}>freshness</span> to your everyday meals
          </h3>
          <p className="sushi__description">
            At Kitchin, we believe food decisions deserve as much care as the food itself — and we're building that
            through a system that understands, supports, and serves every household with quiet intelligence.
          </p>
        </div>

        <div className="about-us__image" style={{ backgroundColor: "#fff0de" }}>
          <div
            className="flex items-center justify-center"
            style={{
              padding: "0px 64px",
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2024%2C%202025%2C%2005_30_22%20PM-lHKO1aQuiHOl4kLJ4CpIGylSOCJE5i.png"
              alt="Couple enjoying meal with Kitchin"
              width={500}
              height={500}
              style={{ objectFit: "contain", background: "transparent" }}
              loading="lazy"
            />
          </div>

          <Link href="/about">
            <button className="about-us__button flex items-center">
              Learn More
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      {/* About Our Story Section */}
      <section className="relative py-20" style={{ backgroundColor: "#fff0de" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <p
              className="sushi__subtitle"
              style={{
                textAlign: "center",
                margin: "0 auto 1rem auto",
                fontSize: "1.125rem",
              }}
            >
              Our Story / हमारी कहानी
            </p>
            <h2
              className="sushi__title"
              style={{
                textAlign: "center",
                margin: "0 auto 1.5rem auto",
                fontSize: "4rem",
                lineHeight: "1.1",
              }}
            >
              Food That <span style={{ color: "#93C572" }}>Thinks</span> Before You Do
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <p
                className="sushi__description"
                style={{
                  fontSize: "1.3rem",
                  fontFamily: "var(--plus-jakarta-sans)",
                  lineHeight: "1.8",
                }}
              >
                Every great product begins with a small daily frustration.
              </p>
              <p
                className="sushi__description"
                style={{
                  fontSize: "1.3rem",
                  fontFamily: "var(--plus-jakarta-sans)",
                  lineHeight: "1.8",
                }}
              >
                For us, it was that one question — <strong>"What should I eat today?"</strong>
              </p>
              <p
                className="sushi__description"
                style={{
                  fontSize: "1.1rem",
                  opacity: 0.8,
                  fontFamily: "var(--plus-jakarta-sans)",
                  lineHeight: "1.8",
                }}
              >
                Not just once in a while, but <em>every single day</em>. At 9PM after work. On Sunday mornings. When
                friends came over. When the fridge was full, yet nothing felt right.
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2024%2C%202025%2C%2005_29_56%20PM-wdeKV9LfD0vnFjNnU35Qj9kGqQhysU.png"
                alt="Couple using Kitchin app together"
                width={450}
                height={450}
                className="w-full h-auto"
                style={{ objectFit: "contain" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <EmailSubscription />
      <Footer />
    </div>
  )
}
