import React, { useEffect, useState } from "react";
import { Code, Menu, X } from "lucide-react";

import { NAV_LINKS, PERSONAL_INFO } from "../../utils/Constants";
import { useScrollSpy, scrollToSection } from "../../hooks/useScrollSpy";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${
          isScrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"
        }`}
        style={{
          transform: "translate3d(0, 0, 0)",
        }}
      >
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="flex justify-between items-center">
            {/* {logo} */}

            <div className="flex items-center gap-4">
              <Code className="w-6 h-6 text-primary" />
              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="text-2xl font-bold bg-linear-to-r from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                aria-label="home"
              >
                {PERSONAL_INFO.name.split(" ")[0]}
              </button>
            </div>
            {/* {Desktop Navigation} */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  className={`text-base font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.name}
                </button>
              ))}
            </nav>
            {/* CTA Button */}

            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => handleNavClick("contact")}
                className="
              px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white/90 transition-all duration-300
              "
              >
                Hire Me
              </button>
            </div>

            {/* {Mobile Navigation} */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
              aria-label="menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          {/* {Mobile Menu} */}

          <div
            className={`md:hidden transition-all duration-300 overflow-hidden mt-4 ${isMenuOpen ? `max-h-[400px] opacity-100` : `max-h-0 opacity-0`}`}
          >
            <div
              className="bg-black/95 backdrop-blur-lg
            border border-white/10
            rounded-lg
            px-5
            py-6
            space-y-3
            
            "
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.name}
                </button>
              ))}

              <button
                onClick={() => handleNavClick("contact")}
                className="
              w-full px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white/90 transition-all duration-300 mt-2 
              "
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
