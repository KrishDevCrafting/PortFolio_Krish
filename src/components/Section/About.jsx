import React from "react";
import { Code, Sparkles } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { PERSONAL_INFO, ABOUT_STATS } from "../../utils/Constants";
import FadeIn from "../Animations/FadeIn";
import RadialGradientBackground from "../background/RadialgradientBackground";

const About = () => {
  // Skills
  const SKILLS = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-black py-20 overflow-hidden"
    >
      <RadialGradientBackground variant="about" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col">
            <FadeIn delay={60}>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full w-fit">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-xs md:text-sm text-white/80 tracking-[1.2px]">
                  Full-Stack Developer
                </span>
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                About <span className="text-primary">Me</span>
              </h2>
            </FadeIn>

            <FadeIn delay={180}>
              {PERSONAL_INFO.bio.map((para, i) => (
                <p
                  key={i}
                  className="text-white/70 text-lg leading-relaxed mb-4"
                >
                  {para}
                </p>
              ))}
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={240}>
              <div className="grid grid-cols-3 gap-6 mt-8">
                {ABOUT_STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="text-left border-r border-white/10 pr-6 last:border-r-0"
                  >
                    <div className="text-2xl font-bold text-primary mb-1 font-mono">
                      {stat.value}
                    </div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Skills */}
          <FadeIn delay={300}>
            <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">
                Tech Stack
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {SKILLS.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <Icon
                        className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="text-xs text-white/60 text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
