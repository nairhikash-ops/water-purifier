import React from 'react';
import { COMPANY_CONFIG, createWhatsAppUrl } from '../data/companyConfig';
import { Check, ShieldCheck, Truck, PhoneCall, X, Sparkles } from 'lucide-react';

export default function OrderSuccessModal({ order, onClose }) {
  if (!order) return null;

  const handleWhatsApp = () => {
    const text = `Hi AquaPure! I placed Order *${order.id}* on your website for ₹${order.subtotal.toLocaleString('en-IN')}.\nPlease confirm my installation schedule.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative bg-[#0c101a] text-white w-full max-w-lg rounded-3xl shadow-2xl border border-white/[0.12] p-6 sm:p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-white border border-white/[0.1] transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-9 h-9 stroke-[3]" />
        </div>

        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
          Order Reserved • Direct Factory Privilege
        </span>

        <h3 className="text-2xl font-black text-white mt-3">Sanctuary Allocation Confirmed</h3>
        <p className="text-xs text-slate-400 mt-1 font-light">
          Your allocation tracking code is <strong className="text-white font-mono text-sm">{order.id}</strong>. 
          Our regional master technician is being scheduled for deployment.
        </p>

        {/* Order Summary Box */}
        <div className="my-5 p-4 bg-white/[0.03] rounded-2xl border border-white/[0.08] text-left text-xs space-y-2 font-light">
          <div className="flex justify-between text-slate-300">
            <span>Payment Protocol:</span>
            <span className="text-emerald-400 font-bold">{order.paymentMethod || 'Pay on Installation / COD'}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Due Upon Installation:</span>
            <span className="text-white font-black font-mono text-sm">₹{order.subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Doorstep Mounting & Setup:</span>
            <span className="text-cyan-400 font-bold uppercase">100% Complimentary</span>
          </div>
          {order.customer?.name && (
            <div className="pt-2 border-t border-white/[0.06] text-slate-400 text-[11px]">
              Sanctuary: <strong className="text-slate-200">{order.customer.name}</strong>, {order.customer.address} (PIN: {order.customer.pincode})
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-2.5">
          <button
            onClick={handleWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>Message on WhatsApp to Track Dispatch</span>
          </button>

          <button
            onClick={onClose}
            className="w-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.1] text-white font-bold py-3 px-4 rounded-xl text-xs transition"
          >
            Return to Master Gallery
          </button>
        </div>
      </div>
    </div>
  );
}
