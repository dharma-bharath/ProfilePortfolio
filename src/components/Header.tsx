"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling if component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out ${
          scrolled
            ? "py-3 backdrop-blur-lg bg-resume-black/80 shadow-md"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#top"
            className="text-xl font-bold tracking-tight transition-all duration-300 hover:text-resume-orange"
          >
            <span className="orange-glow">DB</span>
          </a>

          <nav className="hidden md:flex gap-8">
            <a
              href="#about"
              className="text-sm tracking-wide hover:text-resume-orange transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm tracking-wide hover:text-resume-orange transition-colors"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-sm tracking-wide hover:text-resume-orange transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-sm tracking-wide hover:text-resume-orange transition-colors"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden md:flex text-sm px-5 py-2 border border-resume-orange text-resume-orange rounded-full hover:bg-resume-orange/20 transition-all"
          >
            Get in Touch
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-resume-orange transition-colors z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-resume-black/95 z-50 flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8 text-xl">
            <a
              href="#about"
              className="tracking-wide hover:text-resume-orange transition-colors"
              onClick={handleMobileMenuClose}
            >
              About
            </a>
            <a
              href="#experience"
              className="tracking-wide hover:text-resume-orange transition-colors"
              onClick={handleMobileMenuClose}
            >
              Experience
            </a>
            <a
              href="#education"
              className="tracking-wide hover:text-resume-orange transition-colors"
              onClick={handleMobileMenuClose}
            >
              Education
            </a>
            <a
              href="#contact"
              className="tracking-wide hover:text-resume-orange transition-colors"
              onClick={handleMobileMenuClose}
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="mt-10 px-6 py-3 border border-resume-orange text-resume-orange rounded-full hover:bg-resume-orange/20 transition-all"
            onClick={handleMobileMenuClose}
          >
            Get in Touch
          </a>
          
          {/* Close button overlay for clicking outside */}
          <button
            className="absolute inset-0 w-full h-full"
            onClick={handleMobileMenuClose}
            style={{ zIndex: -1 }}
          />
        </div>
      )}
    </>
  );
};

export default Header;