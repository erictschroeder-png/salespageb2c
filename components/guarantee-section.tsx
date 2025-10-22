"use client"

import { Card } from "@/components/ui/card"
import { Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function GuaranteeSection() {
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
    <section ref={sectionRef} className="py-20 md:py-32 px-4">
      <div
        className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col items-center text-center space-y-6">
            <div
              className={`w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-700 delay-300 ${isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"}`}
            >
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">No Quick Fix Promise</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              This isn't a cleanse, a reset, or another 30-day hack. This is root-level transformation. We're not
              chasing shortcuts—we're cultivating sustainable, whole-self change that lasts.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
