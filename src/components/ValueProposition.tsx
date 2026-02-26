export default function ValueProposition() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-neon-violet via-neon-magenta to-neon-cyan rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
          
          {/* Content Card */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-neon-violet/30 rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-8">
              We Don't Just Build Assets—
              <br />
              <span className="bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta bg-clip-text text-transparent">
                We Forge Experiences
              </span>
            </h2>
            <p className="font-body text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              From concept to final render, we obsess over every polygon, every
              shader, every light source. Whether you're building the next indie
              hit or crafting a AAA blockbuster, Neon Forge delivers the visual
              firepower your game demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
