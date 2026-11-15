import React from 'react';
import { COMPANY_CONFIG, createWhatsAppUrl } from '../data/companyConfig';
import { 
  ShieldCheck, 
  Truck, 
  Droplets, 
  Award, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  HeartHandshake,
  Star
} from 'lucide-react';

export default function Hero({ onOpenQuiz, onOpenWaterTest }) {
  const handleWhatsAppInquiry = () => {
    window.open(createWhatsAppUrl("Hello! I am looking for a water purifier for my home/office. Please guide me with your best direct factory offers."), '_blank');
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Background soft glow decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100/90 via-teal-50 to-emerald-100/90 border border-cyan-200/90 text-cyan-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>💧 Living Alkaline & Copper Water • Crystalline Purity & Cellular Energy</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Drink Crystal-Pure, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Living Alkaline & Copper
              </span> Water Every Day.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Transform harsh tap or borewell water into living, energized antioxidant hydration. 
              Enriched with <strong className="text-cyan-800 font-semibold">Ayurvedic Copper & Zinc</strong>, 
              balanced to <strong className="text-teal-800 font-semibold">pH 8.5+ Alkaline</strong>, and sweetened with natural minerals. 
              Enjoy direct factory pricing with <strong className="text-slate-900 font-semibold">Free Doorstep Installation</strong> and 
              <strong className="text-slate-900 font-semibold"> 1-Year Comprehensive Warranty</strong>.
            </p>

            {/* Feature Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left max-w-xl mx-auto lg:mx-0 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Active Negative ORP</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Micro-Cellular Hydration</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ayurvedic Copper+Zinc</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Relieves Daily Acidity</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sweet Mountain Taste</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Free Doorstep TDS Test</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a 
                href="#purifiers" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg shadow-brand-500/25 transition transform hover:-translate-y-0.5 text-base"
              >
                <span>Browse Purifiers</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button 
                onClick={onOpenQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold px-5 py-3.5 rounded-2xl transition text-base"
              >
                <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
                <span>Purifier Selector Quiz</span>
              </button>

              <button 
                onClick={onOpenWaterTest}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-emerald-700 border border-emerald-300 font-bold px-5 py-3.5 rounded-2xl transition text-base shadow-xs"
              >
                <Droplets className="w-4 h-4 text-emerald-600" />
                <span>Book Free Water Test</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-700">AK</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-amber-200 flex items-center justify-center text-xs font-bold text-slate-700">RS</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-cyan-200 flex items-center justify-center text-xs font-bold text-slate-700">PM</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-emerald-200 flex items-center justify-center text-xs font-bold text-slate-700">SN</div>
              </div>
              <div className="text-left">
                <div className="flex items-center text-amber-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="ml-1.5 font-bold text-slate-800 text-sm">4.9 / 5</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Over 5,200+ homes & offices trust us for pure water</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Showcase Carousel / Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Highlight Card */}
              <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-copper-500 text-white text-[11px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider shadow">
                  Exclusive Direct Deal
                </div>

                {/* Purifier image showcase */}
                <div className="h-72 w-full flex items-center justify-center bg-slate-50/70 rounded-2xl p-4 overflow-hidden relative group">
                  <img 
                    src="/images/cloud-aqua-one3-grey.jpeg" 
                    alt="Cloud Aqua One 3 Luxury Grey Purifier" 
                    className="max-h-full w-auto object-contain drop-shadow-xl group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                    Cloud Aqua One 3 • Copper + Zinc + Alkaline
                  </div>
                </div>

                {/* Details */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <h2 className="font-extrabold text-slate-900 text-lg">Cloud Aqua One 3 Luxury Grey</h2>
                      <p className="text-xs text-slate-500">8 Stage RO + Copper + Zinc + Active Alkaline</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 line-through">₹18,500</span>
                      <div className="text-2xl font-black text-brand-600">₹10,499</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2 text-center text-[11px] font-semibold bg-slate-50 rounded-xl border border-slate-100">
                    <div className="p-1.5">
                      <div className="text-slate-400 font-normal">Capacity</div>
                      <div className="text-slate-800">9 Litres</div>
                    </div>
                    <div className="p-1.5 border-x border-slate-200">
                      <div className="text-slate-400 font-normal">TDS Handling</div>
                      <div className="text-slate-800">Up to 2200</div>
                    </div>
                    <div className="p-1.5">
                      <div className="text-slate-400 font-normal">Installation</div>
                      <div className="text-emerald-600 font-bold">100% Free</div>
                    </div>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <button 
                      onClick={handleWhatsAppInquiry}
                      className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-2.5 px-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm transition"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                      </svg>
                      <span>Order on WhatsApp</span>
                    </button>
                    
                    <a 
                      href="#purifiers" 
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition flex items-center justify-center"
                    >
                      More Models
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Pill: Pay After Installation */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Zero Risk Guarantee</div>
                  <div className="text-[11px] text-slate-500">Pay only after doorstep installation & TDS demo!</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
