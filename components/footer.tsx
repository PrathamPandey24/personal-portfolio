import Link from "next/link"
import { Instagram, Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">Pratham Pandey</h3>
            <p className="text-neutral-400 max-w-xs">
              A technology and traveling enthusiast passionate about creating innovative solutions and exploring new
              horizons.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#projects" className="text-neutral-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#journey" className="text-neutral-400 hover:text-white transition-colors">
                  Journey
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-neutral-400 hover:text-white transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-500 mb-4 md:mb-0">© {currentYear} Pratham Pandey. All rights reserved.</div>
          <div className="flex space-x-6">
            <Link href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
