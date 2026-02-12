import { motion } from "framer-motion"
import { Infinity, Download } from "lucide-react"

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md"
    >
      <div className="flex items-center gap-2">
        <Infinity className="h-6 w-6 text-primary" />
        <span className="text-lg font-semibold text-foreground">Lumina</span>
      </div>
      <a
        href="#download"
        className="flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-border"
      >
        <Download className="h-4 w-4" />
        Download
      </a>
    </motion.header>
  )
}
