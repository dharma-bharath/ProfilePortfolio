"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const Profile = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const scrollMessageRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Handle parallax effect
      if (profileRef.current) {
        profileRef.current.style.transform = `translateY(${
          scrollPosition * 0.3
        }px)`;
        profileRef.current.style.opacity = (
          1 -
          scrollPosition / 700
        ).toString();
      }

      // Handle scroll message visibility
      if (scrollPosition > 100 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollPosition <= 100 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        ref={profileRef}
        className="w-full max-w-6xl mx-auto px-6 z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
      >
        {/* Left side - Text content */}
        <div
          className="w-full md:w-1/2 text-left animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="orange-gradient">Dharma Bharath</span>
          </h1>

          <div className="bg-resume-orange/20 backdrop-blur-sm px-4 py-1.5 rounded-full inline-block mb-6">
            <p className="text-resume-orange text-sm md:text-base font-medium tracking-wide">
              Associate Developer
            </p>
          </div>

          <p className="text-lg md:text-xl text-resume-gray max-w-xl mb-10">
            I build exceptional digital experiences with Next.js and modern web
            technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-resume-orange/20 border border-resume-orange/40 text-resume-orange rounded-full hover:bg-resume-orange/30 transition-all"
            >
              Contact Me
            </a>
            <a
              href="#experience"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right side - Profile photo */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            <div className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-resume-orange/20 to-orange-500/20 animate-rotate-slow opacity-70"></div>
              <img
                src="Dharma.jpg"
                alt="Profile"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
            <div className="absolute -inset-2 rounded-full bg-resume-orange/30 blur-md -z-10"></div>
          </div>
        </div>
      </div>

      <div
        ref={scrollMessageRef}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-resume-gray hover:text-white transition-colors"
        >
          <span className="text-xs mb-2">Scroll Down</span>
          <ChevronDown size={20} />
        </a>
      </div>

      {/* Floating bubbles background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,126,57,0.15),transparent_60%)]">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
      </div>
    </section>
  );
};

export default Profile;
