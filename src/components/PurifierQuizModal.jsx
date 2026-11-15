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
      title: "Where does your drinking water come from?",
      subtitle: "Helps us determine the required filtration stages.",
      field: "waterSource",
      options: [
        { label: "Borewell / Ground Water", desc: "Contains hard minerals, salts, and high TDS", value: "borewell" },
        { label: "Municipal Corporation / Tap Water", desc: "Treated water with chlorine, sediments, and rust", value: "municipal" },
        { label: "Water Tanker / Mixed Supply", desc: "Fluctuating water quality and unpredictable TDS", value: "tanker" }
      ]
    },
    {
      id: 2,
      title: "What is your approximate water TDS level?",
      subtitle: "If you're unsure, select 'Not Sure' and we'll test it for free.",
      field: "tdsLevel",
      options: [
        { label: "I Don't Know / Need Free TDS Test", desc: "Our technician will test it at your doorstep", value: "unknown" },
        { label: "Low TDS (Under 300 PPM)", desc: "Relatively soft water, needs mineral protection", value: "low" },
        { label: "Medium TDS (300 to 800 PPM)", desc: "Noticeable scaling on vessels, medium hardness", value: "medium" },
        { label: "High TDS (Above 800 to 2500 PPM)", desc: "Salty/hard water requiring heavy RO membrane", value: "high" }
      ]
    },
    {
      id: 3,
      title: "How many members are in your household?",
      subtitle: "Determines the storage tank capacity and filtration speed.",
      field: "familySize",
      options: [
        { label: "Small Family (1 to 3 Members)", desc: "Compact 8 Litre storage capacity is ideal", value: "small" },
        { label: "Medium Family (4 to 6 Members)", desc: "10 Litre high-capacity storage tank recommended", value: "medium" },
        { label: "Large Family / Office / Clinic (6+ Members)", desc: "High recovery or Commercial 50 LPH plant", value: "large" }
      ]
    },
    {
      id: 4,
      title: "What is your #1 priority feature?",
      subtitle: "Select the benefit that matters most to your family.",
      field: "priority",
      options: [
        { label: "Alkaline + Pure Copper Health", desc: "Ayurvedic copper enrichment & 8.5+ pH antioxidant water", value: "copper" },
        { label: "Detachable Washable Tank", desc: "Easy to remove, clean, and maintain inside tank hygiene", value: "detachable" },
        { label: "Luxury Contemporary Styling", desc: "Matte grey designer aesthetics for modern kitchens", value: "design" },
        { label: "Maximum Budget Savings", desc: "Best value-for-money high-performance purifier", value: "budget" }
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
    // Default copper alkaline
    return PRODUCTS.find(p => p.id === 'merlin-planet-copper-alkaline') || PRODUCTS[1];
  };

  const recommendedProduct = getRecommendation();

  const handleWhatsAppQuizLead = () => {
    const text = `Hi AquaPure Solutions! I completed the Purifier Selector Quiz on your website.\n\nMy Requirements:\n- Source: ${answers.waterSource}\n- TDS: ${answers.tdsLevel}\n- Family Size: ${answers.familySize}\n- Priority: ${answers.priority}\n\nRecommended: *${recommendedProduct.name}* (₹${recommendedProduct.price.toLocaleString('en-IN')})\nPlease guide me with the current direct offer and installation schedule.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  const handleReset = () => {
    setAnswers({ waterSource: '', tdsLevel: '', familySize: '', priority: '' });
    setCurrentStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-700 to-cyan-600 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 fill-amber-300" />
            Interactive Purifier Selector
          </div>
          <h2 className="text-xl sm:text-2xl font-black">Find Your Ideal Water Purifier</h2>
          <p className="text-xs text-brand-100 mt-1">Answer 4 quick questions for an expert recommendation tailored to your water quality.</p>

          {/* Progress Bar */}
          {currentStep <= 4 && (
            <div className="mt-4 flex items-center gap-1.5">
              {[1, 2, 3, 4].map((stepNum) => (
                <div
                  key={stepNum}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    stepNum <= currentStep ? 'bg-amber-400' : 'bg-white/30'
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
                <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                  Step {currentStep} of 4
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  {steps[currentStep - 1].title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {steps[currentStep - 1].subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {steps[currentStep - 1].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelectOption(steps[currentStep - 1].field, opt.value)}
                    className="w-full text-left p-4 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 transition flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-bold text-sm text-slate-800 group-hover:text-brand-700">
                        {opt.label}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {opt.desc}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-600 group-hover:translate-x-1 transition shrink-0 ml-3" />
                  </button>
                ))}
              </div>

              {/* Back Button */}
              {currentStep > 1 && (
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Previous Question
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Result Screen */
            <div className="text-center animate-fadeIn">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                Perfect Match Found
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                We Recommend: {recommendedProduct.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                Based on your water source ({answers.waterSource}) and family requirements, this model provides the highest purity, taste, and reliability.
              </p>

              {/* Recommended Product Preview Card */}
              <div className="my-6 p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200 text-left flex flex-col sm:flex-row items-center gap-5">
                <div className="w-36 h-36 bg-white rounded-xl p-2 flex items-center justify-center border border-slate-100 shrink-0">
                  <img
                    src={recommendedProduct.image}
                    alt={recommendedProduct.name}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold bg-amber-500 text-white px-2 py-0.5 rounded">
                      {recommendedProduct.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-600">
                      {recommendedProduct.discountPercent}% OFF
                    </span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">{recommendedProduct.name}</h4>
                  <p className="text-xs text-slate-500">{recommendedProduct.subtitle}</p>
                  
                  <div className="pt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-black text-slate-900">
                      ₹{recommendedProduct.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      ₹{recommendedProduct.mrp.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleWhatsAppQuizLead}
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>Get Deal on WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    onAddToCart(recommendedProduct);
                    onClose();
                  }}
                  className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart & Checkout</span>
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs">
                <button
                  onClick={() => {
                    onSelectProduct(recommendedProduct);
                    onClose();
                  }}
                  className="text-brand-600 font-bold hover:underline"
                >
                  View Full Specs
                </button>
                <span className="text-slate-300">•</span>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
