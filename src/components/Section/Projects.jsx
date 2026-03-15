import React, { useState } from "react";
import { project, categories } from "../data/Project";
import * as Icons from "lucide-react";
import FadeIn from "../Animations/FadeIn";

import { Github, ExternalLink, Sparkles, Star, Folder } from "lucide-react";

// ─── Per-project banner themes ─────────────────────────────────────────────────
const BANNER_THEMES = [
  {
    // ShopSphere – green/teal commerce
    bg: "from-[#0a2a1a] via-[#0d1f14] to-[#050f0a]",
    orb1: "bg-[#8DFF69]/25 w-28 h-28 -top-6 -left-6",
    orb2: "bg-emerald-400/15 w-20 h-20 bottom-2 right-4",
    orb3: "bg-[#8DFF69]/10 w-14 h-14 top-8 right-16",
    accent: "#8DFF69",
    Icon1: Icons.ShoppingCart,
    Icon2: Icons.CreditCard,
    Icon3: Icons.Package,
    label: "E-Commerce",
  },
  {
    // DevBlog – indigo/purple blog
    bg: "from-[#100d2a] via-[#0e0b22] to-[#07060f]",
    orb1: "bg-violet-500/25 w-32 h-32 -top-8 -right-8",
    orb2: "bg-indigo-400/15 w-20 h-20 bottom-0 left-6",
    orb3: "bg-purple-400/10 w-12 h-12 top-6 left-20",
    accent: "#a78bfa",
    Icon1: Icons.BookOpen,
    Icon2: Icons.PenLine,
    Icon3: Icons.Hash,
    label: "Blogging",
  },
  {
    // TaskFlow – amber/orange productivity
    bg: "from-[#1f1500] via-[#180f00] to-[#0a0500]",
    orb1: "bg-amber-400/25 w-28 h-28 -bottom-6 -left-6",
    orb2: "bg-orange-500/15 w-20 h-20 top-2 right-2",
    orb3: "bg-yellow-400/10 w-14 h-14 bottom-8 right-20",
    accent: "#fbbf24",
    Icon1: Icons.LayoutDashboard,
    Icon2: Icons.CheckSquare,
    Icon3: Icons.Users,
    label: "Productivity",
  },
  {
    // AuthKit – sky/cyan API
    bg: "from-[#001a24] via-[#001420] to-[#00080f]",
    orb1: "bg-cyan-400/25 w-32 h-32 -top-8 left-4",
    orb2: "bg-sky-500/15 w-20 h-20 bottom-2 -right-4",
    orb3: "bg-blue-400/10 w-14 h-14 top-10 right-20",
    accent: "#22d3ee",
    Icon1: Icons.ShieldCheck,
    Icon2: Icons.KeyRound,
    Icon3: Icons.Lock,
    label: "Security",
  },
  {
    // WeatherNow – blue/slate weather
    bg: "from-[#050d1f] via-[#050b18] to-[#020510]",
    orb1: "bg-blue-500/25 w-32 h-32 -bottom-8 -right-6",
    orb2: "bg-slate-400/15 w-20 h-20 top-2 left-6",
    orb3: "bg-sky-400/10 w-14 h-14 bottom-10 left-20",
    accent: "#60a5fa",
    Icon1: Icons.Cloud,
    Icon2: Icons.Wind,
    Icon3: Icons.Thermometer,
    label: "Weather",
  },
  {
    // ChatPulse – rose/pink realtime
    bg: "from-[#1f0a10] via-[#180710] to-[#0a0307]",
    orb1: "bg-rose-500/25 w-28 h-28 -top-6 -right-6",
    orb2: "bg-pink-400/15 w-20 h-20 bottom-2 left-4",
    orb3: "bg-fuchsia-400/10 w-14 h-14 top-8 left-20",
    accent: "#fb7185",
    Icon1: Icons.MessageCircle,
    Icon2: Icons.Zap,
    Icon3: Icons.Radio,
    label: "Real-time",
  },
];

