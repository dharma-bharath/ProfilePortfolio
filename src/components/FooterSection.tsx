"use client";

import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  MessagesSquare,
  Twitter,
} from "lucide-react";

export const FooterSection = () => {
  const XLogo = ({ size = 18, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M17.7 2H21l-7.5 8.7L22 22h-6.9l-5-6.6-5.7 6.6H1l8-9.3L2 2h7l4.5 5.9L17.7 2Z" />
    </svg>
  );
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Column 1: About */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Dharma Bharath
          </h3>
          <p className="text-resume-gray mb-4">
            Associate Developer crafting beautiful and functional web
            experiences.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/dharma-bharath"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full text-resume-gray hover:text-resume-orange hover:bg-white/10 transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/dharma-bharath-a47b0219b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full text-resume-gray hover:text-resume-orange hover:bg-white/10 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com/DharmaBharath1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full text-resume-gray hover:text-resume-orange hover:bg-white/10 transition-all"
            >
              <XLogo size={18} />
            </a>
            <a
              href="https://www.instagram.com/bharath_dharmaa?igsh=aXVsajY5d3FtM3Fy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full text-resume-gray hover:text-resume-orange hover:bg-white/10 transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100008720102948"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full text-resume-gray hover:text-resume-orange hover:bg-white/10 transition-all"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="text-resume-gray hover:text-resume-orange transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-resume-gray hover:text-resume-orange transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-resume-gray hover:text-resume-orange transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-resume-gray hover:text-resume-orange transition-colors"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-resume-gray hover:text-resume-orange transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Feature Request */}
        {/* <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-semibold text-white">
              Request a Feature
            </h3>
            <span className="px-2 py-0.5 bg-resume-orange/20 text-resume-orange rounded-full text-xs font-medium">
              New
            </span>
          </div>
          <p className="text-resume-gray mb-4">
            Have a suggestion for a new feature or improvement?
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dharmabharath82@gmail.com?subject=Feature%20Request"
            className="inline-flex items-center gap-2 px-4 py-2 bg-resume-orange/10 hover:bg-resume-orange/20 text-resume-orange rounded-lg transition-all"
          >
            <MessagesSquare size={16} />
            <span>Send Suggestion</span>
          </a>
        </div> */}
      </div>

      <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
        <p className="text-resume-gray text-sm mb-4 md:mb-0">
          {new Date().getFullYear()} Dharma Bharath.
        </p>
        {/* <p className="text-resume-gray text-sm">Designed & Built with ❤️</p> */}
      </div>
    </div>
  );
};
