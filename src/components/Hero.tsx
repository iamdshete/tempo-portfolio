import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-deep-purple/50 via-deep-navy to-dark-navy" />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1
              className={`font-display font-bold text-6xl lg:text-7xl xl:text-8xl text-white leading-tight transition-all duration-700 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              Cinematic Game
              <br />
              <span className="bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta bg-clip-text text-transparent">
                Visuals That Captivate
              </span>
            </h1>

            <p
              className={`font-body text-lg lg:text-xl text-white/70 max-w-xl transition-all duration-700 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              We craft stunning 3D environments, game-ready assets, and Unreal
              Engine content for indie studios and digital brands who demand
              excellence.
            </p>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <Button className="relative bg-gradient-to-r from-neon-cyan to-neon-violet text-white font-heading font-semibold px-8 py-6 text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.7)] group">
                <span className="relative z-10">View Our Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-neon-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                variant="outline"
                className="relative border-2 border-neon-cyan/50 text-white font-heading font-semibold px-8 py-6 text-lg rounded-full bg-transparent hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300"
              >
                Start a Project
              </Button>
            </div>
          </div>

          {/* Right Visual Card */}
          <div
            className={`relative transition-all duration-1000 ${
              loaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse-glow" />
              
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-neon-cyan/30 rounded-3xl p-1 overflow-hidden animate-float">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="/Hero.png"
                    alt="3D Game Asset"
                    className="w-full h-full object-cover"
                  />
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-violet/20 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
