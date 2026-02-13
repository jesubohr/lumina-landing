import { useState, Activity } from "react"
import { Download, Menu, X } from "lucide-react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react"

import { Logo } from "@/components/assets/logo"
import { Button } from "@/components/ui/button"
import { useMedia } from "@/hooks/use-media"
import { cn } from "@/lib/utils"

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Rituals", href: "#rituals" },
  { name: "Testimonials", href: "#testimonials" },
]

export default function HeroHeader() {
  const [menuState, setMenuState] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const isLarge = useMedia("(min-width: 64rem)")

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 75)
  })

  return (
    <nav data-state={menuState && "active"} className={cn("fixed w-full z-50", isLarge && "bg-background/10 backdrop-blur-md")}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0">
          <div className={cn("flex justify-between gap-6 duration-200 max-lg:w-full", isScrolled && "lg:opacity-0 lg:blur-xs")}>
            <div className="hidden size-fit lg:block">
              <NavItems />
            </div>
            <a href="/" aria-label="home" className="flex items-center space-x-2 lg:hidden">
              <Logo width={40} height={40} />
            </a>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState == true ? "Close Menu" : "Open Menu"}
              className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
            >
              <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
              <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
            </button>
          </div>

          <Activity mode={isLarge ? "visible" : "hidden"}>
            <FloatingNavPill isScrolled={isScrolled} />
          </Activity>

          <div className="bg-card/60 ring-border in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl p-6 shadow-2xl shadow-zinc-300/20 ring-1 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-transparent dark:shadow-none dark:lg:bg-transparent">
            <div className="lg:hidden">
              <NavItems />
            </div>
            <div className={cn("w-full md:w-fit", isScrolled && "lg:opacity-0 lg:blur-xs")}>
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavItems() {
  return (
    <ul className="flex gap-1 max-lg:flex-col">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Button asChild variant="ghost" size="sm" className="w-full text-base max-lg:h-12 max-lg:justify-start max-lg:text-lg">
            <a href={item.href}>
              <span>{item.name}</span>
            </a>
          </Button>
        </li>
      ))}
    </ul>
  )
}

function DownloadButton({ className }: { className?: string }) {
  return (
    <a
      href="#download"
      className={cn(
        "flex items-center gap-2 px-5 py-2 bg-[#e0c2ff] dark:bg-[#bda1ff] text-[#411e6c] border-4 border-white/30 dark:border-0 rounded-full text-sm font-medium transition-all hover:scale-105",
        className,
      )}
    >
      <Download className="h-4 w-4" />
      Download
    </a>
  )
}

function FloatingNavPill({ isScrolled }: { isScrolled: boolean }) {
  return (
    <motion.div
      animate={{ gap: isScrolled ? "1rem" : "0rem" }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.1 }}
      className={cn(
        "absolute inset-0 z-50 m-auto flex size-fit p-2 items-center rounded-lg transition-colors duration-500",
        isScrolled && "ring-border shadow-foreground/6.5 shadow-lg ring-1 backdrop-blur",
      )}
    >
      <a href="/" aria-label="home" className="px-3.5">
        <Logo width={40} height={40} />
      </a>

      <AnimatePresence initial={false}>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, x: -156, scale: 0.8, filter: "blur(4px)", width: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
              width: "auto",
            }}
            exit={{ opacity: 0, x: -156, scale: 0.8, filter: "blur(4px)", width: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.1 }}
            className="flex origin-left items-center overflow-hidden rounded-full"
          >
            <NavItems />
            <DownloadButton className="ml-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
