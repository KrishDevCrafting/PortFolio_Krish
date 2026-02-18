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
            <div className="text-left">
              <FadeIn delay={0}>
                <div className="">
                  <Star className="" />
                  <span className="">
                    {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h1 className="">
                  React.js Developer <br /> Portfolio
                </h1>
              </FadeIn>

              <FadeIn delay={200}>
                <p className="">
                  Building modern, scalable, web Applications with React,
                  JavaScript, and cutting-edge techologies. Trasnforming ideas
                  into exception digital experiences.
                </p>
              </FadeIn>
            </div>
            {/* CTA Buttons */}
            <FadeIn delay={300}>
              <button className="" onClick={() => scrollToSection("projects")}>
                <div className="">Get in Touch</div>
              </button>
            </FadeIn>

            {/* Tech Stack */}
            <FadeIn delay={400}>
              <div className="">
                {STATS.map((stat, index) => (
                  <div key={index} className="">
                    <div className="">{stat.value}</div>
                    <p className="">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
