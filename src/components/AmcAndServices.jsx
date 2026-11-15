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

    const waText = `*🔧 Water Purifier Doorstep Service Request (ID: ${saved.id})*\n\n`
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
    <section id="concierge" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Streamlined Section Header (Positioned as Side Selling Reassurance) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-md mb-2 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Secondary Service Assurance • Zero Lock-In</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight uppercase text-[#0a2540]">
              Lifetime Purity Shield & <span className="text-sky-600 font-bold">Care Memberships</span>
            </h3>
          </div>

          <p className="text-xs text-slate-600 max-w-md font-normal leading-relaxed">
            Never worry about filter longevity or membrane fouling. Once your living water is running, our master care subscriptions keep your output certified 365 days a year from ₹125/month.
          </p>
        </div>

        {/* 3 Compact AMC Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {AMC_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border bg-white ${
                  isPopular
                    ? 'border-amber-400 ring-2 ring-amber-400/20 shadow-lg'
                    : 'border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {plan.tagline}
                    </span>
                    {isPopular && (
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-black text-[#0a2540]">{plan.name}</h4>
                  
                  <div className="flex items-baseline gap-2 my-3">
                    <span className="text-2xl font-black text-[#0a2540]">
                      ₹{plan.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-500">/ year</span>
                  </div>

                  <p className="text-xs text-slate-500 mb-4 font-normal">
                    {plan.desc}
                  </p>

                  <div className="space-y-2 text-xs border-t border-slate-100 pt-3">
                    {plan.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-[11px]">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => handlePlanWhatsApp(plan)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                      isPopular
                        ? 'bg-amber-600 hover:bg-amber-700 text-white font-black shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
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
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-sm">
                Have an existing purifier (Kent, Aquaguard, Pureit, Livpure) that needs repair?
              </span>
              <span className="text-slate-500 font-normal">
                Book a single-visit doorstep inspection, leak check & calibrated TDS test for ₹399.
              </span>
            </div>
          </div>

          <button
            onClick={() => setShowRepairForm(!showRepairForm)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold border border-slate-300 transition shrink-0"
          >
            {showRepairForm ? 'Close Repair Form' : 'Book Single Visit (₹399)'}
          </button>
        </div>

        {/* Collapsible Repair Form */}
        {showRepairForm && (
          <div className="mt-4 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md animate-fadeIn max-w-2xl mx-auto">
            {formSubmitted ? (
              <div className="text-center py-6 space-y-2">
                <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-slate-900 text-base">Service Request Sent!</h4>
                <p className="text-xs text-slate-600">Our service coordinator will confirm your technician arrival time on WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleServiceSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={serviceForm.name}
                      onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">WhatsApp / Contact Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={serviceForm.phone}
                      onChange={(e) => setServiceForm({ ...serviceForm, phone: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Address *</label>
                  <input
                    type="text"
                    required
                    placeholder="House/Flat No, Society, Area"
                    value={serviceForm.address}
                    onChange={(e) => setServiceForm({ ...serviceForm, address: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Current Brand</label>
                    <input
                      type="text"
                      placeholder="e.g. Kent / Aquaguard"
                      value={serviceForm.brand}
                      onChange={(e) => setServiceForm({ ...serviceForm, brand: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Preferred Slot</label>
                    <select
                      value={serviceForm.preferredSlot}
                      onChange={(e) => setServiceForm({ ...serviceForm, preferredSlot: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10am - 1pm)</option>
                      <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1pm - 5pm)</option>
                      <option value="Evening (5:00 PM - 8:00 PM)">Evening (5pm - 8pm)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition shadow-xs"
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
