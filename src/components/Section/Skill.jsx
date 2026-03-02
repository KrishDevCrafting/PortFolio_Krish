import React from "react";
import { skill } from "../data/Skill";
import * as Icons from "lucide-react";
import FadeIn from "../Animations/FadeIn";
const Skill = () => {
  const skillCategies = {
    "Frontend Development": [
      skill.find((s) => s.name === "React.js"),
      skill.find((s) => s.name === "JavaScript"),
      skill.find((s) => s.name === "Redux"),
      skill.find((s) => s.name === "Next.js"),
      skill.find((s) => s.name === "TypeScript"),
      skill.find((s) => s.name === "Tailwind CSS"),
    ].filter(Boolean),
    "Backend & APIs": [
      skill.find((s) => s.name === "Node.js"),
      skill.find((s) => s.name === "REST API"),
    ].filter(Boolean),
    "Tool & Others": [
      skill.find((s) => s.name === "Git"),
      skill.find((s) => s.name === "GitHub"),
      skill.find((s) => s.name === "Figma"),
      skill.find((s) => s.name === "Vite"),
    ].filter(Boolean),
  };

  // Get Proficiency percentage
  const getProficiencyLevel = (level) => {
    const levels = {
      Expert: 95,
      Advanced: 80,
      Intermediate: 65,
    };
    return levels[level] || 50;
  };

  const getLevelColor = (level) => {
    const colors = {
      Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30",
      Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",

      Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
    };
    return colors[level] || "text-gray-400 bg-gray-500/20 border-gray-500/30";
  };

  return <div>Skills</div>;
};

export default Skill;
