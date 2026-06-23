// src/components/SpecsGrid.jsx
import React from "react";
import { Gauge, Zap, Flame, Users, Sliders, Fuel } from "lucide-react";

export default function SpecsGrid({ horsepower, acceleration, seats, specs, className = "" }) {
  const specItems = [
    {
      icon: <Zap className="w-5 h-5 text-gold-500" />,
      label: "0-100 km/h",
      value: acceleration
    },
    {
      icon: <Flame className="w-5 h-5 text-gold-500" />,
      label: "Horsepower",
      value: `${horsepower} HP`
    },
    {
      icon: <Gauge className="w-5 h-5 text-gold-500" />,
      label: "Top Speed",
      value: specs?.topSpeed || "N/A"
    },
    {
      icon: <Users className="w-5 h-5 text-gold-500" />,
      label: "Seats",
      value: `${seats} Seats`
    },
    {
      icon: <Sliders className="w-5 h-5 text-gold-500" />,
      label: "Transmission",
      value: specs?.transmission || "Automatic"
    },
    {
      icon: <Fuel className="w-5 h-5 text-gold-500" />,
      label: "Fuel Type",
      value: specs?.fuelType || "Super"
    }
  ];

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 ${className}`}>
      {specItems.map((spec, idx) => (
        <div
          key={idx}
          className="bg-white/5 border border-white/5 rounded p-4 flex flex-col justify-between hover:border-gold-500/10 transition-colors"
        >
          <div className="p-2 bg-white/5 rounded w-fit mb-3">
            {spec.icon}
          </div>
          <div>
            <span className="text-[10px] uppercase text-gray-500 block font-medium tracking-wider">{spec.label}</span>
            <span className="text-sm font-bold text-white mt-1 block">{spec.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
