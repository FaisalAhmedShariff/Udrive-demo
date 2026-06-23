// src/components/TrustBadgeRow.jsx
import React from "react";
import { Shield, Fuel, Navigation, CheckSquare } from "lucide-react";

export default function TrustBadgeRow({ className = "" }) {
  const badges = [
    {
      icon: <Shield className="w-5 h-5 text-gold-500" />,
      title: "No deposit",
      desc: "Zero security deposit required"
    },
    {
      icon: <Fuel className="w-5 h-5 text-gold-500" />,
      title: "Full tank gift",
      desc: "Delivered with a full tank of super fuel"
    },
    {
      icon: <Navigation className="w-5 h-5 text-gold-500" />,
      title: "Free delivery",
      desc: "Free drop-off anywhere in Dubai"
    },
    {
      icon: <CheckSquare className="w-5 h-5 text-gold-500" />,
      title: "Insurance included",
      desc: "Comprehensive luxury insurance policy"
    }
  ];

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 ${className}`}>
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 bg-white/5 border border-white/5 rounded p-3 hover:border-gold-500/30 transition-all duration-300 group"
        >
          <div className="p-2 rounded bg-white/5 group-hover:bg-gold-500/10 transition-colors">
            {badge.icon}
          </div>
          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-wider">{badge.title}</h5>
            <p className="text-[10px] text-gray-500 leading-normal mt-0.5">{badge.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
