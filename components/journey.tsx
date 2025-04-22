"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Briefcase, School, Star, Calendar } from "lucide-react"

const timelineData = [
  {
    id: 1,
    title: "10th Grade",
    date: "2020",
    description:
      "Greenway Modern School, Delhi \nPercentage: 88.6% \nParticipated in school's ATL innovation Lab by NITI Aayog",
    icon: <School className="h-6 w-6" />,
    color: "bg-blue-600",
    achievements: ["88.6%", "ATL Innovation Lab"],
  },
  {
    id: 2,
    title: "12th Grade",
    date: "2022",
    description: "Greenway Modern School, Delhi \nPCM with computer science \nPercentage: 88.4%",
    icon: <School className="h-6 w-6" />,
    color: "bg-green-600",
    achievements: ["88.4%", "PCM with CS"],
  },
  {
    id: 3,
    title: "College",
    date: "2022 - 2026",
    description:
      "SRM IST DELHI NCR \nBTech, Computer Engineering with specialization in AI-ML \nSep 2022 - Jun 2026 \nCurrent CGPA: 8.74 \nActive Member of the college's acting club AARZOO and finance club BITBUCKS",
    icon: <GraduationCap className="h-6 w-6" />,
    color: "bg-purple-600",
    achievements: ["CGPA: 8.74", "AARZOO Club", "BITBUCKS Club"],
  },
  {
    id: 4,
    title: "Front-End Development Intern",
    date: "Jun 2024 - Jul 2024",
    description:
      "Python Developer \nEGlogics Softech Pvt. Ltd. \nInternship \nJun 2024 - Jul 2024 · 2 mos \nOn-site Delhi, India \nFront-End Development Intern \nSKILLS: Python, HTML, CSS, JavaScript",
    icon: <Briefcase className="h-6 w-6" />,
    color: "bg-amber-600",
    achievements: ["Python", "HTML/CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Back-End Development Intern",
    date: "Dec 2024 - Jan 2025",
    description:
      "Python Developer \nEGlogics Softech Pvt. Ltd. \nInternship \nDec 2024 - Jan 2025 · 2 mos \nOn-site Delhi, India \nBack-End Development Intern \nSKILLS: Python, Django, DBsqlite, HTML, CSS",
    icon: <Briefcase className="h-6 w-6" />,
    color: "bg-red-600",
    achievements: ["Python", "Django", "DBsqlite"],
  },
]

export default function Journey() {
  const timelineRef = useRef<HTMLDivElement>(null)

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

    const timelineItems = document.querySelectorAll(".timeline-item")
    timelineItems.forEach((item) => {
      observer.observe(item)
    })

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item)
      })
    }
  }, [])

  return (
    <div className="max-w-5xl mx-auto relative" ref={timelineRef}>
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-red-400 to-neutral-200 transform -translate-x-1/2"></div>

      <div className="space-y-16">
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            className={`timeline-item relative opacity-0 transition-all duration-1000 ease-out ${
              index % 2 === 0 ? "left-item" : "right-item"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div
              className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center justify-center gap-8`}
            >
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                <div
                  className={`inline-block bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-neutral-100 dark:border-neutral-700 hover:shadow-lg transition-all duration-300 ${
                    index % 2 === 0 ? "rounded-tr-none" : "rounded-tl-none"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-white">{item.title}</h3>
                  <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 whitespace-pre-line mb-4">{item.description}</p>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2 mt-3 justify-end">
                    {item.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-700 px-3 py-1 rounded-full text-sm"
                      >
                        <Star className="h-3 w-3 text-red-600 dark:text-red-400" />
                        <span className="dark:text-neutral-200">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div
                  className={`${item.color} text-white p-3 rounded-full shadow-lg border-4 border-white dark:border-neutral-900`}
                >
                  {item.icon}
                </div>
              </div>

              {/* Empty space for the other side */}
              <div className="w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
