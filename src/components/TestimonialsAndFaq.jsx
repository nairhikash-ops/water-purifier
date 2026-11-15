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
      comment: "Saved almost ₹7,000 compared to brand retail showrooms. The technician arrived within hours, tested my borewell water in front of my family, neatly wall-mounted the machine without messy piping, and demoed the active copper infusion. The taste difference is night and day."
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
      comment: "Water is the unsung ingredient in specialty espresso. AquaPure provided a heavy 304-grade stainless steel skid at direct factory prices that rival distributors couldn't touch. Prompt quarterly response keeps our café running without downtime."
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
    <section id="reviews" className="py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full mb-3 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Verified Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-[#0a2540]">
            Trusted by Over <span className="text-sky-600">5,000+ Families</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-xl mx-auto leading-relaxed font-normal">
            Real families and local businesses on upgrading to antioxidant living water with zero middleman markup.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="rounded-3xl bg-slate-50 p-7 border border-slate-200 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header Rating & Verified */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-500 gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                </div>

                {/* TDS Differential Metric Pill */}
                <div className="mb-4 p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Inlet: <strong className="text-rose-600 font-bold">{t.tdsBefore}</strong></span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                  <span className="text-slate-500">Output: <strong className="text-emerald-700 font-bold">{t.tdsAfter}</strong></span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h4 className="font-bold text-[#0a2540] text-sm">{t.name}</h4>
                    <p className="text-[11px] text-slate-500">{t.role} • {t.location}</p>
                  </div>
                </div>
                <div className="text-[11px] font-bold text-sky-700 mt-1.5 truncate">
                  Purifier: {t.model}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto" id="faq">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Everything You Need to Know</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight uppercase text-[#0a2540]">
              Frequently Asked <span className="text-sky-600">Questions</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal mt-2">
              Clear answers regarding water chemistry, installation, warranty, and factory pricing.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              const formattedIndex = (idx + 1).toString().padStart(2, '0');
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-sky-50/70 border-sky-300 shadow-xs' 
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-[#0a2540] text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-sky-600">{formattedIndex}</span>
                      <span>{faq.q}</span>
                    </div>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-sky-600 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-sky-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions Bar */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-bold text-[#0a2540] text-sm">Have a unique borewell or plumbing question?</h4>
              <p className="text-xs text-slate-500">Our senior technician is on standby to advise you on WhatsApp.</p>
            </div>
            <button
              onClick={handleConsultWhatsApp}
              className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-2xs"
            >
              Ask on WhatsApp
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
