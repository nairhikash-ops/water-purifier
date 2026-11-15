import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { createWhatsAppUrl } from '../data/companyConfig';
import { 
  Star, 
  Check, 
  ShoppingCart, 
  Eye, 
  Filter, 
  Search, 
  SlidersHorizontal, 
  Droplet, 
  ShieldCheck, 
  Flame,
  ArrowUpDown
} from 'lucide-react';

export default function ProductCatalog({ 
  onSelectProduct, 
  onAddToCart 
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [tdsFilter, setTdsFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'domestic-ro', label: 'Domestic RO Purifiers' },
    { id: 'copper-alkaline', label: 'Copper & Alkaline' },
    { id: 'commercial', label: 'Commercial RO Plants' },
    { id: 'spares', label: 'Filters & Spares' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (activeCategory === 'domestic-ro') {
        if (item.category !== 'domestic-ro' && item.category !== 'copper-alkaline') return false;
      } else if (activeCategory === 'copper-alkaline') {
        if (item.category !== 'copper-alkaline') return false;
      } else if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // TDS filter
      if (tdsFilter === 'high' && !item.suitableTds.includes('2,000') && !item.suitableTds.includes('2,500') && !item.suitableTds.includes('3,000')) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesTech = item.technology.toLowerCase().includes(query);
        const matchesSub = item.subtitle.toLowerCase().includes(query);
        if (!matchesName && !matchesTech && !matchesSub) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'discount') return b.discountPercent - a.discountPercent;
      return b.rating - a.rating; // default popular
    });
  }, [activeCategory, tdsFilter, searchQuery, sortBy]);

  const handleWhatsAppOrder = (product) => {
    const text = `Hi AquaPure Solutions! I am interested in ordering the *${product.name}* (Offer Price: ₹${product.price.toLocaleString('en-IN')}).\n\nPlease let me know about doorstep installation availability in my area.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="purifiers" className="py-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            Direct Factory Inventory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Certified Water Purifiers
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Equipped with modern RO, Active Alkaline & Natural Copper Infusion. 
            All models include free installation, TDS testing, and 12-month on-site warranty.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs mb-8 space-y-4">
          
          {/* Top Row: Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
                  activeCategory === c.id
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Bottom Row: Search & Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2 border-t border-slate-100 items-center">
            
            {/* Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search models (e.g. Copper, Merlin, Purosis, Cloud, Spares)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition"
              />
            </div>

            {/* TDS Filter */}
            <div className="sm:col-span-3">
              <select
                value={tdsFilter}
                onChange={(e) => setTdsFilter(e.target.value)}
                aria-label="Filter by water TDS"
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-none focus:border-brand-500"
              >
                <option value="all">All Water TDS Levels</option>
                <option value="high">High TDS / Borewell (up to 2500 ppm)</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div className="sm:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort products"
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-none focus:border-brand-500"
              >
                <option value="popular">Sort: Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>

          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200">
            <Droplet className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">No matching water purifiers found</h3>
            <p className="text-sm text-slate-400 mt-1">Try clearing your search query or choosing another category.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); setTdsFilter('all'); }}
              className="mt-4 px-4 py-2 bg-brand-50 text-brand-600 font-bold rounded-xl text-xs hover:bg-brand-100"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProducts.map((product) => {
              const savings = product.mrp - product.price;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Image Container with Badges */}
                  <div className="relative h-64 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-6 overflow-hidden">
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                      <span className={`text-[11px] font-extrabold text-white px-2.5 py-0.5 rounded-full shadow-xs ${product.badgeColor}`}>
                        {product.badge}
                      </span>
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full">
                        {product.discountPercent}% OFF
                      </span>
                    </div>

                    {/* Quick View Button on Hover */}
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white text-slate-700 rounded-xl shadow-md opacity-90 group-hover:opacity-100 transition hover:text-brand-600 z-10"
                      title="Quick Specs View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    {/* Product Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-52 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Free Installation Ribbon */}
                    <div className="absolute bottom-2 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      Free Installation + 1 Yr Warranty
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Rating */}
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <div className="flex items-center text-amber-500 font-bold gap-1">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>{product.rating}</span>
                          <span className="text-slate-400 font-normal">({product.reviewCount} reviews)</span>
                        </div>
                        <span className="text-[11px] font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                          {product.stagesCount} Stages
                        </span>
                      </div>

                      {/* Product Name & Subtitle */}
                      <h3 
                        onClick={() => onSelectProduct(product)}
                        className="font-extrabold text-slate-900 text-base leading-snug hover:text-brand-600 transition cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">{product.subtitle}</p>

                      {/* Key Highlights Pill Specs */}
                      <div className="grid grid-cols-2 gap-1.5 my-3 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <div>
                          <span className="text-slate-400 block text-[10px]">Storage Tank:</span>
                          <span className="font-semibold text-slate-800">{product.storageCapacity}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Purification Rate:</span>
                          <span className="font-semibold text-slate-800">{product.purificationRate}</span>
                        </div>
                        <div className="col-span-2 pt-1 border-t border-slate-200/60">
                          <span className="text-slate-400 text-[10px]">Suitable Water: </span>
                          <span className="font-semibold text-slate-800">{product.suitableTds}</span>
                        </div>
                      </div>

                      {/* Color variants if any */}
                      {product.colorVariants && (
                        <div className="mb-3 text-[11px] text-slate-600">
                          <span className="font-medium text-slate-400 text-[10px] block mb-1">Color Options Available:</span>
                          <div className="flex flex-wrap gap-1">
                            {product.colorVariants.map((col, idx) => (
                              <span key={idx} className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[10px] font-medium">
                                {col}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Price and Action Buttons */}
                    <div className="pt-3 border-t border-slate-100">
                      <div className="flex items-baseline justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-2xl font-black text-slate-900">
                              ₹{product.price.toLocaleString('en-IN')}
                            </span>
                            <span className="text-xs text-slate-400 line-through">
                              ₹{product.mrp.toLocaleString('en-IN')}
                            </span>
                          </div>
                          <span className="text-[11px] font-bold text-emerald-600">
                            Save ₹{savings.toLocaleString('en-IN')} (Direct Deal)
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold block">
                            COD / Pay Later
                          </span>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onAddToCart(product)}
                          className="bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition border border-brand-200"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </button>

                        <button
                          onClick={() => handleWhatsAppOrder(product)}
                          className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
                        >
                          <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                          </svg>
                          <span>Buy via WA</span>
                        </button>
                      </div>

                      {/* View Details Text link */}
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="w-full text-center text-xs text-slate-500 hover:text-brand-600 font-semibold mt-2.5 underline underline-offset-2 transition"
                      >
                        View Full Specifications & Filter Stages →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
