import React from "react";
import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";

const SOCIAL_LINKS = [
  { key: "github",   href: "https://github.com/KrishDevCrafting",    Icon: Github   },
  { key: "linkedin", href: "https://www.linkedin.com/in/krish-singh-7939b1294/",   Icon: Linkedin },
  { key: "twitter",  href: "https://x.com/KrishUchiha007",       Icon: Twitter  },
];

const NAV_LINKS = [
  { label: "About",        href: "#about"       },
  { label: "Skills",       href: "#skills"      },
  { label: "Projects",     href: "#projects"    },
  { label: "Services",     href: "#services"    },
  { label: "Testimonials", href: "#testimonial" },
  { label: "Contact",      href: "#contact"     },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-black border-t border-white/8 overflow-hidden">
      {/* top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      {/* background orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 opacity-30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/10 opacity-20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* ── Brand ── */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-primary font-mono text-lg font-bold">&lt;/&gt;</span>
              <span className="text-white font-bold text-xl">Krish</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Building modern, scalable web applications with React, JavaScript,
              and cutting-edge technologies.
            </p>
            <div className="flex gap-3 mt-2">
              {SOCIAL_LINKS.map(({ key, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 rounded-lg text-white/40 hover:text-primary transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Nav ── */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/40 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-transparent group-hover:bg-primary transition-all duration-200" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Status ── */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Status</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Available for work</p>
                  <p className="text-white/40 text-xs mt-0.5">Open to freelance & full-time</p>
                </div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Based in</p>
                <p className="text-white text-sm font-medium">India 🇮🇳</p>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/8">
          <p className="text-white/30 text-sm flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> by{" "}
            <span className="text-white/50 font-medium">Krish</span> © {new Date().getFullYear()}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-white/30 hover:text-primary transition-colors duration-300 group"
          >
            Back to top
            <div className="p-1.5 bg-white/5 border border-white/10 hover:border-primary/30 rounded-lg group-hover:bg-primary/10 transition-all duration-300">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;