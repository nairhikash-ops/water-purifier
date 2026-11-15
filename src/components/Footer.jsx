import React from 'react';
import { COMPANY_CONFIG, createWhatsAppUrl } from '../data/companyConfig';
import { 
  Droplets, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  Lock,
  ArrowUpRight
} from 'lucide-react';

export default function Footer({ onOpenAdmin, onOpenWaterTest, onOpenQuiz }) {
  return (
    <footer className="bg-[#05070a] text-slate-400 pt-20 pb-14 border-t border-white/[0.08] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          
          {/* Brand & Factory Privilege (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-amber-400 flex items-center justify-center text-black font-black shadow-lg shadow-cyan-500/20">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight uppercase">AquaPure</span>
                <span className="text-xs text-amber-400/90 font-mono block -mt-1 tracking-widest uppercase">Factory Hub</span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light">
              Authorised direct factory partner and certified multi-brand water purification technology hub. 
              Engineering pure, living antioxidant hydration with negative ORP, active copper, and alkaline remineralization directly to your sanctuary.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1-Year Comprehensive On-Site Warranty Shield</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Support Hours: {COMPANY_CONFIG.workingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenWaterTest}
                className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-bold text-emerald-400 transition flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Schedule Complimentary Doorstep Water TDS Analysis
              </button>
            </div>
          </div>

          {/* Quick Architecture Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#vitality" className="hover:text-white transition">The Living Standard</a>
              </li>
              <li>
                <a href="#tds-guide" className="hover:text-white transition">TDS Hazard Matrix</a>
              </li>
              <li>
                <a href="#options" className="hover:text-white transition flex items-center gap-1">
                  Prescribed Options
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition">Verified Stories</a>
              </li>
              <li>
                <a href="#concierge" className="hover:text-white transition">Care Shield (AMC)</a>
              </li>
              <li>
                <button onClick={onOpenQuiz} className="hover:text-cyan-400 transition text-left text-cyan-400">
                  Prescribe My Purifier
                </button>
              </li>
            </ul>
          </div>

          {/* Service Territory (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300">Fulfillment Hubs</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Doorstep technician deployment with 24-48h expedited installation:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {COMPANY_CONFIG.serviceAreas.map((area, idx) => (
                <span 
                  key={idx} 
                  className="bg-white/[0.04] text-slate-300 px-2 py-0.5 rounded-md text-[10px] font-medium border border-white/[0.08]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Concierge (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300">Direct Concierge</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">{COMPANY_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="text-white hover:text-emerald-300 font-bold font-mono">
                  {COMPANY_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-slate-400 hover:text-white">
                  {COMPANY_CONFIG.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={createWhatsAppUrl("Hello AquaPure! I'd like to consult with a certified technician regarding my water setup.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
              >
                <span>Direct WhatsApp Helpline</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} AquaPure Solutions. All rights reserved. Authorised Direct Factory Distribution Hub.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Zero Middleman Markup Policy</span>
            <button
              onClick={onOpenAdmin}
              className="text-slate-400 hover:text-slate-200 transition flex items-center gap-1.5"
              title="Admin Portal"
            >
              <Lock className="w-3 h-3" />
              <span>Partner Terminal</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
