"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { Clock } from "lucide-react"

const CHECKOUT_URL = "https://app.paperbell.com/checkout/bookings/new?package_id=137497&tab=2025-10-31"

export function CTASection() {
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
    <section ref={sectionRef} className="py-20 md:py-32 px-4 bg-gradient-to-b from-background to-muted/30">
      <div
        className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
          <Clock className="w-4 h-4" />
          Only 3 spots remaining this month
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            Your transformation starts the moment you enroll
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
            Stop waiting for the "perfect time." The woman you're becoming is ready now. Secure your spot and begin your
            journey today.
          </p>
        </div>

        <div
          className={`flex flex-col gap-4 justify-center items-center pt-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Button
            size="lg"
            className="text-lg px-12 py-7 h-auto hover:scale-105 transition-transform duration-200 shadow-lg"
            asChild
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              SECURE MY SPOT NOW
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">Instant access to your client portal upon enrollment</p>
        </div>
      </div>
    </section>
  )
}
