import React, { useState, useEffect } from 'react';
import { 
  getSavedOrders, 
  getSavedServices, 
  getSavedWaterTests, 
  exportToCSV 
} from '../utils/storage';
import { 
  X, 
  Download, 
  ShoppingBag, 
  Wrench, 
  Droplets, 
  Trash2, 
  RefreshCw,
  PhoneCall,
  UserCheck
} from 'lucide-react';

export default function AdminLeadsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('orders'); // 'orders', 'services', 'tests'
  const [orders, setOrders] = useState([]);
  const [services, setServices] = useState([]);
  const [tests, setTests] = useState([]);

  const refreshData = () => {
    setOrders(getSavedOrders());
    setServices(getSavedServices());
    setTests(getSavedWaterTests());
  };

  useEffect(() => {
    refreshData();
  }, [isOpen]);

  const handleExport = () => {
    if (activeTab === 'orders') {
      const flattened = orders.map(o => ({
        OrderID: o.id,
        Date: o.createdAt,
        CustomerName: o.customer?.name || 'N/A',
        Phone: o.customer?.phone || 'N/A',
        Address: o.customer?.address || 'N/A',
        Pincode: o.customer?.pincode || 'N/A',
        TotalAmount: o.subtotal,
        PaymentMethod: o.paymentMethod,
        ItemsCount: o.items?.length || 0,
        ItemsDetail: o.items?.map(i => `${i.name} (x${i.quantity})`).join('; ')
      }));
      exportToCSV(flattened, 'aquapure_orders');
    } else if (activeTab === 'services') {
      exportToCSV(services, 'aquapure_service_bookings');
    } else {
      exportToCSV(tests, 'aquapure_free_water_tests');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative bg-[#0c101a] text-white w-full max-w-4xl rounded-3xl shadow-2xl border border-white/[0.12] overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white/[0.02] p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="font-black text-lg sm:text-xl tracking-tight uppercase">Partner Operations Console</h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5 font-light">
              Review allocations, maintenance dispatch requests, and diagnostic water audit requests.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExport}
              className="bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black uppercase tracking-wider px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition"
              title="Download CSV for Excel"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="bg-white/[0.01] px-6 py-3 border-b border-white/[0.06] flex items-center justify-between gap-2 overflow-x-auto">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'orders'
                  ? 'bg-cyan-500 text-black font-black'
                  : 'text-slate-400 hover:text-white bg-white/[0.03]'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Direct Orders ({orders.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'services'
                  ? 'bg-amber-500 text-black font-black'
                  : 'text-slate-400 hover:text-white bg-white/[0.03]'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>AMC & Repairs ({services.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('tests')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'tests'
                  ? 'bg-emerald-500 text-black font-black'
                  : 'text-slate-400 hover:text-white bg-white/[0.03]'
              }`}
            >
              <Droplets className="w-3.5 h-3.5" />
              <span>TDS Audits ({tests.length})</span>
            </button>
          </div>

          <button
            onClick={refreshData}
            className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" /> Refresh
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {/* 1. Orders Tab */}
          {activeTab === 'orders' && (
            orders.length === 0 ? (
              <div className="text-center py-16 text-slate-500 text-xs font-light">
                No orders recorded yet. As orders are generated, they populate in real-time.
              </div>
            ) : (
              <div className="space-y-3">
                {orders.map((ord) => (
                  <div key={ord.id} className="p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06] text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                        {ord.id}
                      </span>
                      <span className="text-slate-500 text-[11px]">
                        {new Date(ord.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                      <div>
                        <strong>Client:</strong> {ord.customer?.name || 'WhatsApp Lead'} <br />
                        <strong>Phone:</strong> {ord.customer?.phone || 'Direct Chat'} <br />
                        <strong>Sanctuary:</strong> {ord.customer?.address || 'To be confirmed'} (PIN: {ord.customer?.pincode || '-'})
                      </div>
                      <div>
                        <strong>Total:</strong> ₹{ord.subtotal?.toLocaleString('en-IN')} <br />
                        <strong>Protocol:</strong> {ord.paymentMethod} <br />
                        <strong>Items:</strong> {ord.items?.map(i => `${i.name} (x${i.quantity})`).join(', ')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}

          {/* 2. Services Tab */}
          {activeTab === 'services' && (
            services.length === 0 ? (
              <div className="text-center py-16 text-slate-500 text-xs font-light">
                No service bookings recorded yet.
              </div>
            ) : (
              <div className="space-y-3">
                {services.map((srv) => (
                  <div key={srv.id} className="p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06] text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                        {srv.id}
                      </span>
                      <span className="text-slate-500 text-[11px]">
                        {new Date(srv.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                      <div>
                        <strong>Client:</strong> {srv.name} ({srv.phone}) <br />
                        <strong>Sanctuary:</strong> {srv.address} (PIN: {srv.pincode})
                      </div>
                      <div>
                        <strong>Tier:</strong> {srv.serviceType} <br />
                        <strong>Apparatus:</strong> {srv.brand} <br />
                        <strong>Slot Window:</strong> {srv.preferredSlot}
                      </div>
                    </div>
                    {srv.notes && (
                      <div className="text-[11px] text-slate-400 bg-white/[0.02] p-2 rounded-lg border border-white/[0.04] mt-1">
                        <strong>Technician Directives:</strong> {srv.notes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )
          )}

          {/* 3. Water Tests Tab */}
          {activeTab === 'tests' && (
            tests.length === 0 ? (
              <div className="text-center py-16 text-slate-500 text-xs font-light">
                No free water test leads yet.
              </div>
            ) : (
              <div className="space-y-3">
                {tests.map((t) => (
                  <div key={t.id} className="p-4 bg-white/[0.03] rounded-2xl border border-white/[0.06] text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                        {t.id}
                      </span>
                      <span className="text-slate-500 text-[11px]">
                        {new Date(t.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                      <div>
                        <strong>Client:</strong> {t.name} <br />
                        <strong>Phone:</strong> {t.phone}
                      </div>
                      <div>
                        <strong>Address:</strong> {t.address} (PIN: {t.pincode}) <br />
                        <strong>Source:</strong> {t.waterSource} <br />
                        <strong>Timing:</strong> {t.preferredTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        {/* Footer */}
        <div className="bg-white/[0.02] p-4 border-t border-white/[0.08] flex justify-between items-center text-xs text-slate-400">
          <span>Client intelligence stored locally with verified privacy shield.</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-white/[0.08] hover:bg-white/[0.15] text-white font-bold rounded-xl transition"
          >
            Close Terminal
          </button>
        </div>
      </div>
    </div>
  );
}
