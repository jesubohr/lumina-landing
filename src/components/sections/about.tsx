import { motion } from "framer-motion"
import { Diamond, Flame, Infinity } from "lucide-react"

const features = [
  {
    icon: Diamond,
    title: "Archetypal Clarity",
    description: "Understand the patterns that shape your psyche through a unique blend of ancient wisdom and modern archetypal psychology.",
  },
  {
    icon: Flame,
    title: "Emotional Resonance",
    description: "Find deep alignment with your feelings. Learn to navigate your emotional tides rather than fighting against them.",
  },
  {
    icon: Infinity,
    title: "Sacred Rhythm",
    description: "Sync your life with cosmic cycles. Discover the best times for action, reflection, and transformation.",
  },
]

export default function About() {
  return (
    <section id="about" className="px-6 py-24 scroll-mt-20">
      <div className="mx-auto max-w-2xl text-center">
        {/* Moon icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <svg width="48" height="48" viewBox="0 0 32 32" fill="none" className="text-primary">
            <path
              d="M16 4C10 4 5 9 5 16C5 23 10 28 16 28C20 28 23.5 25.5 25.5 22C20 23 14 19 14 12C14 8.5 16 5.5 19 4C18 4 17 4 16 4Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-foreground md:text-4xl text-balance"
        >
          The noise of the world drowns out your <em className="font-serif text-primary">inner compass</em>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          In the rush of modern life, the subtle whispers of your intuition are often lost. We scroll, we work, we distract ourselves. Reconnect with
          the silence within and rediscover who you were before the world told you who to be.
        </motion.p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-20 max-w-4xl">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
              <feature.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
