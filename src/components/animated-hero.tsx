"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowDown } from "lucide-react"

export default function AnimatedHero() {
  const [showAnswer, setShowAnswer] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)
  const questionRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true)
    }, 3000)

    const answerTimer = setTimeout(() => {
      setShowAnswer(true)
    }, 4000)

    return () => {
      clearTimeout(timer)
      clearTimeout(answerTimer)
    }
  }, [])

  const scrollToContent = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16">
      {/* Simple background */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-black"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div
          className="mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <h2 className="text-xl md:text-2xl font-serif text-black dark:text-primary mb-4">
            Welcome to my creative journey
          </h2>
        </div>

        <div className="space-y-8">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            <h1
              ref={questionRef}
              className="text-3xl md:text-5xl lg:text-6xl font-serif text-black dark:text-white leading-tight"
            >
              <span className="typing-effect">
                What truly <span className="font-handwritten text-black dark:text-primary">matters</span> more,
                <br />
                the <span className="font-handwritten text-black dark:text-primary">journey</span> or the{" "}
                <span className="font-handwritten text-black dark:text-primary">destination</span>?
              </span>
            </h1>
          </div>

          {typingComplete && (
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "3s", animationFillMode: "forwards" }}>
              <div className="w-16 h-1 bg-black dark:bg-primary mx-auto mb-6"></div>
            </div>
          )}

          {showAnswer && (
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "4s", animationFillMode: "forwards" }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-black dark:text-white leading-tight">
                <span className="font-handwritten text-black dark:text-primary">The Company.</span>
              </h1>
              <p className="mt-8 text-xl md:text-2xl font-serif text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
                I'll be with you in the{" "}
                <span className="font-handwritten text-black dark:text-primary">magical journey</span> of creating your{" "}
                <span className="font-handwritten text-black dark:text-primary">vision</span> and transforming your{" "}
                <span className="font-handwritten text-black dark:text-primary">dreams</span> into reality.
              </p>
            </div>
          )}
        </div>

        <div
          className="mt-16 opacity-0 animate-fade-in"
          style={{ animationDelay: "5s", animationFillMode: "forwards", display: showAnswer ? "block" : "none" }}
        >
          <button
            onClick={scrollToContent}
            className="animate-bounce p-2 rounded-full border border-zinc-300 dark:border-primary hover:border-black dark:hover:border-white transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-black dark:text-primary" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .typing-effect {
          position: relative;
        }
        .typing-effect::after {
          content: '|';
          position: absolute;
          right: -8px;
          animation: blink 1s infinite;
          display: ${typingComplete ? "none" : "inline"};
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  )
}

