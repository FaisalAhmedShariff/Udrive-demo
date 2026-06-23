// src/components/VehicleCard.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Users, Zap, Fuel, Sparkles, MessageCircle, Info } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function VehicleCard({ vehicle, onBookNow }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e) => {
    // Avoid triggering expand if clicking buttons
    if (e.target.closest("button") || e.target.closest("a")) return;
    setIsExpanded(!isExpanded);
  };

  // Calculate monthly daily equivalent for visual framing of better value
  const monthlyDailyEquivalent = Math.round(vehicle.pricing.monthly / 30);
  const percentSavings = Math.round(
    ((vehicle.pricing.daily - monthlyDailyEquivalent) / vehicle.pricing.daily) * 100
  );

  return (
    <div
      onClick={toggleExpand}
      className={`bg-[#121212] border transition-all duration-300 rounded overflow-hidden flex flex-col justify-between cursor-pointer group ${
        isExpanded
          ? "border-gold-500 shadow-lg shadow-gold-500/5 ring-1 ring-gold-500/20"
          : "border-white/5 hover:border-white/20 hover:translate-y-[-4px]"
      }`}
    >
      {/* Image & Badge Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-black/40">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.brand} ${vehicle.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Ribbon Badges */}
        {vehicle.isOwnFleet ? (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-gold-600 to-gold-700 text-black text-[9px] uppercase tracking-widest font-black px-2.5 py-1 rounded-sm shadow-md flex items-center gap-1">
            <Sparkles className="w-3 h-3 fill-black" />
            <span>Our Fleet</span>
          </div>
        ) : (
          vehicle.pricing.daily >= 3000 && (
            <div className="absolute top-3 left-3 bg-red-600 text-white text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm shadow-md">
              Best Offer
            </div>
          )
        )}

        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-gray-300 text-[10px] px-2 py-0.5 rounded">
          {vehicle.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Name */}
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs uppercase text-gold-500 tracking-wider font-semibold block">{vehicle.brand}</span>
              <h4 className="text-lg font-bold text-white leading-tight mt-0.5">{vehicle.name}</h4>
            </div>
            {/* Quick Specs Icons */}
            <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                <span>{vehicle.seats}</span>
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                <span>{vehicle.acceleration0to100}</span>
              </span>
            </div>
          </div>

          {/* Pricing Box - Dual Pricing */}
          <div className="mt-5 grid grid-cols-2 gap-2 bg-[#090909] border border-white/5 p-3 rounded">
            <div>
              <span className="text-[9px] uppercase text-gray-500 block tracking-wider">1 Day Rate</span>
              <span className="text-sm font-bold text-white">
                AED {vehicle.pricing.daily.toLocaleString()}
                <span className="text-[10px] text-gray-400 font-normal">/day</span>
              </span>
            </div>
            <div className="border-l border-white/5 pl-3 relative">
              <div className="absolute -top-2 right-2 bg-gold-500/10 text-gold-500 text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded border border-gold-500/20">
                Save {percentSavings}%
              </div>
              <span className="text-[9px] uppercase text-gold-500 block tracking-wider font-semibold">Monthly Rate</span>
              <span className="text-sm font-extrabold text-gold-500">
                AED {monthlyDailyEquivalent.toLocaleString()}
                <span className="text-[10px] text-gold-500/80 font-normal">/day</span>
              </span>
            </div>
          </div>
        </div>

        {/* Buttons / Actions */}
        <div className="mt-6 flex gap-2">
          <button
            onClick={() => onBookNow(vehicle)}
            className="flex-1 py-2.5 rounded bg-gradient-to-r from-gold-600 to-gold-700 hover:opacity-90 text-black text-xs uppercase tracking-widest font-black transition-all duration-300"
          >
            Book Now
          </button>
          <Link
            href={`/fleet/${vehicle.id}`}
            className="px-3.5 py-2.5 rounded border border-white/10 hover:border-gold-500 text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center"
            title="View Full Details"
          >
            <Info className="w-4 h-4" />
          </Link>
        </div>

        {/* Inline Expansion Area */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-96 mt-5 pt-4 border-t border-white/5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Quick Specifications list */}
          <div className="grid grid-cols-3 gap-2 mb-4 text-center">
            <div className="bg-[#1a1a1a] p-2 rounded">
              <span className="text-[8px] uppercase text-gray-500 block">Horsepower</span>
              <span className="text-xs font-bold text-white">{vehicle.horsepower} HP</span>
            </div>
            <div className="bg-[#1a1a1a] p-2 rounded">
              <span className="text-[8px] uppercase text-gray-500 block">0-100 km/h</span>
              <span className="text-xs font-bold text-white">{vehicle.acceleration0to100}</span>
            </div>
            <div className="bg-[#1a1a1a] p-2 rounded">
              <span className="text-[8px] uppercase text-gray-500 block">Top Speed</span>
              <span className="text-xs font-bold text-white">{vehicle.specs.topSpeed}</span>
            </div>
          </div>

          {/* Trust points */}
          <div className="space-y-1.5 text-[10px] text-gray-400 mb-4 bg-white/5 p-3 rounded">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              <span>No deposit required for selected drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              <span>Free delivery and pick-up in Dubai</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              <span>Full tank of super fuel upon handover</span>
            </div>
          </div>

          {/* Action Row inside expansion */}
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <WhatsAppButton
              vehicleName={`${vehicle.brand} ${vehicle.name}`}
              dailyPrice={vehicle.pricing.daily}
              className="flex-1 w-full"
            />
            <Link
              href={`/fleet/${vehicle.id}`}
              className="px-4 py-2.5 rounded bg-white/5 hover:bg-white/15 text-white text-xs uppercase tracking-widest font-bold text-center transition-colors"
            >
              Full Specs Page
            </Link>
          </div>
        </div>

        {/* Toggle Indicator */}
        <div className="mt-4 flex justify-center text-[10px] text-gray-600 uppercase tracking-widest select-none">
          {isExpanded ? (
            <span className="flex items-center gap-1 hover:text-gold-500 transition-colors">
              Collapse Details <ChevronUp className="w-3.5 h-3.5" />
            </span>
          ) : (
            <span className="flex items-center gap-1 hover:text-gold-500 transition-colors">
              Expand Specs <ChevronDown className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
