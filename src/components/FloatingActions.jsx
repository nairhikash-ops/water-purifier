import React from 'react';
import { COMPANY_CONFIG, createWhatsAppUrl } from '../data/companyConfig';
import { PhoneCall, Droplets, ShoppingCart } from 'lucide-react';

export default function FloatingActions({ cartCount, onOpenCart, onOpenWaterTest }) {
  const handleWhatsApp = () => {
    window.open(createWhatsAppUrl("Hello AquaPure! I'd like to consult with a certified water specialist about selecting the ideal model for my residence."), '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Bubble (Desktop + Tablet) */}
      <div className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex flex-col items-end gap-2">
        <button
          onClick={handleWhatsApp}
          className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:scale-110 transition duration-300 shadow-emerald-950/50"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
          
          {/* Tooltip on hover */}
          <span className="hidden group-hover:block absolute right-16 top-1/2 -translate-y-1/2 bg-[#0c101a] text-white text-xs font-bold py-1.5 px-3 rounded-xl whitespace-nowrap shadow-xl border border-white/[0.1]">
            Direct Chemist Consultation
          </span>
        </button>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar (Visible on mobile screens) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07090e]/95 backdrop-blur-md border-t border-white/[0.1] px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${COMPANY_CONFIG.phoneRaw}`}
          className="flex-1 bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.15] text-white py-2.5 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition"
        >
          <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
          <span>Call Hub</span>
        </a>

        <button
          onClick={onOpenWaterTest}
          className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-black py-2.5 px-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition"
        >
          <Droplets className="w-3.5 h-3.5" />
          <span>Free Test</span>
        </button>

        <button
          onClick={onOpenCart}
          className="relative bg-white/[0.08] border border-white/[0.15] text-white py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center transition"
          aria-label="Portfolio Cart"
        >
          <ShoppingCart className="w-4 h-4 text-cyan-400" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-500 text-black font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </>
  );
}
