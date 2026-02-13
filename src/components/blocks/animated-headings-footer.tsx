import { motion } from "framer-motion"
import { Download } from "lucide-react"

export default function Footer() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-foreground md:text-5xl"
      >
        Return to yourself
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 text-lg text-muted-foreground"
      >
        A private space for your inner evolution.
        <br /> Start your free 7-day trial today.
      </motion.p>

      <motion.a
        href="#"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-5 text-lg font-semibold text-primary-foreground transition-transform hover:scale-105"
      >
        <Download className="h-5 w-5" />
        Download App
      </motion.a>
    </>
  )
}
