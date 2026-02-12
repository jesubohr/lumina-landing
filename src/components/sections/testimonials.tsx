import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "This app found the words I couldn't speak. It feels like looking into a mirror for the soul. Finally, technology that feels sacred.",
    name: "The Introspective",
    memberSince: "2023",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    quote: "A space that respects the mystery of self-discovery without the fluff. It's become my morning coffee for the spirit.",
    name: "The Seeker",
    memberSince: "2023",
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

export default function Testimonials() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto flex max-w-lg flex-col gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="mb-4 flex gap-1">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={`star-${t.name}-${j}`} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg font-serif italic leading-relaxed text-foreground">{`"${t.quote}"`}</p>
            <div className="mt-6 flex items-center gap-3">
              <img src={t.avatar || "/placeholder.svg"} alt={t.name} className="h-10 w-10 rounded-full bg-secondary" />
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs font-medium uppercase tracking-wider text-primary">Member since {t.memberSince}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
