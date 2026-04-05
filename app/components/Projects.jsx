"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Projects() {
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
      id="projects"
      className="pt-16 md:pt-20 pb-8 md:pb-10 px-6 md:px-8 max-w-7xl mx-auto"
    >
      <div className="mb-10 md:mb-12 reveal">
        <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
          Research &amp; Academic Work
        </span>
        <h2 className="font-headline text-4xl md:text-5xl font-medium tracking-tight">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Music Genre Classification — Main Card */}
        <div className="lg:col-span-2 bg-surface-container rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-500 ease-expo reveal">
          <div className="h-60 md:h-80 overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYoBEoHo7-QY6j_B54NBtTj_tWC5hpZGbKVtS0b4k2nHU1cIvlJ7KD2nrsTXyKqB_vNeDlscuVoiyMeF5wQDMb1LDRuK2JXl2MnlsWlj03XKWoAlWjM05do690EeMRbQe7DV9J5yCXFK9fKFzkFpRfGCnFhqZ2EMmvqclxcn5Iq_DCG-m2te_ovYsedtEK2Cj8fccB13GmfJVwmFjYebqnFlZ9zv3CQROoJo46vDI_K6kf8_9ySRz9Ltzj25YY8kK32pxmz5sglQ8S"
              alt="Audio spectrograms with neon frequency waves"
              width={960}
              height={480}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-expo"
            />
          </div>
          <div className="p-8 md:p-10 space-y-6">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-headline text-2xl md:text-4xl leading-tight">
                Music Genre Classification using Audio Spectrograms
              </h3>
              <span className="material-symbols-outlined text-3xl md:text-4xl text-primary flex-shrink-0">
                graphic_eq
              </span>
            </div>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
              Developed a deep learning pipeline classifying audio tracks into
              10 distinct genres using the GTZAN dataset.
            </p>
            <ul className="space-y-3 text-on-surface-variant italic border-l-2 border-primary/20 pl-6">
              <li>
                Designed a progressive modeling architecture established on ANN
                baseline.
              </li>
              <li>
                Deployed a Convolutional Neural Network (CNN) trained directly on
                spectrogram image data.
              </li>
              <li>
                Successfully captured complex temporal audio patterns for high
                classification accuracy.
              </li>
            </ul>
            <div className="pt-4 font-label text-xs font-bold tracking-widest text-outline">
              PYTHON / TENSORFLOW / SCIKIT-LEARN / CNN / ANN
            </div>
          </div>
        </div>

        {/* Future Research — Sky Blue Highlight Card */}
        <div className="bg-gradient-to-br from-sky-100 to-sky-200 text-sky-950 rounded-2xl p-8 md:p-10 flex flex-col justify-between text-left group reveal border-2 border-transparent">
          <div className="space-y-6">
            <span className="material-symbols-outlined text-5xl text-sky-700">
              neurology
            </span>
            <h3 className="font-headline text-xl md:text-2xl leading-tight whitespace-nowrap">
              Future Research Interests
            </h3>
            <p className="font-label text-sm text-sky-800 leading-relaxed uppercase tracking-widest">
              Machine Learning &amp; Deep Learning
            </p>
            <p className="text-sky-950/90 font-medium">
              To Solve real world challenges using the help of AI
            </p>
          </div>
          <div className="pt-8">
            <a
              href="#contact"
              className="font-label text-xs font-bold underline decoration-sky-700/50 hover:decoration-sky-700 underline-offset-8 uppercase tracking-widest text-sky-900 transition-colors duration-300"
            >
              Inquire for Collaboration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
