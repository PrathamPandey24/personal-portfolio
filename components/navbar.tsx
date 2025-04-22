"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white dark:bg-neutral-900 shadow-sm py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            href="#hero"
            className="text-2xl font-bold text-red-600 dark:text-red-500 tracking-tight"
            onClick={(e) => handleNavClick(e, "#hero")}
          >
            Pratham Pandey
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-base font-medium transition-colors hover:text-red-600 dark:hover:text-red-400 ${
                      activeSection === item.href.replace("#", "")
                        ? "text-red-600 dark:text-red-400"
                        : "text-neutral-800 dark:text-neutral-200"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-800 dark:text-neutral-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block text-lg font-medium transition-colors hover:text-red-600 dark:hover:text-red-400 ${
                      activeSection === item.href.replace("#", "")
                        ? "text-red-600 dark:text-red-400"
                        : "text-neutral-800 dark:text-neutral-200"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
