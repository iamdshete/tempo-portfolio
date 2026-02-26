import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div>
            <div className="font-display font-bold text-xl text-white tracking-tight mb-2">
              NEON<span className="text-neon-cyan">FORGE</span>
            </div>
            <p className="font-body text-sm text-white/50">
              © 2024 Neon Forge Creative Studio. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8">
            <a
              href="#"
              className="font-body text-sm text-white/70 hover:text-neon-cyan transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-sm text-white/70 hover:text-neon-cyan transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="font-body text-sm text-white/70 hover:text-neon-cyan transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[Twitter, Instagram, Linkedin, Github].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 bg-white/5 border border-neon-cyan/20 rounded-lg hover:border-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-white/70 hover:text-neon-cyan transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
