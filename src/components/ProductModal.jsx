import React, { useState } from 'react';
import { createWhatsAppUrl } from '../data/companyConfig';
import { 
  X, 
  Star, 
  ShieldCheck, 
  Truck, 
  CheckCircle, 
  ShoppingCart, 
  Package, 
  Layers, 
  Info,
  Droplet,
  Sparkles
} from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(
    product.colorVariants ? product.colorVariants[0] : null
  );
  const [activeTab, setActiveTab] = useState('specs'); // 'specs', 'stages', 'box'

  const savings = product.mrp - product.price;

  const handleWhatsApp = () => {
    let msg = `Hi AquaPure! I want to order/enquire about:\n*${product.name}*\nPrice: ₹${product.price.toLocaleString('en-IN')}`;
    if (selectedColor) {
      msg += `\nSelected Color: ${selectedColor}`;
    }
    msg += `\nPlease confirm technician schedule for free doorstep installation.`;
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  const insideTheBoxItems = [
    "1x High-Performance Water Architecture Unit",
    "1x Heavy Duty External Pre-Filter Housing Bowl",
    "1x High-Density Spun PP Pre-Filter Candle",
    "1x Stainless Steel Diverter Valve & Inlet Connector",
    "5 Meters NSF Food Grade 1/4 inch RO Pipe",
    "Precision Wall Mounting Bracket, Hardware & Plugs",
    "Operation Manual & Stamped 1-Year Comprehensive Warranty Card"
  ];

  const activeImage = (selectedColor && product.colorImages && product.colorImages[selectedColor]) || product.image;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#0c101a] text-white w-full max-w-4xl rounded-3xl shadow-2xl border border-white/[0.12] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-white border border-white/[0.1] transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image & Highlights */}
          <div className="md:col-span-5 bg-white/[0.02] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/[0.08] relative">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${product.badgeColor}`}>
                  {product.badge}
                </span>
                <span className="text-[10px] font-black uppercase bg-emerald-950/60 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  {product.discountPercent}% OFF
                </span>
              </div>

              {/* Plinth Spotlight Frame */}
              <div className="h-64 sm:h-72 w-full rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] flex items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
                <img
                  src={activeImage}
                  alt={product.name}
                  className="max-h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-300 relative z-10"
                />
              </div>

              {/* Color variant selector if available */}
              {product.colorVariants && (
                <div className="mt-4 bg-white/[0.03] p-3 rounded-2xl border border-white/[0.06]">
                  <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-2">
                    Available Custom Finishes:
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {product.colorVariants.map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedColor(c)}
                        className={`text-xs px-3 py-1.5 rounded-xl font-bold transition border ${
                          selectedColor === c
                            ? 'bg-cyan-500 text-black border-cyan-400 shadow-md shadow-cyan-500/20'
                            : 'bg-white/[0.04] text-slate-300 border-white/[0.08] hover:bg-white/[0.08]'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quality Guarantees */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">1-Year Comprehensive Warranty</strong> (On-Site)</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span><strong className="text-white">Complimentary White-Glove Setup</strong> (24-48 hrs)</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplet className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong className="text-white">Live Multi-Parameter TDS Validation</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Specs, Stages, Inside Box & Purchase */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Rating */}
              <div className="flex items-center text-amber-400 font-bold text-xs gap-1.5 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-white font-mono">{product.rating}</span>
                <span className="text-slate-500 font-normal">({product.reviewCount} connoisseur reviews)</span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl font-black text-white tracking-tight">{product.name}</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">{product.subtitle}</p>

              {/* Price Banner */}
              <div className="my-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl font-black text-white">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm text-slate-500 line-through">
                      ₹{product.mrp.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-emerald-400 mt-0.5">
                    Direct Factory Privilege • You Save ₹{savings.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-[10px] uppercase font-black px-2.5 py-1 rounded-md">
                    In Stock • Factory Sealed
                  </span>
                  <p className="text-[10px] text-slate-400 mt-1">Pay After Installation</p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-white/[0.08] mb-4 gap-4 text-xs font-bold">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2.5 transition border-b-2 flex items-center gap-1.5 ${
                    activeTab === 'specs'
                      ? 'border-cyan-400 text-cyan-400'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <Info className="w-3.5 h-3.5" /> Technical Blueprints
                </button>
                <button
                  onClick={() => setActiveTab('stages')}
                  className={`pb-2.5 transition border-b-2 flex items-center gap-1.5 ${
                    activeTab === 'stages'
                      ? 'border-cyan-400 text-cyan-400'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" /> {product.stagesCount} Stages
                </button>
                <button
                  onClick={() => setActiveTab('box')}
                  className={`pb-2.5 transition border-b-2 flex items-center gap-1.5 ${
                    activeTab === 'box'
                      ? 'border-cyan-400 text-cyan-400'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <Package className="w-3.5 h-3.5" /> In The Box
                </button>
              </div>

              {/* Tab Contents */}
              <div className="min-h-[160px]">
                {/* 1. Specs Table */}
                {activeTab === 'specs' && (
                  <div className="space-y-2 text-xs">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-1.5 border-b border-white/[0.04] last:border-0">
                        <span className="text-slate-400 font-light">{key}</span>
                        <span className="text-white font-semibold text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 2. Stages Breakdown */}
                {activeTab === 'stages' && (
                  <div className="space-y-2 text-xs">
                    {product.stages.map((stage, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.05]">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-slate-200 font-light">{stage}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. In The Box */}
                {activeTab === 'box' && (
                  <div className="space-y-2 text-xs">
                    <p className="text-slate-400 text-[11px] mb-2">
                      All standard installation hardware & food-grade accessories included complimentary:
                    </p>
                    {insideTheBoxItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/[0.02] p-2 rounded-xl border border-white/[0.05]">
                        <Package className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="text-slate-200 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/[0.08] mt-4 space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    onAddToCart({ ...product, selectedColor });
                    onClose();
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition uppercase tracking-wider"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Reserve & Add to Cart</span>
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.2] text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition"
                >
                  <svg className="w-4 h-4 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>Order via WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                🔒 Zero advance deposit required • Pay directly to master technician after installation & TDS check.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
