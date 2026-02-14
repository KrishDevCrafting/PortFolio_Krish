import { options } from "prettier-plugin-tailwindcss";
import React, { useState } from "react";

const useScrollrevel = () => {
  const { threshold = 0.1, rootMargin = "0px" } = options;

  const [isVisible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(element);
  });

  return (
    () => {
      if (element) {
        observer.unobserve(element);
      }
    },
    [threshold, rootMargin]
  );

  return { ref, isVisible };
};

export default useScrollrevel;
