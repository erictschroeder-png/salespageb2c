"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToPricing = () => {
    const pricingSection = document.querySelector('[data-section="pricing"]')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-gradient-to-t from-background via-background to-background/80 backdrop-blur-sm border-t border-border p-4 shadow-2xl">
        <Button
          onClick={scrollToPricing}
          size="lg"
          className="w-full h-16 text-lg font-bold uppercase tracking-wide shadow-lg hover:scale-[1.02] transition-transform"
        >
          Secure My Spot Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        <p className="text-center text-xs text-muted-foreground mt-2 font-medium">Only 3 spots available this month</p>
      </div>
    </div>
  )
}
