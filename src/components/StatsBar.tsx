import { Users, Target, Trophy } from "lucide-react";

export default function StatsBar() {
  const stats = [
    { icon: Trophy, label: "Years Experience", value: "8+" },
    { icon: Target, label: "Projects Delivered", value: "200+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
  ];

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-neon-cyan/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 rounded-xl">
                  <stat.icon className="w-8 h-8 text-neon-cyan" />
                </div>
                <div>
                  <div className="font-heading font-medium text-3xl text-white">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-white/60">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
