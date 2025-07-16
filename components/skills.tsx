"use client"

import { useEffect, useRef } from "react"
import { Code, Lightbulb, Users, BarChart, Globe, Database, Cpu } from "lucide-react"
import { cn } from "@/lib/utils"

const technicalSkills = [
  {
    category: "Frontend",
    icon: <Globe className="h-6 w-6" />,
    skills: ["HTML", "CSS",],
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    category: "Backend",
    icon: <Code className="h-6 w-6" />,
    skills: ["Python", "Django"],
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "MySQL"],
    color: "bg-gradient-to-r from-orange-500 to-amber-500",
  },
  {
    category: "Programming",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["Python","SQL" ],
    color: "bg-gradient-to-r from-purple-500 to-violet-500",
  },
  {
    category: "Data Science",
    icon: <BarChart className="h-6 w-6" />,
    skills: ["PowerBI", "Tableau","Excel","Pandas", "NumPy", "Data Analysis","Pipelines", "Data Visualization"],
    color: "bg-gradient-to-r from-red-500 to-pink-500",
  },
  {
    category: "Business Analyst",
    icon: <BarChart className="h-6 w-6" />,
    skills: ["Data storytelling", "KPI design", "Stakeholder reporting"],
    color: "bg-gradient-to-r from-red-500 to-pink-500",
  },
]

const professionalSkills = [
  {
    category: "Teamwork",
    icon: <Users className="h-6 w-6" />,
    skills: ["Collaboration", "Leadership", "Mentoring"],
    color: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },
  {
    category: "Communication",
    icon: <Globe className="h-6 w-6" />,
    skills: ["Technical Writing", "Presentation", "Documentation"],
    color: "bg-gradient-to-r from-yellow-500 to-orange-500",
  },
  {
    category: "Problem Solving",
    icon: <Lightbulb className="h-6 w-6" />,
    skills: ["Critical Thinking", "Analytical Skills", "Debugging"],
    color: "bg-gradient-to-r from-teal-500 to-green-500",
  },
]

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn")
          }
        })
      },
      { threshold: 0.1 },
    )

    const skillItems = document.querySelectorAll(".skill-item")
    skillItems.forEach((item, index) => {
      // Add staggered delay
      item.setAttribute("style", `transition-delay: ${index * 100}ms`)
      observer.observe(item)
    })

    return () => {
      skillItems.forEach((item) => {
        observer.unobserve(item)
      })
    }
  }, [])

  return (
    <div
      ref={skillsRef}
      className="relative py-10 px-4 rounded-2xl bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-200 dark:bg-red-900/20 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {[...technicalSkills, ...professionalSkills].map((skill, index) => (
          <div
            key={skill.category}
            className={cn(
              "skill-item opacity-0 bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-all duration-500 transform hover:-translate-y-1",
              "animate-fadeIn",
            )}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`${skill.color} text-white p-2 rounded-lg`}>{skill.icon}</div>
              <h3 className="text-xl font-bold text-neutral-800 dark:text-white">{skill.category}</h3>
            </div>
            <ul className="space-y-3">
              {skill.skills.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-400"></div>
                  <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
