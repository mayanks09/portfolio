"use client"
import { useEffect, useState } from "react"
import Navigation from "./components/navigation"
import HeroSection from "./components/hero-section"
import AboutSection from "./components/about-section"
import SkillsSection from "./components/skills-section"
import ExperienceSection from "./components/experience-section"
import ResumeViewSection from "./components/resume-view-section"
import ProjectsSection from "./components/projects-section"
import CertificationsSection from "./components/certifications-section"
import ContactSection from "./components/contact-section"
import FloatingResumeButton from "./components/floating-resume-button"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ResumeViewSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <FloatingResumeButton />

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>&copy; {currentYear} Mayank Sharma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
