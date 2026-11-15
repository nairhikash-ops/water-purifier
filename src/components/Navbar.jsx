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
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2
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
    window.open(createWhatsAppUrl("Hello AquaPure! I'd like to consult on the best water purifier model for my home."), '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-xs">
      {/* Top Hairline Ticker: Deep Oceanic Authority Bar */}
      <div className="bg-[#0a2540] text-slate-300 text-[11px] sm:text-xs py-2 px-4 text-center flex items-center justify-between border-b border-[#0f355c]">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-400/40 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Direct Factory Privilege
            </span>
            <span className="text-slate-300 font-medium hidden md:inline">
              Save up to 45% vs retail showrooms • 100% Free Doorstep Installation + 1-Yr Warranty
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ₹0 Advance (Pay After Installation)
            </span>
            <a 
              href={`tel:${COMPANY_CONFIG.phoneRaw}`} 
              className="inline-flex items-center gap-1 text-sky-300 hover:text-white transition font-semibold"
            >
              <PhoneCall className="w-3 h-3 text-sky-400" /> {COMPANY_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 via-sky-600 to-oceanic-900 flex items-center justify-center text-white shadow-md shadow-sky-600/25 group-hover:scale-105 transition duration-300">
            <Droplets className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black text-[#0a2540] tracking-tight uppercase">
                AQUA<span className="text-sky-600">PURE</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-md">
                Certified Hub
              </span>
            </div>
            <p className="text-[10px] tracking-wider uppercase text-slate-500 font-semibold">
              Copper & Alkaline Water Systems
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold tracking-wider uppercase text-slate-700">
          <a href="#options" className="hover:text-sky-600 transition flex items-center gap-1.5 text-sky-700">
            Purifiers & Prices
          </a>
          <a href="#vitality" className="hover:text-sky-600 transition flex items-center gap-1.5">
            Copper & Alkaline Science
          </a>
          <a href="#tds-guide" className="hover:text-sky-600 transition flex items-center gap-1.5">
            TDS Water Guide
          </a>
          <a href="#concierge" className="hover:text-sky-600 transition flex items-center gap-1.5">
            AMC & ₹399 Repair
          </a>
          <button 
            onClick={onOpenQuiz} 
            className="text-amber-800 hover:text-amber-900 transition flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 text-[11px] font-bold"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> 5-Sec Selector
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Free Water Consultation Pill (High Conversion Priority) */}
          <button 
            onClick={onOpenWaterTest}
            className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition duration-200 shadow-md shadow-emerald-600/20 uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Free TDS Water Test</span>
          </button>

          {/* Quick WhatsApp */}
          <button
            onClick={handleWhatsAppQuick}
            className="hidden xl:inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 transition"
          >
            <span>WhatsApp Enquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
          </button>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition flex items-center justify-center"
            aria-label="View Shopping Cart"
          >
            <ShoppingCart className="w-5 h-5 text-slate-800" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-sky-600 text-white text-[10px] font-black flex items-center justify-center shadow-md animate-scaleIn">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-2 text-xs font-bold uppercase tracking-wider text-slate-700">
            <a 
              href="#options" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-between"
            >
              <span>Purifiers & Prices</span>
              <span className="text-[10px] bg-sky-200/80 px-2 py-0.5 rounded text-sky-800">From ₹8,499</span>
            </a>
            <a 
              href="#vitality" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-slate-100"
            >
              Copper & Alkaline Science
            </a>
            <a 
              href="#tds-guide" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-slate-100"
            >
              TDS Water Guide
            </a>
            <a 
              href="#concierge" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-slate-100"
            >
              Doorstep AMC & ₹399 Repair
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenQuiz(); }}
              className="px-3 py-2.5 rounded-xl bg-amber-50 text-amber-800 flex items-center gap-2 text-left font-bold"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Find Best Purifier For My Home (5-Sec Quiz)</span>
            </button>
          </nav>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenWaterTest(); }}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Book 100% Free Doorstep TDS Test</span>
            </button>
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200"
            >
              <PhoneCall className="w-4 h-4 text-sky-600" />
              <span>Call Technician: {COMPANY_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
