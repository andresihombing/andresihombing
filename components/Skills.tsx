"use client";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-orange-500 to-amber-500",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/20",
    skills: [
      { name: "React.js", level: 92, icon: "⚛️" },
      { name: "React Native", level: 88, icon: "📱" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "Angular", level: 75, icon: "🔴" },
      { name: "Redux", level: 85, icon: "🟣" },
    ],
  },
  {
    title: "Backend",
    color: "from-purple-500 to-violet-500",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/20",
    skills: [
      { name: "Laravel", level: 82, icon: "🔴" },
      { name: "PHP", level: 80, icon: "🐘" },
      { name: "Yii2", level: 72, icon: "⚡" },
      { name: "RESTful APIs", level: 90, icon: "🔗" },
      { name: "MySQL", level: 85, icon: "🗄️" },
      { name: "MVC Pattern", level: 88, icon: "🏗️" },
    ],
  },
  {
    title: "Tools & Others",
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/20",
    skills: [
      { name: "Git & GitHub", level: 90, icon: "🐙" },
      { name: "Figma", level: 78, icon: "🎨" },
      { name: "Bootstrap", level: 85, icon: "🅱️" },
      { name: "Realm", level: 72, icon: "💾" },
      { name: "Ionic", level: 70, icon: "⚡" },
      { name: "HTML & CSS", level: 95, icon: "🌐" },
    ],
  },
];

const techBadges = [
  "React.js", "React Native", "TypeScript", "JavaScript",
  "Laravel", "PHP", "MySQL", "Redux", "Angular",
  "Yii2", "Bootstrap", "Figma", "Git", "RESTful API",
  "Ionic", "Realm", "HTML5", "CSS3", "MVC",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-[#0d0d0d]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
            What I Work With
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build outstanding digital products
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`group relative glass rounded-3xl p-7 border ${category.border} hover:shadow-2xl ${category.glow} transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Top gradient line */}
              <div
                className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${category.color} opacity-50`}
              />

              {/* Category Title */}
              <div className="flex items-center gap-3 mb-7">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white text-lg font-black">
                    {category.title[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{skill.icon}</span>
                        <span className="text-gray-300 text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badges Marquee */}
        <div className="relative overflow-hidden">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm font-medium tracking-widest uppercase">
              Technologies I&apos;ve Worked With
            </p>
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 overflow-hidden">
            <div className="flex gap-4 animate-[marquee_25s_linear_infinite] whitespace-nowrap">
              {[...techBadges, ...techBadges].map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-5 py-2.5 rounded-full glass border border-white/8 text-gray-300 text-sm font-medium hover:border-orange-500/30 hover:text-orange-400 transition-all duration-300 cursor-default whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
