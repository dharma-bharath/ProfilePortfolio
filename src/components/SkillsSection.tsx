"use client";
import { useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number; // 1-5
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "JavaScript", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "React", level: 3 },
      { name: "Next.js", level: 4 },
      { name: "Tailwind CSS", level: 4 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Python", level: 4 },
      { name: "REST APIs", level: 3 },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "CosmosDB", level: 4 },
      { name: "MySQL", level: 3 },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Git", level: 3 },
      { name: "CI/CD", level: 2 },
    ],
  },
];

const SkillsSection = () => {
  useScrollAnimation();
  const skillsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={skillsRef}
      className="hidden-item mt-16"
      style={{ transitionDelay: "300ms" }}
      data-anim="slide-up"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6 orange-gradient">
              {category.name}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-resume-gray">
                      {skill.level === 1 && "Beginner"}
                      {skill.level === 2 && "Basic"}
                      {skill.level === 3 && "Intermediate"}
                      {skill.level === 4 && "Advanced"}
                      {skill.level === 5 && "Expert"}
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-resume-orange to-orange-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level * 20}%`,
                        transform: "translateX(-100%)",
                        animation: "skill-progress 1.5s ease-out forwards",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
