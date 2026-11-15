import React, { useState } from 'react';
import { COMPANY_CONFIG, createWhatsAppUrl } from '../data/companyConfig';
import { saveWaterTest } from '../utils/storage';
import confetti from 'canvas-confetti';
import { 
  X, 
  Droplets, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Check
} from 'lucide-react';

export default function FreeWaterTestModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    waterSource: 'Borewell / Groundwater',
    preferredTime: 'Anytime Today / Tomorrow'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      alert("Please provide your name, phone, and address.");
      return;
    }

    const saved = saveWaterTest(form);
    confetti({ particleCount: 75, spread: 60, origin: { y: 0.6 } });
    setSubmitted(true);

    const waMsg = `*💧 Free Water TDS Test Request (Lead ID: ${saved.id})*\n\n`
      + `*Name:* ${form.name}\n`
      + `*Phone:* ${form.phone}\n`
      + `*Address:* ${form.address} (PIN: ${form.pincode})\n`
      + `*Water Source:* ${form.waterSource}\n`
      + `*Preferred Timing:* ${form.preferredTime}\n\n`
      + `Please arrange a technician visit with a digital TDS meter.`;

    window.open(createWhatsAppUrl(waMsg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-1">
            <Droplets className="w-4 h-4 text-emerald-200" />
            100% Free Service • Zero Obligation
          </div>
          <h3 className="text-xl sm:text-2xl font-black">Book Free Doorstep Water TDS Test</h3>
          <p className="text-xs text-emerald-100 mt-1">
            Our technician will visit with a digital TDS meter to check your water's hardness, salts, and safety.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">Request Confirmed!</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                We've received your request for a free water test. Our representative will contact you to confirm the technician's arrival.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow transition"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Patel"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Home / Office Address *</label>
                <input
                  type="text"
                  required
                  placeholder="Flat/House No, Society, Area, Landmark"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Pincode</label>
                  <input
                    type="text"
                    placeholder="e.g. 400050"
                    value={form.pincode}
                    onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Water Source</label>
                  <select
                    value={form.waterSource}
                    onChange={(e) => setForm({ ...form, waterSource: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Borewell / Groundwater">Borewell / Groundwater</option>
                    <option value="Municipal Corporation">Municipal Corporation</option>
                    <option value="Water Tanker">Water Tanker</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time for Visit</label>
                <select
                  value={form.preferredTime}
                  onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                >
                  <option value="Today (Urgent)">Today (Earliest Possible)</option>
                  <option value="Tomorrow Morning (10am - 1pm)">Tomorrow Morning (10am - 1pm)</option>
                  <option value="Tomorrow Evening (4pm - 8pm)">Tomorrow Evening (4pm - 8pm)</option>
                  <option value="This Weekend">This Coming Weekend</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>Request Free Test via WhatsApp</span>
              </button>

              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> ₹0 Cost
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Digital TDS Meter
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> No Purchase Forced
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
