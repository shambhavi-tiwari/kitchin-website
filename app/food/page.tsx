"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { TrendingUp, MapPin, Calendar, Target } from "lucide-react"

export default function FoodPage() {
  const scrollToWaitlist = () => {
    // Redirect to home page and scroll to waitlist
    window.location.href = "/#services"
  }

  const insights = [
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Regional Food Mapping",
      description:
        "From Mumbai's street food culture to Kerala's coconut-rich cuisine, we map regional preferences and dietary patterns across 500+ cities.",
      stats: "Tracking 50M+ meals daily",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2025%2C%202025%2C%2011_22_58%20PM-dox4zsZmASUdiQB0ii14nmhzlwpQ9D.png",
      alt: "Business woman presenting Kitchin app",
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Seasonal Nutrition Intelligence",
      description:
        "Monsoon calls for immunity boosters, winter needs warming spices. We predict seasonal nutritional gaps before they happen.",
      stats: "Seasonal insights from 12 climate zones",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2029%2C%202025%2C%2003_52_37%20PM-zOvhdz7fXRPNUpSa09CKh1IDBrM7bg.png",
      alt: "Chef cooking with love and fresh ingredients",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Meal Compliance Analytics",
      description:
        "Why do people stick to healthy eating? We've cracked the code: convenience + taste + cultural familiarity = lasting habits.",
      stats: "85% meal plan adherence rate",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2024%2C%202025%2C%2005_29_56%20PM-wdeKV9LfD0vnFjNnU35Qj9kGqQhysU.png",
      alt: "Couple using Kitchin app together",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Health Goal Correlation",
      description:
        "Weight loss seekers love protein bowls, diabetics prefer millet-based meals. We connect the dots between goals and preferences.",
      stats: "Analyzing 200+ health markers",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2024%2C%202025%2C%2005_30_21%20PM-7pDYUHhnnkBm50uceqG7mEq1j1Paib.png",
      alt: "Woman exercising with Kitchin meal kit",
    },
  ]

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
            Our Food Intelligence / और कैसे हम अलग हैं
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
            Food That <span style={{ color: "#93C572" }}>Thinks</span> For You
          </h1>
          <p
            className="sushi__description"
            style={{
              textAlign: "center",
              margin: "0 auto",
              maxWidth: "64rem",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            We don't just serve food — we understand it. Here's how we decode India's eating patterns to serve you
            better.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1">
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="p-6 rounded-3xl" style={{ backgroundColor: "#93C572", color: "#fff" }}>
                      {insight.icon}
                    </div>
                    <div>
                      <h2
                        className="sushi__subtitle"
                        style={{
                          fontSize: "1.8rem",
                          marginBottom: "0.5rem",
                          fontFamily: "var(--plus-jakarta-sans)",
                          fontWeight: "bold",
                          color: "#121212",
                        }}
                      >
                        {insight.title}
                      </h2>
                      <p
                        className="sushi__description"
                        style={{
                          fontSize: "1rem",
                          margin: 0,
                          opacity: 0.7,
                          color: "#b1454a",
                          fontFamily: "var(--plus-jakarta-sans)",
                        }}
                      >
                        {insight.stats}
                      </p>
                    </div>
                  </div>

                  <p
                    className="sushi__description"
                    style={{
                      fontSize: "1.2rem",
                      lineHeight: "1.8",
                      fontFamily: "var(--plus-jakarta-sans)",
                    }}
                  >
                    {insight.description}
                  </p>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-center">
                  <Image
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.alt}
                    width={350}
                    height={350}
                    className="transition-transform duration-300 hover:scale-105"
                    style={{
                      objectFit: "contain",
                      maxWidth: "350px",
                      height: "auto",
                    }}
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAAcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj5m4xVvEH1Toi/d1a4z4WfWvKl3ufvvn9P8AjlLcFw=="
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24 relative overflow-hidden">
          {/* Interactive Bubble Decorations */}
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="absolute bubble cursor-pointer"
              style={{
                left: `${8 + (i % 5) * 18}%`,
                top: `${20 + Math.floor(i / 5) * 25}%`,
                width: `${8 + (i % 4) * 4}px`,
                height: `${8 + (i % 4) * 4}px`,
                backgroundColor: i % 3 === 0 ? "#93C572" : i % 3 === 1 ? "#b1454a" : "#D2B48C",
                opacity: 0.2,
                borderRadius: "50%",
                animation: `bubble-float ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
          <div className="max-w-4xl mx-auto py-16">
            <h2
              className="sushi__title"
              style={{
                textAlign: "center",
                marginBottom: "1.5rem",
                fontSize: "3rem",
                fontFamily: "var(--playfair-display)",
              }}
            >
              Ready to Experience <span style={{ color: "#93C572" }}>Intelligent</span> Eating?
            </h2>
            <p
              className="sushi__description"
              style={{
                textAlign: "center",
                marginBottom: "3rem",
                fontSize: "1.25rem",
                fontFamily: "var(--plus-jakarta-sans)",
              }}
            >
              Join thousands of Indians who've discovered the joy of effortless, personalized meal planning.
            </p>
            <button
              onClick={scrollToWaitlist}
              className="kitchin-glitter-green-button px-12 py-4 rounded-3xl font-bold text-xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#93C572",
                color: "#121212",
                fontFamily: "var(--plus-jakarta-sans)",
                border: "3px solid #121212",
              }}
            >
              Start Your Food Journey 🚀
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
