import React, { useState } from 'react';
import { COMPANY_CONFIG, createWhatsAppUrl } from '../data/companyConfig';
import { 
  AlertTriangle, 
  Droplets, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  PhoneCall,
  Zap,
  Clock,
  SlidersHorizontal,
  Flame,
  Award
} from 'lucide-react';

export default function Hero({ onOpenQuiz, onOpenWaterTest }) {
  const [quickPhone, setQuickPhone] = useState('');
  const [quickPincode, setQuickPincode] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  // 5-Second Interactive Water Matcher State
  const [waterSource, setWaterSource] = useState('borewell'); // 'borewell' | 'municipal'
  const [familySize, setFamilySize] = useState('4'); // '4' | '6'

  const handleQuickAuditSubmit = (e) => {
    e.preventDefault();
    if (!quickPhone) {
      onOpenWaterTest();
      return;
    }
    const msg = `*💧 Priority Doorstep Water TDS Audit Request*\n\n`
      + `*Phone:* ${quickPhone}\n`
      + `*Pincode:* ${quickPincode || 'Shared on call'}\n`
      + `*Water Source:* ${waterSource === 'borewell' ? 'Borewell / Tanker (High TDS)' : 'Municipal / Tap Water'}\n\n`
      + `Please arrange a certified technician with a calibrated digital TDS & mineral tester.`;
    window.open(createWhatsAppUrl(msg), '_blank');
    setQuickSubmitted(true);
  };

  // Dynamic recommendation based on selector
  const recommendation = waterSource === 'borewell' 
    ? {
        name: "Aqua Next Pro Copper + Alkaline RO",
        price: "₹10,499",
        mrp: "₹16,999",
        savings: "Save ₹6,500 (38% OFF)",
        tag: "Borewell & Hard Water Specialist (Up to 2,000 TDS)",
        id: "aqua-next-pro"
      }
    : {
        name: "Cloud International Aqua One 3 (Alkaline RO)",
        price: "₹12,999",
        mrp: "₹19,999",
        savings: "Save ₹7,000 (35% OFF)",
        tag: "Optimal Municipal & Tanker Water (pH 8.5+ Micro-Clustered)",
        id: "cloud-aqua-one-3"
      };

  return (
    <section className="relative bg-gradient-to-b from-[#f0f7fc] via-[#f8fafc] to-[#ffffff] text-slate-900 overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200">
      {/* Glacial Aura & Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-cyan-100/60 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-100/50 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow Pill: Direct Factory & Trust */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 bg-white border border-sky-200 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase text-sky-800 shadow-xs">
            <Award className="w-3.5 h-3.5 text-sky-600" />
            <span>Direct Factory Privilege • Save Up to 45% vs Retail • Certified ISO & NABL Standard</span>
          </div>
        </div>

        {/* Monumental Headline: Bottom-of-Funnel Clarity */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-[#0a2540] uppercase">
            COPPER & ALKALINE RO PURIFIERS. <br />
            <span className="text-sky-600">DIRECT FACTORY PRICES FROM ₹8,499.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Avoid buying the wrong purifier blindfolded. Cheap ordinary ROs strip healthy minerals leaving water acidic, while standard filters fail in hard borewell water. 
            <strong className="text-slate-900 font-semibold"> We test your water first — 100% Free at your doorstep with a digital TDS meter.</strong>
          </p>

          {/* Dual Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#options"
              className="px-6 sm:px-8 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-sky-600/25 flex items-center gap-2 transition duration-200"
            >
              <span>Explore Purifiers & Deals</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenWaterTest}
              className="px-6 sm:px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm uppercase tracking-wider border border-slate-300 shadow-xs flex items-center gap-2 transition duration-200"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Book 100% Free TDS Test</span>
            </button>
          </div>
        </div>

        {/* Split Grid: 5-Sec Water Matcher (Left) + Quick Doorstep Test Form (Right) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-10">
          
          {/* Left: 5-Second Interactive Water Matcher (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200 flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-sky-600" />
                  5-Second Recommendation Engine
                </span>
                <span className="text-xs font-bold text-slate-400">Match Your Water</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0a2540] mb-2">
                Which Water Source Feeds Your Kitchen?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-5">
                Select your water supply to eliminate TDS mismatch anxiety and view the exact recommended system:
              </p>

              {/* Water Source Selector Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setWaterSource('borewell')}
                  className={`p-3.5 rounded-2xl text-left border transition ${
                    waterSource === 'borewell'
                      ? 'bg-sky-50/80 border-sky-500 shadow-xs ring-2 ring-sky-400/20'
                      : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm text-slate-900">Borewell / Tanker Water</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">TDS 500+</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">High hardness, white limescale, salty taste.</p>
                </button>

                <button
                  type="button"
                  onClick={() => setWaterSource('municipal')}
                  className={`p-3.5 rounded-2xl text-left border transition ${
                    waterSource === 'municipal'
                      ? 'bg-sky-50/80 border-sky-500 shadow-xs ring-2 ring-sky-400/20'
                      : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm text-slate-900">Municipal / Kaveri / DJB</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">TDS &lt; 300</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">Chlorinated, mild TDS, needs pH boost & copper.</p>
                </button>
              </div>

              {/* Family Size Selector */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-semibold text-slate-600">Family Size:</span>
                <button
                  type="button"
                  onClick={() => setFamilySize('4')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                    familySize === '4'
                      ? 'bg-sky-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  2–4 Members (12L Tank)
                </button>
                <button
                  type="button"
                  onClick={() => setFamilySize('6')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                    familySize === '6'
                      ? 'bg-sky-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  5+ Members (15L / High Flow)
                </button>
              </div>
            </div>

            {/* Recommendation Result Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-50 via-slate-50 to-amber-50/40 border border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block">
                  Recommended For Your Home:
                </span>
                <h4 className="font-black text-slate-900 text-sm sm:text-base">
                  {recommendation.name}
                </h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-base font-black text-emerald-700">{recommendation.price}</span>
                  <span className="text-xs text-slate-400 line-through">{recommendation.mrp}</span>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">
                    {recommendation.savings}
                  </span>
                </div>
              </div>

              <a
                href="#options"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider text-center shrink-0 shadow-sm transition"
              >
                View Model & Deal
              </a>
            </div>

          </div>

          {/* Right: Quick Doorstep Water TDS Audit (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Step 1: Test Before You Invest
                </span>
                <span className="text-xs font-bold text-emerald-600">100% Free</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0a2540] mb-2">
                Book Free Doorstep Water TDS Audit
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-5">
                Our certified technician visits your home with a calibrated digital TDS meter to test your tap water and existing filters. Zero obligation to purchase.
              </p>

              {quickSubmitted ? (
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-slate-900 text-sm">Audit Dispatched via WhatsApp!</h4>
                  <p className="text-xs text-slate-600">Our regional coordinator will confirm your technician arrival window shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleQuickAuditSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                      WhatsApp / Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile number"
                      value={quickPhone}
                      onChange={(e) => setQuickPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                      Pincode / City Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 400050 or Bandra West"
                      value={quickPincode}
                      onChange={(e) => setQuickPincode(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition"
                  >
                    <span>Schedule Free Visit Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Reassurance Checklist */}
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero advance deposit • Pay only after neat installation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Live digital TDS & alkalinity test in your kitchen</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Micro-Pills */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-600 pt-2">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-600" />
            ₹0 Advance Payment
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-600" />
            Free Doorstep Installation
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-600" />
            1-Year Comprehensive Warranty
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-600" />
            24-Hour Express Dispatch
          </span>
        </div>

      </div>
    </section>
  );
}
