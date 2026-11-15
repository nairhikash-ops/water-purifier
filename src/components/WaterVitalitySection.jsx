import React, { useState } from 'react';
import { 
  Sparkles, 
  Droplets, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Heart, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Sun,
  Leaf
} from 'lucide-react';

export default function WaterVitalitySection({ onOpenQuiz, onOpenWaterTest }) {
  const [selectedMode, setSelectedMode] = useState('living'); // 'living' or 'ordinary'
  const [familyMembers, setFamilyMembers] = useState(4);

  const annualLiters = familyMembers * 2.5 * 365;
  const bottlesSaved = Math.round(annualLiters / 1.5);

  return (
    <section id="vitality" className="py-24 bg-[#0a0d14] text-white relative overflow-hidden border-b border-white/[0.08]">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-cyan-500/30 text-cyan-300 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Science of Cellular Hydration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[1.1]">
            Not Just Filtered Water. <br />
            <span className="metallic-copper-text">
              Living Water That Heals.
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed font-light">
            Ordinary purifiers strip out all minerals and leave your water acidic and demineralized. 
            Our advanced systems re-infuse vital <strong className="text-amber-300">Ayurvedic Copper</strong>, <strong className="text-cyan-300">Antioxidant Alkaline</strong>, and 
            <strong className="text-emerald-300"> Bio-Available Minerals</strong> — transforming every glass into living cellular fuel.
          </p>
        </div>

        {/* High-Precision Comparison Console */}
        <div className="max-w-5xl mx-auto luxury-glass rounded-3xl p-6 sm:p-10 border border-white/[0.1] shadow-2xl mb-16">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Scientific Comparison</span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                Ordinary Dead RO vs Living Alkaline Water
              </h3>
            </div>

            {/* Switch Toggle Buttons */}
            <div className="flex items-center p-1 bg-black/50 rounded-2xl border border-white/[0.08]">
              <button
                onClick={() => setSelectedMode('ordinary')}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition flex items-center gap-1.5 ${
                  selectedMode === 'ordinary'
                    ? 'bg-rose-950/80 text-rose-300 border border-rose-500/40 shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>Ordinary Acidic RO</span>
              </button>

              <button
                onClick={() => setSelectedMode('living')}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition flex items-center gap-1.5 ${
                  selectedMode === 'living'
                    ? 'bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>Living Alkaline Water</span>
              </button>
            </div>
          </div>

          {/* Console Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 items-stretch">
            
            {/* Visual Health Gauge Card */}
            <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
              selectedMode === 'living'
                ? 'bg-gradient-to-br from-cyan-950/40 via-teal-950/20 to-emerald-950/30 border-cyan-500/30'
                : 'bg-rose-950/20 border-rose-500/30'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${
                    selectedMode === 'living'
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                      : 'bg-rose-950/80 text-rose-300 border-rose-500/40'
                  }`}>
                    {selectedMode === 'living' ? 'Optimal Cellular Vitality' : 'Depleted Dead Water'}
                  </span>
                  
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-400">
                    <Activity className={`w-4 h-4 ${selectedMode === 'living' ? 'text-cyan-400' : 'text-rose-400'}`} />
                    <span>ORP Index</span>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* pH Value */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-1.5">
                      <span>Water pH Balance:</span>
                      <span className={`text-sm font-extrabold ${selectedMode === 'living' ? 'text-teal-300' : 'text-rose-400'}`}>
                        {selectedMode === 'living' ? '8.5 - 9.2 pH (Active Alkaline)' : '5.5 - 6.5 pH (Acidic)'}
                      </span>
                    </div>
                    <div className="w-full bg-white/[0.05] h-2.5 rounded-full overflow-hidden p-0.5">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          selectedMode === 'living' ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 w-[90%]' : 'bg-rose-500 w-[45%]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* ORP Antioxidant Potential */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-1.5">
                      <span>Antioxidant Potential (ORP):</span>
                      <span className={`text-sm font-extrabold ${selectedMode === 'living' ? 'text-cyan-300' : 'text-rose-400'}`}>
                        {selectedMode === 'living' ? '-150 to -250 mV (Antioxidant)' : '+200 to +300 mV (Oxidizing)'}
                      </span>
                    </div>
                    <div className="w-full bg-white/[0.05] h-2.5 rounded-full overflow-hidden p-0.5">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          selectedMode === 'living' ? 'bg-gradient-to-r from-cyan-400 to-teal-400 w-[95%]' : 'bg-rose-400 w-[30%]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Mineral Enrichment */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-1.5">
                      <span>Bio-Minerals (Ca, Mg, K, Cu, Zn):</span>
                      <span className={`text-sm font-extrabold ${selectedMode === 'living' ? 'text-emerald-300' : 'text-rose-400'}`}>
                        {selectedMode === 'living' ? '100% Retained & Enhanced' : 'Stripped by RO membrane'}
                      </span>
                    </div>
                    <div className="w-full bg-white/[0.05] h-2.5 rounded-full overflow-hidden p-0.5">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          selectedMode === 'living' ? 'bg-gradient-to-r from-emerald-400 to-teal-400 w-[100%]' : 'bg-slate-700 w-[15%]'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] text-xs">
                {selectedMode === 'living' ? (
                  <p className="text-cyan-200 font-light leading-relaxed">
                    ✨ <strong>Micro-Clustered Hydration:</strong> Water molecules are clustered into tight 5-molecule structures that absorb into cells instantly, eliminating sluggishness without a bloated belly.
                  </p>
                ) : (
                  <p className="text-rose-200 font-light leading-relaxed">
                    ⚠️ <strong>Demineralization Risk:</strong> Standard RO water is dead and acidic. It leaches calcium from teeth and bones over prolonged years and leaves you feeling constantly thirsty.
                  </p>
                )}
              </div>
            </div>

            {/* Checklist Comparison Column */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h4 className="font-bold text-white text-xs uppercase tracking-widest">
                  {selectedMode === 'living' ? 'Transformational Health Architecture:' : 'Drawbacks of Standard RO:'}
                </h4>

                {selectedMode === 'living' ? (
                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-start gap-3 bg-white/[0.03] p-3 rounded-2xl border border-white/[0.06]">
                      <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Explosive Cellular Stamina:</strong>
                        Faster micro-cellular hydration fuels cellular ATP energy and eliminates afternoon brain fog.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white/[0.03] p-3 rounded-2xl border border-white/[0.06]">
                      <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Ayurvedic Copper Immunity:</strong>
                        Active copper ions stimulate hemoglobin synthesis, boost gut motility, and support radiant skin.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white/[0.03] p-3 rounded-2xl border border-white/[0.06]">
                      <Heart className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Natural Acidity Neutralizer:</strong>
                        Alkaline pH 8.5+ soothes acid reflux, heartburn, and restores optimal metabolic balance.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white/[0.03] p-3 rounded-2xl border border-white/[0.06]">
                      <Sparkles className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Velvety Glacial Spring Taste:</strong>
                        Polished naturally with coconut shell carbon — crisp, pure, and naturally sweet.
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-start gap-3 bg-rose-950/20 p-3 rounded-2xl border border-rose-500/20">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Acidic Stomach Irritation:</strong>
                        Low pH water promotes acidity, gastric reflux, and indigestion.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-rose-950/20 p-3 rounded-2xl border border-rose-500/20">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Stripped Essential Minerals:</strong>
                        Lacks calcium, magnesium, and potassium — WHO warns against drinking demineralized water.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-rose-950/20 p-3 rounded-2xl border border-rose-500/20">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Flat Bitter / Chemical Taste:</strong>
                        Unpalatable metallic aftertaste that makes hydration feel like a chore.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <a
                  href="#showcase"
                  className="w-full bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition transform hover:-translate-y-0.5"
                >
                  <Droplets className="w-4 h-4 text-cyan-200" />
                  <span>Explore Living Alkaline Purifiers</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars of Living Water Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-3xl luxury-glass border border-white/[0.08] hover:border-cyan-500/40 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-sm mb-1">Micro-Clustered Hydration</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Breaks bulky 15-molecule water clusters into tiny 5-molecule structures for effortless cellular absorption.
            </p>
          </div>

          <div className="p-6 rounded-3xl luxury-glass border border-white/[0.08] hover:border-emerald-500/40 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-sm mb-1">Active Negative ORP</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Infused with dissolved molecular hydrogen, delivering anti-aging antioxidants to every organ.
            </p>
          </div>

          <div className="p-6 rounded-3xl luxury-glass border border-white/[0.08] hover:border-amber-500/40 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-sm mb-1">Ayurvedic Copper & Zinc</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Traditional Indian copper vessel benefits engineered into micro-dosed ionic infusion for enhanced immunity.
            </p>
          </div>

          <div className="p-6 rounded-3xl luxury-glass border border-white/[0.08] hover:border-teal-500/40 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-sm mb-1">Metabolic pH 8.5+</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Restores optimal alkaline balance, counteracting spicy foods, stress, and chronic acidity.
            </p>
          </div>
        </div>

        {/* Family Impact Dial */}
        <div className="p-8 sm:p-10 rounded-3xl luxury-glass border border-white/[0.1] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-cyan-400 block">
                Family Impact Cockpit
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                How Much Living Water Does Your Household Need?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light">
                Slide to your family size and discover how many litres of antioxidant hydration your residence consumes annually.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-400">Family Members:</span>
                  <span className="text-2xl font-black text-cyan-300">{familyMembers} People</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={familyMembers}
                  onChange={(e) => setFamilyMembers(Number(e.target.value))}
                  aria-label="Family Size Slider"
                  className="w-full h-2.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-2xl sm:text-3xl font-black text-cyan-300">{annualLiters.toLocaleString()} L</div>
                <div className="text-[10px] text-slate-400 font-semibold uppercase mt-1">Living Water / Year</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">99.8%</div>
                <div className="text-[10px] text-slate-400 font-semibold uppercase mt-1">Heavy Metals Blocked</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-2xl sm:text-3xl font-black text-amber-300">~{bottlesSaved.toLocaleString()}</div>
                <div className="text-[10px] text-slate-400 font-semibold uppercase mt-1">Plastic Cans Saved</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-2xl sm:text-3xl font-black text-teal-300">₹0 Cost</div>
                <div className="text-[10px] text-slate-400 font-semibold uppercase mt-1">Doorstep TDS Audit</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
