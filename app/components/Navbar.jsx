"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Education", href: "#education" },
    { label: "Research", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-expo ${
        scrolled
          ? "glass shadow-sm shadow-outline-variant/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-20 px-6 md:px-8 max-w-7xl mx-auto">
        <a
          href="#"
          className="font-headline text-2xl font-bold tracking-tighter text-on-surface hover:text-primary transition-colors duration-300"
        >
          AYUSH MISHRA
        </a>

        {/* Desktop Navigation & Theme Toggle */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <div className="w-px h-6 bg-outline-variant/30 hidden md:block"></div>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            id="mobile-menu-toggle"
            className="p-2 rounded-xl hover:bg-surface-container transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-on-surface text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-expo ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass px-6 pb-6 pt-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block font-headline text-lg py-3 px-4 rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all duration-300"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
