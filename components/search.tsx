"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Array<{ title: string; path: string; content: string; section: string }>>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const searchData = [
    // Home Page Content
    {
      title: "Food Intelligence",
      path: "/",
      content: "food intelligence brain thinks patterns eating habits discover what to eat next",
      section: "Home",
    },
    {
      title: "Join Waitlist",
      path: "/#services",
      content: "waitlist join email subscription cook smarter be first",
      section: "Home",
    },
    {
      title: "Our Mission",
      path: "/",
      content: "mission clarity freshness everyday meals intelligence trust quiet",
      section: "Home",
    },
    {
      title: "Food Brain",
      path: "/",
      content: "india food brain operating system eating thinks before you do",
      section: "Home",
    },

    // Food Page Content
    {
      title: "Regional Food Mapping",
      path: "/food",
      content: "mumbai street food kerala coconut cuisine regional preferences dietary patterns cities",
      section: "Food Intelligence",
    },
    {
      title: "Seasonal Nutrition",
      path: "/food",
      content: "monsoon immunity boosters winter warming spices seasonal nutritional gaps climate zones",
      section: "Food Intelligence",
    },
    {
      title: "Meal Compliance Analytics",
      path: "/food",
      content: "healthy eating convenience taste cultural familiarity lasting habits adherence",
      section: "Food Intelligence",
    },
    {
      title: "Health Goal Correlation",
      path: "/food",
      content: "weight loss protein bowls diabetics millet meals health markers goals preferences",
      section: "Food Intelligence",
    },

    // Services Page Content
    {
      title: "Intelligent Food Assistant",
      path: "/services",
      content: "daily food assistant learn what you like stock eat suggest meals goals habits hunger",
      section: "Services",
    },
    {
      title: "Zero Waste Ingredients",
      path: "/services",
      content: "exactly what you need local vendors pre-measured compostable garden-safe sachets",
      section: "Services",
    },
    {
      title: "Smart Meal Kits",
      path: "/services",
      content: "rajma chawal kit portioned no guessing no leftovers just cook eat",
      section: "Services",
    },
    {
      title: "Busy Life Solutions",
      path: "/services",
      content: "food decision time 1-tap meal kits 15-min prep recipes auto-replenish pantry",
      section: "Services",
    },
    {
      title: "Trusted Local Network",
      path: "/services",
      content: "verified local kirana sabziwalas real-time freshness checks delivery partner",
      section: "Services",
    },
    {
      title: "Personalized Experience",
      path: "/services",
      content: "earn rewards cook nudges nutrients plan week eating right feels winning",
      section: "Services",
    },

    // About Page Content
    {
      title: "Our Story",
      path: "/about",
      content: "story began frustration what should eat today operating system eating daily",
      section: "About",
    },
    {
      title: "Daily Frustration",
      path: "/about",
      content: "9pm after work sunday mornings friends came over fridge full nothing felt right",
      section: "About",
    },
    {
      title: "Food Identity",
      path: "/about",
      content: "food identity mood health culture memory decisions stressful not joyful",
      section: "About",
    },
    {
      title: "Operating System",
      path: "/about",
      content: "operating system eating thinks like mom plans nutritionist delivers care",
      section: "About",
    },
    {
      title: "Kitchin Born",
      path: "/about",
      content: "that vision became kitchin clarity freshness everyday meals quiet intelligence",
      section: "About",
    },

    // Menu/Recipe Content
    {
      title: "High-Protein Thali",
      path: "/menu",
      content: "high protein everyday thali paneer dal rotis vegetables ghee spices",
      section: "Menu",
    },
    {
      title: "Paneer Bhurji Bowl",
      path: "/menu",
      content: "paneer bhurji bowl crumbled onion tomatoes green chilies turmeric",
      section: "Menu",
    },
    {
      title: "Millet Khichdi",
      path: "/menu",
      content: "millet khichdi moong dal mixed vegetables turmeric cumin ghee",
      section: "Menu",
    },
    {
      title: "Recipe Details",
      path: "/recipe/high-protein-thali",
      content: "cook time calories servings delivery nutrition facts ingredients instructions",
      section: "Recipes",
    },

    // General Terms
    {
      title: "Fresh Ingredients",
      path: "/services",
      content: "ultra fresh zero waste ingredients local vendors measured portions",
      section: "Services",
    },
    {
      title: "Smart Cooking",
      path: "/services",
      content: "smart cooking decide with you not for you assistant intelligence",
      section: "Services",
    },
    {
      title: "Indian Cuisine",
      path: "/food",
      content: "indian cuisine regional mapping mumbai kerala coconut spices traditional",
      section: "Food",
    },
    {
      title: "Healthy Eating",
      path: "/food",
      content: "healthy eating compliance analytics convenience taste cultural familiarity",
      section: "Food",
    },
    {
      title: "Meal Planning",
      path: "/services",
      content: "meal planning personalized experience week planning auto-replenish",
      section: "Services",
    },
    {
      title: "Nutrition",
      path: "/food",
      content: "nutrition seasonal intelligence immunity boosters health markers goals",
      section: "Food",
    },
    {
      title: "Local Vendors",
      path: "/services",
      content: "local vendors kirana sabziwalas trusted network verified freshness",
      section: "Services",
    },
    {
      title: "Food Culture",
      path: "/about",
      content: "food culture identity memory mood health decisions joyful not stressful",
      section: "About",
    },
  ]

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim()) {
      const searchTerm = query.toLowerCase()
      const filtered = searchData
        .filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm) ||
            item.content.toLowerCase().includes(searchTerm) ||
            item.section.toLowerCase().includes(searchTerm),
        )
        .sort((a, b) => {
          // Prioritize title matches
          const aTitle = a.title.toLowerCase().includes(searchTerm)
          const bTitle = b.title.toLowerCase().includes(searchTerm)
          if (aTitle && !bTitle) return -1
          if (!aTitle && bTitle) return 1
          return 0
        })
      setResults(filtered.slice(0, 6)) // Limit to 6 results for dropdown
    } else {
      setResults([])
    }
  }, [query])

  const handleResultClick = (path: string) => {
    router.push(path)
    setIsOpen(false)
    setQuery("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false)
      setQuery("")
    }
  }

  const funnyNoResults = [
    "🤔 Hmm, even our food brain is scratching its head on this one!",
    "🍳 Our chef is still learning this recipe... try something else?",
    "🔍 We've looked everywhere - even in the spice cabinet! No luck.",
    "🤷‍♀️ Not even Google aunty knows this one. Try 'food' or 'recipes'?",
    "🧠 Our AI is having a brain freeze... maybe try 'services' or 'about'?",
    "🍛 This search is rarer than perfectly cooked biryani rice!",
  ]

  const getRandomFunnyMessage = () => {
    return funnyNoResults[Math.floor(Math.random() * funnyNoResults.length)]
  }

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <Search size={24} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40 bg-black bg-opacity-20" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl border-b-2 border-gray-100">
            <div className="max-w-4xl mx-auto">
              {/* Search Input */}
              <div className="flex items-center p-6 border-b border-gray-200">
                <Search size={24} className="text-gray-500 mr-4" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for recipes, food intelligence, services..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 text-lg outline-none"
                  style={{
                    color: "#121212",
                    fontFamily: "var(--plus-jakarta-sans)",
                    fontWeight: "500",
                  }}
                />
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setQuery("")
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors ml-4"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto bg-white">
                {query.trim() && results.length === 0 && (
                  <div className="p-8 text-center">
                    <p
                      className="text-lg font-medium mb-3"
                      style={{
                        color: "#121212",
                        fontFamily: "var(--plus-jakarta-sans)",
                      }}
                    >
                      {getRandomFunnyMessage()}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["Food Brain", "Recipes", "Services", "Our Story", "Ingredients"].map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => setQuery(suggestion)}
                          className="px-3 py-1 text-sm rounded-full transition-colors hover:scale-105"
                          style={{
                            backgroundColor: "#93C572",
                            color: "white",
                            fontFamily: "var(--plus-jakarta-sans)",
                          }}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {results.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleResultClick(result.path)}
                    className="w-full p-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p
                          className="font-bold text-lg mb-1"
                          style={{
                            color: "#121212",
                            fontFamily: "var(--plus-jakarta-sans)",
                          }}
                        >
                          {result.title}
                        </p>
                        <p className="text-sm text-gray-600" style={{ fontFamily: "var(--plus-jakarta-sans)" }}>
                          {result.content.substring(0, 100)}...
                        </p>
                      </div>
                      <span
                        className="text-xs px-3 py-1 rounded-full ml-4 flex-shrink-0"
                        style={{
                          backgroundColor: "rgba(147, 197, 114, 0.1)",
                          color: "#93C572",
                          fontFamily: "var(--plus-jakarta-sans)",
                          fontWeight: "600",
                        }}
                      >
                        {result.section}
                      </span>
                    </div>
                  </button>
                ))}

                {!query.trim() && (
                  <div className="p-6">
                    <p className="text-gray-600 text-center mb-4" style={{ fontFamily: "var(--plus-jakarta-sans)" }}>
                      🔍 What's cooking in your mind?
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["Food Brain", "Smart Cooking", "Fresh Ingredients", "Our Story", "Meal Kits"].map(
                        (suggestion) => (
                          <button
                            key={suggestion}
                            onClick={() => setQuery(suggestion)}
                            className="px-3 py-1 text-sm rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                            style={{ fontFamily: "var(--plus-jakarta-sans)" }}
                          >
                            {suggestion}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
