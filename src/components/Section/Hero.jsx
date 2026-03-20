import React from "react";
import { Star, ChevronDown, ArrowRight } from "lucide-react";
import profile from "../../assets/krish-profile.jpg";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { PERSONAL_INFO, STATS } from "../../utils/Constants";
import FadeIn from "../Animations/FadeIn";

import { scrollToSection } from "../../hooks/useScrollSpy";
const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/30 opacity-50 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/25 opacity-40 rounded-full blur-3xl" />
        </div>
        {/* {Content Container} */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - content */}
            <div className="flex flex-col">
              <FadeIn delay={0}>
                <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full w-fit hover:border-primary/40 transition-colors duration-300 cursor-default">
                  <Star className="w-4 h-4 text-white fill-white animate-pulse" />
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
                  onClick={() => scrollToSection("contact")}
                >
                  <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white hover:bg-transparent hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    Get in Touch
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </FadeIn>

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

            {/* {Right Column-Developer Image} */}

            <FadeIn delay={200}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-4/5 w-full max-w-[350px] md:max-w-[500px] mx-auto lg:ml-auto">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                    <div className="absolute  inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                    {/* {Image Container} */}

                    <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)] group-hover:brightness-110 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-20 pointer-events-none" />
                      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-20 pointer-events-none" />
                      <img
                        src={profile}
                        alt="Developer at work"
                        className="w-full h-full object-cover filter contrast-[1.1] brightness-90 saturate-[0.85]"
                      />
                    </div>
                  </div>
                  {/* {Techology Stack} */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <FadeIn delay={500}>
                      <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-all duration-300">
                          <SiNextdotjs className="w-full h-full text-primary" />
                        </div>

                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-all duration-300">
                          <SiReact className="w-full h-full text-primary" />
                        </div>
                        <div className="  w-6 h-6 flex items-center justify-center hover:scale-110 transition-all duration-300">
                          <SiNodedotjs className="w-full h-full text-primary" />
                        </div>
                        <div className="  w-6 h-6 flex items-center justify-center hover:scale-110 transition-all duration-300">
                          <SiTailwindcss className="w-full h-full text-primary" />
                        </div>
                        <div className="  w-6 h-6 flex items-center justify-center hover:scale-110 transition-all duration-300">
                          <SiMongodb className="w-full h-full text-primary" />
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* <FadeIn delay={500}>
              <div className="relative flex justify-center lg:justify-end items-center min-h-[400px]">
               
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />

               
                <div className="relative z-10 w-full max-w-[420px] p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 transition-all duration-500 hover:shadow-2xl group overflow-hidden">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform duration-500">
                      <SiReact
                        className="w-6 h-6 text-primary animate-spin"
                        style={{ animationDuration: "3s" }}
                      />
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

                  <div className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center animate-bounce shadow-2xl">
                    <SiNextdotjs className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-6 w-14 h-14 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center animate-bounce [animation-delay:1s] shadow-2xl">
                    <SiTailwindcss className="text-[#38BDF8] w-7 h-7" />
                  </div>
                </div>

                
                <div className="absolute -top-4 left-1/4 w-3 h-3 rounded-full bg-primary/50 animate-ping" />
                <div className="absolute bottom-1/4 -right-4 w-4 h-4 rounded-full bg-white/20" />
              </div>
            </FadeIn> */}
          </div>
        </div>

        {/* Scroll Indicator */}

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </button>
      </section>
    </>
  );
};

export default Hero;
