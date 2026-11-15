import React, { useState } from 'react';
import { 
  Sparkles, 
  Droplets, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Heart, 
  Flame, 
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
    <section id="vitality" className="py-20 bg-gradient-to-b from-white via-cyan-50/40 to-slate-50 relative overflow-hidden">
      {/* Decorative Floating Water Ambient Droplets */}
      <div className="absolute top-12 left-8 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none float-bubble-1" />
      <div className="absolute bottom-16 right-10 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none float-bubble-2" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-brand-200/20 rounded-full blur-3xl pointer-events-none float-bubble-3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-teal-500/10 border border-cyan-200/80 text-cyan-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-600 fill-cyan-400" />
            <span>The Aura of Purity & Living Cellular Vitality</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Not Just Filtered Water. <br />
            <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Living, Energized Water That Heals.
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Ordinary purifiers strip out all minerals and leave your water acidic, flat, and aggressive. 
            Our advanced systems re-infuse vital <strong>Ayurvedic Copper</strong>, <strong>Antioxidant Alkaline</strong>, and 
            <strong>Bio-Available Minerals</strong> — transforming every sip into an energizing wellness tonic.
          </p>
        </div>

        {/* Interactive "Dead Acidic Water vs Living Alkaline Water" Experience */}
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-cyan-100 shadow-xl mb-16">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Interactive Water Comparison</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                Ordinary RO Water vs Living Alkaline Water
              </h3>
            </div>

            {/* Switch Toggle Buttons */}
            <div className="flex items-center p-1 bg-slate-100 rounded-2xl border border-slate-200">
              <button
                onClick={() => setSelectedMode('ordinary')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                  selectedMode === 'ordinary'
                    ? 'bg-rose-50 text-rose-700 border border-rose-200 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <XCircle className="w-4 h-4 text-rose-500" />
                <span>Ordinary Acidic RO</span>
              </button>

              <button
                onClick={() => setSelectedMode('living')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                  selectedMode === 'living'
                    ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>Our Living Alkaline Water</span>
              </button>
            </div>
          </div>

          {/* Comparison Cards Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 items-stretch">
            
            {/* Visual Health Gauge Card */}
            <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
              selectedMode === 'living'
                ? 'bg-gradient-to-br from-cyan-50/80 via-teal-50/40 to-emerald-50/60 border-cyan-200 shadow-md'
                : 'bg-rose-50/40 border-rose-200'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-black uppercase px-3 py-1 rounded-full border ${
                    selectedMode === 'living'
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      : 'bg-rose-100 text-rose-800 border-rose-300'
                  }`}>
                    {selectedMode === 'living' ? 'Optimal Vitality (Active)' : 'Depleted Water (Passive)'}
                  </span>
                  
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-600">
                    <Activity className={`w-4 h-4 ${selectedMode === 'living' ? 'text-teal-600' : 'text-rose-500'}`} />
                    <span>ORP Index</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* pH Value */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Water pH Balance:</span>
                      <span className={`text-sm font-extrabold ${selectedMode === 'living' ? 'text-teal-700' : 'text-rose-600'}`}>
                        {selectedMode === 'living' ? '8.5 - 9.2 pH (Active Alkaline)' : '5.5 - 6.5 pH (Acidic)'}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          selectedMode === 'living' ? 'bg-gradient-to-r from-teal-500 to-emerald-500 w-[90%]' : 'bg-rose-500 w-[45%]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* ORP Antioxidant Potential */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Antioxidant Potential (ORP):</span>
                      <span className={`text-sm font-extrabold ${selectedMode === 'living' ? 'text-teal-700' : 'text-rose-600'}`}>
                        {selectedMode === 'living' ? '-150 to -250 mV (Antioxidant)' : '+200 to +300 mV (Oxidizing)'}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          selectedMode === 'living' ? 'bg-gradient-to-r from-cyan-500 to-teal-500 w-[95%]' : 'bg-rose-400 w-[30%]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Mineral Enrichment */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Bio-Minerals (Ca, Mg, K, Cu, Zn):</span>
                      <span className={`text-sm font-extrabold ${selectedMode === 'living' ? 'text-emerald-700' : 'text-rose-600'}`}>
                        {selectedMode === 'living' ? '100% Retained & Enhanced' : 'Stripped by RO membrane'}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          selectedMode === 'living' ? 'bg-gradient-to-r from-emerald-500 to-teal-600 w-[100%]' : 'bg-slate-300 w-[15%]'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs">
                {selectedMode === 'living' ? (
                  <p className="text-teal-900 font-medium leading-relaxed">
                    ✨ <strong>Cellular Miracle:</strong> Enriched with natural copper ions and active alkaline minerals. 
                    Micro-clustered molecular structure absorbs into cells instantly without a bloated feeling.
                  </p>
                ) : (
                  <p className="text-rose-900 font-medium leading-relaxed">
                    ⚠️ <strong>Demineralization Risk:</strong> Standard RO water is dead and acidic. It leaches calcium 
                    from teeth and bones over prolonged years and leaves you feeling constantly thirsty.
                  </p>
                )}
              </div>
            </div>

            {/* Checklist Comparison Column */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">
                  {selectedMode === 'living' ? 'Transformational Health Benefits:' : 'Drawbacks of Standard RO:'}
                </h4>

                {selectedMode === 'living' ? (
                  <div className="space-y-2.5 text-xs text-slate-700">
                    <div className="flex items-start gap-2.5 bg-emerald-50/70 p-3 rounded-2xl border border-emerald-100">
                      <Zap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Explosive Daily Energy:</strong>
                        Faster micro-cellular hydration fuels ATP energy production and relieves afternoon brain fog.
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-cyan-50/70 p-3 rounded-2xl border border-cyan-100">
                      <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Ayurvedic Copper Immunity:</strong>
                        Active copper ions boost natural digestion, kill water-borne pathogens, and support glowing skin.
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-teal-50/70 p-3 rounded-2xl border border-teal-100">
                      <Heart className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Natural Acidity Neutralizer:</strong>
                        Alkaline pH 8.5+ soothes acid reflux, heartburn, and restores optimal bodily pH balance.
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-amber-50/70 p-3 rounded-2xl border border-amber-100">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Delicious Mountain Spring Taste:</strong>
                        Sweetened naturally with coconut shell carbon — your kids will choose water over sugary drinks!
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2.5 text-xs text-slate-700">
                    <div className="flex items-start gap-2.5 bg-rose-50/60 p-3 rounded-2xl border border-rose-100">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Acidic Stomach Irritation:</strong>
                        Low pH water promotes acidity, gastric reflux, and indigestion.
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-rose-50/60 p-3 rounded-2xl border border-rose-100">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Stripped Essential Minerals:</strong>
                        Lacks calcium, magnesium, and potassium — WHO warns against drinking demineralized water.
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-rose-50/60 p-3 rounded-2xl border border-rose-100">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Flat Bitter / Chemical Taste:</strong>
                        Unpalatable metallic aftertaste that makes hydration feel like a chore.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <a
                  href="#purifiers"
                  className="w-full bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 text-white font-bold py-3.5 px-4 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition transform hover:-translate-y-0.5"
                >
                  <Droplets className="w-4 h-4 text-cyan-200" />
                  <span>Explore Living Alkaline Purifiers</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars of Energy & Wellness Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Pillar 1 */}
          <div className="bg-white/90 backdrop-blur rounded-3xl p-6 border border-cyan-100 shadow-sm hover:shadow-xl hover:border-cyan-300 transition duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition duration-300 shadow-xs">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base mb-1.5">Micro-Clustered Hydration</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Breaks down bulky 15-molecule water clusters into tiny 5-6 molecule micro-clusters that hydrate your organs at lightning speed.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white/90 backdrop-blur rounded-3xl p-6 border border-emerald-100 shadow-sm hover:shadow-xl hover:border-emerald-300 transition duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition duration-300 shadow-xs">
              <Leaf className="w-7 h-7" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base mb-1.5">Active Negative ORP</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Infused with dissolved molecular hydrogen, giving the water powerful anti-aging antioxidant properties that fight free radical damage.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white/90 backdrop-blur rounded-3xl p-6 border border-amber-100 shadow-sm hover:shadow-xl hover:border-amber-300 transition duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition duration-300 shadow-xs">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base mb-1.5">Bio-Copper & Zinc Defense</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Traditional Indian copper vessel wisdom engineered with modern precision: boosts hemoglobin, gut motility, and immune resistance.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white/90 backdrop-blur rounded-3xl p-6 border border-teal-100 shadow-sm hover:shadow-xl hover:border-teal-300 transition duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 mb-4 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition duration-300 shadow-xs">
              <Sun className="w-7 h-7" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base mb-1.5">Metabolic pH Harmonizer</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Counteracts modern acidic diets, spicy foods, and stress. Keeps your bloodstream at an alkaline state for all-day stamina.
            </p>
          </div>

        </div>

        {/* Family Wellness & Eco Impact Calculator */}
        <div className="bg-gradient-to-r from-brand-900 via-slate-900 to-cyan-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                Family Hydration & Impact Meter
              </div>

              <h3 className="text-2xl sm:text-3xl font-black">
                How Much Living Water Does Your Family Need?
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Slide to your family size and discover how many litres of antioxidant wellness your household consumes annually.
              </p>

              {/* Slider */}
              <div className="pt-2 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-300">Family Members:</span>
                  <span className="text-2xl font-black text-cyan-400">{familyMembers} People</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={familyMembers}
                  onChange={(e) => setFamilyMembers(Number(e.target.value))}
                  aria-label="Family Size Slider"
                  className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/10 backdrop-blur rounded-2xl border border-white/10 text-center">
                <div className="text-2xl sm:text-3xl font-black text-cyan-300">{annualLiters.toLocaleString()} L</div>
                <div className="text-[11px] text-slate-300 font-semibold mt-1">Living Alkaline Water / Year</div>
              </div>

              <div className="p-4 bg-white/10 backdrop-blur rounded-2xl border border-white/10 text-center">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">99.8%</div>
                <div className="text-[11px] text-slate-300 font-semibold mt-1">Heavy Metals & Cysts Blocked</div>
              </div>

              <div className="p-4 bg-white/10 backdrop-blur rounded-2xl border border-white/10 text-center">
                <div className="text-2xl sm:text-3xl font-black text-amber-300">~{bottlesSaved.toLocaleString()}</div>
                <div className="text-[11px] text-slate-300 font-semibold mt-1">Plastic Bottles Saved from Landfills</div>
              </div>

              <div className="p-4 bg-white/10 backdrop-blur rounded-2xl border border-white/10 text-center">
                <div className="text-2xl sm:text-3xl font-black text-teal-300">₹0 Cost</div>
                <div className="text-[11px] text-slate-300 font-semibold mt-1">Free Home TDS Water Test</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
