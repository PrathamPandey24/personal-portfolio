"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Journey from "@/components/journey"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "journey", "skills", "contact"]
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const offsetTop = element.offsetTop
        const offsetBottom = offsetTop + element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar activeSection={activeSection} />
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <section id="hero" className="min-h-screen">
        <Hero />
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Projects</h2>
          <Projects />
        </div>
      </section>

      <section id="journey" className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Journey</h2>
          <Journey />
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Skills</h2>
          <Skills />
        </div>
      </section>

      <section id="contact" className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Contact</h2>
          <Contact />
        </div>
      </section>

      <Footer />
    </main>
  )
}
