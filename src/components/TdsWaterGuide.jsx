import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  Droplet, 
  CheckCircle, 
  Info,
  Activity,
  Sparkles
} from 'lucide-react';

export default function TdsWaterGuide({ onOpenWaterTest }) {
  const [tdsValue, setTdsValue] = useState(650);

  const getTdsAnalysis = (val) => {
    if (val < 150) {
      return {
        label: "Low TDS / Demineralized Water",
        status: "Lacks Essential Minerals",
        badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
        taste: "Flat / Bland taste",
        health: "Lacks calcium & magnesium electrolytes.",
        recommendedTech: "Mineralizer Cartridge + Alkaline + UV",
        recommendation: "Avoid heavy RO alone. Add Alkaline & Mineral Cartridge to restore essential electrolytes."
      };
    } else if (val <= 300) {
      return {
        label: "Optimal TDS / Sweet Mountain Balance",
        status: "Ideal Drinking Quality",
        badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
        taste: "Naturally crisp & pleasant sweet taste",
        health: "Safe and balanced for heart, kidneys, and bone development.",
        recommendedTech: "Active Alkaline + Copper Infusion + UV/UF",
        recommendation: "Ideal drinking water. Protect with UV+UF and retain natural minerals."
      };
    } else if (val <= 600) {
      return {
        label: "Moderate Hardness / Municipal & Tanker",
        status: "Needs Salt & Sediment Filtration",
        badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
        taste: "Slight chemical or metallic aftertaste",
        health: "Causes scaling in cookware and dry skin/hair over prolonged years.",
        recommendedTech: "7-Stage RO + Alkaline Technology",
        recommendation: "Cloud Aqua One 3 or Purosis Puroaqua is recommended to filter chemicals and balance pH."
      };
    } else if (val <= 1200) {
      return {
        label: "High TDS / Ground & Borewell Water",
        status: "Hard / Saline Water",
        badgeColor: "bg-orange-50 text-orange-800 border-orange-200",
        taste: "Salty / Brackish water with strong white scaling on vessels",
        health: "Risk of kidney stress, indigestion, hair fall, and heavy metal exposure.",
        recommendedTech: "Multi-Stage High TDS RO + Copper + Active Alkaline",
        recommendation: "Merlin Matrix or Aqua System Prime with 80 GPD high-rejection membrane is essential."
      };
    } else {
      return {
        label: "Critical Salinity / Heavy Contamination",
        status: "Hazardous Dissolved Solids",
        badgeColor: "bg-rose-50 text-rose-800 border-rose-200",
        taste: "Unpalatable bitter, harsh saline taste",
        health: "High probability of arsenic, fluoride, lead, and dissolved industrial salts.",
        recommendedTech: "Industrial High-Pressure RO + Pre-Filter + Copper Alkaline",
        recommendation: "Requires heavy-duty booster pump and high-density RO membranes with copper zinc alkaline."
      };
    }
  };

  const analysis = getTdsAnalysis(tdsValue);

  return (
    <section id="tds-guide" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full mb-3 shadow-2xs">
            <SlidersHorizontal className="w-3.5 h-3.5 text-sky-600" />
            <span>Water Diagnostics & Filtration Chemistry</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-[#0a2540]">
            ANALYZE YOUR WATER'S <span className="text-sky-600">DISSOLVED MINERAL LOAD.</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            Total Dissolved Solids (TDS) measures dissolved salts, calcium, and micro-contaminants. 
            Drag the dial to view the health impact and identify the exact membrane configuration required.
          </p>
        </div>

        {/* Interactive Console Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          
          {/* Slider Header Display */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Inlet Water TDS Reading</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-6xl font-black text-[#0a2540]">{tdsValue}</span>
                <span className="text-sm sm:text-base font-bold text-sky-600">PPM (mg/L)</span>
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
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
            
            {/* Scale Marks */}
            <div className="flex justify-between text-[10px] font-semibold text-slate-500 px-1 uppercase tracking-wider">
              <span>50 ppm (Soft)</span>
              <span className="hidden sm:inline">300 ppm (Ideal)</span>
              <span>600 ppm (Municipal/Tanker)</span>
              <span className="hidden sm:inline">1200 ppm (Borewell)</span>
              <span>2000+ ppm (Saline)</span>
            </div>
          </div>

          {/* Result Box */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="space-y-3.5 text-xs">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Classification</span>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{analysis.label}</p>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Taste & Mineral Scale</span>
                <p className="text-xs text-slate-600 mt-0.5 font-normal">{analysis.taste}</p>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Health Impact</span>
                <p className="text-xs text-slate-600 mt-0.5 font-normal">{analysis.health}</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">
                  <CheckCircle className="w-4 h-4 text-sky-600" />
                  <span>Prescribed Technology</span>
                </div>
                <div className="text-xs font-bold text-sky-800 bg-sky-100/70 px-3 py-2 rounded-lg border border-sky-200 mb-2">
                  {analysis.recommendedTech}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {analysis.recommendation}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-2 mt-2">
                <a
                  href="#options"
                  className="flex-1 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold py-2.5 px-3 rounded-xl text-center border border-slate-300 transition"
                >
                  View Suitable Models
                </a>
                <button
                  onClick={onOpenWaterTest}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl text-center transition shadow-xs"
                >
                  Book Free On-Site Test
                </button>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-center text-slate-500 mt-6 flex items-center justify-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-sky-600" />
            <span>Unsure of your home's exact water TDS? Our certified technician will visit with a digital meter completely free.</span>
          </p>

        </div>

      </div>
    </section>
  );
}
