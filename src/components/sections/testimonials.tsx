import { AnimatePresence, motion } from "motion/react"
import { useState, useEffect } from "react"

type Testimonials = "first" | "second" | "third" | "fourth"
const testimonials: Record<Testimonials, { avatar: string; name: string; memberSince: number; quote: string }[]> = {
  first: [
    {
      avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
      name: "Meschac Irung",
      memberSince: 2023,
      quote: "A space that respects the mystery of self-discovery without the fluff. It's become my morning coffee for the spirit.",
    },
  ],
  second: [
    {
      avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
      name: "Theo Balick",
      memberSince: 2025,
      quote: "This app found the words I couldn't speak. It feels like looking into a mirror for the soul. Finally, technology that feels sacred.",
    },
  ],
  third: [
    {
      avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
      name: "Sarah Johnson",
      memberSince: 2024,
      quote:
        "I’ve tried every journaling app out there. Lumina is the first one that doesn’t feel like homework. It’s gentle, beautiful, and actually makes me want to show up for myself.",
    },
  ],
  fourth: [
    {
      avatar: "https://avatars.githubusercontent.com/u/34567890?v=4",
      name: "Aisha Patel",
      memberSince: 2022,
      quote:
        "It’s like having a wise friend who checks in on you without judgment. The prompts are deep but not demanding. I look forward to my evenings with Lumina.",
    },
  ],
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24 scroll-mt-20">
      <div className="mx-auto md:pl-8 max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 space-y-4"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground text-balance">Hear from our community of enlightened souls</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <AnimatedTestimonies />
        </motion.div>
      </div>
    </section>
  )
}

function AnimatedTestimonies() {
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonials>("first")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => {
        const groups = Object.keys(testimonials) as Testimonials[]
        const currentIndex = groups.indexOf(prev)
        const nextIndex = (currentIndex + 1) % groups.length
        return groups[nextIndex]
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence initial={false} mode="popLayout">
      {testimonials[currentTestimonial].map((testimonial, i) => (
        <motion.div
          key={`${testimonial.name}-${i}`}
          className="**:fill-foreground! flex items-center justify-center"
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", skewY: 0 }}
          exit={{ opacity: 0, y: 100, filter: "blur(6px)", skewY: 5 }}
          transition={{ delay: i * 0.1, duration: 2, type: "spring", bounce: 0.2 }}
        >
          <div className="relative pl-6">
            <div className="bg-primary absolute inset-0 w-0.5 rounded-full"></div>
            <p className="text-foreground text-balance text-xl">{testimonial.quote}</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="before:border-foreground/10 relative size-10 shrink-0 rounded-full before:absolute before:inset-0 before:rounded-full before:border">
                <img src={testimonial.avatar} alt={testimonial.name} className="rounded-full object-cover" width={40} height={40} />
              </div>
              <div className="space-y-0.5">
                <p className="text-foreground/90 font-medium">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.memberSince}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  )
}
