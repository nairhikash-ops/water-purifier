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
    <section id="vitality" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200">
      {/* Subtle ambient light */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-100/70 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-100/60 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-800 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>The Science of Cellular Hydration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase leading-[1.08] text-[#0a2540]">
            NOT JUST FILTERED WATER. <br />
            <span className="text-sky-600">
              LIVING WATER THAT NOURISHES.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Ordinary purifiers strip out all minerals and leave your water acidic and demineralized. 
            Our advanced systems re-infuse vital <strong className="text-amber-800 font-semibold">Ayurvedic Copper</strong>, <strong className="text-sky-700 font-semibold">Antioxidant Alkaline</strong>, and 
            <strong className="text-emerald-700 font-semibold"> Bio-Available Minerals</strong> — transforming every glass into living hydration.
          </p>
        </div>

        {/* High-Precision Comparison Console */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md mb-14">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Scientific Comparison</span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0a2540] mt-0.5">
                Ordinary Acidic RO vs Living Alkaline Water
              </h3>
            </div>

            {/* Switch Toggle Buttons */}
            <div className="flex items-center p-1 bg-slate-100 rounded-2xl border border-slate-200">
              <button
                onClick={() => setSelectedMode('ordinary')}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition flex items-center gap-1.5 ${
                  selectedMode === 'ordinary'
                    ? 'bg-rose-100 text-rose-800 border border-rose-300 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>Ordinary Acidic RO</span>
              </button>

              <button
                onClick={() => setSelectedMode('living')}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition flex items-center gap-1.5 ${
                  selectedMode === 'living'
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                    : 'text-slate-600 hover:text-slate-900'
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
                ? 'bg-gradient-to-br from-sky-50/80 via-teal-50/50 to-emerald-50/70 border-sky-200'
                : 'bg-rose-50/60 border-rose-200'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${
                    selectedMode === 'living'
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      : 'bg-rose-100 text-rose-800 border-rose-300'
                  }`}>
                    {selectedMode === 'living' ? 'Optimal Cellular Vitality' : 'Depleted Dead Water'}
                  </span>
                  
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-500">
                    <Activity className={`w-4 h-4 ${selectedMode === 'living' ? 'text-sky-600' : 'text-rose-600'}`} />
                    <span>ORP Index</span>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* pH Value */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                      <span>Water pH Balance:</span>
                      <span className={`text-sm font-extrabold ${selectedMode === 'living' ? 'text-teal-700' : 'text-rose-600'}`}>
                        {selectedMode === 'living' ? '8.5 - 9.2 pH (Active Alkaline)' : '5.5 - 6.5 pH (Acidic)'}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200/80 h-2.5 rounded-full overflow-hidden p-0.5">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          selectedMode === 'living' ? 'bg-gradient-to-r from-sky-500 to-emerald-500 w-[90%]' : 'bg-rose-500 w-[45%]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* ORP Antioxidant Potential */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                      <span>Antioxidant Potential (ORP):</span>
                      <span className={`text-sm font-extrabold ${selectedMode === 'living' ? 'text-sky-700' : 'text-rose-600'}`}>
                        {selectedMode === 'living' ? '-150 to -250 mV (Antioxidant)' : '+200 to +300 mV (Oxidizing)'}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200/80 h-2.5 rounded-full overflow-hidden p-0.5">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          selectedMode === 'living' ? 'bg-gradient-to-r from-sky-500 to-teal-500 w-[95%]' : 'bg-rose-400 w-[30%]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Mineral Enrichment */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                      <span>Bio-Minerals (Ca, Mg, K, Cu, Zn):</span>
                      <span className={`text-sm font-extrabold ${selectedMode === 'living' ? 'text-emerald-700' : 'text-rose-600'}`}>
                        {selectedMode === 'living' ? '100% Retained & Enhanced' : 'Stripped by RO membrane'}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200/80 h-2.5 rounded-full overflow-hidden p-0.5">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          selectedMode === 'living' ? 'bg-gradient-to-r from-emerald-500 to-teal-500 w-[100%]' : 'bg-slate-400 w-[15%]'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs">
                {selectedMode === 'living' ? (
                  <p className="text-slate-700 font-normal leading-relaxed">
                    ✨ <strong>Micro-Clustered Hydration:</strong> Water molecules are clustered into tight 5-molecule structures that absorb into cells instantly, eliminating sluggishness without a heavy, bloated feeling.
                  </p>
                ) : (
                  <p className="text-rose-800 font-normal leading-relaxed">
                    ⚠️ <strong>Demineralization Risk:</strong> Standard RO water is dead and acidic. It leaches calcium from teeth and bones over prolonged years and leaves you feeling constantly thirsty.
                  </p>
                )}
              </div>
            </div>

            {/* Checklist Comparison Column */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h4 className="font-bold text-[#0a2540] text-xs uppercase tracking-wider">
                  {selectedMode === 'living' ? 'Transformational Health Benefits:' : 'Drawbacks of Standard RO:'}
                </h4>

                {selectedMode === 'living' ? (
                  <div className="space-y-2.5 text-xs text-slate-700">
                    <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                      <Zap className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Fast Cellular Hydration:</strong>
                        Micro-clustered water absorbs rapidly into cells, reducing afternoon fatigue and brain fog.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                      <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Ayurvedic Copper Immunity:</strong>
                        Active copper ions stimulate hemoglobin synthesis, support gut motility, and promote clear skin.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                      <Heart className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Natural Acidity Neutralizer:</strong>
                        Alkaline pH 8.5+ soothes acid reflux, heartburn, and restores optimal metabolic balance.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                      <Sparkles className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Sweet Mountain Spring Taste:</strong>
                        Polished naturally with organic coconut shell carbon — crisp, pure, and naturally sweet.
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2.5 text-xs text-slate-700">
                    <div className="flex items-start gap-3 bg-rose-50 p-3 rounded-2xl border border-rose-200">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Acidic Stomach Irritation:</strong>
                        Low pH water promotes acidity, gastric reflux, and indigestion over time.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-rose-50 p-3 rounded-2xl border border-rose-200">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Stripped Essential Minerals:</strong>
                        Lacks calcium, magnesium, and potassium — WHO warns against drinking demineralized water.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-rose-50 p-3 rounded-2xl border border-rose-200">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Flat Bitter / Chemical Taste:</strong>
                        Unpalatable metallic aftertaste that makes drinking enough water feel like a chore.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <a
                  href="#options"
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-sky-600/20 transition"
                >
                  <Droplets className="w-4 h-4 text-white" />
                  <span>Explore Living Alkaline Purifiers</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-sky-300 transition duration-200">
            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#0a2540] text-sm mb-1">Micro-Clustered Hydration</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Breaks bulky water clusters into tiny 5-molecule structures for effortless cellular absorption.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-emerald-300 transition duration-200">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#0a2540] text-sm mb-1">Active Negative ORP</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Infused with dissolved molecular hydrogen, delivering anti-aging antioxidants to every organ.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-amber-300 transition duration-200">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#0a2540] text-sm mb-1">Ayurvedic Copper & Zinc</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Traditional Indian copper vessel benefits engineered into micro-dosed ionic infusion for enhanced immunity.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-teal-300 transition duration-200">
            <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 mb-4">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#0a2540] text-sm mb-1">Metabolic pH 8.5+</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Restores optimal alkaline balance, counteracting spicy foods, stress, and chronic acidity.
            </p>
          </div>
        </div>

        {/* Family Impact Calculator */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-3">
              <span className="text-[10px] font-bold tracking-wider uppercase text-sky-700 block">
                Family Impact Calculator
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0a2540]">
                How Much Living Water Does Your Family Need?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Slide to your family size and discover how many litres of antioxidant hydration your residence consumes annually.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-600">Family Members:</span>
                  <span className="text-2xl font-black text-sky-600">{familyMembers} People</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={familyMembers}
                  onChange={(e) => setFamilyMembers(Number(e.target.value))}
                  aria-label="Family Size Slider"
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4 text-center">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl sm:text-3xl font-black text-sky-700">{annualLiters.toLocaleString()} L</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Living Water / Year</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl sm:text-3xl font-black text-emerald-700">99.8%</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Heavy Metals Blocked</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl sm:text-3xl font-black text-amber-700">~{bottlesSaved.toLocaleString()}</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Plastic Bottles Saved</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl sm:text-3xl font-black text-emerald-700">₹0 Cost</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Doorstep TDS Audit</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
