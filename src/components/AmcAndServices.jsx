import React, { useState } from 'react';
import { AMC_PLANS, ONE_TIME_SERVICES } from '../data/amcPlans';
import { COMPANY_CONFIG, createWhatsAppUrl } from '../data/companyConfig';
import { saveServiceBooking } from '../utils/storage';
import confetti from 'canvas-confetti';
import { 
  Wrench, 
  ShieldCheck, 
  Check, 
  Clock, 
  PhoneCall, 
  Sparkles,
  Zap,
  Crown,
  ArrowRight
} from 'lucide-react';

export default function AmcAndServices({ onBookingSuccess }) {
  const [showRepairForm, setShowRepairForm] = useState(false);
  const [serviceForm, setServiceForm] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    brand: 'Aquaguard / Eureka Forbes',
    serviceType: 'General Servicing & TDS Check (₹399)',
    preferredDate: '',
    preferredSlot: 'Morning (10:00 AM - 1:00 PM)',
    notes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlePlanWhatsApp = (plan) => {
    const text = `Hello AquaPure! I would like to activate the *${plan.name}* (₹${plan.price.toLocaleString('en-IN')}/year). Please confirm schedule.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  const handleServiceSubmit = (e) => {
    e.preventDefault();
    if (!serviceForm.name || !serviceForm.phone || !serviceForm.address) {
      alert("Please fill in your name, phone number, and address.");
      return;
    }

    const saved = saveServiceBooking(serviceForm);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    setFormSubmitted(true);

    const waText = `*🔧 Single-Visit Water Purifier Repair Request (ID: ${saved.id})*\n\n`
      + `*Customer:* ${serviceForm.name}\n`
      + `*Phone:* ${serviceForm.phone}\n`
      + `*Address:* ${serviceForm.address} (PIN: ${serviceForm.pincode})\n`
      + `*Brand/Model:* ${serviceForm.brand}\n`
      + `*Service Required:* ${serviceForm.serviceType}\n`
      + `*Preferred Slot:* ${serviceForm.preferredDate || 'Earliest available'} - ${serviceForm.preferredSlot}\n`
      + (serviceForm.notes ? `*Notes:* ${serviceForm.notes}\n` : '')
      + `\nPlease confirm technician dispatch.`;

    window.open(createWhatsAppUrl(waText), '_blank');
  };

  return (
    <section id="concierge" className="py-20 bg-[#070a10] text-white border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Streamlined Section Header (Positioned as Side Selling Reassurance) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/[0.06]">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-md mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Secondary Service Assurance • Zero Lock-In
            </div>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">
              Lifetime Purity Shield & <span className="text-slate-400 font-light">Care Memberships</span>
            </h3>
          </div>

          <p className="text-xs text-slate-400 max-w-md font-light leading-relaxed">
            Never worry about filter longevity or membrane fouling. Once your living water is running, our master care subscriptions keep your output certified 365 days a year from ₹125/month.
          </p>
        </div>

        {/* 3 Compact Metal AMC Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {AMC_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                  isPopular
                    ? 'bg-gradient-to-b from-amber-950/20 to-black/60 border-amber-500/40 shadow-xl shadow-amber-950/20'
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {plan.tagline}
                    </span>
                    {isPopular && (
                      <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-amber-500 text-black">
                        Recommended
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-black text-white">{plan.name}</h4>
                  
                  <div className="flex items-baseline gap-2 my-3">
                    <span className="text-2xl font-black text-white font-mono">
                      ₹{plan.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-500">/ year</span>
                  </div>

                  <p className="text-xs text-slate-400 font-light mb-4">
                    {plan.desc}
                  </p>

                  <div className="space-y-2 text-xs border-t border-white/[0.06] pt-3">
                    {plan.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-[11px] font-light">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-white/[0.06]">
                  <button
                    onClick={() => handlePlanWhatsApp(plan)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                      isPopular
                        ? 'bg-amber-500 hover:bg-amber-400 text-black font-black'
                        : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1]'
                    }`}
                  >
                    Activate {plan.name.split(' ')[0]} Care
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Existing Purifier Repair Toggle */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-amber-400 shrink-0">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white block">Have an existing purifier (Kent, Aquaguard, Pureit, Livpure) that needs service?</span>
              <span className="text-slate-400 font-light">Book a single-visit doorstep inspection & TDS check for ₹399.</span>
            </div>
          </div>

          <button
            onClick={() => setShowRepairForm(!showRepairForm)}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white font-bold transition shrink-0"
          >
            {showRepairForm ? 'Hide Repair Form' : 'Book Single Visit (₹399)'}
          </button>
        </div>

        {/* Collapsible Repair Form */}
        {showRepairForm && (
          <div className="mt-4 p-6 rounded-2xl bg-[#0c101a] border border-white/[0.1] animate-fadeIn max-w-2xl mx-auto">
            {formSubmitted ? (
              <div className="text-center py-6 space-y-2">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-base">Service Request Sent!</h4>
                <p className="text-xs text-slate-400">Our service coordinator will confirm your technician arrival time on WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleServiceSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={serviceForm.name}
                      onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                      className="w-full px-3 py-2 bg-white/[0.04] border border-white/[0.1] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">WhatsApp / Contact Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={serviceForm.phone}
                      onChange={(e) => setServiceForm({ ...serviceForm, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-white/[0.04] border border-white/[0.1] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Address *</label>
                  <input
                    type="text"
                    required
                    placeholder="House/Flat No, Society, Area"
                    value={serviceForm.address}
                    onChange={(e) => setServiceForm({ ...serviceForm, address: e.target.value })}
                    className="w-full px-3 py-2 bg-white/[0.04] border border-white/[0.1] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1">Current Brand</label>
                    <input
                      type="text"
                      placeholder="e.g. Kent / Aquaguard"
                      value={serviceForm.brand}
                      onChange={(e) => setServiceForm({ ...serviceForm, brand: e.target.value })}
                      className="w-full px-3 py-2 bg-white/[0.04] border border-white/[0.1] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Preferred Slot</label>
                    <select
                      value={serviceForm.preferredSlot}
                      onChange={(e) => setServiceForm({ ...serviceForm, preferredSlot: e.target.value })}
                      className="w-full px-3 py-2 bg-[#141a27] border border-white/[0.1] rounded-xl text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10am - 1pm)</option>
                      <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1pm - 5pm)</option>
                      <option value="Evening (5:00 PM - 8:00 PM)">Evening (5pm - 8pm)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <span>Dispatch Technician on WhatsApp (₹399)</span>
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
