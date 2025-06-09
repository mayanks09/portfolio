"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description:
        "Led development of multiple web applications using React, Next.js, and Node.js. Mentored junior developers and improved team productivity by 40%.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description:
        "Built and maintained e-commerce platform serving 10k+ users. Implemented real-time features and optimized application performance.",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "AWS"],
    },
    {
      title: "Frontend Developer",
      company: "WebAgency",
      period: "2019 - 2020",
      description:
        "Developed responsive websites and web applications for various clients. Collaborated with designers to create pixel-perfect implementations.",
      technologies: ["React", "JavaScript", "SASS", "WordPress", "PHP"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-teal-400">Experience</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A journey through my professional development career
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-400/30 hidden md:block" />

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 md:ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-teal-400 rounded-full border-4 border-slate-950 hidden md:block" />

                <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/10">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl text-white">{experience.title}</CardTitle>
                        <CardDescription className="text-teal-400 font-medium">{experience.company}</CardDescription>
                      </div>
                      <div className="flex items-center text-slate-400 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {experience.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-slate-700 text-slate-200 hover:bg-teal-400/20 hover:text-teal-400 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
