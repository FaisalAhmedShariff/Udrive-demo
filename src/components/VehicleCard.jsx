"use client";

import Link from "next/link";
import { Sparkles, Zap, Gauge, ArrowRight } from "lucide-react";
import TrustBadgeRow from "./TrustBadgeRow";
import WhatsAppButton from "./WhatsAppButton";

export default function VehicleCard({ vehicle, variant = "fleet" }) {
  const monthlyDaily = Math.round(vehicle.pricing.monthly / 30);
  const savePct = Math.round(
    ((vehicle.pricing.daily - monthlyDaily) / vehicle.pricing.daily) * 100
  );

  const isFeatured = variant === "featured";

  return (
    <article
      className={`bg-[#121214] border border-white/[0.06] rounded-lg overflow-hidden flex flex-col group transition-all duration-300 hover:border-white/15 ${
        isFeatured ? "hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/[0.04]" : "hover:-translate-y-0.5"
      }`}
    >
      <div className={`relative w-full overflow-hidden bg-black/50 ${isFeatured ? "aspect-[16/10]" : "aspect-video"}`}>
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.brand} ${vehicle.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {vehicle.isOwnFleet && (
          <div className="absolute top-3 left-3 bg-accent text-[#0A0A0B] text-[9px] uppercase tracking-widest font-black px-2.5 py-1 rounded-sm flex items-center gap-1 shadow-lg">
            <Sparkles className="w-3 h-3" />
            Our Fleet
          </div>
        )}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-gray-300 text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
          {vehicle.category}
        </div>
      </div>

      <div className={`flex-1 flex flex-col ${isFeatured ? "p-6" : "p-5"}`}>
        <div>
          <span className="text-[10px] uppercase text-accent tracking-[0.2em] font-semibold">
            {vehicle.brand}
          </span>
          <h4 className={`font-bold text-white leading-tight mt-0.5 ${isFeatured ? "text-xl" : "text-lg"}`}>
            {vehicle.name}
          </h4>

          <div className="flex flex-wrap items-center gap-3 mt-3 text-[11px] text-gray-500">
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-accent/70" />
              {vehicle.horsepower} HP
            </span>
            <span className="text-white/10">|</span>
            <span>{vehicle.acceleration0to100} 0–100</span>
            <span className="text-white/10">|</span>
            <span className="flex items-center gap-1">
              <Gauge className="w-3.5 h-3.5 text-accent/70" />
              {vehicle.topSpeed}
            </span>
          </div>

          <div className="mt-4">
            <TrustBadgeRow compact />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 bg-[#0A0A0B] border border-white/5 p-3 rounded">
            <div>
              <span className="text-[9px] uppercase text-gray-500 block tracking-wider">Daily</span>
              <span className="text-sm font-bold text-white">
                AED {vehicle.pricing.daily.toLocaleString()}
                <span className="text-[10px] text-gray-500 font-normal">/day</span>
              </span>
            </div>
            <div className="border-l border-white/5 pl-3 relative">
              <span className="absolute -top-1.5 right-0 bg-accent/15 text-accent text-[8px] font-bold uppercase px-1.5 py-0.5 rounded border border-accent/25">
                Save {savePct}%
              </span>
              <span className="text-[9px] uppercase text-accent block tracking-wider font-semibold">
                Monthly
              </span>
              <span className="text-sm font-extrabold text-accent">
                AED {monthlyDaily.toLocaleString()}
                <span className="text-[10px] font-normal opacity-80">/day</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <WhatsAppButton
            vehicleName={`${vehicle.brand} ${vehicle.name}`}
            dailyPrice={vehicle.pricing.daily}
            className="w-full py-2.5"
          />
          <Link
            href={`/fleet/${vehicle.id}`}
            className="w-full py-2.5 rounded border border-white/10 hover:border-accent/50 text-gray-300 hover:text-white text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2"
          >
            View Full Details
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
