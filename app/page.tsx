import { Hero } from "@/components/hero"
import { AgitationSection } from "@/components/agitation-section"
import { SolutionSection } from "@/components/solution-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FeaturesSection } from "@/components/features-section"
import { FAQSection } from "@/components/faq-section"
import { MoneyBackGuarantee } from "@/components/money-back-guarantee"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. HERO: Problem identification + solution promise */}
      <Hero />

      {/* 2. AGITATION: Amplify pain points */}
      <AgitationSection />

      {/* 3. SOLUTION: Where you're going + program overview */}
      <SolutionSection />

      {/* 4. PROOF: Testimonials and transformation stories */}
      <TestimonialsSection />

      {/* 5. FEATURES: What's included with benefit-focused language */}
      <FeaturesSection />

      {/* 6. OBJECTION HANDLING: FAQ section */}
      <FAQSection />

      {/* 7. RISK REVERSAL: Money-back guarantee */}
      <MoneyBackGuarantee />

      {/* 8. URGENCY + 9. FINAL CTA: Pricing with scarcity and clear CTAs */}
      <PricingSection />
      <CTASection />

      <StickyMobileCTA />
    </main>
  )
}