// ─── Tech pill ────────────────────────────────────────────────────────────────
const TechPill = ({ name, accent }) => (
  <span
    className="text-[10px] font-medium px-2.5 py-1 rounded-full border tracking-wide"
    style={{
      color: accent,
      backgroundColor: `${accent}15`,
      borderColor: `${accent}30`,
    }}
  >
    {name}
  </span>
);

// ─── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ p, index }) => {
  const theme = BANNER_THEMES[index % BANNER_THEMES.length];
  const { Icon1, Icon2, Icon3 } = theme;

  return (
    <FadeIn delay={index * 80}>
      <div
        className="
          group relative flex flex-col
          bg-white/[0.04] hover:bg-white/[0.07]
          border border-white/10 hover:border-white/20
          rounded-2xl overflow-hidden
          transition-all duration-300 hover:scale-[1.02]
          h-full
        "
        style={{ "--accent": theme.accent }}
      >
        {/* card-level glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none z-0"
          style={{
            boxShadow: `inset 0 0 60px ${theme.accent}12`,
          }}
        />

        {/* ── Rich Banner ── */}
        <div
          className={`relative h-44 bg-gradient-to-br ${theme.bg} overflow-hidden flex-shrink-0 border-b border-white/8`}
        >
          {/* Floating blurred orbs */}
          <div
            className={`absolute ${theme.orb1} rounded-full blur-2xl transition-transform duration-700 group-hover:scale-110`}
          />
          <div
            className={`absolute ${theme.orb2} rounded-full blur-xl transition-transform duration-700 group-hover:scale-125`}
          />
          <div
            className={`absolute ${theme.orb3} rounded-full blur-lg transition-transform duration-500 group-hover:scale-110`}
          />

          {/* Subtle diagonal shimmer streak */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              background: `linear-gradient(
                125deg,
                transparent 30%,
                ${theme.accent} 50%,
                transparent 70%
              )`,
              backgroundSize: "200% 200%",
            }}
          />

          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `radial-gradient(${theme.accent} 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Floating tech icon cluster */}
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            {/* Left orbiting icon */}
            <div
              className="p-2.5 rounded-xl border opacity-40 group-hover:opacity-70 group-hover:-translate-y-1 transition-all duration-500"
              style={{
                backgroundColor: `${theme.accent}12`,
                borderColor: `${theme.accent}25`,
              }}
            >
              <Icon1 className="w-5 h-5" style={{ color: theme.accent }} />
            </div>

            {/* Center main icon — bigger */}
            <div
              className="p-4 rounded-2xl border group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-400 shadow-lg"
              style={{
                backgroundColor: `${theme.accent}18`,
                borderColor: `${theme.accent}35`,
                boxShadow: `0 8px 32px ${theme.accent}25`,
              }}
            >
              <Icon2 className="w-8 h-8" style={{ color: theme.accent }} />
            </div>

            {/* Right orbiting icon */}
            <div
              className="p-2.5 rounded-xl border opacity-40 group-hover:opacity-70 group-hover:-translate-y-1 transition-all duration-500 delay-75"
              style={{
                backgroundColor: `${theme.accent}12`,
                borderColor: `${theme.accent}25`,
              }}
            >
              <Icon3 className="w-5 h-5" style={{ color: theme.accent }} />
            </div>
          </div>

          {/* Bottom label bar */}
          <div
            className="absolute bottom-0 inset-x-0 px-4 py-1.5 flex items-center justify-between"
            style={{ background: `${theme.accent}0a` }}
          >
            <span
              className="text-[9px] font-mono uppercase tracking-[2px] opacity-50"
              style={{ color: theme.accent }}
            >
              {theme.label}
            </span>
            <div className="flex gap-1">
              {[1, 2, 3].map((d) => (
                <div
                  key={d}
                  className="w-1 rounded-full opacity-30"
                  style={{
                    backgroundColor: theme.accent,
                    height: `${8 + d * 4}px`,
                    alignSelf: "flex-end",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Featured badge */}
          {p.featured && (
            <div
              className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border backdrop-blur-sm"
              style={{
                backgroundColor: `${theme.accent}20`,
                borderColor: `${theme.accent}40`,
              }}
            >
              <Star
                className="w-3 h-3 fill-current"
                style={{ color: theme.accent }}
              />
              <span
                className="text-[10px] font-semibold tracking-wider uppercase"
                style={{ color: theme.accent }}
              >
                Featured
              </span>
            </div>
          )}

          {/* Category badge */}
          <div className="absolute top-3 right-3 px-3 py-1 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full text-[10px] text-white/50 uppercase tracking-wider">
            {p.category}
          </div>
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col flex-1 p-5 gap-4">
          {/* Title */}
          <div>
            <h3
              className="text-base font-bold text-white mb-1.5 transition-colors duration-300"
              style={{ "--tw-text-opacity": 1 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              {p.title}
            </h3>
            <p className="text-sm text-white/55 leading-relaxed line-clamp-2">
              {p.description}
            </p>
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5">
            {p.technology.slice(0, 4).map((tech, i) => (
              <TechPill key={i} name={tech} accent={theme.accent} />
            ))}
            {p.technology.length > 4 && (
              <span className="text-[10px] px-2 py-1 text-white/35">
                +{p.technology.length - 4}
              </span>
            )}
          </div>

          {/* Metrics */}
          <div className="flex items-center gap-2 text-[11px] text-white/40">
            <Icons.BarChart2
              className="w-3.5 h-3.5 flex-shrink-0"
              style={{ color: `${theme.accent}80` }}
            />
            <span>{p.metrics}</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/8">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors duration-200 group/link"
            >
              <Github
                className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-200"
                style={{ color: "inherit" }}
              />
              Code
            </a>
            <a
              href={p.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors duration-200 group/link ml-auto"
            >
              Live Preview
              <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? project
      : project.filter((p) => p.category === activeCategory);

  const featuredCount = project.filter((p) => p.featured).length;

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black py-24 overflow-hidden scroll-mt-24"
    >

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/30 opacity-50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-primary/25 opacity-40 rounded-full blur-3xl" />
      </div>
 
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-8">
        {/* ── Header ── */}
        <FadeIn delay={0}>
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Folder className="w-4 h-4 text-primary" />
              <span className="text-xs text-white/80 tracking-[1.2px] uppercase">
                My Work
              </span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-white/50 text-base max-w-xl leading-relaxed">
              Real-world apps built with passion — from concept to deployment.
              Each project solves a genuine problem.
            </p>
          </div>
        </FadeIn>

        {/* ── Stats row ── */}
        <FadeIn delay={60}>
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto">
            {[
              { value: `${project.length}`, label: "Projects" },
              { value: `${featuredCount}`, label: "Featured" },
              {
                value: `${[...new Set(project.map((p) => p.category))].length}`,
                label: "Categories",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-primary font-mono mb-1">
                  {stat.value}+
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Category Filter Tabs ── */}
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-black border-primary shadow-[0_0_16px_#8DFF6955]"
                    : "bg-white/5 text-white/60 border-white/10 hover:border-primary/30 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
                <span
                  className={`ml-2 text-[10px] font-mono ${activeCategory === cat ? "text-black/60" : "text-white/30"}`}
                >
                  {cat === "All"
                    ? project.length
                    : project.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* ── Projects Grid ── */}
        <div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((p, index) => (
            <ProjectCard key={p.id} p={p} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <FadeIn delay={200}>
          <div className="mt-16 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="relative bg-white/5 border border-white/10 hover:border-primary/30 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Want to see more? 🔍
                </h3>
                <p className="text-sm text-white/50">
                  Check out my GitHub for all open-source work and experiments.
                </p>
              </div>
              <a
                href="https://github.com/KrishDevCrafting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/30 text-primary rounded-xl text-sm font-medium hover:bg-primary/20 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                View GitHub
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
