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
        <div className="container mx-auto">
          <div className="">
            {/* {logo} */}

            <div className="flex" item-center gap-4>
              <Code className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
