"use client";

import { useEffect, useRef } from "react";

const programmingLanguages = ["C / C++", "Python", "JavaScript", "HTML/CSS"];
const dataScienceML = [
  "TensorFlow",
  "Pandas / NumPy",
  "Scikit-learn",
  "Matplotlib / Seaborn",
];
const webDev = ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"];
const devTools = ["Git / GitHub", "Linux"];

export default function Skills() {
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
      id="skills"
      className="py-24 md:py-32 px-6 md:px-8 bg-surface-container-lowest"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Programming + Data Science */}
        <div className="reveal">
          <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
            Technical Stack
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-medium tracking-tight mb-10 md:mb-12">
            Building blocks of my craft
          </h2>
          <div className="space-y-10 md:space-y-12">
            {/* Programming Languages */}
            <div>
              <h4 className="font-label text-sm font-bold uppercase tracking-widest mb-6 border-b border-outline-variant/30 pb-2">
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-x-8 md:gap-x-10 gap-y-5">
                {programmingLanguages.map((lang) => (
                  <div
                    key={lang}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                    <span className="font-headline text-lg md:text-xl group-hover:text-primary transition-colors duration-300">
                      {lang}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Science & ML */}
            <div>
              <h4 className="font-label text-sm font-bold uppercase tracking-widest mb-6 border-b border-outline-variant/30 pb-2">
                Data Science &amp; ML
              </h4>
              <div className="flex flex-wrap gap-x-8 md:gap-x-10 gap-y-5">
                {dataScienceML.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-tertiary group-hover:scale-150 transition-transform duration-300" />
                    <span className="font-headline text-lg md:text-xl group-hover:text-tertiary transition-colors duration-300">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Web & Tools */}
        <div className="bg-surface-container rounded-2xl p-8 md:p-12 reveal">
          <h4 className="font-label text-sm font-bold uppercase tracking-widest mb-8 text-secondary">
            Web &amp; Tools
          </h4>
          <div className="space-y-8">
            <div>
              <span className="font-label text-[10px] text-outline block mb-3">
                WEB DEVELOPMENT
              </span>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {webDev.map((item) => (
                  <span
                    key={item}
                    className="bg-surface px-4 py-2 rounded-lg font-headline text-base md:text-lg hover:bg-surface-container-highest hover:scale-105 transition-all duration-300 ease-expo cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full h-px bg-outline-variant/20" />
            <div>
              <span className="font-label text-[10px] text-outline block mb-3">
                DEVELOPER TOOLS
              </span>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {devTools.map((item) => (
                  <span
                    key={item}
                    className="ghost-border px-4 py-2 rounded-lg font-headline text-base md:text-lg hover:bg-surface-container hover:scale-105 transition-all duration-300 ease-expo cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
