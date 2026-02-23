import React, { useState, useEffect, useRef } from "react";

const FadeIn = ({ children, delay = 0, duration = 500, threshold = 0.1 }) => {
  const [isVisible, setVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when element is visible
        if (entry.isIntersecting && !isVisible) {
          setVisible(true);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`transition-all ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : "0ms",
        animationDuration: `${duration}ms`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
