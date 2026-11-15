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
  Droplet
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
    msg += `\nPlease confirm if free installation is available at my pincode.`;
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  const insideTheBoxItems = [
    "1x Water Purifier Main Unit",
    "1x Heavy Duty External Pre-Filter Housing Bowl",
    "1x High-Density Spun PP Pre-Filter Candle",
    "1x Stainless Steel Diverter Valve & Inlet Connector",
    "5 Meters NSF Food Grade 1/4 inch RO Pipe",
    "Wall Mounting Bracket, Screws & Plugs",
    "Operation Manual & Stamped 1-Year Warranty Card"
  ];

  const activeImage = (selectedColor && product.colorImages && product.colorImages[selectedColor]) || product.image;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image & Highlights */}
          <div className="md:col-span-5 bg-gradient-to-b from-slate-50 to-slate-100/60 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[11px] font-bold text-white px-2.5 py-0.5 rounded-full ${product.badgeColor}`}>
                  {product.badge}
                </span>
                <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-300">
                  {product.discountPercent}% OFF
                </span>
              </div>

              <div className="h-64 sm:h-72 w-full flex items-center justify-center p-4">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="max-h-full w-auto object-contain drop-shadow-xl transition-all duration-300"
                />
              </div>

              {/* Color variant selector if available */}
              {product.colorVariants && (
                <div className="mt-4 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Select Color Variant:
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {product.colorVariants.map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedColor(c)}
                        className={`text-xs px-2.5 py-1 rounded-lg font-medium transition ${
                          selectedColor === c
                            ? 'bg-brand-600 text-white font-bold shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
            <div className="mt-6 pt-4 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>1 Year Comprehensive Warranty</strong> (On-Site)</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand-600 shrink-0" />
                <span><strong>Free Doorstep Installation</strong> within 24-48 hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplet className="w-4 h-4 text-cyan-600 shrink-0" />
                <span><strong>Free Water TDS & Purity Test</strong> before installation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specs, Stages, Inside Box & Purchase */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Rating */}
              <div className="flex items-center text-amber-500 font-bold text-xs gap-1.5 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>{product.rating}</span>
                <span className="text-slate-400 font-normal">({product.reviewCount} customer reviews)</span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">{product.name}</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{product.subtitle}</p>

              {/* Price Banner */}
              <div className="my-4 p-3.5 bg-brand-50/70 border border-brand-200 rounded-2xl flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-slate-900">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm text-slate-400 line-through">
                      ₹{product.mrp.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-emerald-700 mt-0.5">
                    Direct Factory Price • You Save ₹{savings.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-emerald-600 text-white text-[10px] uppercase font-extrabold px-2 py-0.5 rounded shadow-xs">
                    In Stock
                  </span>
                  <p className="text-[10px] text-slate-500 mt-1">Pay on Delivery Available</p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-slate-200 mb-4 gap-4 text-xs font-bold">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2 transition border-b-2 flex items-center gap-1.5 ${
                    activeTab === 'specs'
                      ? 'border-brand-600 text-brand-600'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Info className="w-3.5 h-3.5" /> Technical Specs
                </button>
                <button
                  onClick={() => setActiveTab('stages')}
                  className={`pb-2 transition border-b-2 flex items-center gap-1.5 ${
                    activeTab === 'stages'
                      ? 'border-brand-600 text-brand-600'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" /> {product.stagesCount} Stages Breakdown
                </button>
                <button
                  onClick={() => setActiveTab('box')}
                  className={`pb-2 transition border-b-2 flex items-center gap-1.5 ${
                    activeTab === 'box'
                      ? 'border-brand-600 text-brand-600'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
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
                      <div key={key} className="flex justify-between py-1.5 border-b border-slate-100 last:border-0">
                        <span className="text-slate-500 font-medium">{key}</span>
                        <span className="text-slate-900 font-bold text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 2. Stages Breakdown */}
                {activeTab === 'stages' && (
                  <div className="space-y-2 text-xs">
                    {product.stages.map((stage, i) => (
                      <div key={i} className="flex items-start gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">{stage}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. In The Box */}
                {activeTab === 'box' && (
                  <div className="space-y-2 text-xs">
                    <p className="text-slate-500 text-[11px] mb-2 font-medium">
                      All standard installation accessories are included free of cost:
                    </p>
                    {insideTheBoxItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <Package className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                        <span className="text-slate-800 font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 mt-4 space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    onAddToCart({ ...product, selectedColor });
                    onClose();
                  }}
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-4 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>Order on WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                🔒 No advance payment needed • Pay to technician after installation & TDS verification.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
