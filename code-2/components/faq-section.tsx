"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How is this different from other programs I've tried?",
    answer:
      "This isn't a group program, meal plan, or quick fix. It's private 1:1 coaching tailored specifically to your body, lifestyle, and goals. We focus on nervous system healing and sustainable habits—not willpower or restriction. You get direct access to me throughout your entire journey.",
  },
  {
    question: "What if I've tried everything and nothing has worked?",
    answer:
      "That's exactly who this program is for. If diets, cleanses, and quick fixes haven't worked, it's because they don't address the root cause. We work on nervous system regulation, hormone balance, and building a new relationship with food and your body. This is about healing, not another temporary fix.",
  },
  {
    question: "How much time do I need to commit each week?",
    answer:
      "You'll have coaching sessions plus time for implementing what we discuss. Most clients spend 30-60 minutes per week on sessions and practices. This isn't about adding more to your plate—it's about making sustainable changes that fit your life.",
  },
  {
    question: "Do I need to follow a specific diet or meal plan?",
    answer:
      "No. We don't use meal plans or calorie counting. Instead, you'll learn to eat intuitively based on your body's signals. This is about food freedom, not more rules or restriction.",
  },
  {
    question: "What if I can't afford to pay in full?",
    answer:
      "I offer a 5-month payment plan at $790/month. Both options give you the same full access to the program and support.",
  },
  {
    question: "Is this program right for me if I have a lot of weight to lose?",
    answer:
      "This program is for women who want to heal their relationship with food and their body—regardless of weight loss goals. Many clients do lose weight as a natural result of nervous system healing and intuitive eating, but the focus is on sustainable health and confidence, not a number on the scale.",
  },
  {
    question: "What happens after the 5 months?",
    answer:
      "You'll have all the tools, frameworks, and resources you need to continue on your own. You keep lifetime access to all materials and recordings. Many clients continue with ongoing support, but it's completely optional.",
  },
  {
    question: "What if I don't see results?",
    answer:
      "That's what the 30-day money-back guarantee is for. If you don't feel a significant shift in your relationship with food and your body within the first 30 days, I'll refund every penny. No questions asked.",
  },
]

export function FAQSection() {
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
    <section ref={sectionRef} className="py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-6 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Common Questions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">You might be wondering...</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Here are answers to the most common questions about the program
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
