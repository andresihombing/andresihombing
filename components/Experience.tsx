"use client";

import { useState } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronDown } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    role: "Frontend Developer",
    company: "Prudential Indonesia",
    period: "September 2022 – Present",
    duration: "2+ years",
    location: "Jakarta, Indonesia",
    description:
      "Developed and maintained the Prudential Indonesia mobile application. Migrated from Ionic/Angular to React Native with re-architecture using Redux and Realm.",
    responsibilities: [
      "Migrated mobile app from Ionic/Angular to React Native",
      "Rewrote core modules using Redux & Realm",
      "Developed product showcases and campaign modules",
      "Integrated backend via RESTful APIs",
      "Handled async data flows, error states, and data persistence",
    ],
    tech: ["React Native", "Redux", "Realm", "RESTful APIs"],
    color: "from-orange-500 to-amber-500",
    dotColor: "bg-orange-500",
    borderColor: "border-orange-500/30",
    current: true,
  },
  {
    id: 2,
    type: "work",
    role: "Frontend Developer",
    company: "Prosehat",
    period: "March 2022 – September 2022",
    duration: "7 months",
    location: "Jakarta, Indonesia",
    description:
      "Built a health marketplace web application for marketing health products and doctor consultations.",
    responsibilities: [
      "Translated Figma designs into pixel-perfect React components",
      "Built product and doctor consultation listing features",
      "Integrated Redux for global state management",
      "Connected frontend to backend via RESTful APIs",
    ],
    tech: ["React.js", "Redux", "RESTful APIs", "Figma"],
    color: "from-green-500 to-emerald-500",
    dotColor: "bg-green-500",
    borderColor: "border-green-500/30",
    current: false,
  },
  {
    id: 3,
    type: "work",
    role: "Software Engineer",
    company: "Bank Mandiri",
    period: "March 2021 – March 2022",
    duration: "1 year",
    location: "Jakarta, Indonesia",
    description:
      "Developed and maintained the Mandiri Kartu Kredit web application to deliver credit card product and program information.",
    responsibilities: [
      "Developed promotional pages for marketing team",
      "Executed deployment workflows (staging & production)",
      "Handled database migrations, backups, and server updates",
      "Minified and optimized front-end assets using Laravel build tools",
    ],
    tech: ["Laravel", "PHP", "HTML", "CSS", "MySQL"],
    color: "from-blue-500 to-cyan-500",
    dotColor: "bg-blue-500",
    borderColor: "border-blue-500/30",
    current: false,
  },
  {
    id: 4,
    type: "work",
    role: "Software Engineer",
    company: "Transfree",
    period: "August 2020 – February 2021",
    duration: "7 months",
    location: "Jakarta, Indonesia",
    description:
      "Built a mobile application for international money transfers using React Native for the Android platform.",
    responsibilities: [
      "Transformed UI designs into responsive Android components",
      "Built push notifications and user profile management",
      "Integrated mobile app with backend via RESTful APIs",
      "Managed data flow, error handling, and performance",
    ],
    tech: ["React Native", "Android", "RESTful APIs"],
    color: "from-purple-500 to-violet-500",
    dotColor: "bg-purple-500",
    borderColor: "border-purple-500/30",
    current: false,
  },
];

const internships = [
  {
    role: "Software Engineer (Intern)",
    company: "Humas Kab. Toba",
    period: "June 2020 – August 2020",
  },
  {
    role: "Software Engineer (Intern)",
    company: "Jubelio",
    period: "June 2019 – August 2019",
  },
  {
    role: "Software Engineer (Intern)",
    company: "SDI – Institut Teknologi Del",
    period: "July 2018 – September 2018",
  },
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-[#0d0d0d]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
            My Journey
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My career journey from 2018 to the present
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Experience - Timeline */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <Briefcase size={18} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Full Time</h3>
            </div>

            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`relative glass rounded-3xl border ${exp.borderColor} transition-all duration-500 overflow-hidden`}
              >
                {/* Left accent bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${exp.color}`}
                />

                <div className="p-6 pl-8">
                  {/* Header */}
                  <div
                    className="flex items-start justify-between cursor-pointer"
                    onClick={() =>
                      setExpandedId(expandedId === exp.id ? null : exp.id)
                    }
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <h4 className="text-lg font-bold text-white">
                          {exp.role}
                        </h4>
                        {exp.current && (
                          <span className="px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
                            Current
                          </span>
                        )}
                      </div>
                      <p
                        className={`font-semibold text-base bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                      >
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-4 mt-2 flex-wrap">
                        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                          <Calendar size={13} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                          <MapPin size={13} />
                          <span>{exp.location}</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/8 text-gray-400 text-xs">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 mt-1 ${
                        expandedId === exp.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedId === exp.id
                        ? "max-h-96 opacity-100 mt-5"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2 mb-5">
                      {exp.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2 text-gray-400 text-sm"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${exp.dotColor} mt-1.5 flex-shrink-0`}
                          />
                          {r}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/8 text-gray-400 text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Education */}
            <div className="glass rounded-3xl border border-white/8 p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <GraduationCap size={18} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>

              <div className="relative pl-5 border-l-2 border-purple-500/20">
                <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-purple-500" />
                <div>
                  <h4 className="text-white font-bold text-base">
                    Institut Teknologi Del
                  </h4>
                  <p className="text-purple-400 text-sm font-medium mt-0.5">
                    D4 Teknik Informatika
                  </p>
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-2">
                    <Calendar size={11} />
                    <span>2016 – 2019</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-1">
                    <MapPin size={11} />
                    <span>Laguboti, Sumatera Utara</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Internships */}
            <div className="glass rounded-3xl border border-white/8 p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Briefcase size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Internship</h3>
              </div>

              <div className="space-y-5">
                {internships.map((intern, i) => (
                  <div
                    key={i}
                    className="relative pl-5 border-l-2 border-cyan-500/20"
                  >
                    <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-cyan-500/50 border border-cyan-500" />
                    <h4 className="text-white font-semibold text-sm">
                      {intern.company}
                    </h4>
                    <p className="text-cyan-400 text-xs font-medium mt-0.5">
                      {intern.role}
                    </p>
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-1">
                      <Calendar size={11} />
                      <span>{intern.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Card */}
            <div className="relative glass rounded-3xl border border-orange-500/20 p-7 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">6+</div>
                <div className="text-white font-bold text-lg mb-1">
                  Years of Experience
                </div>
                <div className="text-gray-500 text-sm">
                  Building web &amp; mobile applications
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/3 border border-white/5">
                    <div className="text-2xl font-black text-orange-500">4</div>
                    <div className="text-gray-500 text-xs">Companies</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/3 border border-white/5">
                    <div className="text-2xl font-black text-orange-500">3</div>
                    <div className="text-gray-500 text-xs">Internships</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
