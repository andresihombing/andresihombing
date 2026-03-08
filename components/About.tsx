"use client";

import { MapPin, GraduationCap, Heart, Coffee, Users, Zap } from "lucide-react";

const stats = [
  { value: "6+", label: "Years Experience", icon: Zap },
  { value: "4+", label: "Major Projects", icon: Coffee },
  { value: "3+", label: "Companies", icon: Users },
  { value: "10+", label: "Tech Stack", icon: Heart },
];

const highlights = [
  {
    icon: MapPin,
    title: "Location",
    value: "Jakarta, Indonesia",
  },
  {
    icon: GraduationCap,
    title: "Education",
    value: "D4 Teknik Informatika – Institut Teknologi Del",
  },
  {
    icon: Heart,
    title: "Passion",
    value: "Building beautiful & performant web/mobile apps",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0a0a0a]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-orange-500/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Get To Know Me
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative glass rounded-3xl p-8 border border-white/8">
              {/* Top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

              {/* Avatar */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-orange-500/30 via-[#1a1a1a] to-purple-500/30 border border-white/10 flex items-center justify-center">
                    <span className="text-5xl font-black gradient-text">AS</span>
                  </div>
                  {/* Status badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-400 text-xs font-semibold whitespace-nowrap">
                        Available for hire
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4 mt-6">
                {highlights.map(({ icon: Icon, title, value }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/3 border border-white/5 hover:border-orange-500/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                        {title}
                      </p>
                      <p className="text-white text-sm font-medium mt-0.5">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-orange-500/10 rounded-2xl rotate-12" />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border border-purple-500/10 rounded-xl -rotate-12" />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-snug">
                Passionate Developer Who{" "}
                <span className="gradient-text">Loves Learning</span> New
                Technologies
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I am a software developer with strong problem-solving skills.
                I have a great passion for learning new technologies related
                to software development and enjoy working in a team environment.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                With more than{" "}
                <span className="text-orange-400 font-semibold">6 years</span>{" "}
                of industry experience, I have worked at various companies
                ranging from startups to large enterprises such as{" "}
                <span className="text-white font-semibold">Bank Mandiri</span>{" "}
                and{" "}
                <span className="text-white font-semibold">
                  Prudential Indonesia
                </span>
                .
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I specialize in building responsive, performant, and
                user-friendly web and mobile applications using modern
                technologies such as{" "}
                <span className="text-orange-400 font-semibold">React.js</span>
                ,{" "}
                <span className="text-orange-400 font-semibold">
                  React Native
                </span>
                , and{" "}
                <span className="text-orange-400 font-semibold">Laravel</span>.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="group p-5 rounded-2xl glass border border-white/8 hover:border-orange-500/20 transition-all duration-300 hover:-translate-y-1 card-hover"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <Icon
                        size={16}
                        className="text-orange-500 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="text-3xl font-black gradient-text">{value}</div>
                  <div className="text-gray-500 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <a
                href="mailto:andrehombing140@gmail.com"
                className="flex-1 text-center px-6 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:-translate-y-0.5"
              >
                Let&apos;s Talk
              </a>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex-1 text-center px-6 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-orange-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
