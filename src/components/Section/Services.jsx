import React from "react";
import { Services as servicesData } from "../data/Service";
import * as Icons from "lucide-react";
import FadeIn from "../Animations/FadeIn";
import RadialGradientBackground from "../background/RadialgradientBackground";
import { Sparkles, Layers } from "lucide-react";

const Services = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen bg-black py-24 overflow-hidden"
    >
      <RadialGradientBackground varient="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-8">
        {/* ── Header ── */}
        <FadeIn delay={0}>
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Layers className="w-4 h-4 text-primary" />
              <span className="text-xs text-white/80 tracking-[1.2px] uppercase">
                What I Do
              </span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              My <span className="text-primary">Services</span>
            </h2>
            <p className="text-white/50 text-base max-w-xl leading-relaxed">
              Transforming ideas into digital reality with cutting-edge technologies and best practices.
            </p>
          </div>
        </FadeIn>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = Icons[service.icon] || Icons.Layout;
            
            return (
              <FadeIn key={service.id} delay={index * 100}>
                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-2xl transition-colors duration-300 pointer-events-none" />
                  
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 text-primary">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Bottom decorative line */}
                  <div className="w-0 h-1 bg-primary mt-6 rounded-full group-hover:w-12 transition-all duration-500 delay-100" />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
