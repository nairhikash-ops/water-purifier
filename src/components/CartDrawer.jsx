import React, { useState } from 'react';
import { COMPANY_CONFIG, createWhatsAppUrl } from '../data/companyConfig';
import { saveOrder } from '../utils/storage';
import confetti from 'canvas-confetti';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  ArrowRight,
  Check,
  Sparkles
} from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart,
  onOrderCompleted
}) {
  if (!isOpen) return null;

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    paymentMethod: 'Pay on Installation / COD'
  });

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalMrp = cartItems.reduce((acc, item) => acc + item.mrp * item.quantity, 0);
  const totalSavings = totalMrp - subtotal;

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;
    if (showCheckoutForm && (!customer.name || !customer.phone || !customer.address)) {
      alert("Please enter your name, phone number, and address.");
      return;
    }

    const itemsSummary = cartItems.map((item, idx) => 
      `${idx + 1}. *${item.name}* ${item.selectedColor ? `(Finish: ${item.selectedColor})` : ''} x ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}`
    ).join('\n');

    let text = `*🛒 New Water Purifier Order via AquaPure*\n\n`
      + `*Items Reserved:*\n${itemsSummary}\n\n`
      + `*Total Payable:* ₹${subtotal.toLocaleString('en-IN')} (Direct Factory Savings: ₹${totalSavings.toLocaleString('en-IN')})\n`
      + `*Installation:* 100% Free Doorstep Delivery & Wall-Mount Setup\n`
      + `*Payment:* Pay After Installation & Live TDS Test\n`;

    if (customer.name) {
      text += `\n*Delivery Address:*\n`
        + `Name: ${customer.name}\n`
        + `Phone: ${customer.phone}\n`
        + `Address: ${customer.address} (PIN: ${customer.pincode})\n`;
    }

    text += `\nPlease confirm technician arrival schedule.`;

    const savedOrder = saveOrder({
      items: cartItems,
      subtotal,
      customer,
      paymentMethod: 'WhatsApp Order / Pay on Installation'
    });

    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    onClearCart();
    onClose();
    if (onOrderCompleted) onOrderCompleted(savedOrder);

    window.open(createWhatsAppUrl(text), '_blank');
  };

  const handleDirectCodCheckout = (e) => {
    e.preventDefault();
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill in your name, phone number, and delivery address.");
      return;
    }

    const savedOrder = saveOrder({
      items: cartItems,
      subtotal,
      customer,
      paymentMethod: customer.paymentMethod
    });

    confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
    onClearCart();
    onClose();
    if (onOrderCompleted) onOrderCompleted(savedOrder);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div 
        className="w-full max-w-md bg-white text-slate-900 h-full shadow-2xl border-l border-slate-200 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-sky-600" />
            <h3 className="font-black text-[#0a2540] text-lg uppercase tracking-tight">Your Cart</h3>
            <span className="text-[10px] font-bold uppercase bg-sky-100 text-sky-800 border border-sky-200 px-2 py-0.5 rounded-full">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)} Items
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="w-16 h-16 bg-slate-100 border border-slate-200 text-slate-400 rounded-2xl flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-slate-800 text-base">Your cart is empty</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Explore our factory-direct copper and alkaline water purifier models.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-xs"
              >
                Browse Purifiers
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              
              {/* Free perks banner */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center gap-2.5 text-xs text-emerald-800 font-medium">
                <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Qualified for <strong>100% Free Doorstep Delivery & Setup</strong>!</span>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedColor || 'def'}`}
                    className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-3.5"
                  >
                    <div className="w-16 h-16 bg-white rounded-xl p-1.5 flex items-center justify-center border border-slate-200 shrink-0 shadow-2xs">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full w-auto object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                        {item.name}
                      </h4>
                      {item.selectedColor && (
                        <span className="text-[10px] text-sky-800 bg-sky-100 border border-sky-200 px-1.5 py-0.5 rounded font-semibold inline-block mt-0.5">
                          Finish: {item.selectedColor}
                        </span>
                      )}
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-xs font-black text-[#0a2540]">
                          ₹{item.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-slate-400 line-through">
                          ₹{item.mrp.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => onRemoveItem(item.id, item.selectedColor)}
                        className="text-slate-400 hover:text-rose-600 transition p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                          className="w-5 h-5 flex items-center justify-center text-slate-600 hover:text-slate-900 rounded text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-slate-900 w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                          className="w-5 h-5 flex items-center justify-center text-slate-600 hover:text-slate-900 rounded text-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Address Form Accordion */}
              <div className="pt-2">
                <button
                  onClick={() => setShowCheckoutForm(!showCheckoutForm)}
                  className="w-full text-left text-xs font-bold text-sky-700 bg-sky-50 p-3 rounded-xl border border-sky-200 flex items-center justify-between"
                >
                  <span>{showCheckoutForm ? 'Hide Delivery Address Details' : '+ Add Installation Address (Optional)'}</span>
                  <span className="text-[10px]">{showCheckoutForm ? '▲' : '▼'}</span>
                </button>

                {showCheckoutForm && (
                  <form onSubmit={handleDirectCodCheckout} className="mt-3 space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh K"
                        value={customer.name}
                        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">WhatsApp / Contact Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={customer.phone}
                        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Installation Address *</label>
                      <input
                        type="text"
                        required
                        placeholder="Apartment/Villa No, Society, Area"
                        value={customer.address}
                        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Pincode</label>
                      <input
                        type="text"
                        placeholder="e.g. 400001"
                        value={customer.pincode}
                        onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </form>
                )}
              </div>

            </div>
          )}
        </div>

        {/* Drawer Footer with Calculations & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3.5">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Retail Showroom MRP:</span>
                <span className="line-through">₹{totalMrp.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-emerald-700 font-bold">
                <span>Direct Factory Savings:</span>
                <span>- ₹{totalSavings.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Doorstep Installation:</span>
                <span className="text-emerald-700 font-bold uppercase">Free (₹0)</span>
              </div>
              <div className="flex justify-between text-[#0a2540] font-black text-base pt-2 border-t border-slate-200">
                <span>Total Due Upon Setup:</span>
                <span className="text-xl font-black text-[#0a2540]">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Checkout CTAs */}
            <div className="space-y-2.5 pt-1">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>Instant WhatsApp Order (Pay ₹0 Today)</span>
              </button>

              <button
                onClick={handleDirectCodCheckout}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-2xs transition"
              >
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Reserve with Pay-on-Installation</span>
              </button>
            </div>

            <p className="text-[10px] text-center text-slate-500">
              🔒 Zero advance deposit required • Pay directly to technician after installation & TDS check.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
