import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../data/testimonial";
import FadeIn from "../Animations/FadeIn";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(newIndex);
  };

  return (
    <section
      id="testimonial"
      className="relative min-h-screen bg-black py-24 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 opacity-50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/25 opacity-40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 opacity-30 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-8">
        {/* ── Header ── */}
        <FadeIn delay={0}>
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Quote className="w-4 h-4 text-primary" />
              <span className="text-xs text-white/80 tracking-[1.2px] uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Trusted by <span className="text-primary">forward-thinking</span>{" "}
              teams
            </h2>
            <p className="text-white/50 text-base max-w-xl leading-relaxed">
              Empowering clients with design-driven, high-quality solutions
              built for success.
            </p>
          </div>
        </FadeIn>

        {/* ── Carousel ── */}
        <FadeIn delay={100}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              style={{ scrollSnapType: "x mandatory" }}
              className="flex overflow-x-hidden"
            >
              <div className="flex w-full">
                {testimonials.map((item, index) => (
                  <div
                    key={item.id}
                    className="min-w-full"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="group relative bg-white/[0.04] border border-white/10 hover:border-primary/30 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 transition-all duration-300">
                      {/* Left — Avatar + Stat Badge */}
                      <div className="flex-shrink-0 flex flex-col items-center gap-4">
                        <div className="relative">
                          <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-primary/30">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Stat Badge */}
                          <div className="absolute -bottom-3 -right-3 bg-primary/15 border border-primary/30 rounded-xl px-2.5 py-1.5 text-center">
                            <div className="text-primary font-bold text-sm leading-none">
                              {item.stat?.value}
                            </div>
                            <div className="text-white/50 text-[9px] leading-none mt-0.5">
                              {item.stat?.label}
                            </div>
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mt-3">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-primary fill-primary"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Right — Quote + Name */}
                      <div className="flex-1 flex flex-col justify-center gap-4">
                        <Quote className="w-8 h-8 text-primary/30" />
                        <p className="text-white/80 text-lg leading-relaxed italic">
                          "{item.quote}"
                        </p>
                        <div>
                          <h3 className="text-white font-semibold text-base">
                            {item.name}
                          </h3>
                          <p className="text-white/40 text-sm">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Prev / Next buttons ── */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/10 text-white/60 hover:text-primary transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "bg-primary w-6 h-2"
                        : "bg-white/20 w-2 h-2 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/10 text-white/60 hover:text-primary transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonial;
