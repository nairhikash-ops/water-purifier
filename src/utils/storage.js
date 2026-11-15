// Local storage helpers for customer leads, orders, and service requests

const ORDERS_KEY = 'aquapure_orders_v1';
const SERVICES_KEY = 'aquapure_service_bookings_v1';
const WATER_TESTS_KEY = 'aquapure_water_tests_v1';

export const getSavedOrders = () => {
  try {
    const data = localStorage.getItem(ORDERS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const saveOrder = (order) => {
  const existing = getSavedOrders();
  const newOrder = {
    ...order,
    id: `ORD-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString()
  };
  localStorage.setItem(ORDERS_KEY, JSON.stringify([newOrder, ...existing]));
  return newOrder;
};

export const getSavedServices = () => {
  try {
    const data = localStorage.getItem(SERVICES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const saveServiceBooking = (booking) => {
  const existing = getSavedServices();
  const newBooking = {
    ...booking,
    id: `SRV-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString()
  };
  localStorage.setItem(SERVICES_KEY, JSON.stringify([newBooking, ...existing]));
  return newBooking;
};

export const getSavedWaterTests = () => {
  try {
    const data = localStorage.getItem(WATER_TESTS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const saveWaterTest = (lead) => {
  const existing = getSavedWaterTests();
  const newLead = {
    ...lead,
    id: `TDS-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString()
  };
  localStorage.setItem(WATER_TESTS_KEY, JSON.stringify([newLead, ...existing]));
  return newLead;
};

export const exportToCSV = (data, filename) => {
  if (!data || !data.length) return;
  const keys = Object.keys(data[0]);
  const csvContent = "data:text/csv;charset=utf-8," 
    + [
        keys.join(','),
        ...data.map(row => keys.map(k => {
          let val = row[k];
          if (typeof val === 'object') val = JSON.stringify(val);
          return `"${String(val || '').replace(/"/g, '""')}"`;
        }).join(','))
      ].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${filename}_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
