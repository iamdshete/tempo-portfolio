import { Button } from "@/components/ui/button";

export default function FooterCTA() {
  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="relative group">
          {/* Animated Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-glow" />
          
          {/* CTA Card */}
          <div className="relative bg-gradient-to-br from-deep-purple to-deep-navy border border-neon-cyan/30 rounded-[3rem] p-12 lg:p-20 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
            
            <div className="relative z-10">
              <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6">
                Ready to Level Up
                <br />
                <span className="bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta bg-clip-text text-transparent">
                  Your Game's Visuals?
                </span>
              </h2>
              <p className="font-body text-xl text-white/70 max-w-3xl mx-auto mb-10">
                Let's discuss your project and create something extraordinary
                together. Get in touch for a free consultation.
              </p>
              
              <Button className="relative bg-white text-deep-navy font-heading font-bold px-10 py-7 text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] group">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-violet opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
