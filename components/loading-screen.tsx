"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setIsLoading(false)
            onLoadingComplete()
          }, 800)
          return 100
        }
        return prev + 0.8
      })
    }, 40)

    return () => {
      clearInterval(progressInterval)
    }
  }, [onLoadingComplete])

  if (!isLoading) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fff0de 0%, #f7f3e9 50%, #fff0de 100%)",
      }}
    >
      {/* Main Content */}
      <div className="text-center relative z-10">
        {/* Geometric Loading Animation */}
        <div className="mb-12 h-32 flex items-center justify-center">
          <div className="loading-container">
            {/* Main Circle */}
            <div className="main-circle">
              <div className="inner-circle"></div>
            </div>

            {/* Floating Elements */}
            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
            <div className="floating-element element-4"></div>

            {/* Progress Ring */}
            <div className="progress-ring">
              <svg width="120" height="120" className="progress-svg">
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(147, 197, 114, 0.2)" strokeWidth="3" />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#93C572"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="progress-circle"
                  style={{
                    strokeDasharray: `${2 * Math.PI * 50}`,
                    strokeDashoffset: `${2 * Math.PI * 50 * (1 - progress / 100)}`,
                  }}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <h1
          className="text-5xl font-bold mb-4"
          style={{
            fontFamily: "var(--playfair-display)",
            color: "#121212",
          }}
        >
          <span style={{ color: "#93C572" }}>Kitch</span>
          <span style={{ color: "#121212" }}>in</span>
        </h1>

        {/* Loading Text */}
        <p
          className="text-xl mb-8"
          style={{
            fontFamily: "var(--plus-jakarta-sans)",
            color: "#121212",
            fontWeight: "500",
            opacity: 0.8,
          }}
        >
          India का Food Brain
        </p>

        {/* Progress Percentage */}
        <p
          className="text-sm font-medium"
          style={{
            fontFamily: "var(--plus-jakarta-sans)",
            color: "#93C572",
          }}
        >
          {Math.round(progress)}%
        </p>
      </div>

      <style jsx>{`
        .loading-container {
          position: relative;
          width: 120px;
          height: 120px;
        }
        
        .main-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: #93C572;
          border-radius: 50%;
          animation: pulse-main 2s ease-in-out infinite;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .inner-circle {
          width: 30px;
          height: 30px;
          background: #fff0de;
          border-radius: 50%;
          animation: pulse-inner 2s ease-in-out infinite reverse;
        }
        
        .floating-element {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #121212;
          border-radius: 50%;
          opacity: 0.6;
        }
        
        .element-1 {
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          animation: float-1 3s ease-in-out infinite;
        }
        
        .element-2 {
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          animation: float-2 3s ease-in-out infinite 0.5s;
        }
        
        .element-3 {
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          animation: float-3 3s ease-in-out infinite 1s;
        }
        
        .element-4 {
          top: 50%;
          left: 10px;
          transform: translateY(-50%);
          animation: float-4 3s ease-in-out infinite 1.5s;
        }
        
        .progress-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .progress-svg {
          transform: rotate(-90deg);
          width: 100%;
          height: 100%;
        }
        
        .progress-circle {
          transition: stroke-dashoffset 0.3s ease;
        }
        
        @keyframes pulse-main {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 0 0 0 rgba(147, 197, 114, 0.4);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            box-shadow: 0 0 0 20px rgba(147, 197, 114, 0);
          }
        }
        
        @keyframes pulse-inner {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.8);
          }
        }
        
        @keyframes float-1 {
          0%, 100% {
            transform: translateX(-50%) translateY(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateX(-50%) translateY(-15px);
            opacity: 1;
          }
        }
        
        @keyframes float-2 {
          0%, 100% {
            transform: translateY(-50%) translateX(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-50%) translateX(15px);
            opacity: 1;
          }
        }
        
        @keyframes float-3 {
          0%, 100% {
            transform: translateX(-50%) translateY(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateX(-50%) translateY(15px);
            opacity: 1;
          }
        }
        
        @keyframes float-4 {
          0%, 100% {
            transform: translateY(-50%) translateX(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-50%) translateX(-15px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
