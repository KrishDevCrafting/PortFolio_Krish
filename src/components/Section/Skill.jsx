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
  return <div>Skills</div>;
};

export default Skill;
