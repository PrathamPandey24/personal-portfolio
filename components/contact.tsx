import { Mail, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react"

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <p className="text-neutral-600 mb-8">
            Feel free to reach out if you have any questions, project ideas, or just want to connect!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-full text-red-600">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-neutral-500">Email</div>
                <a
                  href="mailto:prthmpnd24@gmail.com"
                  className="text-neutral-800 hover:text-red-600 transition-colors"
                >
                  Pratham Pandey
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-full text-red-600">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-neutral-500">GitHub</div>
                <a
                  href="https://github.com/PrathamPandey24"
                  className="text-neutral-800 hover:text-red-600 transition-colors"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-full text-red-600">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-neutral-500">LinkedIn</div>
                <a
                  href="https://www.linkedin.com/in/pratham-pandey-83b456249/?trk=opento_sprofile_details"
                  className="text-neutral-800 hover:text-red-600 transition-colors"
                >
                 MyLinkedin
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-full text-red-600">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-neutral-500">Blog</div>
                <a
                  href="https://prathampandey.blog.com"
                  className="text-neutral-800 hover:text-red-600 transition-colors"
                >
                  MyBlog
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-full text-red-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-neutral-500">Location</div>
                <div className="text-neutral-800">Delhi, India</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
