export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight">
              Where Art Meets
              <br />
              <span className="bg-gradient-to-r from-neon-magenta to-neon-violet bg-clip-text text-transparent">
                Technology
              </span>
            </h2>
            <p className="font-body text-lg text-white/70 leading-relaxed">
              Neon Forge is a premium creative studio specializing in
              photorealistic 3D environments, game-ready character models, and
              cinematic Unreal Engine experiences.
            </p>
            <p className="font-body text-lg text-white/70 leading-relaxed">
              We partner with indie game developers, digital agencies, and
              visionary brands to bring their most ambitious creative visions to
              life with technical precision and artistic excellence.
            </p>
            <div className="pt-4">
              <div className="font-heading text-sm text-neon-cyan uppercase tracking-wider">
                Tools & Technologies
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {["Unreal Engine", "Blender", "Maya", "Substance Painter", "Houdini"].map(
                  (tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-white/5 border border-neon-violet/30 rounded-full text-white/80 font-body text-sm"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-violet via-neon-magenta to-neon-cyan rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-neon-violet/30 rounded-3xl p-1 overflow-hidden">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <img
                  src="/studio.jpg"
                  alt="Studio Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-violet/30 via-transparent to-neon-cyan/30 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
