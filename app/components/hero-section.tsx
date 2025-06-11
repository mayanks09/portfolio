"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText = "Hi, I'm Mayank Sharma"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTypingComplete(true)
        clearInterval(typingInterval)
      }
    }, 100) // Adjust speed here (lower = faster)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-teal-500/10" />

      <div className="container mx-auto px-4 relative z-10 py-8 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
                {displayedText}
                {!isTypingComplete && <span className="animate-pulse">|</span>}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isTypingComplete ? 1 : 0, y: 0 }}
              transition={{ duration: 0.8, delay: isTypingComplete ? 0.2 : 0 }}
              className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Full-Stack Developer crafting exceptional digital experiences with modern technologies
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isTypingComplete ? 1 : 0, y: 0 }}
              transition={{ duration: 0.8, delay: isTypingComplete ? 0.4 : 0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
            >
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-950 px-8 py-3 text-lg"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isTypingComplete ? 1 : 0 }}
              transition={{ duration: 0.8, delay: isTypingComplete ? 0.6 : 0 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              <a href="https://github.com" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:john@example.com" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-full blur-2xl" />
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/30 to-teal-600/30 rounded-full blur-xl" />

              {/* Main image container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-400/30 shadow-2xl"
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Mayank - Full-Stack Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating decorative dots */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400/40 rounded-full blur-sm"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-teal-600/40 rounded-full blur-sm"
              />
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute top-1/2 -left-8 w-4 h-4 bg-teal-500/40 rounded-full blur-sm"
              />
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isTypingComplete ? 1 : 0 }}
          transition={{ duration: 0.8, delay: isTypingComplete ? 0.8 : 0 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-teal-400 transition-colors animate-bounce"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.button>
      </div>
    </section>
  )
}
