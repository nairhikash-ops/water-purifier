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
    <footer className="bg-[#0a2540] text-slate-300 pt-16 pb-12 border-t border-[#0f355c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700/60">
          
          {/* Brand & Factory Privilege (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-sky-600 flex items-center justify-center text-white font-black shadow-md shadow-sky-500/20">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight uppercase">AquaPure</span>
                <span className="text-[10px] text-amber-300 font-bold block tracking-wider uppercase">Direct Factory Partner</span>
              </div>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-normal">
              Authorised direct factory partner and multi-brand water purification technology hub. 
              Delivering antioxidant living water with active copper, negative ORP, and alkaline remineralization directly to your doorstep.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1-Year Comprehensive On-Site Warranty Shield</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Support Hours: {COMPANY_CONFIG.workingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenWaterTest}
                className="px-4 py-2 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/40 text-xs font-bold text-sky-300 transition flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                <span>Schedule Free Doorstep TDS Test</span>
              </button>
            </div>
          </div>

          {/* Direct Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#options" className="hover:text-sky-300 transition">Purifier Models & Prices</a>
              </li>
              <li>
                <a href="#vitality" className="hover:text-sky-300 transition">Copper & Alkaline Science</a>
              </li>
              <li>
                <a href="#tds-guide" className="hover:text-sky-300 transition">Interactive TDS Water Guide</a>
              </li>
              <li>
                <a href="#concierge" className="hover:text-sky-300 transition">Annual Maintenance (AMC)</a>
              </li>
              <li>
                <a href="#concierge" className="hover:text-sky-300 transition">Single-Visit ₹399 Repair Service</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sky-300 transition">Customer Testimonials & FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact & Support (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Regional Fulfillment & Service Hub
            </h4>
            <p className="text-xs text-slate-300">
              {COMPANY_CONFIG.address}
            </p>
            
            <div className="space-y-2 pt-2 text-xs">
              <a 
                href={`tel:${COMPANY_CONFIG.phoneRaw}`} 
                className="flex items-center gap-2 text-slate-200 hover:text-sky-300 transition"
              >
                <PhoneCall className="w-4 h-4 text-sky-400" />
                <span>{COMPANY_CONFIG.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-200">
                <Mail className="w-4 h-4 text-sky-400" />
                <span>{COMPANY_CONFIG.email}</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={createWhatsAppUrl("Hello AquaPure! I want to consult on purifiers.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition shadow-xs"
              >
                <span>Instant WhatsApp Desk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} AquaPure Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Lock className="w-3 h-3 text-emerald-400" /> Secure SSL Direct Factory Channel
            </span>
            <button 
              onClick={onOpenAdmin}
              className="text-[10px] text-slate-500 hover:text-slate-300 transition"
            >
              Hub Admin
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
