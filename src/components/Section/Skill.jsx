import React, { useState } from "react";
import { skill } from "../data/Skill";
import * as Icons from "lucide-react";
import FadeIn from "../Animations/FadeIn";
import RadialGradientBackground from "../background/RadialgradientBackground";
import { Code2, Sparkles } from "lucide-react";

// ─── helpers ────────────────────────────────────────────────────────────────

const getProficiencyLevel = (level) => {
  const levels = { Expert: 95, Advanced: 80, Intermediate: 65 };
  return levels[level] || 50;
};

const getLevelStyle = (level) => {
  const styles = {
    Expert: {
      badge: "text-[#8DFF69] bg-[#8DFF69]/10 border border-[#8DFF69]/25",
      bar: "from-[#8DFF69] to-[#6fe047]",
      glow: "shadow-[0_0_12px_#8DFF6966]",
    },
    Advanced: {
      badge: "text-cyan-400 bg-cyan-500/10 border border-cyan-500/25",
      bar: "from-cyan-400 to-cyan-600",
      glow: "shadow-[0_0_12px_rgba(34,211,238,0.4)]",
    },
    Intermediate: {
      badge: "text-emerald-400 bg-emerald-500/10 border border-emerald-500/25",
      bar: "from-emerald-400 to-emerald-600",
      glow: "shadow-[0_0_12px_rgba(52,211,153,0.4)]",
    },
  };
  return (
    styles[level] || {
      badge: "text-gray-400 bg-gray-500/10 border border-gray-500/25",
      bar: "from-gray-400 to-gray-600",
      glow: "",
    }
  );
};

// ─── category tabs ───────────────────────────────────────────────────────────

const CATEGORIES = {
  Frontend: [
    "React.js",
    "JavaScript",
    "Next.js",
    "TypeScript",
    "Redux",
    "Tailwind CSS",
  ],
  "Backend & APIs": [
    "Node.js",
    "Express.js",
    "REST API",
    "MongoDB",
    "PostgreSQL",
  ],
  "Tools & Others": ["Git", "GitHub", "Figma", "Vite", "Postman"],
};

// ─── single skill card ────────────────────────────────────────────────────────

const SkillCard = ({ s, index }) => {
  const Icon = Icons[s.icon] || Icons["Code2"];
  const percent = getProficiencyLevel(s.level);
  const style = getLevelStyle(s.level);

  return (
    <FadeIn delay={index * 60}>
      <div
        className="
          group relative bg-white/[0.04] hover:bg-white/[0.07]
          border border-white/10 hover:border-primary/30
          rounded-2xl p-5 flex flex-col gap-4
          transition-all duration-300 hover:scale-[1.025]
          overflow-hidden cursor-default
        "
      >
        {/* subtle corner glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

        {/* top row — icon + badge */}
        <div className="flex items-start justify-between gap-2">
          <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/15 transition-colors duration-300">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <span
            className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${style.badge}`}
          >
            {s.level}
          </span>
        </div>

        {/* name + experience */}
        <div>
          <p className="text-sm font-semibold text-white/90 mb-0.5">{s.name}</p>
          <p className="text-xs text-white/40">{s.experience}</p>
        </div>

        {/* progress bar */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[10px] text-white/40 uppercase tracking-wider">
              Proficiency
            </span>
            <span className="text-[11px] font-mono text-white/60">
              {percent}%
            </span>
          </div>
          <div className="h-1.5 w-full bg-white/8 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${style.bar} ${style.glow} transition-all duration-700`}
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

// ─── main component ───────────────────────────────────────────────────────────

const Skill = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const filteredSkills = skill.filter((s) =>
    (CATEGORIES[activeTab] || []).includes(s.name),
  );

  const totalSkills = skill.length;
  const expertCount = skill.filter((s) => s.level === "Expert").length;
  const advancedCount = skill.filter((s) => s.level === "Advanced").length;

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black py-24 overflow-hidden"
    >
      <RadialGradientBackground varient="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-8">
        {/* ── Section Header ── */}
        <FadeIn delay={0}>
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-xs text-white/80 tracking-[1.2px] uppercase">
                Tech Stack
              </span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-white/50 text-base max-w-xl leading-relaxed">
              Technologies I craft with daily — from pixel-perfect interfaces to
              robust server-side architectures.
            </p>
          </div>
        </FadeIn>

        {/* ── Quick Stats ── */}
        <FadeIn delay={80}>
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto">
            {[
              { value: `${totalSkills}+`, label: "Technologies" },
              { value: `${expertCount}`, label: "Expert Level" },
              { value: `${advancedCount}`, label: "Advanced" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-primary font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Category Tabs ── */}
        <FadeIn delay={120}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {Object.keys(CATEGORIES).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-primary text-black border-primary shadow-[0_0_16px_#8DFF6955]"
                    : "bg-white/5 text-white/60 border-white/10 hover:border-primary/30 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* ── Skills Grid ── */}
        <div
          key={activeTab}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {filteredSkills.map((s, index) => (
            <SkillCard key={s.id} s={s} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <FadeIn delay={200}>
          <div className="mt-16 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="relative bg-white/5 border border-white/10 hover:border-primary/30 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Always learning, always building 🚀
                </h3>
                <p className="text-sm text-white/50">
                  Open to new technologies and constantly evolving my skill set.
                </p>
              </div>
              <div className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/30 text-primary rounded-xl text-sm font-medium hover:bg-primary/20 transition-all duration-300">
                <Sparkles className="w-4 h-4" />
                View Projects
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Skill;
