import React, { useState } from 'react';
import { COMPANY_CONFIG, createWhatsAppUrl } from '../data/companyConfig';
import { 
  Droplets, 
  PhoneCall, 
  ShoppingCart, 
  Menu, 
  X, 
  Sparkles, 
  Wrench, 
  SlidersHorizontal,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  onOpenQuiz, 
  onOpenWaterTest, 
  onOpenAdmin 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppQuick = () => {
    window.open(createWhatsAppUrl("Hello AquaPure! I'd like to consult on the best luxury purifier model for my residence."), '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#07090e]/90 backdrop-blur-2xl border-b border-white/[0.08]">
      {/* Top Hairline Ticker */}
      <div className="bg-gradient-to-r from-[#07090e] via-[#0d1624] to-[#07090e] text-slate-400 text-[11px] sm:text-xs py-1.5 px-4 text-center border-b border-white/[0.05] flex items-center justify-center gap-3">
        <span className="text-amber-400 font-semibold tracking-wider uppercase text-[10px] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" /> Direct Factory Privilege
        </span>
        <span className="text-slate-300 font-light hidden sm:inline">•</span>
        <span className="text-slate-300">
          Complimentary White-Glove Installation + 1-Year Comprehensive On-Site Warranty
        </span>
        <span className="hidden md:inline text-slate-500">•</span>
        <a 
          href={`tel:${COMPANY_CONFIG.phoneRaw}`} 
          className="hidden md:inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition font-medium"
        >
          <PhoneCall className="w-3 h-3" /> {COMPANY_CONFIG.phone}
        </a>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-brand-700 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 border border-cyan-400/30 group-hover:scale-105 transition duration-300">
            <Droplets className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black text-white tracking-widest uppercase">
                AQUA<span className="text-cyan-400">PURE</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 px-2 py-0.5 rounded-md">
                Certified
              </span>
            </div>
            <p className="text-[10px] tracking-widest uppercase text-slate-400 font-medium">
              Pure Living Water & Engineering
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-slate-300">
          <a href="#vitality" className="hover:text-cyan-400 transition flex items-center gap-1.5 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> The Living Standard
          </a>
          <a href="#tds-guide" className="hover:text-cyan-400 transition flex items-center gap-1.5">
            TDS Hazard Matrix
          </a>
          <a href="#options" className="hover:text-cyan-400 transition flex items-center gap-1.5">
            Prescribed Options
          </a>
          <a href="#concierge" className="hover:text-slate-400 transition flex items-center gap-1.5 text-slate-400">
            Care Shield
          </a>
          <button 
            onClick={onOpenQuiz} 
            className="text-amber-300 hover:text-amber-200 transition flex items-center gap-1.5 bg-amber-950/40 hover:bg-amber-900/40 px-3 py-1.5 rounded-lg border border-amber-500/30 text-[11px]"
          >
            <Sparkles className="w-3 h-3 text-amber-400" /> Prescribe My System
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Free Water Consultation Pill (Hero Priority) */}
          <button 
            onClick={onOpenWaterTest}
            className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-black text-xs px-4 py-2.5 rounded-xl transition duration-300 shadow-lg shadow-emerald-500/20 uppercase tracking-wider"
          >
            <Droplets className="w-3.5 h-3.5" />
            <span>Book Free TDS Audit</span>
          </button>

          {/* Cart Icon */}
          <button 
            onClick={onOpenCart}
            aria-label="View Cart"
            className="relative p-2.5 rounded-xl border border-white/[0.1] hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 bg-white/[0.03] hover:bg-white/[0.08] transition"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-500 to-brand-600 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
                {cartCount}
              </span>
            )}
          </button>

          {/* WhatsApp Direct */}
          <button 
            onClick={handleWhatsAppQuick}
            className="hidden md:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-[#25D366]/20 transition"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>Direct WhatsApp</span>
          </button>

          {/* Mobile Menu */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:bg-white/[0.08]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#07090e] px-4 pt-3 pb-6 space-y-3">
          <a 
            href="#showcase" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/[0.05]"
          >
            The Collection
          </a>
          <a 
            href="#vitality" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-cyan-400 hover:bg-white/[0.05]"
          >
            Living Water Science
          </a>
          <a 
            href="#tds-guide" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/[0.05]"
          >
            TDS Diagnostics
          </a>
          <a 
            href="#concierge" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/[0.05]"
          >
            Concierge & Care
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenQuiz(); }}
              className="w-full text-center py-2.5 rounded-xl font-bold text-xs bg-amber-950/40 text-amber-300 border border-amber-500/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" /> Find My Purifier (Quiz)
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenWaterTest(); }}
              className="w-full text-center py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-600 to-teal-600 text-white flex items-center justify-center gap-2"
            >
              <Droplets className="w-3.5 h-3.5" /> Book Free TDS Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
