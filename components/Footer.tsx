"use client";

import { Github, Linkedin, Mail, Phone, Heart, ArrowUp, Code2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/andresihombing", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/andre-sihombing", label: "LinkedIn" },
  { icon: Mail, href: "mailto:andrehombing140@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+6285928864477", label: "Phone" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Code2 size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Andre<span className="text-orange-500">.</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Frontend Developer &amp; Software Engineer passionate about
              building beautiful and functional digital products.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/8 text-gray-500 hover:text-orange-500 hover:border-orange-500/30 hover:bg-orange-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-500 text-sm hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-orange-500 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:andrehombing140@gmail.com"
                  className="flex items-center gap-3 text-gray-500 text-sm hover:text-orange-400 transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-orange-500/20 transition-all duration-300">
                    <Mail size={14} className="text-orange-500" />
                  </div>
                  andrehombing140@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+6285928864477"
                  className="flex items-center gap-3 text-gray-500 text-sm hover:text-orange-400 transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-orange-500/20 transition-all duration-300">
                    <Phone size={14} className="text-orange-500" />
                  </div>
                  +62 859-2886-4477
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-500 text-xs">📍</span>
                </div>
                Tapanuli Utara, Sumatera Utara, Indonesia
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Section */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Andre Sihombing. Made with{" "}
            <Heart size={13} className="text-orange-500 fill-orange-500" /> using Next.js &amp; Tailwind CSS
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-xs">
              andrehombing140@gmail.com
            </span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
