"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const CHECKOUT_URL = "https://app.paperbell.com/checkout/bookings/new?package_id=137497&tab=2025-10-31"

const testimonials = [
  {
    name: "TAYLOR",
    role: "Business Owner & Mom",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-30%20at%2012.16.17%E2%80%AFPM-rLme0H0TA54GUy2B0MUSvMljptlERZ.png",
    metric: "Energy restored, sleep improved in weeks",
    text: "Before working with Carley, I was constantly exhausted, running on caffeine and stress. My sleep was awful, my hormones were a mess, and I felt like I was failing at everything. Within weeks, I started feeling calmer, sleeping better, and actually having energy for my family and business. This program changed everything for me.",
  },
  {
    name: "KAYLA",
    role: "Healthcare Professional",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-30%20at%2012.15.30%E2%80%AFPM-Lamv11NOfi6nYynOxxu4ZPBb0VngiA.png",
    metric: "Passed boards on first try, off all medications",
    text: "Carley helped me overcome crippling test anxiety that prevented me from passing my boards. Through her guidance, I learned about food, stopped medications, and mastered calming techniques. Now, I visit family without panic, passed my boards, eat for nutrition, and saw related symptoms disappear.",
  },
  {
    name: "MELISSA",
    role: "Engaged & Thriving",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-30%20at%2012.15.17%E2%80%AFPM-1SGnjx9Njs78NSOHK6vKnnpGqtRF8K.png",
    metric: "Transformed self-care, inspired partner to join",
    text: "Carley's intuitive, holistic program transformed my self-care and inspired my fiancé to join. Her expertise in wellness—covering thoughts, diet, sleep, and movement—sets the foundation for a healthy life and marriage. Highly recommended!",
  },
  {
    name: "KYLA",
    role: "Mental Health Advocate",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-30%20at%2012.16.06%E2%80%AFPM-PQqiAbYDeqmBiIX5lESN88T8edODRp.png",
    metric: "Off SSRIs and birth control, emotionally grounded",
    text: "I felt emotionally overwhelmed and anxious, and birth control and SSRIs only masked the problem. Working with Carley helped me calm my nervous system, get off the medications, and finally feel my emotions without losing control. I'm grounded, clear, and in charge of my health again!",
  },
  {
    name: "NORMA",
    role: "Cancer Survivor",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-30%20at%2017.56.36-EbhBeSzB8nnBnVN8oFTrkR9gbHRAzk.jpeg",
    metric: "Off all medications, inflammation gone",
    text: "I was on countless medications for rheumatoid arthritis, appendicitis, and even breast cancer, but I never understood how inflammation was driving it all. Working with Carley changed my entire perspective on healing. Now, I'm off all medications, my body feels stronger, and I finally have my health back.",
  },
  {
    name: "MARIANNE",
    role: "Celebrating 62 Years Strong",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-30%20at%2012.13.20%E2%80%AFPM-6e8DKyPJe42B50qJyH3RgghXBGmHPz.png",
    metric: "Down 30 lbs, feeling better than ever at 62",
    text: "I'm down 30 lbs since starting with Carley and It's my 62nd Birthday. It was one of my best birthdays yet! I'm feeling better than I have in years- lighter, more energetic, healthier, more confident, more content.",
  },
]

export function TestimonialsSection() {
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
    <section ref={sectionRef} className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-sage/5">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block bg-terracotta/10 border-2 border-terracotta px-4 md:px-6 py-1.5 md:py-2 rounded-full mb-4 md:mb-6">
            <span className="text-terracotta font-bold text-xs md:text-sm tracking-wider">REAL CLIENT RESULTS</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4 px-2">
            Women Who Chose Lasting Transformation
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            These aren't just testimonials—they're stories of women who chose root-level healing over quick fixes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full flex flex-col hover:shadow-lg hover:border-terracotta/30 transition-all duration-300">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name} headshot`}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-terracotta/20"
                  />
                  <div>
                    <p className="font-semibold text-sm md:text-base text-foreground tracking-wide">
                      {testimonial.name}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="bg-sage/10 border border-sage/30 rounded-lg px-3 md:px-4 py-1.5 md:py-2 mb-3 md:mb-4">
                  <p className="text-xs md:text-sm font-semibold text-sage">{testimonial.metric}</p>
                </div>

                <Quote className="w-6 h-6 md:w-8 md:h-8 text-terracotta/40 mb-2 md:mb-3" />
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-grow">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            className="bg-terracotta hover:bg-terracotta/90 text-cream font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[56px] md:min-h-[64px] w-full md:w-auto px-6 md:px-12 py-5 md:py-6 text-sm md:text-base"
            asChild
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              JOIN THESE SUCCESSFUL WOMEN →
            </a>
          </Button>
          <p className="text-xs md:text-sm text-muted-foreground mt-3 md:mt-4">Only 3 spots available this month</p>
        </div>
      </div>
    </section>
  )
}
