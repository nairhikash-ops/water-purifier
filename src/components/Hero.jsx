import React, { useState } from 'react';
import { COMPANY_CONFIG, createWhatsAppUrl } from '../data/companyConfig';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Droplets, 
  Zap, 
  Activity,
  CheckCircle,
  Eye
} from 'lucide-react';

export default function Hero({ onOpenQuiz, onOpenWaterTest }) {
  const [activeModel, setActiveModel] = useState('cloud'); // 'cloud' | 'merlin' | 'prime'

  const models = {
    cloud: {
      name: "Cloud Aqua One 3 (Luxury Slate)",
      tagline: "8-Stage RO + Bio-Copper + Zinc + Active Alkaline",
      image: "/images/cloud-aqua-one3-grey.jpeg",
      price: 10499,
      mrp: 18500,
      ph: "pH 8.5+",
      orp: "-200 mV",
      purity: "99.8%"
    },
    merlin: {
      name: "Merlin Matrix (ISI Certified)",
      tagline: "Endorsed by Tisca Chopra • Triple Layer Ionization",
      image: "/images/merlin-matrix-black-tisca.jpeg",
      price: 11499,
      mrp: 19999,
      ph: "pH 8.8",
      orp: "-220 mV",
      purity: "99.9%"
    },
    prime: {
      name: "Aqua System Prime (Under-The-Sink)",
      tagline: "Hidden Luxury • SS Gooseneck Faucet • Pressurized Tank",
      image: "/images/aqua-prime-under-sink.jpeg",
      price: 10999,
      mrp: 18999,
      ph: "pH 8.5",
      orp: "-180 mV",
      purity: "99.8%"
    }
  };

  const current = models[activeModel];

  const handleWhatsApp = () => {
    const text = `Hello AquaPure! I would like to reserve the *${current.name}* at the direct factory privilege rate (₹${current.price.toLocaleString('en-IN')}). Please arrange doorstep inspection.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <section className="relative min-h-[92vh] bg-[#07090e] text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/[0.08] flex items-center">
      {/* Cinematic Ambient Stage Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] copper-stage-light rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -bottom-32 left-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Minimalist Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.1] px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>0.0001µ RO Precision • Ayurvedic Copper • Active Alkaline</span>
          </div>
        </div>

        {/* Massive Sculptural Typography */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] uppercase">
            THE ARCHITECTURE <br />
            <span className="metallic-copper-text">OF LIVING WATER.</span>
          </h1>
          <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Engineered to transcend ordinary filtration. We infuse clinical 0.0001-micron Reverse Osmosis with 
            bio-active copper ions and antioxidant molecular hydrogen. Pure, mineral-rich, direct from the source.
          </p>
        </div>

        {/* Central Theatrical Stage */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Elevated Plinth Container */}
          <div className="relative rounded-3xl p-6 sm:p-10 luxury-glass overflow-hidden border border-white/[0.1] shadow-2xl">
            
            {/* Top Stage Controls: Switch Spotlight Purifier */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Featured Masterpiece</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">{current.name}</h3>
                <p className="text-xs text-slate-400 font-light">{current.tagline}</p>
              </div>

              {/* Model Switcher Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-xl border border-white/[0.08]">
                <button
                  onClick={() => setActiveModel('cloud')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition ${
                    activeModel === 'cloud'
                      ? 'bg-gradient-to-r from-cyan-600 to-brand-700 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Cloud Aqua
                </button>
                <button
                  onClick={() => setActiveModel('merlin')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition ${
                    activeModel === 'merlin'
                      ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Merlin Matrix
                </button>
                <button
                  onClick={() => setActiveModel('prime')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition ${
                    activeModel === 'prime'
                      ? 'bg-gradient-to-r from-amber-600 to-teal-700 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Under-The-Sink
                </button>
              </div>
            </div>

            {/* Stage Body: Illuminated Product + Floating Spec Callouts */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-8">
              
              {/* Left Architectural Specs */}
              <div className="md:col-span-3 space-y-6 text-center md:text-left order-2 md:order-1">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block">Cellular pH</span>
                  <span className="text-2xl font-black metallic-cyan-text block mt-0.5">{current.ph}</span>
                  <span className="text-[11px] text-slate-400">Restores bodily balance</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block">Antioxidant ORP</span>
                  <span className="text-2xl font-black metallic-copper-text block mt-0.5">{current.orp}</span>
                  <span className="text-[11px] text-slate-400">Scavenges free radicals</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block">Purity Threshold</span>
                  <span className="text-2xl font-black text-emerald-400 block mt-0.5">{current.purity}</span>
                  <span className="text-[11px] text-slate-400">Zero cysts & heavy metals</span>
                </div>
              </div>

              {/* Center Plinth: Monumental Product Photography */}
              <div className="md:col-span-6 relative flex items-center justify-center order-1 md:order-2">
                {/* Plinth Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-amber-500/10 to-transparent rounded-full blur-2xl -z-10" />

                <div className="h-72 sm:h-84 md:h-96 w-full flex items-center justify-center p-2 relative">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="max-h-full w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right Direct Privilege & Actions */}
              <div className="md:col-span-3 space-y-4 text-center md:text-left order-3">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08]">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400 block">
                    Direct Factory Privilege
                  </span>
                  <div className="flex items-baseline gap-2 mt-1 justify-center md:justify-start">
                    <span className="text-3xl font-black text-white">₹{current.price.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-slate-500 line-through">₹{current.mrp.toLocaleString('en-IN')}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold block mt-1">
                    White-Glove Installation Included
                  </span>
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition transform hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>Reserve on WhatsApp</span>
                </button>

                <a
                  href="#showcase"
                  className="w-full bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 border border-white/[0.08] transition"
                >
                  <span>View All 10 Masterpieces</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </a>

                <p className="text-[10px] text-slate-500 text-center">
                  Zero advance • Pay after on-site TDS test & mounting
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Minimalist Architectural Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/[0.08] text-center">
          <div>
            <span className="text-2xl sm:text-3xl font-black text-white">0.0001 µ</span>
            <span className="text-[11px] text-slate-400 block mt-0.5 uppercase tracking-wider">Membrane Precision</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black metallic-copper-text">100% Food-Grade</span>
            <span className="text-[11px] text-slate-400 block mt-0.5 uppercase tracking-wider">Virgin ABS Polymer</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-cyan-400">24-48 Hours</span>
            <span className="text-[11px] text-slate-400 block mt-0.5 uppercase tracking-wider">White-Glove Setup</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-emerald-400">1-Year On-Site</span>
            <span className="text-[11px] text-slate-400 block mt-0.5 uppercase tracking-wider">Comprehensive Warranty</span>
          </div>
        </div>

      </div>
    </section>
  );
}
