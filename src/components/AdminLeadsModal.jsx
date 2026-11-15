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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="font-extrabold text-lg sm:text-xl">Operations & Customer Leads Hub</h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Review all customer orders, repair bookings, and free water test leads received on your website.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExport}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 shadow-sm transition"
              title="Download CSV for Excel"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export to CSV</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="bg-slate-100/80 px-6 py-2.5 border-b border-slate-200 flex items-center justify-between gap-2 overflow-x-auto">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'orders'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5 text-brand-600" />
              <span>Customer Orders ({orders.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'services'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Wrench className="w-3.5 h-3.5 text-amber-600" />
              <span>Service Bookings ({services.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('tests')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'tests'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Droplets className="w-3.5 h-3.5 text-cyan-600" />
              <span>Free Water Tests ({tests.length})</span>
            </button>
          </div>

          <button
            onClick={refreshData}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" /> Refresh
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {/* 1. Orders Tab */}
          {activeTab === 'orders' && (
            orders.length === 0 ? (
              <div className="text-center py-14 text-slate-400 text-xs">
                No orders recorded yet. When customers place an order or order on WhatsApp, it shows up here.
              </div>
            ) : (
              <div className="space-y-3">
                {orders.map((ord) => (
                  <div key={ord.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {ord.id}
                      </span>
                      <span className="text-slate-400 text-[11px]">
                        {new Date(ord.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                      <div>
                        <strong>Customer:</strong> {ord.customer?.name || 'Direct WhatsApp Inquirer'} <br />
                        <strong>Phone:</strong> {ord.customer?.phone || 'Via WhatsApp'} <br />
                        <strong>Address:</strong> {ord.customer?.address || 'Will confirm on call'} (PIN: {ord.customer?.pincode || '-'})
                      </div>
                      <div>
                        <strong>Total Amount:</strong> ₹{ord.subtotal?.toLocaleString('en-IN')} <br />
                        <strong>Payment:</strong> {ord.paymentMethod} <br />
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
              <div className="text-center py-14 text-slate-400 text-xs">
                No service bookings recorded yet.
              </div>
            ) : (
              <div className="space-y-3">
                {services.map((srv) => (
                  <div key={srv.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {srv.id}
                      </span>
                      <span className="text-slate-400 text-[11px]">
                        {new Date(srv.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                      <div>
                        <strong>Customer:</strong> {srv.name} ({srv.phone}) <br />
                        <strong>Address:</strong> {srv.address} (PIN: {srv.pincode})
                      </div>
                      <div>
                        <strong>Service Type:</strong> {srv.serviceType} <br />
                        <strong>Brand/Model:</strong> {srv.brand} <br />
                        <strong>Slot:</strong> {srv.preferredSlot}
                      </div>
                    </div>
                    {srv.notes && (
                      <div className="text-[11px] text-slate-500 bg-white p-2 rounded-lg border border-slate-100 mt-1">
                        <strong>Problem Notes:</strong> {srv.notes}
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
              <div className="text-center py-14 text-slate-400 text-xs">
                No free water test leads yet.
              </div>
            ) : (
              <div className="space-y-3">
                {tests.map((t) => (
                  <div key={t.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                        {t.id}
                      </span>
                      <span className="text-slate-400 text-[11px]">
                        {new Date(t.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                      <div>
                        <strong>Name:</strong> {t.name} <br />
                        <strong>Phone:</strong> {t.phone}
                      </div>
                      <div>
                        <strong>Address:</strong> {t.address} (PIN: {t.pincode}) <br />
                        <strong>Water Source:</strong> {t.waterSource} <br />
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
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>All leads are saved locally in browser memory and exportable to CSV.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
}
