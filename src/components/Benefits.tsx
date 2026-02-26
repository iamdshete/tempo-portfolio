import { Zap, Layers, Clock, Shield } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning-Fast Turnaround",
      description:
        "Optimized workflows and battle-tested pipelines deliver exceptional quality without the wait.",
    },
    {
      icon: Layers,
      title: "Game-Ready Assets",
      description:
        "Every model is optimized for real-time rendering with proper LODs, UVs, and collision meshes.",
    },
    {
      icon: Clock,
      title: "Scalable Production",
      description:
        "From single props to entire worlds—we scale seamlessly to match your project scope.",
    },
    {
      icon: Shield,
      title: "Production-Proven Quality",
      description:
        "Battle-tested by AAA studios and indie devs alike. Your vision, our execution.",
    },
  ];

  return (
    <section id="benefits" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent">
              Neon Forge
            </span>
          </h2>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            We combine artistic vision with technical precision to deliver
            assets that look stunning and perform flawlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-neon-cyan/20 rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:border-neon-violet/50 hover:shadow-[0_0_40px_rgba(181,55,242,0.3)]"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 rounded-2xl group-hover:from-neon-cyan/30 group-hover:to-neon-violet/30 transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-neon-cyan group-hover:text-neon-violet transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl text-white mb-3">
                {benefit.title}
              </h3>
              <p className="font-body text-white/60 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
