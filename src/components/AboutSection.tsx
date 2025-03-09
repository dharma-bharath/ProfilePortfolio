"use client";
import useScrollAnimation from "../hooks/useScrollAnimation";
import SkillsSection from "./SkillsSection";

const AboutSection = () => {
  useScrollAnimation();

  return (
    <section id="about" className="relative section-container">
      <div className="hidden-item">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-resume-orange/10 backdrop-blur-sm rounded-full mb-4">
          <span className="text-xs font-medium text-resume-orange tracking-wider">
            ABOUT ME
          </span>
        </div>
      </div>

      <h2
        className="section-title hidden-item"
        style={{ transitionDelay: "100ms" }}
      >
        Crafting Digital <span className="orange-gradient">Experiences</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div className="hidden-item" style={{ transitionDelay: "200ms" }}>
          <p className="text-lg leading-relaxed text-resume-gray mb-6">
            I'm a{" "}
            <span className="text-white font-medium">full-stack developer</span>{" "}
            with over 6 years of experience specializing in building exceptional
            digital experiences. Currently, I'm focused on building accessible,
            human-centered products at{" "}
            <span className="text-resume-orange">Tech Innovations</span>.
          </p>
          <p className="text-lg leading-relaxed text-resume-gray">
            My approach combines clean code principles with modern design
            aesthetics. I'm passionate about creating software that solves real
            problems while providing intuitive, delightful user experiences.
          </p>
        </div>

        <div className="hidden-item" style={{ transitionDelay: "300ms" }}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold orange-gradient mb-2">
                  1.5+
                </div>
                <div className="text-sm text-resume-gray">
                  Years of Experience
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold orange-gradient mb-2">
                  2+
                </div>
                <div className="text-sm text-resume-gray">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-3xl font-bold orange-gradient mb-2">
                  10+
                </div>
                <div className="text-sm text-resume-gray">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SkillsSection />

      <div className="absolute top-0 right-0 w-72 h-72 bg-resume-orange/10 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default AboutSection;
