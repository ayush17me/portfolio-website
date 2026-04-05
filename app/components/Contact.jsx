"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => reveals?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-28 md:py-40 px-6 md:px-8 text-center bg-surface"
    >
      <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
        <span className="font-label text-xs uppercase tracking-[0.4em] text-primary reveal inline-block">
          Collaborate
        </span>
        <h2 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter reveal">
          Let&apos;s build something{" "}
          <span className="italic underline decoration-outline-variant/30 underline-offset-[12px]">
            extraordinary
          </span>
          .
        </h2>
        <div className="pt-8 md:pt-12 reveal">
          <a
            href="mailto:ayush771mishra@gmail.com"
            id="email-link"
            className="group relative inline-block"
          >
            <span className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl border-b-2 border-primary/20 pb-2 group-hover:border-primary transition-all duration-300">
              ayush771mishra@gmail.com
            </span>
            <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-10 h-10 md:w-12 md:h-12 bg-secondary-container rounded-full flex items-center justify-center rotate-12 group-hover:rotate-45 transition-transform duration-500 ease-expo">
              <span className="material-symbols-outlined text-on-secondary-container text-lg md:text-xl">
                mail
              </span>
            </div>
          </a>
        </div>
        <div className="flex justify-center gap-8 md:gap-12 pt-8 md:pt-12 reveal">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            id="linkedin-link"
            className="font-label text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors duration-300 relative group"
          >
            LinkedIn
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            id="github-link"
            className="font-label text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors duration-300 relative group"
          >
            GitHub
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>
    </section>
  );
}
