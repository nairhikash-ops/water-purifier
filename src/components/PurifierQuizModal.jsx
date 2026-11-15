import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { createWhatsAppUrl } from '../data/companyConfig';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  ShoppingCart, 
  Droplets,
  RotateCcw
} from 'lucide-react';

export default function PurifierQuizModal({ 
  isOpen, 
  onClose, 
  onSelectProduct, 
  onAddToCart 
}) {
  if (!isOpen) return null;

  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    waterSource: '',
    tdsLevel: '',
    familySize: '',
    priority: ''
  });

  const steps = [
    {
      id: 1,
      title: "Where does your drinking water originate?",
      subtitle: "Helps us specify the required physical & molecular filtration stages.",
      field: "waterSource",
      options: [
        { label: "Borewell / Ground Water", desc: "Contains hard calcium salts, heavy minerals, and elevated TDS", value: "borewell" },
        { label: "Municipal Corporation / Tap Water", desc: "Chlorinated municipal supply with potential pipeline rust and sediments", value: "municipal" },
        { label: "Water Tanker / Mixed Source", desc: "Fluctuating daily water chemistry and unpredictable salinity", value: "tanker" }
      ]
    },
    {
      id: 2,
      title: "What is your approximate inlet TDS level?",
      subtitle: "If you're unsure, select 'Free Doorstep Test' and our master chemist will verify it.",
      field: "tdsLevel",
      options: [
        { label: "I Don't Know / Need Complimentary TDS Audit", desc: "Technician visits with a calibrated digital multi-parameter meter", value: "unknown" },
        { label: "Low TDS (Under 300 PPM)", desc: "Relatively soft water requiring active alkaline remineralization", value: "low" },
        { label: "Medium TDS (300 to 800 PPM)", desc: "Moderate mineral hardness causing vessel scaling", value: "medium" },
        { label: "High TDS (Above 800 to 2500 PPM)", desc: "Heavy brackish water requiring a high-rejection 80 GPD RO membrane", value: "high" }
      ]
    },
    {
      id: 3,
      title: "How many members are in your sanctuary?",
      subtitle: "Determines optimal storage buffer and continuous hourly recovery rate.",
      field: "familySize",
      options: [
        { label: "Compact Sanctuary (1 to 3 Members)", desc: "8-9 Litre rapid-recovery storage footprint", value: "small" },
        { label: "Family Residence (4 to 6 Members)", desc: "10-12 Litre high-capacity multi-member storage", value: "medium" },
        { label: "Estate / Specialty Venue / Clinic (6+ Members)", desc: "High-recovery continuous 50 LPH commercial skid architecture", value: "large" }
      ]
    },
    {
      id: 4,
      title: "What is your #1 architectural priority?",
      subtitle: "Select the primary attribute engineered for your lifestyle.",
      field: "priority",
      options: [
        { label: "Active Copper + Antioxidant Alkaline", desc: "Ayurvedic copper ionization with pH 8.5+ and negative ORP", value: "copper" },
        { label: "Detachable Washable Water Chamber", desc: "Zero-tool food-grade tank removal for effortless sanitization", value: "detachable" },
        { label: "Architectural Slate Matte Luxury", desc: "Minimalist slate grey visual profile designed for bespoke kitchens", value: "design" },
        { label: "Direct Factory Value Optimization", desc: "Maximum certified engineering per rupee spent", value: "budget" }
      ]
    }
  ];

  const handleSelectOption = (field, value) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      setCurrentStep(5); // result
    }
  };

  // Determine best match
  const getRecommendation = () => {
    if (answers.familySize === 'large') {
      return PRODUCTS.find(p => p.id === 'commercial-ro-plant-50lph') || PRODUCTS[1];
    }
    if (answers.priority === 'design') {
      return PRODUCTS.find(p => p.id === 'cloud-aqua-one-3-grey') || PRODUCTS[2];
    }
    if (answers.priority === 'detachable') {
      return PRODUCTS.find(p => p.id === 'aqua-next-copper-alkaline') || PRODUCTS[1];
    }
    if (answers.priority === 'budget') {
      return PRODUCTS.find(p => p.id === 'purosis-puroaqua-ro-alk') || PRODUCTS[0];
    }
    return PRODUCTS.find(p => p.id === 'merlin-planet-copper-alkaline') || PRODUCTS[1];
  };

  const recommendedProduct = getRecommendation();

  const handleWhatsAppQuizLead = () => {
    const text = `Hi AquaPure! I completed the Water Purifier Selector on your site.\n\nMy Diagnostics:\n- Source: ${answers.waterSource}\n- TDS: ${answers.tdsLevel}\n- Household: ${answers.familySize}\n- Priority: ${answers.priority}\n\nRecommended: *${recommendedProduct.name}* (₹${recommendedProduct.price.toLocaleString('en-IN')})\nPlease confirm technician schedule for free doorstep installation.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  const handleReset = () => {
    setAnswers({ waterSource: '', tdsLevel: '', familySize: '', priority: '' });
    setCurrentStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative bg-[#0c101a] text-white w-full max-w-2xl rounded-3xl shadow-2xl border border-white/[0.12] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-950/80 via-[#0c101a] to-amber-950/60 p-6 sm:p-8 border-b border-white/[0.08] relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-white border border-white/[0.1] transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 text-amber-400 text-[10px] font-black uppercase tracking-widest bg-amber-950/40 border border-amber-500/30 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Diagnostic Selector Console
          </div>
          <h2 className="text-xl sm:text-3xl font-black tracking-tight uppercase">
            Curate Your <span className="metallic-copper-text">Water Architecture</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-md font-light">
            4 precision questions to pinpoint your ideal filtration stages and mineral profile.
          </p>

          {/* Progress Bar */}
          {currentStep <= 4 && (
            <div className="mt-5 flex items-center gap-2">
              {[1, 2, 3, 4].map((stepNum) => (
                <div
                  key={stepNum}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    stepNum <= currentStep ? 'bg-gradient-to-r from-cyan-400 to-amber-400' : 'bg-white/[0.1]'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Wizard Body */}
        <div className="p-6 sm:p-8">
          {currentStep <= 4 ? (
            <div>
              {/* Question */}
              <div className="mb-6">
                <span className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest">
                  Diagnostic Stage {currentStep} of 4
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white mt-1">
                  {steps[currentStep - 1].title}
                </h3>
                <p className="text-xs text-slate-400 font-light mt-0.5">
                  {steps[currentStep - 1].subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {steps[currentStep - 1].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelectOption(steps[currentStep - 1].field, opt.value)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/80 hover:bg-white/[0.06] transition-all duration-300 flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-bold text-sm text-white group-hover:text-amber-200 transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-xs text-slate-400 font-light mt-0.5">
                        {opt.desc}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition shrink-0 ml-3" />
                  </button>
                ))}
              </div>

              {/* Back Button */}
              {currentStep > 1 && (
                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <button
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Previous Question
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Result Screen */
            <div className="text-center animate-fadeIn">
              <div className="w-12 h-12 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
                Ideal Water Architecture Calibrated
              </span>
              <h3 className="text-2xl font-black text-white mt-3">
                {recommendedProduct.name}
              </h3>
              <p className="text-xs text-slate-400 font-light mt-1 max-w-md mx-auto">
                Calibrated specifically for your source ({answers.waterSource}) with full mineral revitalization and certified reliability.
              </p>

              {/* Recommended Product Preview Card */}
              <div className="my-6 p-5 bg-white/[0.03] rounded-2xl border border-white/[0.08] text-left flex flex-col sm:flex-row items-center gap-5">
                <div className="w-32 h-32 bg-black/40 rounded-xl p-2 flex items-center justify-center border border-white/[0.08] shrink-0">
                  <img
                    src={recommendedProduct.image}
                    alt={recommendedProduct.name}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${recommendedProduct.badgeColor}`}>
                      {recommendedProduct.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      {recommendedProduct.discountPercent}% OFF
                    </span>
                  </div>
                  <h4 className="font-extrabold text-white text-base">{recommendedProduct.name}</h4>
                  <p className="text-xs text-slate-400 font-light">{recommendedProduct.subtitle}</p>
                  
                  <div className="pt-2 flex items-baseline gap-2.5">
                    <span className="text-2xl font-black text-white">
                      ₹{recommendedProduct.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-500 line-through">
                      ₹{recommendedProduct.mrp.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleWhatsAppQuizLead}
                  className="bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.2] text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition"
                >
                  <svg className="w-4 h-4 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>Reserve on WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    onAddToCart(recommendedProduct);
                    onClose();
                  }}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition uppercase tracking-wider"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>

              <div className="mt-5 flex items-center justify-center gap-4 text-xs">
                <button
                  onClick={() => {
                    onSelectProduct(recommendedProduct);
                    onClose();
                  }}
                  className="text-cyan-400 font-bold hover:underline"
                >
                  View Full Blueprints
                </button>
                <span className="text-slate-600">•</span>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Retake Diagnostic
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
