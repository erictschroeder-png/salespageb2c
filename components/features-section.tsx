"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const features = [
  {
    title: "1:1 and Group Call Coaching Sessions",
    description: "Personalized guidance tailored to your unique needs, body, and goals",
  },
  {
    title: "Unlimited Messaging Support",
    description: "Direct access to me between sessions for questions, wins, and real-time support",
  },
  {
    title: "Custom Nutrition Framework",
    description: "Learn to eat intuitively based on your body's signals—no meal plans or calorie counting",
  },
  {
    title: "Nervous System Regulation Tools",
    description: "Proven techniques to calm stress, reduce cravings, and build lasting resilience",
  },
  {
    title: "Cycle-Synced Movement Guide",
    description: "Exercise that works with your hormones, not against them",
  },
  {
    title: "Private Client Portal",
    description: "All your resources, session recordings, and progress tracking in one place",
  },
  {
    title: "Mindset & Identity Work",
    description: "Break free from diet mentality and build unshakeable confidence",
  },
  {
    title: "Lifetime Access to Materials",
    description: "Keep all resources, recordings, and frameworks forever",
  },
]

export function FeaturesSection() {
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
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">What's Included</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Everything you need for lasting transformation
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            This is comprehensive, personalized support designed to create real, sustainable change
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 transition-all duration-700 hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Card className="p-8 bg-primary/5 border-primary/20">
            <p className="text-lg md:text-xl font-semibold text-primary">
              Total Value: Over $8,000 in personalized coaching and support
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
