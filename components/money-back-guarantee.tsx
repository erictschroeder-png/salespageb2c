"use client"

import { Card } from "@/components/ui/card"
import { BadgeCheck, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function MoneyBackGuarantee() {
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
    <section
      ref={sectionRef}
      className="py-16 md:py-32 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <Card className="relative overflow-hidden p-8 md:p-16 bg-gradient-to-br from-[#8B7355]/10 to-[#6B8E6F]/10 border-2 border-[#8B7355]/30 shadow-2xl">
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#8B7355] to-[#6B5B4F] rounded-full opacity-10 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#6B8E6F] to-[#5A7A5E] rounded-full opacity-10 blur-2xl" />

          <div className="relative flex flex-col items-center text-center space-y-6 md:space-y-8">
            <div
              className={`relative transition-all duration-700 delay-200 ${isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"}`}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#8B7355] to-[#6B5B4F] flex items-center justify-center shadow-lg relative">
                <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                  <BadgeCheck className="w-10 h-10 md:w-12 md:h-12 text-[#8B7355]" />
                </div>
              </div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 w-1 h-8 bg-[#8B7355]/20 -translate-x-1/2 -translate-y-full" />
                <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-[#8B7355]/20 -translate-x-1/2 translate-y-full" />
                <div className="absolute left-0 top-1/2 w-8 h-1 bg-[#8B7355]/20 -translate-y-1/2 -translate-x-full" />
                <div className="absolute right-0 top-1/2 w-8 h-1 bg-[#8B7355]/20 -translate-y-1/2 translate-x-full" />
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <div className="inline-block px-4 md:px-6 py-1.5 md:py-2 bg-[#8B7355] text-white rounded-full text-xs md:text-sm font-semibold tracking-wide">
                100% RISK-FREE
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-balance px-2">30-Day Money-Back Promise</h2>
            </div>

            <p className="text-base md:text-xl text-foreground/90 leading-relaxed max-w-3xl text-pretty px-2">
              If you don't feel a significant shift in your relationship with food and your body within the first 30
              days, I'll refund every penny. <span className="font-semibold text-[#8B7355]">No questions asked.</span>{" "}
              <span className="font-semibold text-[#8B7355]">No hoops to jump through.</span> This program works — and I
              stand behind it completely.
            </p>

            <div className="flex items-center gap-3 text-muted-foreground pt-2 md:pt-4">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#6B8E6F]" />
              <p className="text-xs md:text-sm font-medium">Your investment is protected</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
