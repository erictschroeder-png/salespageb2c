"use client"

import { useEffect, useRef, useState } from "react"

export function ValuePropSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 bg-accent/5">
      <div
        className={`max-w-4xl mx-auto text-center space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-balance leading-tight">
          I help high-achieving women build a lasting, health-centered identity rooted in confidence, body-respect, and
          food freedom
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
          This isn't about willpower or more discipline — it's about deep nourishment and nervous system healing that
          actually lasts.
        </p>
      </div>
    </section>
  )
}
