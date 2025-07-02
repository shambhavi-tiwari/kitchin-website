"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import EmailSubscription from "@/components/email-subscription"
import Image from "next/image"
import { Brain, Leaf, Zap, Users, Shield, Gamepad2 } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Intelligent Food Assistant",
      description:
        "Kitchin isn't a food app — it's your daily food assistant. We learn what you like, what you stock, and how you eat — then suggest meals that match your goals, habits, and hunger.",
      highlight:
        "No endless scrolling. No recipe rabbit holes. Just one smart, timely answer: 'Here's what to eat today.'",
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Zero Waste Fresh Ingredients",
      description:
        "We deliver exactly what you need — nothing more. Your ingredients are sourced from trusted local vendors, pre-measured for each meal, packed in compostable, garden-safe sachets.",
      highlight: "Cook fresher. Store less. Waste nothing.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Smart Meal Kits",
      description:
        "Instead of browsing 50 items to make rajma chawal — we just give you a Rajma Chawal Kit, already portioned.",
      highlight: "No guessing. No leftovers. Just cook and eat.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Busy Life Solutions",
      description:
        "We cut down your food decision time by 90%. 1-tap meal kits, 15-min prep recipes, optional auto-replenish for pantry items.",
      highlight: "You live, we plan. You eat, we deliver.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Trusted Local Network",
      description:
        "Unlike faceless warehouses, we work with verified local kirana & sabziwalas, real-time freshness checks. You choose your delivery partner.",
      highlight: "Built on trust. Delivered with pride.",
    },
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: "Personalized Experience",
      description:
        "Earn rewards as you cook. Get nudges when you're low on nutrients. Plan your week like a pro — or let us do it for you.",
      highlight: "Eating right feels like winning.",
    },
  ]

  return (
    <div style={{ backgroundColor: "#fff0de", maxWidth: "1280px", margin: "0 auto", minHeight: "100vh" }}>
      <Header />

      <section style={{ padding: "80px 32px", position: "relative", overflow: "hidden" }}>
        {/* Bouncing Images Around the Page - Fixed animations */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2024%2C%202025%2C%2005_29_54%20PM-rzMfNXZHJRqgdYTgZyLNBcs3DuQWLr.png"
            alt="Mouse chef cooking"
            width={60}
            height={60}
            className="absolute kitchin-animate-float-slow"
            style={{ top: "10%", left: "5%", opacity: 0.3 }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj5m4xVvEH1Toi/d1a4z4WfWvKl3ufvvn9P8AjlLcFw=="
            loading="eager"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2024%2C%202025%2C%2005_29_53%20PM-7oV0IwNumGIvb3YUeeigjzgOPwAroZ.png"
            alt="Bears cooking"
            width={70}
            height={70}
            className="absolute kitchin-animate-float-medium"
            style={{ top: "15%", right: "8%", opacity: 0.3 }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj5m4xVvEH1Toi/d1a4z4WfWvKl3ufvvn9P8AjlLcFw=="
            loading="eager"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2024%2C%202025%2C%2005_29_52%20PM-OpGEYtRcsTExTxSzwzZQyis58QrY6d.png"
            alt="Family cooking together"
            width={65}
            height={65}
            className="absolute kitchin-animate-float-fast"
            style={{ top: "40%", left: "3%", opacity: 0.3 }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj5m4xVvEH1Toi/d1a4z4WfWvKl3ufvvn9P8AjlLcFw=="
            loading="eager"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2024%2C%202025%2C%2005_30_22%20PM-lHKO1aQuiHOl4kLJ4CpIGylSOCJE5i.png"
            alt="Couple eating together"
            width={55}
            height={55}
            className="absolute kitchin-animate-float-slow"
            style={{ top: "60%", right: "5%", opacity: 0.3 }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj5m4xVvEH1Toi/d1a4z4WfWvKl3ufvvn9P8AjlLcFw=="
            loading="eager"
          />
        </div>

        <div className="text-center mb-16 relative z-10">
          <p
            className="sushi__subtitle"
            style={{
              textAlign: "center",
              margin: "0 auto 1rem auto",
              fontSize: "1.25rem",
            }}
          >
            Our Services / हमारी सेवाएं
          </p>
          <h1
            className="sushi__title"
            style={{
              fontSize: "4rem",
              marginBottom: "1.5rem",
              textAlign: "center",
              margin: "0 auto 1.5rem auto",
              lineHeight: "1.1",
            }}
          >
            🥇 How We <span style={{ color: "#93C572" }}>Serve</span> You Better
          </h1>
          <p
            className="sushi__description"
            style={{
              fontSize: "1.25rem",
              opacity: 0.8,
              maxWidth: "64rem",
              textAlign: "center",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            We're not just another food service — we're your personal food intelligence system.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col lg:flex-row items-start gap-8 py-8">
                <div className="flex-shrink-0">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: "#93C572", color: "#fff" }}
                  >
                    {service.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3
                    className="sushi__subtitle mb-4"
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "bold",
                      fontFamily: "var(--playfair-display)",
                      color: "#121212",
                    }}
                  >
                    💡 {service.title}
                  </h3>
                  <p
                    className="sushi__description mb-6"
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.7",
                      fontFamily: "var(--plus-jakarta-sans)",
                    }}
                  >
                    {service.description}
                  </p>
                  <div
                    className="p-4 rounded-2xl border-l-4"
                    style={{
                      backgroundColor: "rgba(147, 197, 114, 0.1)",
                      borderColor: "#93C572",
                    }}
                  >
                    <p
                      className="font-semibold italic"
                      style={{
                        color: "#121212",
                        fontFamily: "var(--plus-jakarta-sans)",
                        fontSize: "1.1rem",
                      }}
                    >
                      "{service.highlight}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-60"
                style={{ backgroundColor: "#b1454a" }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full opacity-40"
                style={{ backgroundColor: "#93C572" }}
              ></div>
            </div>
          ))}
        </div>
      </section>

      <EmailSubscription />
      <Footer />
    </div>
  )
}
