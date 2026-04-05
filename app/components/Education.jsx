"use client";

import { useEffect, useRef } from "react";

const educationData = [
  {
    period: "AUG 2024 - MAY 2028\u00A0(Expected)",
    institution:
      "Indian Institute of Engineering Science and Technology, Shibpur",
    degree: "B.Tech in Information Technology",
    score: "CGPA: 9.08 / 10.0",
    scoreColor: "text-primary",
    description:
      "Relevant Coursework: Data Structures & Algorithms in C++, Object-Oriented Programming in Java, Automata Theory, Linear Algebra, Probability & Statistics.",
    featured: true,
  },
  {
    period: "",
    institution: "Sri Krishna Children Central Academy",
    degree: "Senior Secondary (Class XII), CBSE",
    score: "Percentage: 84.2%",
    scoreColor: "text-secondary",
    featured: false,
  },
  {
    period: "",
    institution: "Radiant Central Academy",
    degree: "Secondary Education (Class X), CBSE",
    score: "Percentage: 94.0%",
    scoreColor: "text-secondary",
    featured: false,
  },
];

export default function Education() {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => reveals?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="bg-surface-container-low py-16 md:py-20 px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12 gap-8">
          <div className="max-w-2xl reveal">
            <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
              Academic Path
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-medium tracking-tight">
              Education
            </h2>
          </div>
        </div>

        <div className="space-y-8 md:space-y-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`reveal grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 group ${!edu.featured ? "opacity-80" : ""
                } ${index > 0
                  ? "border-t border-outline-variant/10 pt-8 md:pt-10"
                  : ""
                }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="md:col-span-3">
                <span className="font-label text-sm text-outline uppercase tracking-wider whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              <div className="md:col-span-9 space-y-3">
                <h3
                  className={`font-headline ${edu.featured
                    ? "text-2xl md:text-3xl italic"
                    : "text-xl md:text-2xl"
                    }`}
                >
                  {edu.institution}
                </h3>
                <div className="flex flex-wrap gap-x-6 items-center">
                  <p
                    className={`${edu.featured
                      ? "text-on-surface font-semibold"
                      : "text-on-surface-variant"
                      }`}
                  >
                    {edu.degree}
                  </p>
                  <span className={`${edu.scoreColor} font-bold`}>
                    {edu.score}
                  </span>
                </div>
                {edu.description && (
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-3xl">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
