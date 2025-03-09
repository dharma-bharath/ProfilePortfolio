"use client";
import { BriefcaseIcon } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Quadrasystems.net India Pvt Ltd",
    position: "Associate Developer",
    duration: "2023 - present",
    description:
      "Developing and maintaining enterprise web applications using React, Next.js, and Node.js. Collaborating with cross-functional teams to build scalable, secure, and high-performance solutions. Implementing REST APIs for seamless backend integration.",
  },
  {
    company: "Vasantha Advanced Systems",
    position: "Testing Engineer",
    duration: "2021 - 2023",
    description:
      "Specialized in testing and debugging PCB boards for embedded electronic systems. Conducted circuit analysis, identified faults, and ensured compliance with quality standards. Worked with multimeters, and other testing tools to validate hardware functionality and troubleshoot issues.",
  },
];

const Experience = () => {
  useScrollAnimation();

  return (
    <section id="experience" className="relative section-container">
      <div className="hidden-item">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-resume-orange/10 backdrop-blur-sm rounded-full mb-4">
          <BriefcaseIcon size={14} className="text-resume-orange" />
          <span className="text-xs font-medium text-resume-orange tracking-wider">
            EXPERIENCE
          </span>
        </div>
      </div>

      <h2
        className="section-title hidden-item"
        style={{ transitionDelay: "100ms" }}
      >
        My Professional <span className="orange-gradient">Journey</span>
      </h2>

      <p
        className="section-subtitle hidden-item"
        style={{ transitionDelay: "200ms" }}
      >
        I've worked across various domains in web development, from startups to
        established companies, focusing on building scalable and performant
        applications.
      </p>

      <div className="mt-16">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="timeline-item hidden-item"
            style={{ transitionDelay: `${300 + index * 100}ms` }}
          >
            <div className="timeline-dot"></div>
            <div className="mb-2">
              <h3 className="text-xl font-bold">{experience.position}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-resume-orange font-medium">
                  {experience.company}
                </span>
                <span className="text-resume-gray text-sm">
                  • {experience.duration}
                </span>
              </div>
            </div>
            <p className="text-resume-gray">{experience.description}</p>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 -left-64 -translate-y-1/2 w-96 h-96 bg-resume-orange/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default Experience;
