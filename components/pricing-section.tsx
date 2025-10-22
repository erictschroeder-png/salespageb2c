"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  "1:1 and group call coaching sessions",
  "Unlimited messaging support via private portal",
  "Personalized nutrition and movement guidance",
  "Hormone and cycle tracking education",
  "Stress management and nervous system tools",
  "Custom supplement and lifestyle recommendations",
  "Progress tracking and accountability",
  "Resource library and educational materials",
]

export function PricingSection() {
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
    <section
      ref={sectionRef}
      data-section="pricing"
      className="py-16 md:py-40 px-4 bg-background border-y-2 border-accent/20"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 md:mb-20 space-y-4 md:space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 shadow-lg">
            <Clock className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-bold tracking-wide uppercase">
              Only 3 Spots Available This Month
            </span>
          </div>

          <div className="inline-block px-4 md:px-6 py-2 bg-accent/10 border-2 border-accent/30 rounded-full mb-4">
            <span className="text-xs md:text-sm font-bold tracking-widest text-accent uppercase">Investment</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold text-balance px-2">Your Transformation Starts Here</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed px-4">
            5 months of private coaching, personalized support, and the tools you need to create lasting change in your
            health and life.
          </p>
          <div className="space-y-3 pt-4 px-4">
            <p className="text-sm md:text-lg font-semibold text-foreground">
              No hidden fees. No sales calls required. Start your transformation today.
            </p>
            <p className="text-xs md:text-base text-muted-foreground font-medium">
              ✓ Instant access to your client portal upon enrollment
            </p>
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Pay in Full */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="p-6 md:p-10 space-y-6 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border-2 border-accent bg-accent/5 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20" />
              <div className="space-y-4 relative z-10">
                <div className="inline-block px-4 md:px-5 py-1.5 md:py-2 bg-accent text-accent-foreground rounded-full text-xs md:text-sm font-bold shadow-lg uppercase tracking-wide">
                  Best Value — Save $450
                </div>
                <h3 className="text-xl md:text-3xl font-bold">Pay in Full</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-6xl font-bold">$3,500</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  One-time payment for the full 5-month program
                </p>
              </div>

              <div className="space-y-4 flex-grow relative z-10">
                <p className="font-semibold text-xs md:text-sm uppercase tracking-wide text-muted-foreground">
                  Everything included:
                </p>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                size="lg"
                className="w-full text-base md:text-lg font-bold py-6 md:py-7 h-auto hover:scale-105 transition-transform duration-200 shadow-lg uppercase tracking-wide relative z-10 min-h-[56px]"
              >
                Secure My Spot Now
              </Button>
            </Card>
          </div>

          {/* Payment Plan */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="p-6 md:p-10 space-y-6 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border-2 h-full flex flex-col">
              <div className="space-y-4">
                <div className="inline-block px-4 md:px-5 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-bold uppercase tracking-wide">
                  Payment Plan Available
                </div>
                <h3 className="text-xl md:text-3xl font-bold">Monthly Payments</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-6xl font-bold">$790</span>
                  <span className="text-lg md:text-xl text-muted-foreground">/month</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">5 monthly payments of $790 (total $3,950)</p>
              </div>

              <div className="space-y-4 flex-grow">
                <p className="font-semibold text-xs md:text-sm uppercase tracking-wide text-muted-foreground">
                  Everything included:
                </p>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="w-full text-base md:text-lg font-bold py-6 md:py-7 h-auto hover:bg-primary/5 hover:scale-105 transition-all duration-200 border-2 bg-transparent uppercase tracking-wide min-h-[56px]"
              >
                Secure My Spot Now
              </Button>
            </Card>
          </div>
        </div>

        <div
          className={`mt-12 md:mt-16 text-center transition-all duration-1000 delay-700 px-4 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            This is a significant investment in yourself—and it should be. Real transformation takes time, support, and
            commitment. Secure your spot today and begin your journey to becoming the most rooted, nourished, and
            confident version of yourself.
          </p>
        </div>
      </div>
    </section>
  )
}
