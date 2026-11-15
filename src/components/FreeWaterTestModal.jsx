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
      + `*Sanctuary Address:* ${form.address} (PIN: ${form.pincode})\n`
      + `*Inlet Water Source:* ${form.waterSource}\n`
      + `*Preferred Timing:* ${form.preferredTime}\n\n`
      + `Please dispatch a certified technician with a calibrated digital TDS & mineral testing kit.`;

    window.open(createWhatsAppUrl(waMsg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative bg-[#0c101a] text-white w-full max-w-lg rounded-3xl shadow-2xl border border-white/[0.12] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950/80 via-[#0c101a] to-teal-950/60 p-6 sm:p-7 border-b border-white/[0.08] relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-white border border-white/[0.1] transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 text-emerald-400 text-[10px] font-black uppercase tracking-widest bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full mb-3">
            <Droplets className="w-3.5 h-3.5" />
            100% Complimentary Doorstep Service
          </div>
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
            Schedule Free <span className="text-emerald-400">TDS & Mineral Audit</span>
          </h3>
          <p className="text-xs text-slate-400 font-light mt-1">
            Our certified water technician tests inlet salinity, hardness, and molecular purity directly at your tap.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-white">Diagnostic Audit Reserved!</h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto font-light">
                We've routed your request to our regional master chemist. A coordinator will verify your technician's arrival window.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black uppercase tracking-wider rounded-xl shadow transition"
              >
                Close Console
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Malhotra"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/[0.1] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">WhatsApp / Contact Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/[0.1] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Sanctuary Address *</label>
                <input
                  type="text"
                  required
                  placeholder="Apartment/Villa No, Society, Area, Landmark"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/[0.1] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Pincode</label>
                  <input
                    type="text"
                    placeholder="e.g. 400050"
                    value={form.pincode}
                    onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/[0.1] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Inlet Source</label>
                  <select
                    value={form.waterSource}
                    onChange={(e) => setForm({ ...form, waterSource: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#141a27] border border-white/[0.1] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                  >
                    <option value="Borewell / Groundwater">Borewell / Groundwater</option>
                    <option value="Municipal Corporation">Municipal Corporation</option>
                    <option value="Water Tanker">Water Tanker</option>
                    <option value="Not Sure">Not Sure / Mixed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Preferred Audit Window</label>
                <select
                  value={form.preferredTime}
                  onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#141a27] border border-white/[0.1] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                >
                  <option value="Today (Urgent)">Today (Earliest Possible)</option>
                  <option value="Tomorrow Morning (10am - 1pm)">Tomorrow Morning (10am - 1pm)</option>
                  <option value="Tomorrow Evening (4pm - 8pm)">Tomorrow Evening (4pm - 8pm)</option>
                  <option value="This Weekend">This Coming Weekend</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-black py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition uppercase tracking-wider"
              >
                <span>Dispatch Water Chemist</span>
                <Sparkles className="w-4 h-4" />
              </button>

              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> ₹0 Cost
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Digital Multi-Parameter Meter
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Zero Purchase Obligation
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
