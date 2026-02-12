import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
      {/* Glowing orb */}
      <div className="pointer-events-none absolute top-28 left-1/2 -translate-x-1/2 z-50">
        <div className="h-72 w-72 rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute inset-0 m-auto h-40 w-40 rounded-full bg-primary/30 blur-[60px]" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-xl text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance"
      >
        {"Meet the parts of you that words can't reach."}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
      >
        A guided journey into your psyche blending psychology, astrology, and numerology.
      </motion.p>

      <motion.a
        href="#download"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 mt-10 w-full max-w-sm rounded-full bg-primary px-8 py-4 text-center text-lg font-semibold text-primary-foreground transition-transform hover:scale-105"
      >
        Begin Your Journey
      </motion.a>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 mt-6 text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        Available on iOS & Android
      </motion.p>
    </section>
  )
}
