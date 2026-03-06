import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../data/Testimonial";
import FadeIn from "../Animations/FadeIn";
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const ScrollToIndex = (index) => {
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
    ScrollToIndex(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    ScrollToIndex(newIndex);
  };

  const testimonial = [
    {
      value: "3x",
      label: "Faster Delivery",
    },
    {
      value: "96%",
      label: "Client Satisfaction",
    },
    {
      value: "100%",
      label: "Projects Completed",
    },
    {
      value: "5*",
      label: "Average Rating",
    },
  ];
  return (
    <section id="testimonial" className="">
      <div className="">
        <div className="" />
      </div>
      <div className="">
        <FadeIn delay={0}>
          <div className="">
            <div>
              <Quote className="" />
              <span className="">Testimonials</span>
            </div>
            <h2>Trusted by forward-thinking teams</h2>
            <p className="">
              Transforming ideas into digital reality with cutting-edge
              technologies and best practices.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="">
            <div
              ref={scrollContainerRef}
              style={{
                scrollSnapType: "x mandatory",
              }}
              className="flex overflow-x-scroll scrollbar-hide"
            >
              <div className="">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="">
                    <div className="">
                      <div className="">
                        {/* {Image Section} */}

                        <div className="">
                          <div className="">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                            />
                          </div>

                          {/* Star Badge OverLay */}
                          <div className="">
                            <div className="">
                              <div className="">
                                <div className="">
                                  {testimonial.stat?.value}
                                </div>
                                <div className="">
                                  {testimonial.stat?.label}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
<div
className=""
>
{/* Quote */}

<Quote className=""/>
<p
className=""
>
'{testimonial.quote}'

</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonial;
