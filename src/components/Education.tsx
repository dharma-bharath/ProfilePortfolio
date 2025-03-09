"use client";
import { GraduationCapIcon } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

const educationItems: EducationItem[] = [
  {
    institution: "Sri Ramakrishna Mission Vidyalaya",
    degree: "Bachelor of Vocation",
    duration: "2018 - 2021",
    description:
      "Specialized in Electrical and Electronics Engineering with a focus on circuit design, power systems, and embedded systems. Gained hands-on experience in microcontrollers, renewable energy technologies, and industrial automation.",
  },
  {
    institution: "Xplore IT Corp",
    degree: "Python Full Stack Development",
    duration: "3 Months",
    description:
      "Completed an intensive training program in Python Full Stack Development, covering frontend and backend technologies, including Django, React, and database management.",
  },
];

const Education = () => {
  useScrollAnimation();

  return (
    <section id="education" className="relative section-container">
      <div className="hidden-item">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-resume-orange/10 backdrop-blur-sm rounded-full mb-4">
          <GraduationCapIcon size={14} className="text-resume-orange" />
          <span className="text-xs font-medium text-resume-orange tracking-wider">
            EDUCATION
          </span>
        </div>
      </div>

      <h2
        className="section-title hidden-item"
        style={{ transitionDelay: "100ms" }}
      >
        Academic <span className="orange-gradient">Background</span>
      </h2>

      <p
        className="section-subtitle hidden-item"
        style={{ transitionDelay: "200ms" }}
      >
        My educational journey has provided me with a strong foundation in
        Electrical and Electronics Engineering, focusing on circuit design,
        power systems, and embedded systems. Additionally, my training in Python
        Full Stack Development has enhanced my skills in software development,
        enabling me to build dynamic web applications.
      </p>

      <div className="mt-16">
        {educationItems.map((education, index) => (
          <div
            key={index}
            className="timeline-item hidden-item"
            style={{ transitionDelay: `${300 + index * 100}ms` }}
          >
            <div className="timeline-dot"></div>
            <div className="mb-2">
              <h3 className="text-xl font-bold">{education.degree}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-resume-orange font-medium">
                  {education.institution}
                </span>
                <span className="text-resume-gray text-sm">
                  • {education.duration}
                </span>
              </div>
            </div>
            <p className="text-resume-gray">{education.description}</p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-resume-orange/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default Education;
