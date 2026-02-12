import { motion } from "framer-motion"
import { EyeIcon } from "@/components/ui/eye"
import { RadioIcon } from "@/components/ui/radio"
import { SparklesIcon } from "@/components/ui/sparkles"

const steps = [
  {
    icon: EyeIcon,
    title: "Reflect",
    description: "Answer brief, soul-searching questions designed to bypass the ego and reach your core truth.",
  },
  {
    icon: RadioIcon,
    title: "Listen",
    description: "Receive personalized audio readings based on your unique astrological and numerological chart.",
  },
  {
    icon: SparklesIcon,
    title: "Evolve",
    description: "Track your patterns over time. Journal your insights in a private, encrypted digital sanctuary.",
  },
]

export default function DailyRitual() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Your Daily Ritual</h2>
          <p className="mt-2 text-muted-foreground">Three steps to alignment</p>
        </motion.div>

        <div className="relative mt-16">
          {/* Vertical connecting line */}
          <div className="absolute left-7 top-12 bottom-12 w-px bg-border" />

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
