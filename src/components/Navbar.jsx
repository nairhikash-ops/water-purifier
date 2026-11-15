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
  SlidersHorizontal,
  HelpCircle
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
    window.open(createWhatsAppUrl("Hello AquaPure! I want to enquire about water purifier deals and installation."), '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-brand-900 via-brand-700 to-cyan-700 text-white text-xs sm:text-sm py-2 px-4 text-center flex items-center justify-center gap-2">
        <span className="bg-amber-400 text-slate-900 font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
          Direct Factory Deal
        </span>
        <span className="font-medium truncate">
          Save Up To 45%: Free On-Site Installation + 1-Year Comprehensive Warranty!
        </span>
        <a 
          href={`tel:${COMPANY_CONFIG.phoneRaw}`} 
          className="hidden md:inline-flex items-center gap-1 font-semibold underline underline-offset-2 ml-2 hover:text-amber-200 transition"
        >
          <PhoneCall className="w-3.5 h-3.5" /> Call: {COMPANY_CONFIG.phone}
        </a>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition">
            <Droplets className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">AquaPure</span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-200 px-1.5 py-0.5 rounded">
                Authorised
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">Authorised Purifiers & Service Hub</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#vitality" className="hover:text-cyan-600 transition flex items-center gap-1 text-cyan-700 font-bold">
            <Droplets className="w-4 h-4 text-cyan-500" /> Living Water
          </a>
          <a href="#purifiers" className="hover:text-brand-600 transition flex items-center gap-1">
            Purifiers
          </a>
          <a href="#spares" className="hover:text-brand-600 transition flex items-center gap-1">
            Spares & Filters
          </a>
          <a href="#amc" className="hover:text-brand-600 transition flex items-center gap-1">
            <Wrench className="w-4 h-4 text-brand-600" /> AMC & Service
          </a>
          <a href="#tds-guide" className="hover:text-brand-600 transition flex items-center gap-1">
            <SlidersHorizontal className="w-4 h-4 text-cyan-600" /> TDS Guide
          </a>
          <button 
            onClick={onOpenQuiz} 
            className="text-brand-700 hover:text-brand-800 transition flex items-center gap-1 font-bold bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-full border border-brand-200 text-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" /> Find My Purifier
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Free Water Test CTA */}
          <button 
            onClick={onOpenWaterTest}
            className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs md:text-sm font-bold px-3.5 py-2 rounded-xl shadow-sm hover:shadow transition"
          >
            <Droplets className="w-4 h-4 text-emerald-200" />
            <span>Free Water Test</span>
          </button>

          {/* Cart Icon */}
          <button 
            onClick={onOpenCart}
            aria-label="View Cart"
            className="relative p-2.5 rounded-xl border border-slate-200 hover:border-brand-500 text-slate-700 hover:text-brand-600 bg-white hover:bg-brand-50 transition"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow">
                {cartCount}
              </span>
            )}
          </button>

          {/* WhatsApp Button */}
          <button 
            onClick={handleWhatsAppQuick}
            className="hidden md:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs md:text-sm font-bold px-3.5 py-2 rounded-xl shadow-sm transition"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>WhatsApp Us</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <a 
            href="#vitality" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-bold text-cyan-700 bg-cyan-50 hover:bg-cyan-100"
          >
            💧 Living Water & Health Vitality
          </a>
          <a 
            href="#purifiers" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            Water Purifiers
          </a>
          <a 
            href="#spares" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            Spares & Filter Kits
          </a>
          <a 
            href="#amc" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            AMC & Doorstep Repairs
          </a>
          <a 
            href="#tds-guide" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            Interactive Water TDS Guide
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenQuiz(); }}
              className="w-full text-center py-2.5 rounded-xl font-bold text-sm bg-brand-50 text-brand-700 border border-brand-200 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
              Find My Ideal Purifier (Quiz)
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenWaterTest(); }}
              className="w-full text-center py-2.5 rounded-xl font-bold text-sm bg-emerald-600 text-white flex items-center justify-center gap-2"
            >
              <Droplets className="w-4 h-4" />
              Book Free Water TDS Test
            </button>
            <a 
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="w-full text-center py-2.5 rounded-xl font-bold text-sm bg-slate-900 text-white flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              Call {COMPANY_CONFIG.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
