"use client"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Check, MoveHorizontal } from "lucide-react"

const problems = [
  "You're hyper-aware of your problem",
  "You've tried multiple diets but nothing sticks",
  "You crave control over food but feel like it controls you",
  "You're constantly fighting food cravings, stress-eating cycles, and body shame",
  "Confidence? Almost non-existent",
  "You want freedom — from spiraling, from obsession, from exhaustion",
]

const outcomes = [
  "Your nervous system is regulated and your cravings are gone",
  "You feel powerful in your body and calm in your mind",
  "You eat intuitively, without fear or fixation",
  "You have a sustainable rhythm with food, fitness, and stress",
  "You show up for your life with confidence, energy, and a new level of ease",
  "You trust yourself again",
]

export function TransformationSection() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
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

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove)
      document.addEventListener("touchend", handleMouseUp)
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">Your Transformation Journey</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance mb-4">
            Drag the slider to see your transformation
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-pulse">
            <MoveHorizontal className="w-4 h-4" />
            <span>Slide to reveal</span>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div
            ref={containerRef}
            className="relative h-[700px] md:h-[600px] overflow-hidden rounded-xl shadow-2xl cursor-ew-resize select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <div
              className="absolute inset-0 w-full h-full"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Card className="h-full p-8 md:p-12 space-y-6 rounded-none border-0 overflow-y-auto">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold">Where You Are</h3>
                </div>
                <div className="space-y-6 pb-4 pr-8">
                  {problems.map((problem, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <p className="text-base md:text-lg text-foreground leading-relaxed">{problem}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div
              className="absolute inset-0 w-full h-full transition-all duration-75"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <Card className="h-full p-8 md:p-12 space-y-6 bg-primary/5 border-primary/20 rounded-none border-0 overflow-y-auto">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold">Where You're Going</h3>
                </div>
                <div className="space-y-6 pb-4 pl-8">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-base md:text-lg text-foreground leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110">
                <MoveHorizontal className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex justify-between mt-6 px-4 text-sm font-medium text-muted-foreground transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span>Where You Are Now</span>
          <span>Where You're Going</span>
        </div>
      </div>
    </section>
  )
}
