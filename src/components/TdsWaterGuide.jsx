import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  Droplet, 
  AlertTriangle, 
  CheckCircle, 
  ShieldAlert, 
  ArrowRight,
  Info
} from 'lucide-react';

export default function TdsWaterGuide({ onOpenWaterTest }) {
  const [tdsValue, setTdsValue] = useState(650);

  // Determine TDS bracket
  const getTdsAnalysis = (val) => {
    if (val < 150) {
      return {
        label: "Low TDS / Soft Water",
        status: "Demineralized",
        badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
        barColor: "bg-blue-500",
        taste: "Flat / Bland taste",
        health: "Lacks essential calcium & magnesium electrolytes.",
        recommendedTech: "Mineralizer Cartridge + Alkaline + UV",
        recommendation: "Avoid heavy RO alone. Add Alkaline & Mineral Cartridge to restore essential minerals."
      };
    } else if (val <= 300) {
      return {
        label: "Optimal TDS / Sweet Natural Water",
        status: "Ideal Drinking Quality",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        barColor: "bg-emerald-500",
        taste: "Naturally crisp & pleasant sweet taste",
        health: "Safe and balanced for heart, kidneys, and bone development.",
        recommendedTech: "Active Alkaline + Copper Infusion + UV/UF",
        recommendation: "Ideal drinking water. Protect with UV+UF and retain natural minerals."
      };
    } else if (val <= 600) {
      return {
        label: "Moderate Hardness / Municipal & Tanker",
        status: "Needs Filtration",
        badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
        barColor: "bg-amber-500",
        taste: "Slight chemical or metallic aftertaste",
        health: "May cause minor scaling in utensils and dry hair/skin over time.",
        recommendedTech: "7-Stage RO + Alkaline Technology",
        recommendation: "Purosis Puroaqua or Merlin Planet RO is highly recommended to filter chemicals and balance pH."
      };
    } else if (val <= 1200) {
      return {
        label: "High TDS / Ground & Borewell Water",
        status: "Hard / Saline Water",
        badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
        barColor: "bg-orange-500",
        taste: "Salty / Brackish water with strong white scaling on vessels",
        health: "Risk of kidney stones, indigestion, hair fall, and heavy metal exposure.",
        recommendedTech: "Multi-Stage High TDS RO + Copper + Active Alkaline",
        recommendation: "Cloud Aqua One 3 or Aqua Next Pro with 80 GPD high-rejection membrane is essential."
      };
    } else {
      return {
        label: "Extremely High TDS / Critical Contamination",
        status: "Hazardous / Heavy Minerals",
        badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
        barColor: "bg-rose-500",
        taste: "Unpalatable bitter, harsh saline taste",
        health: "High probability of arsenic, fluoride, lead, and dissolved industrial salts.",
        recommendedTech: "Industrial High-Pressure RO + Pre-Filter + Copper Alkaline",
        recommendation: "Requires heavy-duty booster pump and high-density RO membranes with copper zinc alkaline."
      };
    }
  };

  const analysis = getTdsAnalysis(tdsValue);

  return (
    <section id="tds-guide" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Interactive Purity Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Check Your Water TDS & Ideal Purifier
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Total Dissolved Solids (TDS) measures salts, minerals, and contaminants in ppm (parts per million). 
            Drag the slider to see how your water scores and what technology your home needs.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-50 to-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          
          {/* Slider Header Display */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Water TDS Reading</span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">{tdsValue}</span>
                <span className="text-base sm:text-lg font-bold text-brand-600">PPM (mg/L)</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold border ${analysis.badgeColor}`}>
                {analysis.status}
              </span>
            </div>
          </div>

          {/* Interactive Range Slider */}
          <div className="space-y-3">
            <input
              type="range"
              min="50"
              max="2000"
              step="10"
              value={tdsValue}
              onChange={(e) => setTdsValue(Number(e.target.value))}
              aria-label="Water TDS Slider"
              className="w-full h-3.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600 focus:outline-none"
            />
            
            {/* Scale Marks */}
            <div className="flex justify-between text-[11px] font-semibold text-slate-400 px-1">
              <span>50 ppm (Soft)</span>
              <span className="hidden sm:inline">300 ppm (Ideal)</span>
              <span>600 ppm (Tap/Tanker)</span>
              <span className="hidden sm:inline">1200 ppm (Borewell)</span>
              <span>2000+ ppm (Saline)</span>
            </div>
          </div>

          {/* Result Box */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
            <div className="space-y-3">
              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Classification</span>
                <p className="text-base font-bold text-slate-900 mt-0.5">{analysis.label}</p>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Taste & Scale Impact</span>
                <p className="text-xs text-slate-600 mt-0.5">{analysis.taste}</p>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Health Perspective</span>
                <p className="text-xs text-slate-600 mt-0.5">{analysis.health}</p>
              </div>
            </div>

            <div className="bg-brand-50/60 p-5 rounded-xl border border-brand-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-brand-900 font-bold text-sm mb-1.5">
                  <CheckCircle className="w-4 h-4 text-brand-600" />
                  <span>Recommended Technology</span>
                </div>
                <div className="text-xs font-extrabold text-brand-700 bg-white px-2.5 py-1.5 rounded-lg border border-brand-200 mb-2">
                  {analysis.recommendedTech}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {analysis.recommendation}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-2 mt-2">
                <a
                  href="#purifiers"
                  className="flex-1 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl text-center shadow-xs transition"
                >
                  View Suitable Purifiers
                </a>
                <button
                  onClick={onOpenWaterTest}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl text-center shadow-xs transition"
                >
                  Book Free Home TDS Test
                </button>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
            <Info className="w-3.5 h-3.5" />
            Don't know your home's exact water TDS? Our technician will visit and test it with a digital meter for free.
          </p>

        </div>

      </div>
    </section>
  );
}
