import React from 'react';
import { 
  BadgePercent, 
  Wrench, 
  ShieldCheck, 
  Droplet, 
  CheckCircle,
  Truck
} from 'lucide-react';

export default function TrustBar() {
  const perks = [
    {
      icon: BadgePercent,
      title: "Direct Factory Pricing",
      desc: "Up to 45% lower than brand retail showrooms. Save ₹5,000 - ₹9,000 per machine.",
      color: "text-amber-600 bg-amber-50 border-amber-200"
    },
    {
      icon: Truck,
      title: "Free 24-48h Doorstep Setup",
      desc: "Our verified technician delivers, mounts, connects, and tests TDS right before your eyes.",
      color: "text-brand-600 bg-brand-50 border-brand-200"
    },
    {
      icon: ShieldCheck,
      title: "1-Year On-Site Warranty",
      desc: "Full comprehensive coverage for pump, electrical adapter, and parts. Zero labor charges.",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200"
    },
    {
      icon: Droplet,
      title: "100% Genuine Certified Spares",
      desc: "Original 80 GPD membranes, food grade housings, and certified NSF/CE mineral cartridges.",
      color: "text-cyan-600 bg-cyan-50 border-cyan-200"
    }
  ];

  return (
    <div className="py-10 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/60 border border-slate-100/80 hover:border-slate-200 hover:bg-slate-50 transition"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${p.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
