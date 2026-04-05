"use client";

import { useEffect, useRef } from "react";

export default function Leadership() {
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
      { threshold: 0.15 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => reveals?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-8 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-surface-container-low text-on-surface rounded-2xl p-8 md:p-12 ambient-shadow ghost-border">
          <div className="space-y-6">
            <div className="flex justify-between items-center w-full">
              <span className="font-label text-xs uppercase tracking-widest text-outline font-bold">
                Leadership &amp; Impact
              </span>
              <span className="font-label text-xs uppercase tracking-[0.2em] font-bold text-outline">
                AUG 2024 — PRESENT
              </span>
            </div>
            <h3 className="font-headline text-3xl md:text-4xl leading-tight font-bold text-on-surface">
              Entrepreneurship Development Cell (E-Cell)
            </h3>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-medium">
              As a Core Member at IIEST Shibpur, I facilitate campus-wide
              innovation challenges and lead the planning of the Annual E-Summit
              &apos;26.
            </p>
            <div className="flex flex-col gap-3 text-sm font-label text-on-surface-variant">
              <div className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-sm pt-1 text-primary">
                  check_circle
                </span>
                <span className="font-medium">
                  Coordinating committees for seamless summit happening.
                </span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-sm pt-1 text-primary">
                  check_circle
                </span>
                <span className="font-medium">
                  Fostering a vibrant culture of entrepreneurship through
                  workshops and hackathons.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full ghost-border flex items-center justify-center p-4 md:p-5 text-center bg-surface-container-lowest ambient-shadow group hover:scale-105 transition-transform duration-500 ease-expo overflow-hidden">
              <img
                src="/esummit-logo.jpg"
                alt="Scintillations E-Summit 2026"
                className="w-full h-full object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
