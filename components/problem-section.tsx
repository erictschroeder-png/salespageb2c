import { Card } from "@/components/ui/card"

const problems = [
  "You're hyper-aware of your problem",
  "You've tried multiple diets but nothing sticks",
  "You crave control over food but feel like it controls you",
  "You're constantly fighting food cravings, stress-eating cycles, and body shame",
  "Confidence? Almost non-existent",
  "You want freedom — from spiraling, from obsession, from exhaustion",
]

export function ProblemSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-4">Where You Are</h2>
        </div>

        <Card className="p-8 md:p-12 space-y-6">
          {problems.map((problem, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">{problem}</p>
            </div>
          ))}
        </Card>
      </div>
    </section>
  )
}
