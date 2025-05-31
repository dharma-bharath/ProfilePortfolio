"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ClipboardCheck,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  Clipboard,
} from "lucide-react";
import { useState } from "react";

export const ContactSetcion = () => {
  const phoneNumber = "+91 8870003714";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };
  useScrollAnimation();
  return (
    <section id="contact" className="relative section-container pb-32">
      <div className="hidden-item">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-resume-orange/10 backdrop-blur-sm rounded-full mb-4">
          <Mail size={14} className="text-resume-orange" />
          <span className="text-xs font-medium text-resume-orange tracking-wider">
            CONTACT
          </span>
        </div>
      </div>

      <h2
        className="section-title hidden-item"
        style={{ transitionDelay: "100ms" }}
      >
        Get In <span className="orange-gradient">Touch</span>
      </h2>

      <p
        className="section-subtitle hidden-item"
        style={{ transitionDelay: "200ms" }}
      >
        Feel free to reach out if you&apos;re looking for a developer, have a
        question, or just want to connect.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-4xl mx-auto">
        <div
          className="hidden-item"
          style={{ transitionDelay: "300ms" }}
          data-anim="slide-right"
        >
          <div className="flex flex-col space-y-6">
            <div className="group transform transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-resume-orange/10 hover:border-resume-orange/30 transition-all">
                <div className="flex-shrink-0 p-3 bg-resume-orange/10 rounded-lg text-resume-orange group-hover:bg-resume-orange/30 transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=dharmabharath82@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-resume-gray hover:text-resume-orange transition-colors break-all"
                  >
                    dharmabharath82@gmail.com
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div className="group transform transition-all duration-300 hover:-translate-y-2 relative">
              <div className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-resume-orange/10 hover:border-resume-orange/30 transition-all">
                <div className="flex-shrink-0 p-3 bg-resume-orange/10 rounded-lg text-resume-orange group-hover:bg-resume-orange/30 transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <span className="text-resume-gray">{phoneNumber}</span>
                </div>
                {/* Copy button (only visible on hover) */}
                <button
                  onClick={handleCopy}
                  className="absolute right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                >
                  {copied ? (
                    <ClipboardCheck size={20} className="text-[#FF7E39]" />
                  ) : (
                    <Clipboard size={20} className="text-white" />
                  )}
                </button>
                {copied && (
                  <span className="absolute -top-8 right-0 px-2 py-1 text-xs font-medium text-white bg-[#FF7E39] rounded-md shadow-lg animate-fade-in-out">
                    Copied!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className="hidden-item"
          style={{ transitionDelay: "400ms" }}
          data-anim="slide-left"
        >
          <div className="flex flex-col space-y-6">
            <div className="group transform transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-resume-orange/10 hover:border-resume-orange/30 transition-all">
                <div className="flex-shrink-0 p-3 bg-resume-orange/10 rounded-lg text-resume-orange group-hover:bg-resume-orange/30 transition-all">
                  <Github size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">GitHub</h3>
                  <a
                    href="https://github.com/dharma-bharath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-resume-gray hover:text-resume-orange transition-colors"
                  >
                    github.com/dharma-bharath
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div className="group transform transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-resume-orange/10 hover:border-resume-orange/30 transition-all">
                <div className="flex-shrink-0 p-3 bg-resume-orange/10 rounded-lg text-resume-orange group-hover:bg-resume-orange/30 transition-all">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/dharma-bharath-a47b0219b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-resume-gray hover:text-resume-orange transition-colors"
                  >
                    linkedin.com/in/dharma-bharath
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-resume-orange/10 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};
