"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Clock, Users, Flame, Truck } from "lucide-react"
import { useState } from "react"

const recipeData: { [key: string]: any } = {
  "high-protein-thali": {
    name: "High-Protein Everyday Thali",
    image: "/images/high-protein-thali.png",
    cookTime: "25 mins",
    calories: "520 kcal",
    deliveryTime: "30 mins",
    servings: "2 people",
    ingredients: [
      "200g Paneer cubes",
      "1 cup Mixed dal",
      "2 Rotis (whole wheat)",
      "1 cup Seasonal vegetables",
      "1 tbsp Ghee",
      "Spices & herbs mix",
    ],
    instructions: [
      "Heat ghee in a pan and add cumin seeds",
      "Add paneer cubes and sauté until golden",
      "Cook dal with turmeric and salt until soft",
      "Prepare fresh rotis on tawa",
      "Steam seasonal vegetables with minimal spices",
      "Serve hot with a dollop of ghee",
    ],
    nutrition: {
      protein: "28g",
      carbs: "45g",
      fat: "18g",
      fiber: "12g",
    },
  },
  "paneer-bhurji-bowl": {
    name: "Paneer Bhurji Bowl",
    image: "/images/paneer-bhurji-bowl.png",
    cookTime: "20 mins",
    calories: "450 kcal",
    deliveryTime: "25 mins",
    servings: "1 person",
    ingredients: [
      "200g Paneer crumbled",
      "1 Onion chopped",
      "2 Tomatoes diced",
      "Green chilies",
      "Turmeric powder",
      "Red chili powder",
    ],
    instructions: [
      "Heat oil in pan",
      "Add onions and sauté until golden",
      "Add tomatoes and cook until soft",
      "Add crumbled paneer and spices",
      "Cook for 5-7 minutes",
      "Garnish with coriander",
    ],
    nutrition: {
      protein: "25g",
      carbs: "15g",
      fat: "20g",
      fiber: "8g",
    },
  },
  "millet-khichdi": {
    name: "Millet Khichdi",
    image: "/images/millet-khichdi.png",
    cookTime: "30 mins",
    calories: "380 kcal",
    deliveryTime: "35 mins",
    servings: "2 people",
    ingredients: ["1 cup Millet", "1/2 cup Moong dal", "Mixed vegetables", "Turmeric powder", "Cumin seeds", "Ghee"],
    instructions: [
      "Wash millet and dal",
      "Heat ghee, add cumin seeds",
      "Add millet, dal and vegetables",
      "Add water and turmeric",
      "Cook until soft and mushy",
      "Serve hot with pickle",
    ],
    nutrition: {
      protein: "15g",
      carbs: "55g",
      fat: "8g",
      fiber: "12g",
    },
  },
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const [imageError, setImageError] = useState(false)
  const recipe = recipeData[params.id] || recipeData["high-protein-thali"]

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <div style={{ backgroundColor: "#fff0de", maxWidth: "1280px", margin: "0 auto", minHeight: "100vh" }}>
      <Header />

      <section style={{ padding: "80px 32px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1
              className="sushi__title"
              style={{
                textAlign: "center",
                fontSize: "4rem",
                fontFamily: "var(--playfair-display)",
              }}
            >
              {recipe.name}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <Image
                src={
                  imageError
                    ? "/placeholder.svg?height=500&width=600"
                    : recipe.image || "/placeholder.svg?height=500&width=600"
                }
                alt={recipe.name}
                width={600}
                height={500}
                className="w-full rounded-3xl shadow-2xl"
                onError={handleImageError}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj5m4xVvEH1Toi/d1a4z4WfWvKl3ufvvn9P8AjlLcFw=="
                loading="eager"
              />
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div
                  className="text-center p-6 rounded-3xl shadow-lg"
                  style={{ backgroundColor: "rgba(147, 197, 114, 0.1)" }}
                >
                  <Clock className="w-10 h-10 mx-auto mb-3" style={{ color: "#93C572" }} />
                  <p
                    className="sushi__subtitle"
                    style={{
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                      fontFamily: "var(--plus-jakarta-sans)",
                    }}
                  >
                    Cook Time
                  </p>
                  <p
                    className="sushi__title"
                    style={{
                      fontSize: "1.5rem",
                      color: "#b1454a",
                      fontFamily: "var(--playfair-display)",
                    }}
                  >
                    {recipe.cookTime}
                  </p>
                </div>
                <div
                  className="text-center p-6 rounded-3xl shadow-lg"
                  style={{ backgroundColor: "rgba(147, 197, 114, 0.1)" }}
                >
                  <Flame className="w-10 h-10 mx-auto mb-3" style={{ color: "#93C572" }} />
                  <p
                    className="sushi__subtitle"
                    style={{
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                      fontFamily: "var(--plus-jakarta-sans)",
                    }}
                  >
                    Calories
                  </p>
                  <p
                    className="sushi__title"
                    style={{
                      fontSize: "1.5rem",
                      color: "#b1454a",
                      fontFamily: "var(--playfair-display)",
                    }}
                  >
                    {recipe.calories}
                  </p>
                </div>
                <div
                  className="text-center p-6 rounded-3xl shadow-lg"
                  style={{ backgroundColor: "rgba(147, 197, 114, 0.1)" }}
                >
                  <Users className="w-10 h-10 mx-auto mb-3" style={{ color: "#93C572" }} />
                  <p
                    className="sushi__subtitle"
                    style={{
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                      fontFamily: "var(--plus-jakarta-sans)",
                    }}
                  >
                    Servings
                  </p>
                  <p
                    className="sushi__title"
                    style={{
                      fontSize: "1.5rem",
                      color: "#b1454a",
                      fontFamily: "var(--playfair-display)",
                    }}
                  >
                    {recipe.servings}
                  </p>
                </div>
                <div
                  className="text-center p-6 rounded-3xl shadow-lg"
                  style={{ backgroundColor: "rgba(147, 197, 114, 0.1)" }}
                >
                  <Truck className="w-10 h-10 mx-auto mb-3" style={{ color: "#93C572" }} />
                  <p
                    className="sushi__subtitle"
                    style={{
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                      fontFamily: "var(--plus-jakarta-sans)",
                    }}
                  >
                    Delivery
                  </p>
                  <p
                    className="sushi__title"
                    style={{
                      fontSize: "1.5rem",
                      color: "#b1454a",
                      fontFamily: "var(--playfair-display)",
                    }}
                  >
                    {recipe.deliveryTime}
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl shadow-lg" style={{ backgroundColor: "rgba(147, 197, 114, 0.1)" }}>
                <h3
                  className="sushi__subtitle"
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    fontFamily: "var(--plus-jakarta-sans)",
                    fontWeight: "600",
                  }}
                >
                  Nutrition Facts
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p
                      className="sushi__description"
                      style={{
                        margin: "0.5rem 0",
                        fontFamily: "var(--plus-jakarta-sans)",
                      }}
                    >
                      Protein: <span style={{ color: "#93C572", fontWeight: "bold" }}>{recipe.nutrition.protein}</span>
                    </p>
                    <p
                      className="sushi__description"
                      style={{
                        margin: "0.5rem 0",
                        fontFamily: "var(--plus-jakarta-sans)",
                      }}
                    >
                      Carbs: <span style={{ color: "#93C572", fontWeight: "bold" }}>{recipe.nutrition.carbs}</span>
                    </p>
                  </div>
                  <div>
                    <p
                      className="sushi__description"
                      style={{
                        margin: "0.5rem 0",
                        fontFamily: "var(--plus-jakarta-sans)",
                      }}
                    >
                      Fat: <span style={{ color: "#93C572", fontWeight: "bold" }}>{recipe.nutrition.fat}</span>
                    </p>
                    <p
                      className="sushi__description"
                      style={{
                        margin: "0.5rem 0",
                        fontFamily: "var(--plus-jakarta-sans)",
                      }}
                    >
                      Fiber: <span style={{ color: "#93C572", fontWeight: "bold" }}>{recipe.nutrition.fiber}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div className="p-8 rounded-3xl shadow-lg" style={{ backgroundColor: "rgba(147, 197, 114, 0.1)" }}>
              <h3
                className="sushi__subtitle"
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "1.5rem",
                  fontFamily: "var(--plus-jakarta-sans)",
                  fontWeight: "600",
                }}
              >
                Ingredients
              </h3>
              <ul className="space-y-4">
                {recipe.ingredients.map((ingredient: string, index: number) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#93C572" }}></div>
                    <span
                      className="sushi__description"
                      style={{
                        margin: 0,
                        fontFamily: "var(--plus-jakarta-sans)",
                      }}
                    >
                      {ingredient}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl shadow-lg" style={{ backgroundColor: "rgba(147, 197, 114, 0.1)" }}>
              <h3
                className="sushi__subtitle"
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "1.5rem",
                  fontFamily: "var(--plus-jakarta-sans)",
                  fontWeight: "600",
                }}
              >
                Instructions
              </h3>
              <ol className="space-y-4">
                {recipe.instructions.map((step: string, index: number) => (
                  <li key={index} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                      style={{ backgroundColor: "#93C572", fontFamily: "var(--plus-jakarta-sans)" }}
                    >
                      {index + 1}
                    </div>
                    <span
                      className="sushi__description"
                      style={{
                        margin: 0,
                        fontFamily: "var(--plus-jakarta-sans)",
                      }}
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="text-center relative overflow-hidden" style={{ paddingBottom: "3rem" }}>
            <button
              className="glitter-green-button px-12 py-4 rounded-3xl font-bold text-xl transition-all duration-300 hover:scale-105 relative z-10"
              style={{
                backgroundColor: "#93C572",
                color: "#121212",
                fontFamily: "var(--plus-jakarta-sans)",
                border: "3px solid #121212",
              }}
            >
              Order This Meal Kit 🛒
            </button>
            <div className="bubbles">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="bubble"
                  style={{
                    "--size": `${Math.random() * 3 + 2}rem`,
                    "--distance": `${Math.random() * 100 + 50}vh`,
                    "--time": `${Math.random() * 5 + 5}s`,
                    "--delay": `${Math.random() * 5}s`,
                    left: `${Math.random() * 100}vw`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .glitter-green-button:hover {
          box-shadow: 
            0 0 20px rgba(147, 197, 114, 0.8),
            0 0 40px rgba(147, 197, 114, 0.6),
            0 0 60px rgba(147, 197, 114, 0.4),
            0 0 80px rgba(147, 197, 114, 0.2);
          animation: glitter-pulse 0.8s ease-in-out infinite;
        }
        
        @keyframes glitter-pulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 
              0 0 20px rgba(147, 197, 114, 0.8),
              0 0 40px rgba(147, 197, 114, 0.6);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 
              0 0 30px rgba(147, 197, 114, 1),
              0 0 60px rgba(147, 197, 114, 0.8),
              0 0 90px rgba(147, 197, 114, 0.6);
          }
        }

        .bubbles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .bubble {
          position: absolute;
          bottom: 0;
          border-radius: 50%;
          background-color: rgba(147, 197, 114, 0.3);
          animation: rise var(--time) linear forwards;
          animation-delay: var(--delay);
          width: var(--size);
          height: var(--size);
        }

        @keyframes rise {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(0, calc(-1 * var(--distance)));
          }
        }
      `}</style>
    </div>
  )
}
