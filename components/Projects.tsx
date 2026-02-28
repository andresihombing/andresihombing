"use client";

import { useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Transfree",
    subtitle: "International Money Transfer App",
    description:
      "Web and mobile application for international money transfers (domestic to overseas and vice versa). Built with React Native for Android with RESTful API integration.",
    longDescription:
      "Transformed UI designs into responsive and polished Android components using React Native, ensuring seamless user experience. Built and optimized essential features like push notifications and user profile management in close collaboration with design and backend teams.",
    tech: ["React Native", "Android", "RESTful APIs", "Redux"],
    category: "Mobile",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/5",
    borderColor: "border-orange-500/20",
    accentColor: "text-orange-400",
    icon: "💸",
    highlights: [
      "Responsive Android UI components",
      "Push notifications & user profile",
      "RESTful API integration",
      "Seamless UX design",
    ],
  },
  {
    id: 2,
    title: "Mandiri Kartu Kredit",
    subtitle: "Bank Mandiri Credit Card Web App",
    description:
      "Web application to deliver product and program information for Bank Mandiri Credit Cards. Built with Laravel, HTML, CSS, and MySQL.",
    longDescription:
      "Developed and added promotional pages according to user and marketing team requests, ensuring consistency with brand identity and responsive UI. Executed deployment workflows including staging and production, handling database migrations, backups, and server updates.",
    tech: ["Laravel", "PHP", "HTML", "CSS", "MySQL"],
    category: "Web",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/5",
    borderColor: "border-blue-500/20",
    accentColor: "text-blue-400",
    icon: "💳",
    highlights: [
      "Promotional pages development",
      "Deployment workflows (staging & prod)",
      "Database migrations & backups",
      "Front-end asset optimization",
    ],
  },
  {
    id: 3,
    title: "Prosehat",
    subtitle: "Health Marketplace Web App",
    description:
      "Health marketplace web application for marketing health products and doctor consultations. Built with React.js, Redux, and RESTful APIs.",
    longDescription:
      "Translated Figma designs into responsive React components, ensuring a seamless and pixel-perfect user interface. Built product and doctor consultation listing features, integrating Redux for efficient global state management.",
    tech: ["React.js", "Redux", "RESTful APIs", "Figma"],
    category: "Web",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/5",
    borderColor: "border-green-500/20",
    accentColor: "text-green-400",
    icon: "🏥",
    highlights: [
      "Figma to React pixel-perfect UI",
      "Product & doctor listing features",
      "Redux global state management",
      "RESTful API data fetching",
    ],
  },
  {
    id: 4,
    title: "Prudential Indonesia",
    subtitle: "Insurance Mobile & Web App",
    description:
      "Mobile application for Prudential Indonesia. Migrated from Ionic/Angular to React Native with re-architecture using Redux and Realm.",
    longDescription:
      "Migrated the mobile application from Ionic/Angular to React Native, rewriting core modules and rearchitecting components using Redux and Realm for efficient state and local data management. Developed new features including product showcases and campaign modules.",
    tech: ["React Native", "Ionic", "Angular", "Redux", "Realm"],
    category: "Mobile",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/5",
    borderColor: "border-purple-500/20",
    accentColor: "text-purple-400",
    icon: "🛡️",
    highlights: [
      "Ionic/Angular → React Native migration",
      "Redux & Realm architecture",
      "Product showcase & campaign modules",
      "Async data flows & error handling",
    ],
  },
];

const categories = ["All", "Web", "Mobile"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-[#0a0a0a]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
            What I&apos;ve Built
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Some of the projects I have worked on throughout my professional career
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25"
                  : "glass border border-white/8 text-gray-400 hover:text-white hover:border-orange-500/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className={`group relative glass rounded-3xl border ${project.borderColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Top gradient */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}
              />

              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl ${project.bgColor} border ${project.borderColor} flex items-center justify-center text-2xl`}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.bgColor} border ${project.borderColor} ${project.accentColor}`}
                        >
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className={`text-sm ${project.accentColor} font-medium`}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300">
                      <Github size={16} />
                    </button>
                    <button className="w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500/30 transition-all duration-300">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Expanded Content */}
                {expandedId === project.id && (
                  <div className="mb-6 space-y-4">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.longDescription}
                    </p>
                    <div>
                      <p className="text-white text-sm font-semibold mb-3">
                        Key Highlights:
                      </p>
                      <ul className="space-y-2">
                        {project.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-2 text-gray-400 text-sm"
                          >
                            <ChevronRight
                              size={14}
                              className={project.accentColor}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/8 text-gray-400 text-xs font-medium hover:border-orange-500/20 hover:text-orange-400 transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() =>
                    setExpandedId(expandedId === project.id ? null : project.id)
                  }
                  className={`flex items-center gap-2 text-sm font-semibold ${project.accentColor} hover:opacity-80 transition-all duration-300`}
                >
                  {expandedId === project.id ? "Show Less" : "Read More"}
                  <ChevronRight
                    size={16}
                    className={`transition-transform duration-300 ${
                      expandedId === project.id ? "rotate-90" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-6">
            Interested in collaborating on a project?
          </p>
          <a
            href="mailto:andrehombing140@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1"
          >
            Start a Project Together
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
