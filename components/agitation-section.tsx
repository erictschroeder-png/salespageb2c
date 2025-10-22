"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const problems = [
  "You're hyper-aware of your problem",
  "You've tried multiple diets but nothing sticks",
  "You crave control over food but feel like it controls you",
  "You're constantly fighting food cravings, stress-eating cycles, and body shame",
  "Confidence? Almost non-existent",
  "You want freedom — from spiraling, from obsession, from exhaustion",
]

export function AgitationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-6 py-2 bg-accent/20 rounded-full mb-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Where You Are Now</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            You're stuck in a cycle that feels impossible to break
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Sound familiar? You're not alone — and it's not your fault.
          </p>
        </div>

        <Card
          className={`p-8 md:p-12 space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`flex gap-4 items-start transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </Card>

        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-xl md:text-2xl font-semibold text-primary">
            But what if there was a different way forward?
          </p>
        </div>
      </div>
    </section>
  )
}
