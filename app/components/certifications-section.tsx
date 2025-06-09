"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Calendar } from "lucide-react"
import Image from "next/image"

export default function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-123456",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "Validates expertise in designing distributed systems on AWS platform with best practices for security, reliability, and cost optimization.",
      skills: ["AWS", "Cloud Architecture", "Security", "Cost Optimization"],
      verifyUrl: "https://aws.amazon.com/verification",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-789012",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "Demonstrates ability to build scalable and reliable applications using Google Cloud technologies and best practices.",
      skills: ["Google Cloud", "Kubernetes", "DevOps", "Microservices"],
      verifyUrl: "https://cloud.google.com/certification",
    },
    {
      title: "Meta React Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "2022",
      credentialId: "META-RD-345678",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "Professional certificate covering advanced React concepts, state management, testing, and modern development practices.",
      skills: ["React", "JavaScript", "Testing", "State Management"],
      verifyUrl: "https://www.coursera.org/professional-certificates/meta-react-developer",
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MDB-DEV-901234",
      image: "/placeholder.svg?height=100&width=100",
      description: "Validates skills in MongoDB database design, development, and deployment for modern applications.",
      skills: ["MongoDB", "Database Design", "NoSQL", "Performance"],
      verifyUrl: "https://university.mongodb.com/certification",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-teal-400">Certifications</span> & Credentials
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-400/50 transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-700 flex items-center justify-center">
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={`${cert.issuer} logo`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                        <Award className="h-3 w-3 text-slate-950" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-white text-lg leading-tight mb-1">{cert.title}</CardTitle>
                      <CardDescription className="text-teal-400 font-medium mb-2">{cert.issuer}</CardDescription>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {cert.date}
                        </div>
                        <div className="text-xs">ID: {cert.credentialId}</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">{cert.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-slate-700 text-slate-200 hover:bg-teal-400/20 hover:text-teal-400 transition-colors text-xs px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-teal-400/50 text-teal-400 hover:bg-teal-400 hover:text-slate-950 w-full"
                      asChild
                    >
                      <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Verify Credential
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
