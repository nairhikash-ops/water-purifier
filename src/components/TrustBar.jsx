import React from 'react';
import { 
  BadgePercent, 
  Truck, 
  ShieldCheck, 
  Droplet,
  Sparkles,
  Award
} from 'lucide-react';

export default function TrustBar() {
  const perks = [
    {
      icon: BadgePercent,
      tag: "Direct Advantage",
      title: "Direct Factory Pricing",
      desc: "Bypass retail markups and showroom rentals. Direct-from-source luxury at up to 45% below high-street retail.",
      accent: "text-amber-400 group-hover:text-amber-300",
      glow: "from-amber-500/10 to-transparent",
      badge: "Save ₹5,000+"
    },
    {
      icon: Truck,
      tag: "White Glove Care",
      title: "24-48h Doorstep Setup",
      desc: "Certified master water technicians deliver, precision-mount, and calibrate TDS in front of you.",
      accent: "text-cyan-400 group-hover:text-cyan-300",
      glow: "from-cyan-500/10 to-transparent",
      badge: "Complimentary"
    },
    {
      icon: ShieldCheck,
      tag: "Zero Risk Ownership",
      title: "1-Year On-Site Warranty",
      desc: "Complete comprehensive warranty shielding booster pump, SMPS electricals, SV, and all doorstep technician labor.",
      accent: "text-emerald-400 group-hover:text-emerald-300",
      glow: "from-emerald-500/10 to-transparent",
      badge: "100% Protected"
    },
    {
      icon: Droplet,
      tag: "Certified Integrity",
      title: "100% Certified Spares",
      desc: "Authentic 80 GPD heavy-duty membranes, food-grade virgin housings, and laboratory-grade alkaline mineralization cartridges.",
      accent: "text-sky-400 group-hover:text-sky-300",
      glow: "from-sky-500/10 to-transparent",
      badge: "Pure Bio-Safe"
    }
  ];

  return (
    <div className="py-12 bg-[#07090e] border-y border-white/[0.08] relative overflow-hidden">
      {/* Subtle ambient stage backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-cyan-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className="group relative rounded-2xl p-6 bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.2] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Radial glow on hover */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${p.glow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center shrink-0 group-hover:scale-105 transition duration-300">
                      <Icon className={`w-5 h-5 transition-colors duration-300 ${p.accent}`} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-300">
                      {p.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
                    {p.tag}
                  </span>
                  <h3 className="font-black text-white text-base tracking-tight mb-2 group-hover:text-amber-200 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <Sparkles className="w-3 h-3 text-amber-400/80" />
                  <span>Direct Factory Privilege</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
