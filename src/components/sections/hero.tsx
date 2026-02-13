import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import ShaderBackground from "@/components/blocks/shader-background"

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-20 min-h-screen text-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 max-w-xl text-4xl font-bold leading-[1.15] text-foreground md:text-5xl lg:text-6xl text-balance"
      >
        {"Meet the parts of you that words can't reach."}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 mt-6 max-w-md text-lg leading-relaxed text-foreground/80"
      >
        A guided journey into your psyche blending psychology, astrology, and numerology.
      </motion.p>

      <motion.a
        href="#download"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 mt-10 w-full max-w-sm rounded-full bg-primary border-4 border-white/30 dark:border-transparent px-8 py-4 text-center text-lg font-semibold text-primary-foreground transition-transform hover:scale-105"
      >
        Begin Your Journey
      </motion.a>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 mt-6 text-xs font-medium uppercase tracking-widest text-foreground/60"
      >
        Available on iOS & Android
      </motion.p>

      <a href="#about" className="absolute bottom-20 cursor-pointer z-10">
        <ChevronDown size={36} className="text-primary/80 animate-bounce" />
      </a>

      <ShaderBackground />
    </section>
  )
}
