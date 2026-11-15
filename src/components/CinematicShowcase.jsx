import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { createWhatsAppUrl } from '../data/companyConfig';
import { 
  Star, 
  ShieldCheck, 
  Droplets, 
  Eye, 
  ShoppingCart, 
  Check, 
  Sparkles, 
  ArrowRight,
  Layers,
  Wrench,
  Maximize2
} from 'lucide-react';

export default function CinematicShowcase({ onSelectProduct, onAddToCart }) {
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0].id);
  const [selectedColor, setSelectedColor] = useState(null);

  const activeProduct = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];

  // If active product has color images and user picked a color
  const currentImage = (selectedColor && activeProduct.colorImages && activeProduct.colorImages[selectedColor]) 
    || activeProduct.image;

  const handleSelectModel = (prod) => {
    setSelectedProductId(prod.id);
    setSelectedColor(prod.colorVariants ? prod.colorVariants[0] : null);
  };

  const handleWhatsAppOrder = (product) => {
    let text = `Hello AquaPure! I wish to order/reserve the *${product.name}* (Offer: ₹${product.price.toLocaleString('en-IN')}).`;
    if (selectedColor) text += `\nSelected Color: ${selectedColor}`;
    text += `\nPlease confirm technician schedule for doorstep installation.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="showcase" className="py-20 bg-[#07090e] text-white border-b border-white/[0.08] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-md mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              The Permanent Collection
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
              Masterpieces of <span className="metallic-copper-text">Water Architecture</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light leading-relaxed">
            Select any model below to explore its craftsmanship, multi-stage ionization profile, and available custom finishes.
          </p>
        </div>

        {/* Theatrical Split Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Centerpiece Stage (8 cols) */}
          <div className="lg:col-span-8 rounded-3xl luxury-glass p-6 sm:p-10 border border-white/[0.1] relative overflow-hidden flex flex-col justify-between min-h-[580px]">
            
            {/* Top Stage Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] relative z-10">
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md ${activeProduct.badgeColor}`}>
                  {activeProduct.badge}
                </span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                  {activeProduct.discountPercent}% Direct Privilege
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-current" />
                <span>{activeProduct.rating}</span>
                <span className="text-slate-400 font-normal">({activeProduct.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Central Illuminated Showcase */}
            <div className="py-8 my-auto flex flex-col md:flex-row items-center gap-8 justify-between relative z-10">
              
              {/* Product Image Plinth */}
              <div className="w-full md:w-1/2 flex items-center justify-center p-4 relative group">
                {/* Spotlight Circle */}
                <div className="absolute inset-0 bg-radial from-cyan-500/20 to-transparent rounded-full blur-2xl -z-10 group-hover:scale-110 transition duration-700" />
                
                <img
                  src={currentImage}
                  alt={activeProduct.name}
                  className="max-h-80 sm:max-h-96 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)] transition-all duration-500 hover:scale-105 cursor-pointer"
                  onClick={() => onSelectProduct(activeProduct)}
                />
              </div>

              {/* Product Details & Spec Badges */}
              <div className="w-full md:w-1/2 space-y-4 text-left">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                  {activeProduct.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {activeProduct.subtitle}
                </p>

                {/* Live Color Selector Swatches */}
                {activeProduct.colorVariants && (
                  <div className="pt-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block mb-2">
                      Available Finishes:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeProduct.colorVariants.map((col) => {
                        const isSelected = (selectedColor || activeProduct.colorVariants[0]) === col;
                        return (
                          <button
                            key={col}
                            onClick={() => setSelectedColor(col)}
                            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition ${
                              isSelected
                                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                                : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.1]'
                            }`}
                          >
                            {col}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Key Spec Ticker */}
                <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-[10px] text-slate-500 block uppercase">Filtration Stages</span>
                    <span className="font-bold text-slate-200">{activeProduct.stagesCount} Stages RO+Cu+Alk</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-[10px] text-slate-500 block uppercase">Capacity</span>
                    <span className="font-bold text-slate-200">{activeProduct.storageCapacity}</span>
                  </div>
                  <div className="col-span-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-[10px] text-slate-500 block uppercase">Water Tolerance</span>
                    <span className="font-bold text-cyan-300">{activeProduct.suitableTds}</span>
                  </div>
                </div>

                {/* Pricing Block */}
                <div className="pt-3 border-t border-white/[0.08] flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Direct Privilege Rate</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-3xl font-black text-white">
                        ₹{activeProduct.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-500 line-through">
                        ₹{activeProduct.mrp.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">
                    Save ₹{(activeProduct.mrp - activeProduct.price).toLocaleString('en-IN')}
                  </span>
                </div>

              </div>

            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center gap-3 relative z-10">
              <button
                onClick={() => handleWhatsAppOrder(activeProduct)}
                className="w-full sm:flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>Reserve via WhatsApp (Zero Advance)</span>
              </button>

              <button
                onClick={() => onAddToCart({ ...activeProduct, selectedColor })}
                className="w-full sm:w-auto bg-white/[0.08] hover:bg-white/[0.15] text-white font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/[0.1] transition"
              >
                <ShoppingCart className="w-4 h-4 text-cyan-400" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={() => onSelectProduct(activeProduct)}
                className="w-full sm:w-auto text-xs text-slate-400 hover:text-white font-medium px-3 py-2 flex items-center justify-center gap-1 transition"
              >
                <Maximize2 className="w-3.5 h-3.5" /> Full Blueprints & Stages
              </button>
            </div>

          </div>

          {/* Right Lookbook Model Selection Dock (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block mb-2">
              Explore The Gallery ({PRODUCTS.length} Models)
            </span>

            {PRODUCTS.map((prod) => {
              const isSelected = prod.id === selectedProductId;
              return (
                <div
                  key={prod.id}
                  onClick={() => handleSelectModel(prod)}
                  className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-3.5 ${
                    isSelected
                      ? 'bg-white/[0.1] border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                      : 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.06] hover:border-white/[0.15]'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="w-14 h-14 rounded-xl bg-black/40 p-1 flex items-center justify-center border border-white/[0.08] shrink-0">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] font-black uppercase px-1.5 py-0.2 rounded ${prod.badgeColor}`}>
                        {prod.badge}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400">
                        {prod.discountPercent}% OFF
                      </span>
                    </div>
                    <h4 className="font-bold text-white text-xs truncate mt-0.5">
                      {prod.name}
                    </h4>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-xs font-black text-white">
                        ₹{prod.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-slate-500 line-through">
                        ₹{prod.mrp.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
