import React, { useState } from 'react';
import { COMPANY_CONFIG, createWhatsAppUrl } from '../data/companyConfig';
import { saveWaterTest } from '../utils/storage';
import confetti from 'canvas-confetti';
import { 
  X, 
  Droplets, 
  CheckCircle2, 
  ShieldCheck,
  Check,
  Sparkles
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

    const waMsg = `*💧 Free Water TDS Diagnostic Audit Request (Lead ID: ${saved.id})*\n\n`
      + `*Name:* ${form.name}\n`
      + `*Phone:* ${form.phone}\n`
      + `*Address:* ${form.address} (PIN: ${form.pincode})\n`
      + `*Water Source:* ${form.waterSource}\n`
      + `*Preferred Timing:* ${form.preferredTime}\n\n`
      + `Please dispatch a certified technician with a calibrated digital TDS & mineral testing kit.`;

    window.open(createWhatsAppUrl(waMsg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative bg-white text-slate-900 w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-emerald-50 p-6 sm:p-7 border-b border-emerald-100 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 border border-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 text-emerald-800 text-[10px] font-bold uppercase tracking-wider bg-white border border-emerald-200 px-3 py-1 rounded-full mb-3 shadow-2xs">
            <Droplets className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Complimentary Doorstep Visit</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0a2540]">
            Schedule Free <span className="text-emerald-700">TDS & Mineral Audit</span>
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Our certified technician tests inlet salinity, hardness, and molecular purity directly at your kitchen tap.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 border border-emerald-300 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-slate-900">Audit Request Reserved!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                We've routed your request to our regional coordinator. A technician arrival window will be confirmed shortly on WhatsApp.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs transition"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyesh Shah"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white text-xs sm:text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Contact Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white text-xs sm:text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Installation Address *</label>
                <textarea
                  required
                  rows="2"
                  placeholder="Flat/House No, Building, Landmark, Area"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white text-xs sm:text-sm transition"
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
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white text-xs sm:text-sm transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Inlet Water</label>
                  <select
                    value={form.waterSource}
                    onChange={(e) => setForm({ ...form, waterSource: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white text-xs sm:text-sm transition"
                  >
                    <option value="Borewell / Groundwater">Borewell (Hard)</option>
                    <option value="Municipal Corporation">Municipal / Kaveri</option>
                    <option value="Water Tanker">Private Tanker</option>
                    <option value="Unsure">Unsure (Test First)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-emerald-600/20 transition flex items-center justify-center gap-2"
              >
                <span>Confirm Complimentary Visit</span>
              </button>
            </form>
          )}

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-6 text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              100% Free Service
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Digital TDS Meter
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Zero Obligation
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
