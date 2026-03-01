import React from "react";
import { skills } from "../data/Skill";
import * as Incons from "lucide-react";
import FadeIn from "../animation/FadeIn";
const Skill = () => {
  const skillCategies = {
    "Frontend Development": [
      skills.find((s) => s.name === "React.js"),
      skills.find((s) => s.name === "JavaScript"),
      skills.find((s) => s.name === "Redux"),
      skills.find((s) => s.name === "Next.js"),
      skills.find((s) => s.name === "TypeScript"),
      skills.find((s) => s.name === "Tailwind CSS"),
    ].filter(Boolean),
    "Backend & APIs": [
      skills.find((s) => s.name === "Node.js"),
      skills.find((s) => s.name === "REST API"),
    ].filter(Boolean),
    "Tool & Others": [
      skills.find((s) => s.name === "Git & Github"),
      skills.find((s) => s.name === "Resposive Design"),
      skills.find((s) => s.name === "Figma"),
      skills.find((s) => s.name === "Vite"),
    ].filter(Boolean),
  };
  return <div>Skills</div>;
};

export default Skill;
