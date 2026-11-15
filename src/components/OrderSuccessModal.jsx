import React from 'react';
import { COMPANY_CONFIG, createWhatsAppUrl } from '../data/companyConfig';
import { Check, ShieldCheck, Truck, PhoneCall, X } from 'lucide-react';

export default function OrderSuccessModal({ order, onClose }) {
  if (!order) return null;

  const handleWhatsApp = () => {
    const text = `Hi AquaPure! I placed Order *${order.id}* on your website for ₹${order.subtotal.toLocaleString('en-IN')}.\nPlease confirm my installation schedule.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 text-center animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-9 h-9 stroke-[3]" />
        </div>

        <span className="text-xs font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Order Confirmed
        </span>

        <h3 className="text-2xl font-black text-slate-900 mt-2">Thank You for Your Order!</h3>
        <p className="text-xs text-slate-500 mt-1">
          Your order ID is <strong className="text-slate-800 font-mono text-sm">{order.id}</strong>. 
          Our delivery & installation team will contact you shortly.
        </p>

        {/* Order Summary Box */}
        <div className="my-5 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-2">
          <div className="flex justify-between font-semibold text-slate-700">
            <span>Payment Mode:</span>
            <span className="text-emerald-700 font-bold">{order.paymentMethod || 'Pay on Installation / COD'}</span>
          </div>
          <div className="flex justify-between font-semibold text-slate-700">
            <span>Total Payable:</span>
            <span className="text-slate-900 font-extrabold text-sm">₹{order.subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between font-semibold text-slate-700">
            <span>Installation:</span>
            <span className="text-brand-600 font-bold">100% Free Doorstep Setup</span>
          </div>
          {order.customer?.name && (
            <div className="pt-2 border-t border-slate-200 text-slate-500">
              Deliver to: <strong>{order.customer.name}</strong>, {order.customer.address} (PIN: {order.customer.pincode})
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <button
            onClick={handleWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>Message on WhatsApp to Track</span>
          </button>

          <button
            onClick={onClose}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-4 rounded-xl text-xs transition"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}
