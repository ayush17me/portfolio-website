"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
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
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => reveals?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="flex flex-col px-6 md:px-8 max-w-7xl mx-auto pt-24 lg:pt-28 pb-12 lg:pb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-5">
            <span
              className="font-label text-xs uppercase tracking-[0.3em] text-tertiary inline-block animate-fade-in-up"
              style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            >
              IT Undergrad &amp; Aspiring Researcher
            </span>
            <h1
              className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] text-on-surface animate-fade-in-up"
              style={{ animationDelay: "0.25s", animationFillMode: "both" }}
            >
              Crafting{" "}
              <span className="italic text-primary font-normal">
                intelligent
              </span>{" "}
              digital experiences.
            </h1>
          </div>
          <p
            className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            Undergraduate student at IIEST Shibpur. Specializing in Information
            Technology with a focus on Machine Learning, Deep Learning, and
            full-stack development.
          </p>
          <div
            className="pt-4 flex flex-wrap gap-6 items-center animate-fade-in-up"
            style={{ animationDelay: "0.55s", animationFillMode: "both" }}
          >
            <a
              href="#projects"
              id="cta-research"
              className="signature-gradient text-white px-8 py-4 rounded-full font-label text-sm font-bold tracking-wider hover:scale-105 transition-transform duration-300 custom-shadow flex items-center justify-center gap-2 group"
            >
              VIEW RESEARCH PROJECTS
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </a>
            <a
              href="#contact"
              id="cta-contact"
              className="font-label text-sm font-bold text-primary border-b-2 border-primary/20 hover:border-primary transition-all duration-300 pb-1"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* Right: Portrait */}
        <div
          className="lg:col-span-5 relative animate-fade-in-up"
          style={{ animationDelay: "0.5s", animationFillMode: "both" }}
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-700 ease-expo custom-shadow">
            <Image
              src="/ayush.png"
              alt="Ayush Mishra - Portrait"
              width={640}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface-container-highest p-5 rounded-2xl custom-shadow max-w-[200px] animate-float">
            <p className="font-label text-xs font-bold leading-tight uppercase text-on-surface">
              Based in Kolkata,<br />West Bengal, India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
