import React, { useState } from 'react';
import { 
  Star, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  ShieldCheck,
  Award,
  ArrowRight
} from 'lucide-react';
import { createWhatsAppUrl } from '../data/companyConfig';

export default function TestimonialsAndFaq() {
  const [openFaq, setOpenFaq] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kulkarni",
      role: "Architectural Designer",
      location: "Goregaon, Mumbai",
      model: "Aqua Next Pro RO + Copper Alkaline",
      rating: 5,
      date: "Verified Homeowner • 2 weeks ago",
      tdsBefore: "950 PPM (Borewell)",
      tdsAfter: "110 PPM (Alkaline)",
      comment: "Saved almost ₹7,000 compared to brand retail showrooms. The master technician arrived within hours, tested my borewell water in front of my family, neatly wall-mounted the machine without messy piping, and demoed the active copper infusion. The taste difference is night and day."
    },
    {
      name: "Dr. Ananya Sen",
      role: "Senior Consultant Physician",
      location: "Kothrud, Pune",
      model: "Cloud International Aqua One 3 (Slate Grey)",
      rating: 5,
      date: "Verified Homeowner • 1 month ago",
      tdsBefore: "540 PPM (Tanker)",
      tdsAfter: "95 PPM (Micro-Clustered)",
      comment: "The slate grey architectural finish blends seamlessly into our custom modular kitchen. Clinically, I wanted certified antioxidant negative ORP and active pH 8.5+ hydration for my parents. Paying only after installation and TDS validation gave us 100% confidence."
    },
    {
      name: "Sunil Verma",
      role: "Artisan Roastery & Cafe Owner",
      location: "Noida Sector 62",
      model: "Commercial 50 LPH RO Heavy-Duty Skid",
      rating: 5,
      date: "Verified Commercial Client • 3 weeks ago",
      tdsBefore: "820 PPM",
      tdsAfter: "85 PPM (Espresso Calibrated)",
      comment: "Water is the unsung ingredient in specialty espresso. AquaPure provided a heavy 304-grade stainless steel skid at direct factory prices that rival distributors couldn't touch. Prompt quarterly AMC response keeps our café running without downtime."
    }
  ];

  const faqs = [
    {
      q: "Why choose Direct Factory Hub over an expensive retail showroom?",
      a: "Traditional electronics retail outlets add substantial retail markups, showroom floor rent, and middleman dealer margins. As an authorized brand fulfillment hub, we ship brand-sealed machines straight from certified assembly lines to your kitchen, passing up to 45% savings directly to you with factory on-site warranty."
    },
    {
      q: "How do I choose between RO, UV, UF and Copper Alkaline?",
      a: "It is determined by your water chemistry and TDS. Borewell or tanker water with TDS >300 PPM contains dissolved salts and heavy metals requiring an 80 GPD RO membrane. Municipal tap water with low TDS (<200 PPM) benefits most from UV disinfection and Active Alkaline remineralization. Our technician conducts a live multi-parameter water test at your doorstep."
    },
    {
      q: "Is doorstep delivery, mounting, and calibration really 100% complimentary?",
      a: "Yes. Every purifier ordered includes professional white-glove doorstep delivery and custom wall-mount installation within 24 to 48 hours. Our technician brings heavy-duty external pre-filter housings, spun candles, diverter brass valves, and food-grade piping at zero additional cost."
    },
    {
      q: "Do I need to pay any advance deposit before delivery?",
      a: "Zero advance deposit required. We adhere strictly to our 'Pay After Complete Installation & TDS Validation' policy. The technician unboxes the unit, mounts it, tests the output TDS with a digital meter before your eyes, and confirms your complete satisfaction before you pay via UPI, Card, or Cash."
    },
    {
      q: "What is covered under the 1-Year Comprehensive Warranty?",
      a: "The warranty provides 100% on-site coverage for the high-pressure booster pump, SMPS electrical adapter, Solenoid Valve (SV), low-pressure switch, and all technician labor charges with a guaranteed 24-hour service dispatch SLA."
    },
    {
      q: "What is the recommended maintenance schedule?",
      a: "The external spun pre-filter candle should be refreshed every 3 to 4 months (nominal ₹150–₹200). The internal sediment and activated carbon blocks have an 8,000-liter life (~10–12 months), while the high-rejection RO membrane typically lasts 2 to 3 years depending on input hardness."
    }
  ];

  const handleConsultWhatsApp = () => {
    window.open(createWhatsAppUrl("Hello AquaPure! I have a question regarding water purifiers and would like a direct consultation."), '_blank');
  };

  return (
    <section id="reviews" className="py-24 bg-[#07090e] text-white border-b border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-950/40 border border-amber-500/30 px-3.5 py-1 rounded-full mb-3">
            <Award className="w-3.5 h-3.5" />
            Verified Connoisseur Experiences
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            Trusted by Over <span className="metallic-copper-text">5,000+ Sanctuaries</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light mt-3 max-w-xl mx-auto leading-relaxed">
            Real families and specialty venues on upgrading to clinical-grade, antioxidant living water with zero middleman friction.
          </p>
        </div>

        {/* Editorial Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="rounded-3xl luxury-glass p-8 border border-white/[0.08] hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Rating & Verified */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400 gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* TDS Differential Metric Pill */}
                <div className="mb-4 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Inlet: <strong className="text-rose-300 font-bold">{t.tdsBefore}</strong></span>
                  <ArrowRight className="w-3 h-3 text-cyan-400" />
                  <span className="text-slate-400">Purified: <strong className="text-emerald-300 font-bold">{t.tdsAfter}</strong></span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-8 pt-5 border-t border-white/[0.06]">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h4 className="font-black text-white text-sm group-hover:text-amber-200 transition-colors">{t.name}</h4>
                    <p className="text-[11px] text-slate-400">{t.role} • {t.location}</p>
                  </div>
                </div>
                <div className="text-[10px] font-bold text-cyan-400/90 mt-2 truncate">
                  Purifier: {t.model}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Architectural Accordion */}
        <div className="max-w-4xl mx-auto" id="faq">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3.5 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Intelligence
            </div>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">
              Frequently Asked <span className="metallic-copper-text">Questions</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light mt-2">
              Everything you need to know about engineering, TDS, and our direct factory privilege.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              const formattedIndex = (idx + 1).toString().padStart(2, '0');
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-white/[0.04] border-cyan-500/40 shadow-lg shadow-cyan-950/20' 
                      : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.15]'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full text-left p-5 sm:p-6 font-bold text-sm sm:text-base flex items-center justify-between transition-colors gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-black text-cyan-400/80 tracking-widest">
                        {formattedIndex}
                      </span>
                      <span className="text-white group-hover:text-amber-200">
                        {faq.q}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-white/[0.04] pt-4 pl-14">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Ask Anything WhatsApp Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 to-amber-950/30 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-cyan-400 shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Have a specific water test or custom requirement?</h4>
                <p className="text-xs text-slate-400 font-light">Speak directly with our senior water chemist on WhatsApp.</p>
              </div>
            </div>

            <button
              onClick={handleConsultWhatsApp}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.2] text-xs font-black uppercase tracking-wider text-white transition flex items-center justify-center gap-2 shrink-0"
            >
              Ask Senior Chemist
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
