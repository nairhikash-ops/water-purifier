import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, CheckCircle2, MessageCircle } from 'lucide-react';

export default function TestimonialsAndFaq() {
  const [openFaq, setOpenFaq] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kulkarni",
      location: "Goregaon, Mumbai",
      model: "Aqua Next Pro RO + Copper Alkaline",
      rating: 5,
      date: "Verified Customer • 2 weeks ago",
      comment: "Saved almost ₹7,000 compared to the showroom price! The technician reached the same day, tested my borewell water TDS (which was 950), mounted the unit neatly, and demoed the copper & alkaline taste. Extremely smooth transaction."
    },
    {
      name: "Dr. Ananya Sen",
      location: "Kothrud, Pune",
      model: "Cloud International Aqua One 3 (Grey)",
      rating: 5,
      date: "Verified Customer • 1 month ago",
      comment: "The contemporary slate grey finish looks stunning in our modular kitchen. Water tastes crisp, natural, and sweet. Plus, paying only after complete installation and TDS check gave our family 100% peace of mind."
    },
    {
      name: "Sunil Verma (Cafe Owner)",
      location: "Noida Sector 62",
      model: "Commercial 50 LPH RO Plant",
      rating: 5,
      date: "Verified Customer • 3 weeks ago",
      comment: "We needed a 50 LPH commercial water setup for our coffee shop and bakery. AquaPure provided a heavy SS skid unit at factory rates. Their Gold AMC is also very affordable. Highly recommended for commercial clients!"
    }
  ];

  const faqs = [
    {
      q: "Why should I buy directly from you instead of an expensive retail showroom?",
      a: "By operating directly from our authorized fulfillment center, we eliminate massive showroom rent, middleman dealer markups, and television celebrity advertising costs. This allows us to deliver genuine, brand-certified machines straight to your home at 35% to 45% lower prices, backed by official on-site warranty and prompt local technician support."
    },
    {
      q: "How do I know whether my house needs RO, UV, UF or Alkaline?",
      a: "It depends directly on your water's TDS (Total Dissolved Solids) and source. If your water comes from a borewell or tanker with TDS above 300 ppm, a multi-stage RO membrane is mandatory to remove heavy metals and hardness. If your water is already low TDS (<200 ppm) municipal tap water, UV+UF with Active Alkaline is ideal. You can use our interactive TDS Guide or book our Free Doorstep Water Test!"
    },
    {
      q: "Is doorstep installation really 100% free?",
      a: "Yes! Every purifier ordered through us includes completely free doorstep delivery and professional wall-mount installation within 24 to 48 hours. Our technician also brings the standard accessories (pre-filter bowl, spun candle, diverter valve, Teflon tape, and food grade pipes)."
    },
    {
      q: "Do I need to pay any advance before delivery?",
      a: "Zero advance required! We operate on a 'Pay After Installation' model. The technician delivers the unit, tests your inlet and purified water TDS in front of you, installs the machine, and ensures you are 100% satisfied before you pay via Cash, UPI (GPay/PhonePe), or Card."
    },
    {
      q: "What is covered under the 1-Year Comprehensive Warranty?",
      a: "The 1-year warranty covers the high-pressure booster pump, SMPS electrical adapter, Solenoid Valve (SV), low-pressure switch, and all doorstep technician labor charges. In case of any issue, an emergency technician is dispatched within 24 hours."
    },
    {
      q: "How often do the water purifier filters need to be changed?",
      a: "The external spun pre-filter candle should be replaced every 3 to 4 months (takes only ₹150-₹200). The internal sediment and carbon filters generally last 10 to 12 months, and the RO membrane lasts 2 to 3 years depending on your water consumption and salinity."
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Block */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
              Customer Experiences
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Loved by 5,000+ Happy Families
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Read how homeowners and businesses upgraded to pure alkaline water with our direct factory deals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="p-6 bg-slate-50 rounded-3xl border border-slate-100 shadow-xs flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                      <p className="text-xs text-slate-500">{t.location}</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  </div>
                  <div className="text-[11px] font-semibold text-brand-700 mt-1.5">
                    Purchased: {t.model}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Block */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Everything you need to know about purchasing, installation, TDS, and warranties.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full text-left p-4 sm:p-5 font-bold text-slate-800 text-sm flex items-center justify-between hover:bg-slate-50 transition"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-brand-600 shrink-0 ml-3" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-3" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
