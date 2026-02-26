import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FeaturedWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Cyberpunk City",
      category: "Environment",
      image: "/project1.jpg",
      description: "Dystopian metropolis with neon-lit streets",
    },
    {
      title: "Sci-Fi Character Pack",
      category: "Characters",
      image: "/project2.jpg",
      description: "Game-ready hero and NPC models",
    },
    {
      title: "Fantasy Weapon Set",
      category: "Props",
      image: "/project3.jpg",
      description: "Stylized weapons with PBR materials",
    },
  ];

  return (
    <section id="work" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-neon-magenta to-neon-cyan bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            A glimpse into our portfolio of cinematic game assets and immersive
            3D environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-neon-cyan/20 rounded-3xl overflow-hidden transition-all duration-300 group-hover:border-neon-violet/50 group-hover:scale-[1.02]">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-90" : "opacity-60"
                    }`}
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-neon-cyan/20 backdrop-blur-md border border-neon-cyan/50 rounded-full text-neon-cyan font-heading text-xs uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* View Project Button */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      hoveredIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <Button className="bg-gradient-to-r from-neon-cyan to-neon-violet text-white font-heading font-semibold px-6 py-3 rounded-full hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all duration-300">
                      View Project
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-2xl text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="font-body text-white/60">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
