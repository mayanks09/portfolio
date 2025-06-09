"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function ResumeViewSection() {
  const handleViewResume = () => {
    // Replace this URL with your actual Google Drive resume link
    const resumeUrl = "https://drive.google.com/file/d/your-resume-file-id/view"
    window.open(resumeUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600 hover:border-teal-400/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-4"
              >
                {/* Icon */}
                {/* Text */}
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl text-white">Want to know more about my professional experience?</h3>
                </div>

                {/* Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    onClick={handleViewResume}
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    View Resume
                  </Button>
                </motion.div>

                {/* Additional info */}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
