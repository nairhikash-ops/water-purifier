import React from 'react';
import { COMPANY_CONFIG, createWhatsAppUrl } from '../data/companyConfig';
import { 
  Droplets, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Heart, 
  Lock
} from 'lucide-react';

export default function Footer({ onOpenAdmin, onOpenWaterTest, onOpenQuiz }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-400 flex items-center justify-center text-white">
                <Droplets className="w-6 h-6" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">AquaPure Solutions</span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Authorised water purification partner and certified multi-brand doorstep service center. 
              We bring direct factory pricing on cutting-edge RO, Copper, and Active Alkaline water purifiers with 100% on-site installation and AMC support.
            </p>

            <div className="pt-2 text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1-Year Comprehensive On-Site Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Working: {COMPANY_CONFIG.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#purifiers" className="hover:text-cyan-400 transition">Water Purifiers</a>
              </li>
              <li>
                <a href="#spares" className="hover:text-cyan-400 transition">Spares & Filter Kits</a>
              </li>
              <li>
                <a href="#amc" className="hover:text-cyan-400 transition">AMC & Maintenance</a>
              </li>
              <li>
                <a href="#tds-guide" className="hover:text-cyan-400 transition">Water TDS Guide</a>
              </li>
              <li>
                <button onClick={onOpenQuiz} className="hover:text-cyan-400 transition text-left">
                  Purifier Selector Quiz
                </button>
              </li>
              <li>
                <button onClick={onOpenWaterTest} className="hover:text-cyan-400 transition text-left text-emerald-400 font-bold">
                  Book Free Water Test
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Service Hubs & Delivery</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Doorstep technician visits available across major cities with same-day dispatch:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {COMPANY_CONFIG.serviceAreas.map((area, idx) => (
                <span key={idx} className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[11px] font-medium border border-slate-700">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact & Support</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">{COMPANY_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="text-white hover:text-emerald-400 font-bold transition">
                  {COMPANY_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-slate-300 hover:text-white transition">
                  {COMPANY_CONFIG.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={createWhatsAppUrl("Hello AquaPure! I need assistance with water purifier selection / service.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition shadow-xs"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>Live Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {COMPANY_CONFIG.brandName}. All rights reserved. Direct Purification & Doorstep Service Hub.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] text-slate-500">
              *All brand names (Kent, Aquaguard, Pureit, etc.) belong to their respective trademark holders and are mentioned for compatibility reference only.
            </span>
            <button
              onClick={onOpenAdmin}
              className="text-slate-400 hover:text-white flex items-center gap-1 font-semibold underline underline-offset-2 shrink-0 transition"
              title="Open Operations & Leads Dashboard"
            >
              <Lock className="w-3 h-3 text-slate-500" />
              <span>Operations Portal</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
