"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container transition-all duration-300 group"
    >
      {/* Sun icon */}
      <span
        className={`material-symbols-outlined text-xl absolute transition-all duration-500 ease-expo ${
          dark
            ? "opacity-0 rotate-90 scale-0"
            : "opacity-100 rotate-0 scale-100 text-tertiary"
        }`}
      >
        light_mode
      </span>
      {/* Moon icon */}
      <span
        className={`material-symbols-outlined text-xl absolute transition-all duration-500 ease-expo ${
          dark
            ? "opacity-100 rotate-0 scale-100 text-tertiary"
            : "opacity-0 -rotate-90 scale-0"
        }`}
      >
        dark_mode
      </span>
    </button>
  );
}
