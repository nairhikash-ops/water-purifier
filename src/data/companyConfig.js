export const COMPANY_CONFIG = {
  brandName: "AquaPure Solutions",
  tagline: "Authorised Water Purification & Doorstep Service Hub",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  whatsapp: "919876543210",
  email: "support@aquapuresolutions.in",
  address: "Shop No. 14, Purity Market, Water Works Road, City Center",
  serviceAreas: ["Mumbai", "Thane", "Navi Mumbai", "Pune", "Delhi NCR", "Bengaluru", "Direct Shipping Pan-India"],
  workingHours: "8:00 AM - 9:00 PM (All 7 Days)",
  warrantyBadge: "1 Year Comprehensive On-Site Warranty",
  installationBadge: "Free Doorstep Installation Within 24-48 Hours",
  returnBadge: "100% Genuine Certified Brand Products",
};

export const createWhatsAppUrl = (message) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${COMPANY_CONFIG.whatsapp}?text=${encoded}`;
};
