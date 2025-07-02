"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function MenuPage() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({})

  const menuItems = [
    { id: "high-protein-thali", name: "High-Protein Thali", image: "/images/high-protein-thali.png" },
    { id: "paneer-bhurji-bowl", name: "Paneer Bhurji Bowl", image: "/images/paneer-bhurji-bowl.png" },
    { id: "millet-khichdi", name: "Millet Khichdi", image: "/images/millet-khichdi.png" },
    { id: "coconut-curry", name: "Coconut Curry", image: "/images/coconut-curry.png" },
    { id: "tandoori-tofu-salad", name: "Tandoori Tofu Salad", image: "/images/tandoori-tofu-salad.png" },
    { id: "diabetic-friendly-sabzi", name: "Diabetic-Friendly Sabzi", image: "/images/diabetic-friendly-sabzi.png" },
    { id: "quinoa-bowl", name: "Quinoa Power Bowl", image: "/images/quinoa-bowl.png" },
    { id: "dal-tadka", name: "Classic Dal Tadka", image: "/images/dal-tadka.png" },
    { id: "veggie-stir-fry", name: "Mixed Veggie Stir Fry", image: "/images/mixed-veggie-stir-fry.png" },
  ]

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }))
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
            Our Menu / हमारा मेन्यू
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
            Discover Our <span style={{ color: "#93C572" }}>Mindful</span> Meals
          </h1>
          <p
            className="sushi__description"
            style={{
              textAlign: "center",
              margin: "0 auto",
              maxWidth: "48rem",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Each dish is crafted with care, nutrition, and flavor in perfect harmony. Click to explore recipes!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <div key={index} className="kitchin-menu-card text-center">
              <div
                className="relative overflow-hidden rounded-3xl mb-6 mx-auto"
                style={{ width: "280px", height: "280px" }}
              >
                <Image
                  src={imageErrors[index] ? "/placeholder.svg?height=280&width=280" : item.image}
                  alt={item.name}
                  width={280}
                  height={280}
                  className="kitchin-menu-image w-full h-full object-cover rounded-3xl"
                  onError={() => handleImageError(index)}
                  style={{
                    width: "280px",
                    height: "280px",
                    objectFit: "cover",
                  }}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj5m4xVvEH1Toi/d1a4z4WfWvKl3ufvvn9P8AjlLcFw=="
                  loading="eager"
                />
                <div className="kitchin-menu-overlay">
                  <Link href={`/recipe/${item.id}`}>
                    <button className="kitchin-menu-button">Explore Recipe →</button>
                  </Link>
                </div>
              </div>
              <h3
                className="sushi__subtitle hover:text-green-600 transition-colors"
                style={{
                  fontSize: "1.3rem",
                  textAlign: "center",
                  margin: "0 auto",
                  fontFamily: "var(--plus-jakarta-sans)",
                  fontWeight: "600",
                }}
              >
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
