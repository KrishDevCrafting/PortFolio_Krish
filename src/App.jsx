import React from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Layout/Hero";
const App = () => {
  return (
    <div className="min-h-screen bg-black ">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
