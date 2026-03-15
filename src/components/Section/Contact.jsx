import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageSquare,

} from "lucide-react";
import FadeIn from "../Animations/FadeIn";

const PERSONAL_INFO = {
  email: "krishdevcraft@gmail.com",
  location: "India",
};

const SOCIAL_LINKS = [
  { key: "github", href: "https://github.com/KrishDevCrafting", Icon: Github },
  {
    key: "linkedin",
    href: "https://linkedin.com/in/krishdevcraft",
    Icon: Linkedin,
  },
  { key: "twitter", href: "https://twitter.com/krishdevcraft", Icon: Twitter },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setStatus({ type: "success", message: "Message sent successfully! 🎉" });
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus({ type: "", message: "" }), 5000);
  };

  return (
    <>
      <section id="contact" className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium tracking-wider uppercase">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Let's work <span className="text-primary">Together</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Have a project in mind? Let's discuss how we can bring your
                ideas to life.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn delay={100}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50  focus:border-primary/50 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-linear-to-r from-primary/10 to-primary text-white font-medium rounded-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5  group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  {status.message && (
                    <div
                      className={`p-4 rounded-xl ${status.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-400" : "bg-red-500/10 border border-red-500/20 text-red-400"}`}
                    >
                      {status.message}
                    </div>
                  )}
                </form>
              </div>
            </FadeIn>

            {/* ── Right Panel — Contact Info ── */}
            <FadeIn delay={200}>
              <div className="flex flex-col gap-6">

                {/* Availability badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full w-fit">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-primary font-medium">Available for new projects</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
                  <p className="text-white/50 leading-relaxed">
                    Whether you have a project in mind or just want to say hello —
                    my inbox is always open!
                  </p>
                </div>

                {/* Contact info cards */}
                <div className="flex flex-col gap-4">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="group flex items-center gap-4 p-4 bg-white/5 border border-white/10 hover:border-primary/30 rounded-2xl transition-all duration-300"
                  >
                    <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Email</p>
                      <p className="text-white font-medium">{PERSONAL_INFO.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Location</p>
                      <p className="text-white font-medium">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Find me on</p>
                  <div className="flex gap-3">
                    {SOCIAL_LINKS.map(({ key, href, Icon }) => (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/10 rounded-xl text-white/50 hover:text-primary transition-all duration-300 hover:scale-110"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
