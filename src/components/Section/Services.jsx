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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/15 opacity-25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/10 opacity-20 rounded-full blur-3xl" />
      </div>

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
              Transforming ideas into digital reality with cutting-edge
              technologies and best practices.
            </p>
          </div>
        </FadeIn>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {servicesData.slice(0, 2).map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.Code2;
            return (
              <FadeIn key={service.id} delay={index + 100}>
                <div
                  className="group relative bg-white/5 border border-white/10 rounded-3xl 
                p-8 hover:border-primary/30 transition-all duration-300 h-full min-h-[250px] flex flex-col
                
                "
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-3xl transition-all duration-300 pointer-events-none" />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {servicesData.slice(2).map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.Code2;
            return (
              <FadeIn key={service.id} delay={300 + index * 100}>
                <div
                  className="group relative bg-white/5 border border-white/10 rounded-3xl 
                p-8 hover:border-primary/30 transition-all duration-300 h-full min-h-[250px] flex flex-col
                
                "
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-3xl transition-all duration-300 pointer-events-none" />
                  </div>
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
