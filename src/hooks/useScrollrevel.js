import { useEffect, useState } from "react";

export const useScrollReveal = (sectionIds, offset = 100) => {
  const [activSection, setActivaSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // find the current section

      for (let i = section.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionId[i]);
        if (section) {
          const sectionTop = section.offerTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActivaSection(sectionId[i]);
            break;
          }
        }
      }
    };

    handleScroll();
  });
  window.addEventListener("scroll", handleScroll, { passive: true });
  return (
    () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    },
    [sectionIds, offset]
  );

  return activSection;
};


// Smooth Scroll to a function