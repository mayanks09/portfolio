"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export default function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful and intuitive user experiences",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and reliability",
    },
  ]

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-teal-400">Me</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 2+ years of experience building web applications. I love turning
            complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed">
                My journey in web development started during college when I built my first website. Since then, I've
                been fascinated by the endless possibilities of creating digital experiences that make a real impact on
                people's lives.
              </p>
              <p className="text-slate-300 leading-relaxed">
                I specialize in React, Next.js, Node.js, and modern web technologies. When I'm not coding, you can find
                me exploring new technologies, contributing to open source projects, or sharing knowledge with the
                developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-400/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-teal-400/10 rounded-lg">
                        <highlight.icon className="h-6 w-6 text-teal-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{highlight.title}</h3>
                        <p className="text-slate-400 text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
