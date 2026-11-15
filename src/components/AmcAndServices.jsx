import React, { useState } from 'react';
import { AMC_PLANS, ONE_TIME_SERVICES } from '../data/amcPlans';
import { COMPANY_CONFIG, createWhatsAppUrl } from '../data/companyConfig';
import { saveServiceBooking } from '../utils/storage';
import confetti from 'canvas-confetti';
import { 
  Wrench, 
  ShieldCheck, 
  Check, 
  X, 
  Clock, 
  PhoneCall, 
  Calendar, 
  AlertCircle, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function AmcAndServices({ onBookingSuccess }) {
  const [selectedPlan, setSelectedPlan] = useState(AMC_PLANS[1]); // Default Gold
  const [activeTab, setActiveTab] = useState('amc'); // 'amc' or 'onetime'

  // Service form state
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
    const text = `Hi AquaPure Solutions! I want to purchase the *${plan.name}* (Price: ₹${plan.price.toLocaleString('en-IN')}/year).\n\nPlease let me know the process for machine inspection and AMC contract activation.`;
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

    const waText = `*🔧 New Water Purifier Service Booking (ID: ${saved.id})*\n\n`
      + `*Customer:* ${serviceForm.name}\n`
      + `*Phone:* ${serviceForm.phone}\n`
      + `*Address:* ${serviceForm.address} (PIN: ${serviceForm.pincode})\n`
      + `*Brand/Model:* ${serviceForm.brand}\n`
      + `*Service Required:* ${serviceForm.serviceType}\n`
      + `*Preferred Slot:* ${serviceForm.preferredDate || 'Earliest available'} - ${serviceForm.preferredSlot}\n`
      + (serviceForm.notes ? `*Notes:* ${serviceForm.notes}\n` : '')
      + `\nPlease confirm technician assignment.`;

    window.open(createWhatsAppUrl(waText), '_blank');
  };

  return (
    <section id="amc" className="py-16 bg-gradient-to-b from-white via-slate-50 to-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Doorstep Maintenance & Protection
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Water Purifier AMC & Repair Services
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Keep your drinking water 100% sterile. Certified technicians for all major brands: 
            Kent, Aquaguard, Pureit, Livpure, Havells, and all custom RO systems.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 bg-slate-200/70 rounded-2xl mt-6">
            <button
              onClick={() => setActiveTab('amc')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeTab === 'amc'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Annual Maintenance Plans (AMC)
            </button>
            <button
              onClick={() => setActiveTab('onetime')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeTab === 'onetime'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              One-Time Repairs & Servicing
            </button>
          </div>
        </div>

        {/* Tab 1: AMC Plans Cards */}
        {activeTab === 'amc' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
            {AMC_PLANS.map((plan) => {
              const isPopular = plan.isPopular;
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    isPopular
                      ? 'bg-white border-2 border-brand-500 shadow-2xl scale-105 z-10'
                      : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-brand-600 text-white text-xs font-black uppercase px-4 py-1 rounded-full shadow-md tracking-wider">
                      Most Popular Plan
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-bold text-white px-2.5 py-0.5 rounded-full ${plan.badgeColor}`}>
                        {plan.badge}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">{plan.duration}</span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 mt-3">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.idealFor}</p>

                    {/* Price */}
                    <div className="my-5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-baseline justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-black text-slate-900">
                            ₹{plan.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-slate-400 line-through">
                            ₹{plan.originalPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-emerald-600 block mt-0.5">
                          Save ₹{(plan.originalPrice - plan.price).toLocaleString('en-IN')} / year
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase">Inclusive of all taxes</span>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2.5 my-6 text-xs text-slate-700">
                      <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">What is included:</div>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <button
                      onClick={() => handlePlanWhatsApp(plan)}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition ${
                        isPopular
                          ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-brand-500/20 shadow-md'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <span>Choose {plan.name}</span>
                    </button>
                    <p className="text-[10px] text-center text-slate-400 mt-2">
                      Free pre-inspection visit before contract activation
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: One-Time Repairs */}
        {activeTab === 'onetime' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {ONE_TIME_SERVICES.map((srv) => (
              <div 
                key={srv.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-brand-400 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-600" /> {srv.duration}
                    </span>
                    <span className="text-emerald-600 font-bold">Doorstep Service</span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">{srv.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{srv.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-black text-slate-900">₹{srv.price}</span>
                    <span className="text-xs text-slate-400 line-through ml-1.5">₹{srv.originalPrice}</span>
                  </div>
                  <a
                    href="#service-form"
                    onClick={() => {
                      setServiceForm(prev => ({ ...prev, serviceType: `${srv.title} (₹${srv.price})` }));
                    }}
                    className="bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-bold py-1.5 px-3 rounded-lg border border-brand-200 transition"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Doorstep Service Booking Form Container */}
        <div id="service-form" className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-brand-500/20 text-brand-300 text-xs font-bold px-3 py-1 rounded-full border border-brand-500/30 mb-4">
                  <Wrench className="w-3.5 h-3.5" /> Fast Doorstep Service
                </div>
                <h3 className="text-2xl font-black tracking-tight leading-snug">
                  Book a Certified Water Purifier Technician
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Experiencing water leakage, low dispensing flow, strange foul odor, or due for periodic filter service? 
                  Schedule a home visit within 24 hours.
                </p>

                <div className="mt-8 space-y-4 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Same-Day Priority Slots</div>
                      <div className="text-slate-400">Available for emergency leakages & pump failure</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">100% Genuine Certified Spares</div>
                      <div className="text-slate-400">NSF & FDA approved filter media used only</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Need Urgent Help? Call Directly:</div>
                      <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="text-cyan-300 font-bold hover:underline">
                        {COMPANY_CONFIG.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 text-[11px] text-slate-400">
                Service available across: {COMPANY_CONFIG.serviceAreas.slice(0, 4).join(', ')} & more.
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 p-6 sm:p-8">
              {formSubmitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900">Service Request Received!</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Our team has recorded your service booking. A technician will contact you shortly to confirm the exact time slot.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition"
                  >
                    Book Another Service
                  </button>
                </div>
              ) : (
                <form onSubmit={handleServiceSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={serviceForm.name}
                        onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={serviceForm.phone}
                        onChange={(e) => setServiceForm({ ...serviceForm, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Purifier Brand *</label>
                      <select
                        value={serviceForm.brand}
                        onChange={(e) => setServiceForm({ ...serviceForm, brand: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                      >
                        <option value="Aquaguard / Eureka Forbes">Aquaguard / Eureka Forbes</option>
                        <option value="Kent RO">Kent RO</option>
                        <option value="Pureit (HUL)">Pureit (HUL)</option>
                        <option value="Livpure">Livpure</option>
                        <option value="Havells">Havells</option>
                        <option value="Purosis / Aqua Next / Merlin">Purosis / Aqua Next / Merlin</option>
                        <option value="Assembled / Unbranded Custom RO">Assembled / Custom RO</option>
                        <option value="Commercial 25/50 LPH Plant">Commercial 25/50 LPH Plant</option>
                        <option value="Other Brand">Other Brand</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service Required *</label>
                      <select
                        value={serviceForm.serviceType}
                        onChange={(e) => setServiceForm({ ...serviceForm, serviceType: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-500"
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Doorstep Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="House/Flat No., Building name, Street, Landmark"
                      value={serviceForm.address}
                      onChange={(e) => setServiceForm({ ...serviceForm, address: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Pincode</label>
                      <input
                        type="text"
                        placeholder="e.g. 400001"
                        value={serviceForm.pincode}
                        onChange={(e) => setServiceForm({ ...serviceForm, pincode: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time Slot</label>
                      <select
                        value={serviceForm.preferredSlot}
                        onChange={(e) => setServiceForm({ ...serviceForm, preferredSlot: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                        <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                        <option value="Urgent / Emergency Slot">Urgent / Emergency Slot</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Specific Problem / Notes (Optional)</label>
                    <textarea
                      rows="2"
                      placeholder="e.g. Water is trickling very slowly, taste is salty, or machine is making a loud buzzing sound"
                      value={serviceForm.notes}
                      onChange={(e) => setServiceForm({ ...serviceForm, notes: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                    <span>Confirm Booking & Send via WhatsApp</span>
                  </button>

                  <p className="text-[10px] text-center text-slate-400">
                    Pay technician directly at doorstep after satisfaction. No advance payment required.
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
