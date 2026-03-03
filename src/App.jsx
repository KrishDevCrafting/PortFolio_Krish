import React from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Section/Hero";
import About from "./components/Section/About";
import Skill from "./components/Section/Skill";
import Projects from "./components/Section/Projects";
const App = () => {
  return (
    <div className="min-h-screen bg-black pb-[100vh]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Projects />
      </main>
    </div>
  );
};

export default App;
