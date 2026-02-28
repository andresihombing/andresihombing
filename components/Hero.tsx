"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone, ArrowDown, Download } from "lucide-react";

const roles = [
  "Frontend Developer",
  "React Native Developer",
  "Software Engineer",
  "Laravel Developer",
  "Full Stack Developer",
];

// Fixed particle positions to avoid hydration mismatch (no Math.random on server)
const particles = [
  { left: "8%",  top: "12%", delay: "0s",   duration: "5s" },
  { left: "23%", top: "78%", delay: "1.2s", duration: "6s" },
  { left: "41%", top: "34%", delay: "0.5s", duration: "7s" },
  { left: "67%", top: "55%", delay: "2.1s", duration: "5s" },
  { left: "85%", top: "20%", delay: "3.4s", duration: "6s" },
  { left: "14%", top: "45%", delay: "1.8s", duration: "4s" },
  { left: "52%", top: "88%", delay: "0.3s", duration: "7s" },
  { left: "76%", top: "72%", delay: "2.7s", duration: "5s" },
  { left: "33%", top: "15%", delay: "4.1s", duration: "6s" },
  { left: "91%", top: "40%", delay: "1.5s", duration: "8s" },
  { left: "5%",  top: "65%", delay: "3.0s", duration: "5s" },
  { left: "60%", top: "8%",  delay: "0.8s", duration: "7s" },
  { left: "47%", top: "60%", delay: "2.3s", duration: "6s" },
  { left: "79%", top: "90%", delay: "1.1s", duration: "4s" },
  { left: "18%", top: "30%", delay: "3.7s", duration: "5s" },
  { left: "38%", top: "50%", delay: "0.6s", duration: "8s" },
  { left: "70%", top: "25%", delay: "4.5s", duration: "6s" },
  { left: "55%", top: "75%", delay: "2.9s", duration: "7s" },
  { left: "28%", top: "92%", delay: "1.4s", duration: "5s" },
  { left: "95%", top: "60%", delay: "3.2s", duration: "6s" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />

        {/* Floating Particles - fixed positions to avoid hydration mismatch */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/40 rounded-full animate-float"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium animate-fadeInUp">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Available for Work
            </div>

            {/* Name */}
            <div className="space-y-3 animate-fadeInUp delay-100">
              <p className="text-gray-400 text-lg font-medium tracking-widest uppercase">
                Hello, I&apos;m
              </p>
              <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tight">
                <span className="text-white">Andre</span>
                <br />
                <span className="gradient-text">Sihombing</span>
              </h1>
            </div>

            {/* Typewriter Role */}
            <div className="animate-fadeInUp delay-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-orange-500" />
                <div className="text-xl lg:text-2xl font-semibold text-gray-300 h-8 flex items-center">
                  <span className="text-orange-400">{displayed}</span>
                  <span className="ml-0.5 w-0.5 h-6 bg-orange-500 inline-block animate-pulse" />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg animate-fadeInUp delay-300">
              Software developer with strong problem-solving skills and a
              passion for learning new technologies. Over{" "}
              <span className="text-orange-400 font-semibold">6+ years</span>{" "}
              of experience in web & mobile development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fadeInUp delay-400">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1"
              >
                View My Work
                <ArrowDown
                  size={16}
                  className="group-hover:translate-y-1 transition-transform duration-300"
                />
              </a>
              <a
                href="/cv-andre-sihombing.pdf"
                download
                className="flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fadeInUp delay-500">
              <span className="text-gray-500 text-sm">Find me on</span>
              <div className="flex gap-3">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/andresihombing",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/andre-sihombing",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:andrehombing140@gmail.com",
                    label: "Email",
                  },
                  {
                    icon: Phone,
                    href: "tel:+6285928864477",
                    label: "Phone",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-orange-500 hover:border-orange-500/30 hover:bg-orange-500/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="flex justify-center lg:justify-end animate-fadeInRight delay-300">
            <div className="relative">
              {/* Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-500/20 animate-spin-slow" />
              <div
                className="absolute inset-4 rounded-full border border-dashed border-purple-500/20 animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "15s" }}
              />

              {/* Avatar Container */}
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 animate-float">
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-purple-500/20 blur-2xl" />

                {/* Avatar Circle */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-orange-500/20 via-[#1a1a1a] to-purple-500/20 border border-white/10 flex items-center justify-center overflow-hidden">
                  {/* Initials */}
                  <div className="text-center">
                    <div className="text-7xl lg:text-8xl font-black gradient-text leading-none">
                      AS
                    </div>
                    <div className="text-gray-500 text-sm mt-2 font-medium tracking-widest uppercase">
                      Andre Sihombing
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 px-3 py-2 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-xl animate-float delay-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-white">
                      Open to Work
                    </span>
                  </div>
                </div>

                <div
                  className="absolute -bottom-4 -left-4 px-3 py-2 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-xl animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-center">
                    <div className="text-xl font-black text-orange-500">6+</div>
                    <div className="text-xs text-gray-400">Years Exp.</div>
                  </div>
                </div>

                <div
                  className="absolute top-1/2 -right-8 px-3 py-2 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-xl animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="text-center">
                    <div className="text-xl font-black text-purple-400">4+</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 pb-8 animate-fadeInUp delay-700">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors duration-300 group"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Scroll Down
            </span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
