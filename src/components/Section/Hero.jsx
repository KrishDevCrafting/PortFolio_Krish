import React from "react";
import { Star } from "lucide-react";
import { PERSONAL_INFO, STATS } from "../../utils/Constants";
import FadeIn from "../Animations/FadeIn";
import RadialGradientBackground from "../background/RadialgradientBackground";
import { scrollToSection } from "../../hooks/useScrollSpy";
const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <RadialGradientBackground variant="hero" />
        {/* {Content Container} */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - content */}
            <div className="flex flex-col">
              <FadeIn delay={0}>
                <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full w-fit">
                  <Star className="w-4 h-4 text-white fill-white" />
                  <span className="text-xs md:text-sm tracking-[1.2px]">
                    {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  React.js Developer <br /> Portfolio
                </h1>
              </FadeIn>

              <FadeIn delay={200}>
                <p className="text-lg text-white/70 max-w-[550px] mb-8 leading-relaxed">
                  Building modern, scalable, web Applications with React,
                  JavaScript, and cutting-edge technologies. Transforming ideas
                  into exceptional digital experiences.
                </p>
              </FadeIn>

              {/* CTA Buttons - grouped on left */}
              <FadeIn delay={300}>
                <button
                  className="inline-flex items-center gap-0 mb-12 group w-fit"
                  onClick={() => scrollToSection("projects")}
                >
                  <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white hover:bg-transparent hover:text-white transition-all duration-300">
                    Get in Touch
                  </div>
                </button>
              </FadeIn>

              {/* Tech Stats - grouped on left */}
              <FadeIn delay={400}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-full">
                  {STATS.map((stat, index) => (
                    <div
                      key={index}
                      className="text-left border-r border-white/10 pr-8 last:border-r-0"
                    >
                      <div className="text-2xl font-normal text-primary mb-[4px] font-mono">
                        {stat.value}
                      </div>
                      <p className="text-xs text-white/50 leading-snug uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right Column - Visual Graphic */}
            <FadeIn delay={500}>
              <div className="relative flex justify-center lg:justify-end items-center min-h-[400px]">
                {/* Background Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />

                {/* Abstract Glass Card */}
                <div className="relative z-10 w-full max-w-[420px] p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 transition-all duration-500 hover:shadow-2xl group overflow-hidden">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform duration-500">
                      <SiReact className="w-6 h-6 text-primary animate-spin-slow" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2.5 w-32 bg-white/20 rounded-full" />
                      <div className="h-2 w-20 bg-white/10 rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/30" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 w-[85%] bg-primary/30 rounded-full" />
                      <div className="h-2 w-[70%] bg-white/10 rounded-full" />
                      <div className="h-2 w-[90%] bg-white/5 rounded-full" />
                    </div>
                  </div>

                  {/* Floating Tech Icons */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center animate-bounce shadow-2xl">
                    <SiNextdotjs className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-6 w-14 h-14 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center animate-bounce [animation-delay:1s] shadow-2xl">
                    <SiTailwindcss className="text-[#38BDF8] w-7 h-7" />
                  </div>
                </div>

                {/* Decorative ping circles */}
                <div className="absolute -top-4 left-1/4 w-3 h-3 rounded-full bg-primary/50 animate-ping" />
                <div className="absolute bottom-1/4 -right-4 w-4 h-4 rounded-full bg-white/20" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
