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
  Check
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
      `${idx + 1}. *${item.name}* ${item.selectedColor ? `(Color: ${item.selectedColor})` : ''} x ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}`
    ).join('\n');

    let text = `*🛒 New Water Purifier Order via Website*\n\n`
      + `*Items Ordered:*\n${itemsSummary}\n\n`
      + `*Total Payable:* ₹${subtotal.toLocaleString('en-IN')} (Saved ₹${totalSavings.toLocaleString('en-IN')})\n`
      + `*Installation:* 100% Free Doorstep Setup\n`
      + `*Payment Mode:* Pay on Installation / COD\n`;

    if (customer.name) {
      text += `\n*Customer Details:*\n`
        + `Name: ${customer.name}\n`
        + `Phone: ${customer.phone}\n`
        + `Address: ${customer.address} (PIN: ${customer.pincode})\n`;
    }

    text += `\nPlease confirm technician schedule for delivery & installation.`;

    // Save order
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
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-brand-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">Your Cart</h3>
            <span className="text-xs bg-brand-100 text-brand-800 font-bold px-2 py-0.5 rounded-full">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-slate-700 text-base">Your cart is empty</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                Browse our high-performance RO purifiers and genuine filter replacement spares.
              </p>
              <button
                onClick={onClose}
                className="mt-5 px-5 py-2.5 bg-brand-600 text-white text-xs font-bold rounded-xl shadow-xs hover:bg-brand-700 transition"
              >
                Start Browsing
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              
              {/* Free perks banner */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center gap-2.5 text-xs text-emerald-800 font-medium">
                <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>You qualify for <strong>100% Free Doorstep Delivery & Installation</strong>!</span>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedColor || 'def'}`}
                    className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center gap-3.5"
                  >
                    <div className="w-16 h-16 bg-white rounded-xl p-1.5 flex items-center justify-center border border-slate-100 shrink-0">
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
                        <span className="text-[10px] text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded font-semibold inline-block">
                          {item.selectedColor}
                        </span>
                      )}
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-xs font-black text-slate-900">
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
                          className="w-5 h-5 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-slate-800 w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                          className="w-5 h-5 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded text-xs"
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
                  className="w-full text-left text-xs font-bold text-brand-600 bg-brand-50 p-3 rounded-xl border border-brand-200 flex items-center justify-between"
                >
                  <span>{showCheckoutForm ? 'Hide Delivery Details' : '+ Add Doorstep Delivery Address (Optional)'}</span>
                  <span>{showCheckoutForm ? '▲' : '▼'}</span>
                </button>

                {showCheckoutForm && (
                  <form onSubmit={handleDirectCodCheckout} className="mt-3 space-y-2.5 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs">
                    <div>
                      <label className="block text-slate-700 font-bold mb-0.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh K"
                        value={customer.name}
                        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-0.5">Mobile / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={customer.phone}
                        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-0.5">Delivery Address *</label>
                      <input
                        type="text"
                        required
                        placeholder="Flat/House No., Street, Area"
                        value={customer.address}
                        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-0.5">Pincode</label>
                      <input
                        type="text"
                        placeholder="e.g. 400001"
                        value={customer.pincode}
                        onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
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
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50/90 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Original MRP Total:</span>
                <span className="line-through">₹{totalMrp.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-emerald-600 font-semibold">
                <span>Direct Factory Savings:</span>
                <span>- ₹{totalSavings.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Doorstep Installation:</span>
                <span className="text-emerald-600 font-bold uppercase">Free (₹0)</span>
              </div>
              <div className="flex justify-between text-slate-900 font-black text-base pt-2 border-t border-slate-200">
                <span>Total Amount Payable:</span>
                <span className="text-brand-600">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Checkout CTAs */}
            <div className="space-y-2 pt-1">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>Order via WhatsApp (Instant Confirmation)</span>
              </button>

              <button
                onClick={handleDirectCodCheckout}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Place Order & Pay After Installation</span>
              </button>
            </div>

            <p className="text-[10px] text-center text-slate-400">
              🔒 No advance payment needed • Verified technician inspects TDS before installation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
