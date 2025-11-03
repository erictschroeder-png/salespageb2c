"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const CHECKOUT_URL = "https://app.paperbell.com/checkout/bookings/new?package_id=137497&tab=2025-10-31"

const phases = [
  {
    number: "01",
    title: "Foundation",
    subtitle: "Nourish, Don't Deprive",
    description:
      "Stabilize blood sugar and support metabolism through balanced, protein-rich meals. Build safety in the body to end binge cycles.",
  },
  {
    number: "02",
    title: "Remove",
    subtitle: "Eliminate What's Blocking Progress",
    description: "Reduce inflammation and fatigue by removing foods and habits that disrupt hormones and digestion.",
  },
  {
    number: "03",
    title: "Repair",
    subtitle: "Heal From the Inside Out",
    description: "Support liver, hormone, and gut repair so the body naturally detoxes and burns fat efficiently.",
  },
  {
    number: "04",
    title: "Rebuild",
    subtitle: "Create Habits That Last",
    description: "Replace extremes with small, consistent actions that form a sustainable lifestyle.",
  },
  {
    number: "05",
    title: "Rewire",
    subtitle: "Redefine Your Relationship With Food",
    description: "Address the emotional and mental triggers behind overeating to restore peace and control.",
  },
]

export function SolutionSection() {
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
    <section ref={sectionRef} className="py-20 md:py-32 px-4 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-[1600px] mx-auto">
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            The 5-Phase System Behind Sustainable, Lasting Weight Loss
          </h2>
        </div>

        <div className="flex items-stretch justify-start lg:justify-center gap-3 mb-16 overflow-x-auto pb-4">
          {phases.map((phase, index) => (
            <div key={index} className="flex items-stretch flex-shrink-0">
              <Card
                className={`p-6 space-y-4 hover:shadow-xl transition-all duration-500 bg-card border-border w-48 min-h-[420px] flex flex-col ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary/30">{phase.number}</div>
                  <h3 className="text-xl font-bold leading-tight">{phase.title}</h3>
                  <p className="text-sm font-semibold text-primary">{phase.subtitle}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-grow">{phase.description}</p>
              </Card>

              {index < phases.length - 1 && (
                <div className="flex items-center justify-center px-2">
                  <ArrowRight className="w-6 h-6 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className={`max-w-3xl mx-auto text-center space-y-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold">Ready to Experience These Results Yourself?</h3>
          <p className="text-lg text-muted-foreground">
            Enrollment is limited to maintain a high level of personal support and coaching.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              SECURE MY SPOT
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
