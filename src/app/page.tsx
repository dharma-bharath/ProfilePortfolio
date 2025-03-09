"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Experience from "../components/Experience";
import Education from "../components/Education";
import ScrollProgress from "../components/ScrollProgress";
import useScrollAnimation from "../hooks/useScrollAnimation";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ClipboardCheck,
  Clipboard,
} from "lucide-react";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import { ContactSetcion } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Dharma Bharath | Web Developer";
  }, []);

  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <Header />

      {/* Hero Section */}
      <Profile />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <ContactSetcion />

      {/* Footer - Removed "Designed by..." text as requested */}
      <footer className="py-12 border-t border-white/10 bg-[#1A1F2C]">
        <FooterSection />
      </footer>
    </div>
  );
};

export default Index;
