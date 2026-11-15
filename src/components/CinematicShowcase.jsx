import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { createWhatsAppUrl } from '../data/companyConfig';
import { 
  Star, 
  ShieldCheck, 
  Droplets, 
  ShoppingCart, 
  Check, 
  Sparkles, 
  ArrowRight,
  Layers,
  Maximize2,
  CheckCircle2,
  Award,
  Zap,
  SlidersHorizontal,
  Flame,
  CheckCircle
} from 'lucide-react';

export default function CinematicShowcase({ onSelectProduct, onAddToCart }) {
  const [activeTier, setActiveTier] = useState('all'); // 'all' | 'very-good' | 'good' | 'specialty'
  // Local state for color selection per product: { [productId]: selectedColorName }
  const [selectedColors, setSelectedColors] = useState({});

  const handleColorChange = (productId, colorName) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: colorName
    }));
  };

  const handleWhatsAppOrder = (product) => {
    const chosenColor = selectedColors[product.id] || (product.colorVariants ? product.colorVariants[0] : null);
    let text = `Hello AquaPure! I would like to order the *${product.name}* (Factory Deal: ₹${product.price.toLocaleString('en-IN')}).`;
    if (chosenColor) text += `\nSelected Finish: ${chosenColor}`;
    text += `\nPlease arrange doorstep installation with zero advance payment.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  // Group products by their clinical quality tier
  const veryGoodProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes('copper') || 
    p.name.toLowerCase().includes('tisca') || 
    p.id === 'cloud-aqua-one-3'
  );

  const goodProducts = PRODUCTS.filter(p => 
    !veryGoodProducts.some(vg => vg.id === p.id) &&
    !p.id.includes('undersink') && 
    !p.id.includes('commercial')
  );

  const specialtyProducts = PRODUCTS.filter(p => 
    p.id.includes('undersink') || 
    p.id.includes('commercial')
  );

  // Determine which list to show based on activeTier
  let displayProducts = PRODUCTS;
  if (activeTier === 'very-good') displayProducts = veryGoodProducts;
  if (activeTier === 'good') displayProducts = goodProducts;
  if (activeTier === 'specialty') displayProducts = specialtyProducts;

  return (
    <section id="options" className="py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      {/* Subtle ice aura background */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-50 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-50/60 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full mb-3 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-sky-600" />
            <span>Step 2: Prescribed Hardware • Direct Factory Privilege</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase leading-[1.08] text-[#0a2540]">
            WE ONLY OFFER <br />
            <span className="text-sky-600">GOOD & VERY GOOD OPTIONS.</span>
          </h2>

          <p className="mt-3 text-xs sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            We refuse to manufacture cheap, disposable plastic filters that foul in 6 months. Every system below is built with certified heavy-duty 80 GPD membranes, food-grade virgin polymers, and biological alkaline remineralization.
          </p>

          {/* Interactive Tier Selector Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              onClick={() => setActiveTier('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                activeTier === 'all'
                  ? 'bg-sky-600 text-white font-black shadow-md shadow-sky-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              All Models ({PRODUCTS.length})
            </button>

            <button
              onClick={() => setActiveTier('very-good')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 ${
                activeTier === 'very-good'
                  ? 'bg-amber-600 text-white font-black shadow-md shadow-amber-600/20'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              "Very Good" Tier: Copper + Alkaline ({veryGoodProducts.length})
            </button>

            <button
              onClick={() => setActiveTier('good')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 ${
                activeTier === 'good'
                  ? 'bg-emerald-600 text-white font-black shadow-md shadow-emerald-600/20'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              "Good" Tier: Essential Pure Alkaline ({goodProducts.length})
            </button>

            <button
              onClick={() => setActiveTier('specialty')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 ${
                activeTier === 'specialty'
                  ? 'bg-slate-900 text-white font-black shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-slate-500" />
              Under-Sink & Commercial ({specialtyProducts.length})
            </button>
          </div>
        </div>

        {/* Studio Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayProducts.map((product) => {
            const isVeryGood = veryGoodProducts.some(vg => vg.id === product.id);
            const chosenColor = selectedColors[product.id] || (product.colorVariants ? product.colorVariants[0] : null);
            const activeImage = (chosenColor && product.colorImages && product.colorImages[chosenColor]) || product.image;
            const savings = product.mrp - product.price;

            return (
              <div
                key={product.id}
                className={`group rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border bg-white ${
                  isVeryGood
                    ? 'border-amber-200/90 shadow-md hover:shadow-2xl hover:border-amber-400'
                    : 'border-slate-200 shadow-sm hover:shadow-2xl hover:border-sky-300'
                }`}
              >
                <div>
                  {/* Card Top Pill & Rating */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md ${
                        isVeryGood 
                          ? 'bg-amber-50 text-amber-800 border border-amber-200' 
                          : 'bg-sky-50 text-sky-800 border border-sky-200'
                      }`}>
                        {isVeryGood ? '✨ Very Good Option' : '💎 Good Option'}
                      </span>
                      <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {product.discountPercent}% OFF
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-mono text-slate-800 text-[11px] font-bold">{product.rating}</span>
                    </div>
                  </div>

                  {/* Product Stage: Big, Crisp Photography */}
                  <div 
                    onClick={() => onSelectProduct(product)}
                    className="h-64 sm:h-72 w-full rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-100 p-5 flex items-center justify-center relative overflow-hidden cursor-pointer group/image"
                  >
                    <img
                      src={activeImage}
                      alt={product.name}
                      className="max-h-full w-auto object-contain drop-shadow-[0_12px_20px_rgba(15,23,42,0.12)] transition-all duration-500 group-hover/image:scale-105"
                    />
                    
                    <span className="absolute bottom-3 right-3 text-[10px] font-bold text-slate-700 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-200 opacity-0 group-hover/image:opacity-100 transition flex items-center gap-1 shadow-xs">
                      <Maximize2 className="w-3 h-3 text-sky-600" /> View Specs
                    </span>
                  </div>

                  {/* Title & Prescribed Match */}
                  <div className="mt-5 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 block">
                      Prescribed For: {product.suitableTds.split('(')[0]}
                    </span>
                    <h3 
                      onClick={() => onSelectProduct(product)}
                      className="text-lg sm:text-xl font-black text-[#0a2540] tracking-tight leading-snug hover:text-sky-600 transition cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-2">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Color Swatch Switcher directly on the card */}
                  {product.colorVariants && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                        Finish: <strong className="text-slate-800">{chosenColor}</strong>
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.colorVariants.map((c) => (
                          <button
                            key={c}
                            onClick={() => handleColorChange(product.id, c)}
                            className={`text-[11px] px-2.5 py-1 rounded-lg font-semibold transition border ${
                              chosenColor === c
                                ? 'bg-sky-600 text-white font-bold border-sky-600 shadow-2xs'
                                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Specifications Grid */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">Filtration Stages</span>
                      <span className="font-bold text-slate-800">{product.stagesCount} Stages Active</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">Buffer Storage</span>
                      <span className="font-bold text-slate-800">{product.storageCapacity}</span>
                    </div>
                  </div>

                  {/* Price Banner */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Direct Factory Price</span>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-2xl font-black text-[#0a2540]">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ₹{product.mrp.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      Save ₹{savings.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Card Action CTAs */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <button
                    onClick={() => handleWhatsAppOrder(product)}
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20 transition"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                    <span>Order on WhatsApp (Pay ₹0 Today)</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onAddToCart({ ...product, selectedColor: chosenColor })}
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 border border-slate-200 transition"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 text-sky-600" />
                      <span>Add to Cart</span>
                    </button>

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full bg-white hover:bg-slate-50 text-slate-700 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1 border border-slate-200 transition"
                    >
                      <Maximize2 className="w-3 h-3 text-slate-500" />
                      <span>Full Specs</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Diagnostic Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-[#0a2540]">
                Unsure Which Model Matches Your Tap Water?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Our technician visits with a digital TDS meter, tests your water right at your sink, and recommends the exact configuration with zero obligation.
              </p>
            </div>
          </div>

          <a
            href="#tds-guide"
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-xs font-black uppercase tracking-wider text-slate-800 transition flex items-center justify-center gap-2 shrink-0 shadow-2xs"
          >
            <span>Analyze Your TDS First</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </a>
        </div>

      </div>
    </section>
  );
}
