export const AMC_PLANS = [
  {
    id: "silver-amc",
    name: "Silver Maintenance Plan",
    badge: "Basic Care",
    badgeColor: "bg-slate-700",
    price: 1499,
    originalPrice: 2200,
    duration: "1 Year (12 Months)",
    idealFor: "Purifiers under 2 years old needing regular checkups",
    features: [
      "3 Scheduled Preventive Maintenance Visits / Year",
      "2 Free Pre-Filter Candle Replacements",
      "Complimentary Water TDS & Purity Test on every visit",
      "Unlimited breakdown emergency call-outs within 24 hours",
      "Zero inspection charges on service visits",
      "Electrical & major spares billed at 20% discount"
    ],
    covered: [
      "Labor & Service Charges",
      "2x Spun PP Candles",
      "TDS Calibration",
      "Leakage Rectification"
    ],
    notCovered: ["RO Membrane, Booster Pump & Inline Filters (available at discounted rate)"]
  },
  {
    id: "gold-comprehensive-amc",
    name: "Gold Comprehensive Plan",
    badge: "Most Recommended",
    badgeColor: "bg-amber-600",
    isPopular: true,
    price: 2999,
    originalPrice: 4500,
    duration: "1 Year (12 Months)",
    idealFor: "Complete peace of mind: All consumable filters included",
    features: [
      "Full Replacement of All Consumable Inline Filters (Sediment + Pre-Carbon + Post-Carbon)",
      "2 Free External Spun Pre-Filter Candles",
      "3 Periodic General Service & Deep Chemical Sanitization Visits",
      "1 Free RO Membrane Replacement (if rejection falls below safe standards)",
      "Electrical spares covered (SMPS Power Adapter & Solenoid Valve)",
      "Unlimited breakdown support with priority 12-24 hr technician dispatch",
      "Free doorstep labor on every visit"
    ],
    covered: [
      "All Inline Filters (Sediment, Carbon)",
      "RO Membrane (1 Replacement)",
      "SMPS Power Supply",
      "Solenoid Valve (SV)",
      "All Service & Labor Charges"
    ],
    notCovered: ["Booster Pump replacement (covered under Diamond Plan)"]
  },
  {
    id: "diamond-vip-amc",
    name: "Diamond 100% Zero-Expense Plan",
    badge: "All-Inclusive VIP",
    badgeColor: "bg-cyan-700",
    price: 4499,
    originalPrice: 6500,
    duration: "1 Year (12 Months)",
    idealFor: "Zero out-of-pocket expenses for any part, pump or filter",
    features: [
      "100% Complete Part & Filter Coverage without exceptions",
      "Includes Heavy-Duty RO Booster Pump repair or replacement",
      "Bio-Copper & Alkaline Cartridge replacement included",
      "Original Vontron / Filmtec High-TDS RO Membrane replacement",
      "4 Seasonal Deep Servicing Visits per year",
      "Express 6 to 12 hour VIP Technician response guarantee",
      "Free Purifier Relocation / Re-installation once per year"
    ],
    covered: [
      "Booster Pump (Repair/Replace)",
      "RO Membrane & All Inlines",
      "Copper & Alkaline Cartridges",
      "SMPS, SV, Float Valve, Wiring",
      "All Labor & Unlimited Emergency Calls"
    ],
    notCovered: ["Physical body breakage or cosmetic external scratches"]
  }
];

export const ONE_TIME_SERVICES = [
  {
    id: "general-service",
    title: "Complete Purifier Deep Servicing",
    description: "Full system check, tank sterilization, filter cleaning & TDS calibration.",
    price: 399,
    originalPrice: 599,
    duration: "45 mins"
  },
  {
    id: "filter-replacement-visit",
    title: "Filter Change & Service Combo",
    description: "Includes replacement of external pre-filter candle + internal filter testing.",
    price: 549,
    originalPrice: 799,
    duration: "45 mins"
  },
  {
    id: "leakage-repair",
    title: "Water Leakage & Low Flow Repair",
    description: "Fix dripping pipes, low water dispensing speed, or unusual pump vibration.",
    price: 349,
    originalPrice: 499,
    duration: "30 mins"
  },
  {
    id: "reinstallation-shifting",
    title: "Purifier Uninstallation & Re-Installation",
    description: "Safely unmount from old kitchen and securely mount in new home with plumbing.",
    price: 699,
    originalPrice: 999,
    duration: "60 mins"
  }
];
