"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { AlertCircle } from "lucide-react"

const CHECKOUT_URL = "https://app.paperbell.com/checkout/bookings/new?package_id=137497&tab=2025-10-31"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/serene-woman-meditating-in-natural-light-wellness.jpg"
          alt="Wellness background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      <div className="absolute top-0 left-0 right-0 z-20 bg-primary text-primary-foreground py-3 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Only 3 spots available this month — Enrollment closes soon
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        <div
          className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.1]">
            <span className="block text-primary">Stop Chasing Quick Fixes.</span>
            <span className="block">Start Building Lasting Health.</span>
          </h1>

          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 text-balance max-w-4xl mx-auto leading-tight">
            The 5-month transformation program for women who've tried everything and are ready to end the diet cycle
            forever
          </p>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light text-balance max-w-3xl mx-auto">
            No more willpower. No more restriction. Just deep healing that actually lasts.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-muted hover:shadow-3xl transition-shadow duration-300">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/vJ6dS0eBmCI"
              title="Women's Health Coaching Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Button
            size="lg"
            className="text-lg px-8 py-6 h-auto hover:scale-105 transition-transform duration-200"
            asChild
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              SECURE MY SPOT NOW
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">Start your transformation today</p>
        </div>
      </div>
    </section>
  )
}
