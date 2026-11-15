import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  Droplet, 
  CheckCircle, 
  Info,
  Activity
} from 'lucide-react';

export default function TdsWaterGuide({ onOpenWaterTest }) {
  const [tdsValue, setTdsValue] = useState(650);

  const getTdsAnalysis = (val) => {
    if (val < 150) {
      return {
        label: "Low TDS / Demineralized Water",
        status: "Lacks Essential Minerals",
        badgeColor: "bg-blue-950/80 text-blue-300 border-blue-500/30",
        taste: "Flat / Bland taste",
        health: "Lacks calcium & magnesium electrolytes.",
        recommendedTech: "Mineralizer Cartridge + Alkaline + UV",
        recommendation: "Avoid heavy RO alone. Add Alkaline & Mineral Cartridge to restore essential electrolytes."
      };
    } else if (val <= 300) {
      return {
        label: "Optimal TDS / Sweet Mountain Balance",
        status: "Ideal Drinking Quality",
        badgeColor: "bg-emerald-950/80 text-emerald-300 border-emerald-500/30",
        taste: "Naturally crisp & pleasant sweet taste",
        health: "Safe and balanced for heart, kidneys, and bone development.",
        recommendedTech: "Active Alkaline + Copper Infusion + UV/UF",
        recommendation: "Ideal drinking water. Protect with UV+UF and retain natural minerals."
      };
    } else if (val <= 600) {
      return {
        label: "Moderate Hardness / Municipal & Tanker",
        status: "Needs Salt & Sediment Filtration",
        badgeColor: "bg-amber-950/80 text-amber-300 border-amber-500/30",
        taste: "Slight chemical or metallic aftertaste",
        health: "Causes scaling in cookware and dry skin/hair over prolonged years.",
        recommendedTech: "7-Stage RO + Alkaline Technology",
        recommendation: "Cloud Aqua One 3 or Purosis Puroaqua is recommended to filter chemicals and balance pH."
      };
    } else if (val <= 1200) {
      return {
        label: "High TDS / Ground & Borewell Water",
        status: "Hard / Saline Water",
        badgeColor: "bg-orange-950/80 text-orange-300 border-orange-500/30",
        taste: "Salty / Brackish water with strong white scaling on vessels",
        health: "Risk of kidney stress, indigestion, hair fall, and heavy metal exposure.",
        recommendedTech: "Multi-Stage High TDS RO + Copper + Active Alkaline",
        recommendation: "Merlin Matrix or Aqua System Prime with 80 GPD high-rejection membrane is essential."
      };
    } else {
      return {
        label: "Critical Salinity / Heavy Contamination",
        status: "Hazardous Dissolved Solids",
        badgeColor: "bg-rose-950/80 text-rose-300 border-rose-500/30",
        taste: "Unpalatable bitter, harsh saline taste",
        health: "High probability of arsenic, fluoride, lead, and dissolved industrial salts.",
        recommendedTech: "Industrial High-Pressure RO + Pre-Filter + Copper Alkaline",
        recommendation: "Requires heavy-duty booster pump and high-density RO membranes with copper zinc alkaline."
      };
    }
  };

  const analysis = getTdsAnalysis(tdsValue);

  return (
    <section id="tds-guide" className="py-20 bg-[#07090e] text-white border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-md mb-3">
            <SlidersHorizontal className="w-3 h-3" />
            Diagnostic Purity Console
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            Test Your Water TDS & Required Technology
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
            Total Dissolved Solids (TDS) measures dissolved salts and minerals in PPM. 
            Adjust the dial to evaluate your inlet water quality and identify the required membrane configuration.
          </p>
        </div>

        {/* Interactive Console Card */}
        <div className="max-w-4xl mx-auto luxury-glass rounded-3xl p-6 sm:p-10 border border-white/[0.1] shadow-2xl">
          
          {/* Slider Header Display */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Inlet TDS Reading</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-6xl font-black text-white">{tdsValue}</span>
                <span className="text-sm sm:text-base font-bold text-cyan-400">PPM (mg/L)</span>
              </div>
            </div>

            <div>
              <span className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border ${analysis.badgeColor}`}>
                {analysis.status}
              </span>
            </div>
          </div>

          {/* Interactive Range Slider */}
          <div className="space-y-4">
            <input
              type="range"
              min="50"
              max="2000"
              step="10"
              value={tdsValue}
              onChange={(e) => setTdsValue(Number(e.target.value))}
              aria-label="Water TDS Slider"
              className="w-full h-3 bg-black/60 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            
            {/* Scale Marks */}
            <div className="flex justify-between text-[10px] font-semibold text-slate-500 px-1 uppercase tracking-wider">
              <span>50 ppm (Soft)</span>
              <span className="hidden sm:inline">300 ppm (Ideal)</span>
              <span>600 ppm (Tap/Tanker)</span>
              <span className="hidden sm:inline">1200 ppm (Borewell)</span>
              <span>2000+ ppm (Saline)</span>
            </div>
          </div>

          {/* Result Box */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-black/40 border border-white/[0.08]">
            <div className="space-y-3.5 text-xs">
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block">Classification</span>
                <p className="text-sm font-bold text-white mt-0.5">{analysis.label}</p>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block">Taste & Mineral Scale</span>
                <p className="text-xs text-slate-300 mt-0.5 font-light">{analysis.taste}</p>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block">Health Impact</span>
                <p className="text-xs text-slate-300 mt-0.5 font-light">{analysis.health}</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-white font-bold text-xs uppercase tracking-wider mb-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Prescribed Technology</span>
                </div>
                <div className="text-xs font-black text-cyan-300 bg-cyan-950/60 px-3 py-2 rounded-lg border border-cyan-500/40 mb-2">
                  {analysis.recommendedTech}
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {analysis.recommendation}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-2 mt-2">
                <a
                  href="#showcase"
                  className="flex-1 bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-semibold py-2.5 px-3 rounded-xl text-center border border-white/[0.1] transition"
                >
                  View Suitable Models
                </a>
                <button
                  onClick={onOpenWaterTest}
                  className="flex-1 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-xs font-bold py-2.5 px-3 rounded-xl text-center transition shadow-lg shadow-cyan-500/20"
                >
                  Book Free On-Site Test
                </button>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-center text-slate-500 mt-6 flex items-center justify-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            Unsure of your home's exact water TDS? Our certified technician will visit with a digital meter for free.
          </p>

        </div>

      </div>
    </section>
  );
}
