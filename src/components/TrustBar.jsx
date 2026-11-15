import React from 'react';
import { 
  Lock, 
  Truck, 
  ShieldCheck, 
  Droplet,
  Sparkles,
  Award,
  CheckCircle2
} from 'lucide-react';

export default function TrustBar() {
  const perks = [
    {
      icon: Lock,
      tag: "Total Risk Reversal",
      title: "Pay Only On TDS Proof",
      desc: "Zero advance payment. Our technician mounts the system and proves the TDS drop in front of you before you pay.",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      badge: "₹0 Advance"
    },
    {
      icon: Truck,
      tag: "Doorstep Express",
      title: "Complimentary Setup",
      desc: "Certified technicians deliver, neat wall-mount, calibrate TDS, and demonstrate pure alkaline water taste at zero charge.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-200",
      badge: "Free Installation"
    },
    {
      icon: ShieldCheck,
      tag: "Sanctuary Shield",
      title: "1-Year On-Site Warranty",
      desc: "Full comprehensive coverage for booster pump, SMPS electrical adapter, Solenoid Valve, and technician visits.",
      iconBg: "bg-amber-50 text-amber-700 border-amber-200",
      badge: "100% Covered"
    },
    {
      icon: Droplet,
      tag: "Certified Chemistry",
      title: "NSF-Grade Components",
      desc: "Zero recycled plastic. Heavy-duty 80 GPD membranes, authentic copper cartridges, and food-grade virgin housings.",
      iconBg: "bg-blue-50 text-blue-600 border-blue-200",
      badge: "Pure Bio-Safe"
    }
  ];

  return (
    <div className="py-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {perks.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${p.iconBg} group-hover:scale-105 transition duration-200`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {p.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    {p.tag}
                  </span>
                  <h4 className="text-base font-black text-[#0a2540] mb-1.5">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-sky-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Verified Factory Privilege</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
