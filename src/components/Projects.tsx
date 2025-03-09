"use client";
import { useEffect, useRef } from "react";
import { GithubIcon, ExternalLink } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image: string;
}

const projects: ProjectItem[] = [
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and interactive elements.",
    technologies: ["Next.js", "Tailwind CSS"],
    githubLink: "",
    liveLink: "",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    technologies: ["Django", "Python", "MYSQL"],
    githubLink: "",
    liveLink: "",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
  },
];

const Projects = () => {
  useScrollAnimation();
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="relative section-container">
      <div className="hidden-item">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-resume-orange/10 backdrop-blur-sm rounded-full mb-4">
          <GithubIcon size={14} className="text-resume-orange" />
          <span className="text-xs font-medium text-resume-orange tracking-wider">
            PROJECTS
          </span>
        </div>
      </div>

      <h2
        className="section-title hidden-item"
        style={{ transitionDelay: "100ms" }}
      >
        Featured <span className="orange-gradient">Projects</span>
      </h2>

      <p
        className="section-subtitle hidden-item"
        style={{ transitionDelay: "200ms" }}
      >
        Here's a selection of projects I've worked on. Each demonstrates
        different skills and technologies.
      </p>

      <div
        ref={projectsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="hidden-item group relative flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full"
            style={{ transitionDelay: `${300 + index * 100}ms` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
                    aria-label="View GitHub Repository"
                  >
                    <GithubIcon size={18} />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
                    aria-label="View Live Project"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-resume-gray mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs bg-resume-orange/10 text-resume-orange rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/3 left-0 w-80 h-80 bg-resume-orange/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default Projects;
