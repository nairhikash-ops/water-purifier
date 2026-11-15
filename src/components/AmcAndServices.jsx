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
  Crown
} from 'lucide-react';

export default function AmcAndServices({ onBookingSuccess }) {
  const [activeTab, setActiveTab] = useState('amc'); // 'amc' or 'onetime'

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
    const text = `Hello AquaPure! I would like to activate the *${plan.name}* (₹${plan.price.toLocaleString('en-IN')}/year). Please schedule machine inspection.`;
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

    const waText = `*🔧 New Doorstep Concierge Booking (ID: ${saved.id})*\n\n`
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
    <section id="concierge" className="py-24 bg-[#0a0d14] text-white border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-md mb-3">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            Concierge Maintenance & Protection
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            AquaPure Care Memberships
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
            Ensure your household drinking water remains sterile 365 days a year. 
            Certified multi-brand technicians for Kent, Aquaguard, Pureit, Livpure, Havells, and all custom RO systems.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 bg-black/60 rounded-2xl border border-white/[0.08] mt-8">
            <button
              onClick={() => setActiveTab('amc')}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition ${
                activeTab === 'amc'
                  ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Annual Protection Plans
            </button>
            <button
              onClick={() => setActiveTab('onetime')}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition ${
                activeTab === 'onetime'
                  ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Single-Visit Repairs
            </button>
          </div>
        </div>

        {/* Tab 1: Luxury Metal Card AMC Plans */}
        {activeTab === 'amc' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
            {AMC_PLANS.map((plan) => {
              const isPopular = plan.isPopular;
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 ${
                    isPopular
                      ? 'luxury-glass-copper shadow-2xl scale-105 z-10'
                      : 'luxury-glass'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                      Most Selected Care Plan
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded ${plan.badgeColor}`}>
                        {plan.badge}
                      </span>
                      <span className="text-xs text-slate-400">{plan.duration}</span>
                    </div>

                    <h3 className="text-2xl font-black text-white mt-4">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px] font-light">{plan.idealFor}</p>

                    {/* Price */}
                    <div className="my-6 p-4 rounded-2xl bg-black/40 border border-white/[0.08]">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-white">
                          ₹{plan.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-500 line-through">
                          ₹{plan.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 block mt-1">
                        Save ₹{(plan.originalPrice - plan.price).toLocaleString('en-IN')} / year
                      </span>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2.5 my-6 text-xs text-slate-300">
                      <div className="font-bold text-white text-[10px] uppercase tracking-widest mb-3">Coverage & Perks:</div>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="font-light">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] mt-auto">
                    <button
                      onClick={() => handlePlanWhatsApp(plan)}
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition ${
                        isPopular
                          ? 'bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/20'
                          : 'bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/[0.1]'
                      }`}
                    >
                      <span>Activate {plan.name}</span>
                    </button>
                    <p className="text-[10px] text-center text-slate-500 mt-2">
                      Zero charge inspection before plan confirmation
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: One-Time Repairs */}
        {activeTab === 'onetime' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {ONE_TIME_SERVICES.map((srv) => (
              <div 
                key={srv.id}
                className="luxury-glass p-6 rounded-3xl flex flex-col justify-between hover:border-cyan-500/40 transition duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" /> {srv.duration}
                    </span>
                    <span className="text-emerald-400 font-bold text-[10px] uppercase">Doorstep Visit</span>
                  </div>
                  <h4 className="font-extrabold text-white text-base mt-2">{srv.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 font-light leading-relaxed">{srv.description}</p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] mt-6 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-black text-white">₹{srv.price}</span>
                    <span className="text-xs text-slate-500 line-through ml-1.5">₹{srv.originalPrice}</span>
                  </div>
                  <a
                    href="#service-suite"
                    onClick={() => {
                      setServiceForm(prev => ({ ...prev, serviceType: `${srv.title} (₹${srv.price})` }));
                    }}
                    className="bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 text-xs font-bold py-1.5 px-3 rounded-lg transition"
                  >
                    Schedule
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Doorstep Technician Dispatch Suite */}
        <div id="service-suite" className="max-w-4xl mx-auto luxury-glass rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 p-8 bg-black/60 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08]">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-cyan-400 block mb-2">
                  White-Glove Dispatch
                </span>
                <h3 className="text-2xl font-black tracking-tight text-white leading-snug">
                  Book a Certified Water Specialist
                </h3>
                <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
                  Experiencing low pressure, foul taste, buzzing vibration, or due for periodic membrane servicing? Schedule a verified visit.
                </p>

                <div className="mt-8 space-y-4 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Same-Day Priority Slots</div>
                      <div className="text-slate-400 text-[11px]">Emergency leakages and pump stoppages</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">100% Genuine Certified Spares</div>
                      <div className="text-slate-400 text-[11px]">NSF and FDA food-grade cartridges only</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center shrink-0">
                      <PhoneCall className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Direct Helpline:</div>
                      <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="text-cyan-300 font-bold hover:underline">
                        {COMPANY_CONFIG.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] text-[11px] text-slate-500">
                Service hubs active in: {COMPANY_CONFIG.serviceAreas.slice(0, 4).join(', ')} & more.
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 p-6 sm:p-8">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-14 h-14 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-extrabold text-white">Service Request Recorded!</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto font-light">
                    Your service dispatch has been logged. Our operations desk will confirm the technician's arrival window.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-bold rounded-xl transition"
                  >
                    Schedule Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleServiceSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={serviceForm.name}
                        onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-black/40 border border-white/[0.1] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Phone (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={serviceForm.phone}
                        onChange={(e) => setServiceForm({ ...serviceForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-black/40 border border-white/[0.1] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Purifier Brand *</label>
                      <select
                        value={serviceForm.brand}
                        onChange={(e) => setServiceForm({ ...serviceForm, brand: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-black/40 border border-white/[0.1] rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="Aquaguard / Eureka Forbes">Aquaguard / Eureka Forbes</option>
                        <option value="Kent RO">Kent RO</option>
                        <option value="Pureit (HUL)">Pureit (HUL)</option>
                        <option value="Livpure">Livpure</option>
                        <option value="Havells">Havells</option>
                        <option value="Cloud / Merlin / Aqua System">Cloud / Merlin / Aqua System</option>
                        <option value="Assembled / Custom RO">Assembled / Custom RO</option>
                        <option value="Commercial 50 LPH Plant">Commercial 50 LPH Plant</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Service Required *</label>
                      <select
                        value={serviceForm.serviceType}
                        onChange={(e) => setServiceForm({ ...serviceForm, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-black/40 border border-white/[0.1] rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="General Servicing & TDS Check (₹399)">General Servicing & TDS Check (₹399)</option>
                        <option value="Filter Change & Servicing Combo (₹549)">Filter Change & Servicing Combo (₹549)</option>
                        <option value="Water Leakage / Noise Repair (₹349)">Water Leakage / Noise Repair (₹349)</option>
                        <option value="Shifting & Re-installation (₹699)">Shifting & Re-installation (₹699)</option>
                        <option value="Silver AMC Plan Purchase (₹1,499)">Silver AMC Plan Purchase (₹1,499)</option>
                        <option value="Gold Comprehensive AMC (₹2,999)">Gold Comprehensive AMC (₹2,999)</option>
                        <option value="Diamond VIP 100% AMC (₹4,499)">Diamond VIP 100% AMC (₹4,499)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Doorstep Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="Flat/House No., Building, Street, Landmark"
                      value={serviceForm.address}
                      onChange={(e) => setServiceForm({ ...serviceForm, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-black/40 border border-white/[0.1] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Pincode</label>
                      <input
                        type="text"
                        placeholder="e.g. 400001"
                        value={serviceForm.pincode}
                        onChange={(e) => setServiceForm({ ...serviceForm, pincode: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-black/40 border border-white/[0.1] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Time Slot</label>
                      <select
                        value={serviceForm.preferredSlot}
                        onChange={(e) => setServiceForm({ ...serviceForm, preferredSlot: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-black/40 border border-white/[0.1] rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                        <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                        <option value="Urgent Emergency Slot">Urgent Emergency Slot</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Notes / Machine Behavior (Optional)</label>
                    <textarea
                      rows="2"
                      placeholder="e.g. Slow water flow, salty taste, or vibrating pump noise"
                      value={serviceForm.notes}
                      onChange={(e) => setServiceForm({ ...serviceForm, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-black/40 border border-white/[0.1] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                    <span>Dispatch Technician via WhatsApp</span>
                  </button>

                  <p className="text-[10px] text-center text-slate-500">
                    Pay on doorstep after service satisfaction • Zero advance charge
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
