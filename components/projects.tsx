"use client"

import { useState } from "react"
import { ArrowUpRight, Code, Database, Brain } from "lucide-react"
import { cn } from "@/lib/utils"

const projectCategories = {
  webdev: [
    {
      id: 1,
      title: "Meetly",
      description:
        "A website for storing information of upcoming meetings. Helps users organize and track their meeting schedules efficiently.",
      technologies: "Django, HTML, CSS",
      image: "metly.png?height=600&width=800",
      github: "https://github.com/PrathamPandey24/Meetly",
      demo: "https://meetly-demo.vercel.app",
    },
    {
      id: 2,
      title: "MyBlog",
      description:
        "A personal blogging platform where I post blogs about myself and my experiences. Features user authentication and markdown support.",
      technologies: "Django, HTML, CSS",
      image: "myblog.png?height=600&width=800 border-radius-2xl",
      github: "https://github.com/PrathamPandey24/My_Blog",
      demo: "https://myblog-demo.vercel.app",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "This portfolio website showcasing my journey, skills, and projects. Features a clean, minimalist design with smooth transitions.",
      technologies: "Next.js, Tailwind CSS, React",
      image: "portfolio.png?height=600&width=800",
      github: "https://github.com/prathampandey/portfolio",
      demo: "https://pratham-pandey.vercel.app",
    },
  ],
  python: [
    {
      id: 4,
      title: "Data Analysis Tool",
      description:
        "Python tool for analyzing and visualizing large datasets. Helps extract meaningful insights from complex data.",
      technologies: "Python, Pandas, NumPy",
      image: "anlysis.png?height=600&width=800",
      github: "https://github.com/prathampandey/data-analysis",
      demo: null,
    },
    {
      id: 5,
      title: "A-Star path finding ",
      description: "A* pathfinding algorithm visualizer. Helps visualize the pathfinding process in a grid-based environment",
      technologies: "Python, Tkinter, A* Algorithm",
      image: "astar.png?height=600&width=800",
      github: "https://github.com/prathampandey/automation",
      demo: null,
    },
  ],
  ml: [
    {
      id: 7,
      title: "Image Classification",
      description: "Deep learning model for classifying images using Convolutional Neural Networks (CNN).",
      technologies: "Python, TensorFlow, CNN",
      image: "classification.png?height=600&width=800",
      github: "https://github.com/prathampandey/image-classification",
      demo: null,
    },
    {
      id: 8,
      title: "Sentiment Analysis",
      description: "NLP model for analyzing sentiment in text data using natural language processing techniques.",
      technologies: "Python, NLTK, Scikit-learn",
      image: "sentiment.png?height=600&width=800",
      github: "https://github.com/prathampandey/sentiment-analysis",
      demo: "https://sentiment.yourdomain.com",
    },
    {
      id: 9,
      title: "Predictive Analytics",
      description: "Machine learning model for predicting future trends based on historical data patterns.",
      technologies: "Python, Scikit-learn, Pandas",
      image: "predicitve.png?height=600&width=800",
      github: "https://github.com/prathampandey/predictive-analytics",
      demo: null,
    },
  ],
  ds: [
    {
      id: 10,
      title: "Data Visualization Dashboard",
      description:
        "An interactive dashboard for visualizing complex datasets using charts and graphs.",
      technologies: "Python, Matplotlib, Plotly",
      image: "dataviz.png?height=600&width=800",
      github: "https://github.com/prathampandey/data-visualization",
      demo: null,
    },
    {
      id: 11,
      title: "Big Data Analysis",
      description:
        "A project for processing and analyzing large-scale datasets using distributed computing.",
      technologies: "Python, Hadoop, Spark",
      image: "bigdata.png?height=600&width=800",
      github: "https://github.com/prathampandey/big-data-analysis",
      demo: null,
    },
  ],
}

const categories = [
  { id: "all", name: "All Projects", icon: <ArrowUpRight className="h-5 w-5" /> },
  { id: "webdev", name: "Web Development", icon: <Code className="h-5 w-5" /> },
  { id: "python", name: "Python", icon: <Database className="h-5 w-5" /> },
  { id: "ml", name: "Machine Learning", icon: <Brain className="h-5 w-5" /> },
  { id: "ds", name: "Data Science", icon: <Brain className="h-5 w-5" /> },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const getFilteredProjects = () => {
    if (activeCategory === "all") {
      return [...projectCategories.webdev, ...projectCategories.python, ...projectCategories.ml]
    }
    return projectCategories[activeCategory as keyof typeof projectCategories] || []
  }

  const filteredProjects = getFilteredProjects()

  return (
    <div className="space-y-10">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-full transition-all",
              activeCategory === category.id
                ? "bg-red-600 text-white shadow-md"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700",
            )}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group cursor-pointer bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                <ArrowUpRight
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  size={32}
                />
              </div>
            </div>
            <div className="p-6 space-y-2">
              <div className="text-sm font-medium text-red-600 dark:text-red-400">{project.technologies}</div>
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-white">{project.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">{project.description}</p>

              <div className="flex gap-4 pt-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
