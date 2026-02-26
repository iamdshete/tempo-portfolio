import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-deep-navy/80 backdrop-blur-lg border-b border-neon-cyan/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-display font-bold text-2xl text-white tracking-tight">
            NEON<span className="text-neon-cyan">FORGE</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="font-heading text-sm text-white/80 hover:text-neon-cyan transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="font-heading text-sm text-white/80 hover:text-neon-cyan transition-colors duration-300"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="font-heading text-sm text-white/80 hover:text-neon-cyan transition-colors duration-300"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-heading text-sm text-white/80 hover:text-neon-cyan transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection("contact")}
            className="relative bg-gradient-to-r from-neon-cyan to-neon-violet text-white font-heading font-semibold px-6 py-2 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.6)]"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-neon-magenta opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
