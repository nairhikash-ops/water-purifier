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
    let text = `Hello AquaPure! I would like to reserve the *${product.name}* (Offer: ₹${product.price.toLocaleString('en-IN')}).`;
    if (chosenColor) text += `\nSelected Finish: ${chosenColor}`;
    text += `\nPlease arrange doorstep TDS inspection & installation with zero advance.`;
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
    <section id="options" className="py-24 bg-[#06080d] text-white border-b border-white/[0.08] relative overflow-hidden">
      {/* Dynamic Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Expansive Stage Setting */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-500/30 px-3.5 py-1.5 rounded-full mb-3 shadow-lg shadow-amber-950/20">
            <Award className="w-3.5 h-3.5" />
            Step 3 of 3: Certified Prescriptions • No Compromised Hardware
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[1.05]">
            WE ONLY OFFER <br />
            <span className="metallic-copper-text">GOOD & VERY GOOD OPTIONS.</span>
          </h2>

          <p className="mt-4 text-xs sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            We refuse to manufacture cheap, disposable plastic filters that foul in 6 months. Every system below is built with certified heavy-duty 80 GPD membranes, food-grade virgin polymers, and biological alkaline remineralization.
          </p>

          {/* Interactive Tier Selector Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              onClick={() => setActiveTier('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                activeTier === 'all'
                  ? 'bg-white text-black font-black shadow-lg shadow-white/20'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.08]'
              }`}
            >
              All Prescriptions ({PRODUCTS.length})
            </button>

            <button
              onClick={() => setActiveTier('very-good')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 ${
                activeTier === 'very-good'
                  ? 'bg-amber-500 text-black font-black shadow-lg shadow-amber-500/20'
                  : 'bg-white/[0.04] text-amber-300 hover:text-white border border-amber-500/30'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              "Very Good" Tier: Copper + Zinc + Alkaline ({veryGoodProducts.length})
            </button>

            <button
              onClick={() => setActiveTier('good')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 ${
                activeTier === 'good'
                  ? 'bg-emerald-500 text-black font-black shadow-lg shadow-emerald-500/20'
                  : 'bg-white/[0.04] text-emerald-300 hover:text-white border border-emerald-500/30'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              "Good" Tier: Essential Pure Alkaline ({goodProducts.length})
            </button>

            <button
              onClick={() => setActiveTier('specialty')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 ${
                activeTier === 'specialty'
                  ? 'bg-cyan-500 text-black font-black shadow-lg shadow-cyan-500/20'
                  : 'bg-white/[0.04] text-cyan-300 hover:text-white border border-cyan-500/30'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Concealed & Commercial ({specialtyProducts.length})
            </button>
          </div>
        </div>

        {/* Expansive Full-Width Studio Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => {
            const isVeryGood = veryGoodProducts.some(vg => vg.id === product.id);
            const chosenColor = selectedColors[product.id] || (product.colorVariants ? product.colorVariants[0] : null);
            const activeImage = (chosenColor && product.colorImages && product.colorImages[chosenColor]) || product.image;
            const savings = product.mrp - product.price;

            return (
              <div
                key={product.id}
                className={`group rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 border relative overflow-hidden ${
                  isVeryGood
                    ? 'bg-gradient-to-b from-white/[0.04] via-black/40 to-black/80 border-amber-500/30 hover:border-amber-400/60 shadow-xl shadow-amber-950/10'
                    : 'bg-gradient-to-b from-white/[0.02] via-black/40 to-black/80 border-white/[0.08] hover:border-cyan-500/40 shadow-lg'
                }`}
              >
                {/* Background Plinth Lighting on Hover */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div>
                  {/* Top Header Badge & Rating */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md ${
                        isVeryGood 
                          ? 'bg-amber-950/80 text-amber-300 border border-amber-500/40' 
                          : 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                      }`}>
                        {isVeryGood ? '✨ Very Good Option' : '💎 Good Option'}
                      </span>
                      <span className="text-[10px] font-extrabold text-emerald-400">
                        {product.discountPercent}% OFF
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-mono text-white text-[11px]">{product.rating}</span>
                    </div>
                  </div>

                  {/* Monumental Product Stage: Big, Crisp Photography */}
                  <div 
                    onClick={() => onSelectProduct(product)}
                    className="h-64 sm:h-72 w-full rounded-2xl bg-black/40 border border-white/[0.05] p-5 flex items-center justify-center relative overflow-hidden cursor-pointer group/image"
                  >
                    <div className="absolute inset-0 bg-radial from-white/[0.03] to-transparent pointer-events-none" />
                    <img
                      src={activeImage}
                      alt={product.name}
                      className="max-h-full w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] transition-all duration-500 group-hover/image:scale-105"
                    />
                    
                    <span className="absolute bottom-3 right-3 text-[10px] font-bold text-slate-400 bg-black/60 px-2 py-1 rounded-md border border-white/[0.1] opacity-0 group-hover/image:opacity-100 transition flex items-center gap-1">
                      <Maximize2 className="w-3 h-3 text-cyan-400" /> View Blueprints
                    </span>
                  </div>

                  {/* Title & Diagnostic Prescribed Match */}
                  <div className="mt-5 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 block">
                      Prescribed For: {product.suitableTds.split('(')[0]}
                    </span>
                    <h3 
                      onClick={() => onSelectProduct(product)}
                      className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug hover:text-amber-200 transition cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-2">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Color Swatch Switcher directly on the card */}
                  {product.colorVariants && (
                    <div className="mt-4 pt-3 border-t border-white/[0.06]">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1.5">
                        Finish: <strong className="text-white font-mono">{chosenColor}</strong>
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.colorVariants.map((c) => (
                          <button
                            key={c}
                            onClick={() => handleColorChange(product.id, c)}
                            className={`text-[11px] px-2.5 py-1 rounded-lg font-medium transition border ${
                              chosenColor === c
                                ? 'bg-cyan-500 text-black font-bold border-cyan-400 shadow-sm shadow-cyan-500/20'
                                : 'bg-white/[0.04] text-slate-300 border-white/[0.08] hover:bg-white/[0.08]'
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Clinical Specifications Bar */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-[10px] text-slate-500 block font-mono">Stages</span>
                      <span className="font-bold text-slate-200">{product.stagesCount} Stages Active</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-[10px] text-slate-500 block font-mono">Buffer Storage</span>
                      <span className="font-bold text-slate-200">{product.storageCapacity}</span>
                    </div>
                  </div>

                  {/* Price Banner */}
                  <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-slate-500 block">Direct Factory Privilege</span>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-2xl font-black text-white font-mono">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-500 line-through">
                          ₹{product.mrp.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400">
                      Save ₹{savings.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Card Action CTAs */}
                <div className="mt-6 pt-4 border-t border-white/[0.08] space-y-2">
                  <button
                    onClick={() => handleWhatsAppOrder(product)}
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                    <span>Reserve on WhatsApp (Pay ₹0 Today)</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onAddToCart({ ...product, selectedColor: chosenColor })}
                      className="w-full bg-white/[0.06] hover:bg-white/[0.12] text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 border border-white/[0.08] transition"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Add to Cart</span>
                    </button>

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1 border border-white/[0.06] transition"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Full Specs</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/30 via-black to-amber-950/30 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-cyan-400 shrink-0">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-white">Unsure Which Option Matches Your Water Chemistry?</h4>
              <p className="text-xs text-slate-400 font-light mt-0.5">
                Our master water chemist will test your water TDS at your doorstep and recommend the ideal stage configuration with zero obligation.
              </p>
            </div>
          </div>

          <a
            href="#tds-guide"
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.2] text-xs font-black uppercase tracking-wider text-white transition flex items-center justify-center gap-2 shrink-0"
          >
            <span>Analyze Your TDS First</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
