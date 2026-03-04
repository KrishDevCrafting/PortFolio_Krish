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
        <div
          className=""
        >
          {servicesData.slice(0, 2).map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.Code2
            return (
              <FadeIn key={service.id} delay={index + 100}>
                <div
                  className=""
                >
                  <div
                    className=""
                  >
                    <div
                      className=""
                    >
                      <IconComponent className="w-12 h-12 text-primary" />
                    </div>

                    <div className="">
                      <h3
                        className=""
                      >{service.title}</h3>
                      <p
                        className=""
                      >{service.description}</p>
                    </div>

                    <div className="" />
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>













        <div
          className=""
        >{servicesData.slice(2).map((service, index) => {
          const IconComponent = Icons[service.icon] || Icons.Code2
          return (
            <FadeIn key={service.id} delay={300 + index * 100}>
              <div
                className=""
              >
                <div
                  className=""
                >
                  <div
                    className=""
                  >
                    <IconComponent className="w-12 h-12 text-primary" />
                  </div>

                  <div className="">
                    <h3
                      className=""
                    >{service.title}</h3>
                    <p
                      className=""
                    >{service.description}</p>
                  </div>

                  <div className="" />
                </div>

              </div>
            </FadeIn>
          )
        })}</div>
      </div>










    </section>
  );
};

export default Services;
