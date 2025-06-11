"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useState, useEffect } from "react"

export default function FloatingResumeButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      const heroSection = document.querySelector("#home")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setIsVisible(window.scrollY > heroBottom - 200)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement("a")
    link.href = "/documents/my-resume.pdf" // Replace with your actual resume file path
    link.download = "Mayank-Sharma-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Show success feedback
    setIsExpanded(true)
    setTimeout(() => setIsExpanded(false), 2000)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <motion.div
            animate={{ width: isExpanded ? "auto" : "56px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative"
          >
            <Button
              onClick={handleDownload}
              className={`h-14 bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
                isExpanded ? "px-6" : "w-14 px-0"
              }`}
              size="lg"
            >
              <motion.div className="flex items-center gap-2" animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                <Download className="h-5 w-5 flex-shrink-0" />
                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.3 }}
                      className="whitespace-nowrap text-sm font-medium"
                    >
                      Downloaded!
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Button>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg shadow-lg pointer-events-none whitespace-nowrap"
            >
              Download Resume
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-800" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
