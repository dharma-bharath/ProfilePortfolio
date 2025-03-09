"use client";
import { useEffect, useRef } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px 0px -100px 0px" } = options;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-item");

            // Add custom animation based on data attribute
            const animType = entry.target.getAttribute("data-anim");
            if (animType) {
              entry.target.classList.add(`anim-${animType}`);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const elements = document.querySelectorAll(".hidden-item");
    console.log("elements", elements);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold, rootMargin]);

  return ref;
};

export default useScrollAnimation;
