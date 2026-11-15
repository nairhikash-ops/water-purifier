import React, { useState } from 'react';
import { COMPANY_CONFIG, createWhatsAppUrl } from '../data/companyConfig';
import { 
  AlertTriangle, 
  Droplets, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Sparkles,
  PhoneCall,
  Calendar,
  Zap,
  Clock
} from 'lucide-react';

export default function Hero({ onOpenQuiz, onOpenWaterTest }) {
  const [quickPincode, setQuickPincode] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const handleQuickAuditSubmit = (e) => {
    e.preventDefault();
    if (!quickPhone) {
      onOpenWaterTest();
      return;
    }
    const msg = `*💧 Priority Doorstep Water TDS Audit Request*\n\n`
      + `*Contact Number:* ${quickPhone}\n`
      + `*Pincode / Area:* ${quickPincode || 'To be shared on call'}\n\n`
      + `Please arrange a certified technician with a calibrated digital TDS & water mineral tester.`;
    window.open(createWhatsAppUrl(msg), '_blank');
    setQuickSubmitted(true);
  };

  return (
    <section className="relative min-h-[92vh] bg-[#06080d] text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/[0.08] flex items-center">
      {/* Bio-Hazard & Pure Caustic Ambient Backlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-950/20 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Fear & Caution Eyebrow */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2.5 bg-rose-950/40 border border-rose-500/40 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase text-rose-300 shadow-lg shadow-rose-950/30">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>Before You Buy Any Purifier • Uncover The Invisible Threat</span>
          </div>
        </div>

        {/* Monumental Headline: The Problem & The Truth */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] uppercase">
            DO YOU KNOW WHAT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400">
              YOUR FAMILY IS DRINKING?
            </span>
          </h1>
          <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Most families buy water purifiers blindfolded. Yet high dissolved heavy metals, chlorine byproducts, and dead acidic RO water silently burden your kidneys, deplete bone minerals, and harm your children's immunity every single day.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-cyan-300 font-medium">
            We test your water first — at your doorstep, with a calibrated digital TDS & mineral analyzer. 100% Free. Zero guesswork.
          </p>
        </div>

        {/* Central Split Plinth: The Fear vs. The Confidence */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Plinth: The Fear (Untested Tap / Borewell / Cheap RO) */}
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-rose-950/20 to-black/60 border border-rose-500/25 relative overflow-hidden flex flex-col justify-between group hover:border-rose-500/40 transition duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-600/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-rose-950/80 text-rose-300 border border-rose-500/40 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                    The Unseen Bio-Burden
                  </span>
                  <span className="text-[11px] font-mono font-bold text-rose-400">Untested Tap / Borewell</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  Dissolved Heavy Salts & Acidic Leaching
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light mb-6">
                  Water that smells clean can hide toxic dissolved solids. Borewell water above 600 TDS strains kidney filtration, while cheap unmineralized RO water becomes aggressively acidic (pH &lt;6.2), leaching vital calcium from your bones.
                </p>

                {/* Diagnostic Indicators */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-slate-400">Total Dissolved Solids (TDS)</span>
                    <span className="font-mono font-bold text-rose-400">650 – 1,400+ PPM (Hazardous)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-slate-400">Biological pH State</span>
                    <span className="font-mono font-bold text-amber-400">5.8 – 6.5 pH (Corrosive Acidic)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-slate-400">Oxidation-Reduction (ORP)</span>
                    <span className="font-mono font-bold text-rose-400">+320 mV (Accelerates Aging)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-500/15 text-[11px] text-rose-300 font-semibold flex items-center gap-1.5">
                <span>⚠️ Potential risk: Acidity, kidney stress, fatigue & limescale</span>
              </div>
            </div>

            {/* Right Plinth: The Confidence (The Living Pure Water Standard) */}
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-cyan-950/30 to-emerald-950/20 border border-cyan-500/30 relative overflow-hidden flex flex-col justify-between group hover:border-cyan-400/50 transition duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    The Pure Living Standard
                  </span>
                  <span className="text-[11px] font-mono font-bold text-emerald-400">Certified Post-Audit</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  Clinical Purity & Cellular Vitality
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                  Water calibrated to your home's exact chemistry. 0.0001-micron Reverse Osmosis strips all heavy metals, followed by Ayurvedic Copper ionization and bio-active minerals to restore sweet taste, antioxidant power, and vibrant cellular energy.
                </p>

                {/* Diagnostic Indicators */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] border border-cyan-500/20">
                    <span className="text-slate-300">Calibrated Safe TDS</span>
                    <span className="font-mono font-bold text-emerald-400">90 – 120 PPM (Mountain Sweet)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] border border-cyan-500/20">
                    <span className="text-slate-300">Living Alkaline pH</span>
                    <span className="font-mono font-bold text-cyan-300">8.5 – 9.0 pH (Restores Balance)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] border border-cyan-500/20">
                    <span className="text-slate-300">Antioxidant Potential (ORP)</span>
                    <span className="font-mono font-bold text-emerald-400">-220 mV (Free-Radical Neutralizer)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-cyan-500/20 text-[11px] text-cyan-300 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Peace of mind: Zero organ strain & crisp natural hydration</span>
              </div>
            </div>

          </div>
        </div>

        {/* The Action Console: Book Free Doorstep Audit Before Choosing */}
        <div className="max-w-3xl mx-auto rounded-3xl luxury-glass p-6 sm:p-8 border border-white/[0.12] shadow-2xl relative">
          <div className="text-center mb-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full">
              Step 1: Test Before You Invest
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
              Claim Your Free Doorstep Water TDS & Mineral Audit
            </h3>
            <p className="text-xs text-slate-400 font-light mt-1 max-w-lg mx-auto">
              Our certified water technician arrives with calibrated digital meters to test your tap water and your existing purifier. Completely free • Zero obligation to purchase.
            </p>
          </div>

          {quickSubmitted ? (
            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-white text-sm">Audit Dispatched via WhatsApp!</h4>
              <p className="text-xs text-slate-300">Our regional chemist will confirm your technician arrival window shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleQuickAuditSubmit} className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-2.5">
              <input
                type="tel"
                required
                placeholder="Enter Mobile / WhatsApp Number"
                value={quickPhone}
                onChange={(e) => setQuickPhone(e.target.value)}
                className="w-full sm:flex-1 px-4 py-3.5 bg-white/[0.05] border border-white/[0.12] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
              />
              <input
                type="text"
                placeholder="Your Pincode (e.g. 400050)"
                value={quickPincode}
                onChange={(e) => setQuickPincode(e.target.value)}
                className="w-full sm:w-44 px-4 py-3.5 bg-white/[0.05] border border-white/[0.12] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition shrink-0"
              >
                <span>Book Free Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Quick reassurance pills */}
          <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              100% Free Doorstep Visit
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Calibrated Digital TDS Meter
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              No Purchase Required
            </span>
          </div>

          <div className="mt-3 text-center">
            <a 
              href="#options" 
              className="text-[11px] text-cyan-400/90 hover:text-cyan-300 font-semibold underline underline-offset-4 transition"
            >
              Or browse our certified Good & Very Good Purifier options →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
