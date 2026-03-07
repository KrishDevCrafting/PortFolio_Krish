import React from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Section/Hero";
import About from "./components/Section/About";
import Skill from "./components/Section/Skill";
import Projects from "./components/Section/Projects";
import Services from "./components/Section/Services";
import Testimonial from "./components/Section/Testimonial";
import Contact from "./components/Section/Contact";
const App = () => {
  return (
    <div className="min-h-screen bg-black pb-[100vh]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Services />
        <Testimonial />
        <Contact />
      </main>
    </div>
  );
};

export default App;
