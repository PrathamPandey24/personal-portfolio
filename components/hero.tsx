"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-bold text-red-600 dark:text-red-500 mb-6">
              Hello, I'm <span className="text-neutral-800 dark:text-white">Pratham Pandey</span>
            </h1>
            <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-xl">
              A technology and traveling enthusiast passionate about creating innovative solutions and exploring new
              horizons
            </p>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-neutral-800 dark:border-neutral-200 hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:text-white dark:hover:text-neutral-900 transition-all"
              onClick={scrollToProjects}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Note: Replace this with your actual image after deployment */}
              {/* Path: C:\Users\Darshika Pandey\OneDrive\Desktop\practice\1000107951 (1).png */}
              <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="1000107951 (1).png?height=600&width=600"
                  alt="Pratham Pandey"
                  className="w-full h-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center text-neutral-400 bg-neutral-100 dark:bg-neutral-800 bg-opacity-30 dark:bg-opacity-30">

                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
