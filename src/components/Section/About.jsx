import React from "react";
import { Download, Code, Code2, Sparkles } from "lucide-react";
import * as Icons from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { PERSONAL_INFO, ABOUT_STATS } from "../../utils/Constants";
import { skill } from "../data/Skill";
import FadeIn from "../Animations/FadeIn";


const About = () => {
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
      className="relative min-h-screen bg-black py-20 overflow-hidden scroll-mt-24"
    >

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 opacity-50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/25 opacity-40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-12">
            {/* Badge */}
            <div className="flex flex-col gap-8">
              <FadeIn delay={60}>
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full w-fit">
                  <Code className="w-4 h-4 text-primary" />
                  <span className="text-xs md:text-sm text-white/80 tracking-[1.2px]">
                    Full Stack Developer
                  </span>
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
              </FadeIn>
            </div>
            {/* Heading */}
            <FadeIn delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Crafting Digital{" "}
                <span className="text-primary">Experiences</span> That Matter
              </h2>
            </FadeIn>

            {/* Bio */}
            <FadeIn delay={200}>
              <div>
                {PERSONAL_INFO.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-white/70 text-lg leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={300}>
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

            {/* Download Resume Button */}
            <FadeIn delay={400}>
              <button
                onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary/10 border border-primary/30 text-primary rounded-xl hover:bg-primary/20 transition-all duration-300 group w-fit"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                Download Resume
              </button>
            </FadeIn>
          </div>

          {/* Right Column - Skills */}
          {/* <FadeIn delay={300}>
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
          </FadeIn> */}

          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {/* Expertise - Full Width */}
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Expertise
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        Specialized in building scalable web applications with
                        modern technologies and best practices
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Code - Half Width */}
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex flex-col gap-3">
                    <div className="p-3 bg-primary/10 rounded-xl w-fit">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-2">
                        Clean Code
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        Writing maintainable, well-documented code that scales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance - Half Width */}
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex flex-col gap-3">
                    <div className="p-3 bg-primary/10 rounded-xl w-fit">
                      <Download className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-2">
                        Performance
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        Optimizing application performance and ensuring smooth
                        user experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-primary/30 transition-all duration-300">
                <div className="text-2xl font-bold text-primary font-mono mb-1">
                  100%
                </div>
                <div className="text-xs text-white/50 uppercase tracking-wider">
                  Client Satisfaction
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-primary/30 transition-all duration-300">
                <div className="text-2xl font-bold text-primary font-mono mb-1">
                  24/7
                </div>
                <div className="text-xs text-white/50 uppercase tracking-wider">
                  Support Available
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-primary/30 transition-all duration-300">
                <div className="text-2xl font-bold text-primary font-mono mb-1">
                  Fast
                </div>
                <div className="text-xs text-white/50 uppercase tracking-wider">
                  Delivery Time
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* {Skills Grid Section} */}
        <FadeIn delay={500}>
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-normal text-white mb-2">
                Tech Stack & Expertise
              </h3>

              <p className="text-sm text-white/60">
                Technologies I work with to bulid amazing prodection
              </p>
            </div>
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
            w-full max-w-4xl
            "
            >
              {skill.map((s, index) => {
                const Icon = Icons[s.icon] || Icons["Code2"];
                return (
                  <div
                    className="group relative bg-white/5 hover:bg-white/10 border-primary/50 rounded-2xl p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105"
                    key={index}
                  >
                    <Icon className="text-3xl text-primary" />
                    <div className="text-sm text-white/80 font-medium text-center">
                      {s.name}
                    </div>
                    {/* {Hover Glow_Effect} */}
                    <div className=""></div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
