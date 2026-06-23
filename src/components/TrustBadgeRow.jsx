import { Shield, Fuel, Navigation, CheckSquare } from "lucide-react";
import { trustBadges } from "@/data/mockVehicles";

const ICONS = [Shield, Fuel, Navigation, CheckSquare];

export default function TrustBadgeRow({ className = "", compact = false }) {
  if (compact) {
    return (
      <div className={`flex flex-wrap gap-1.5 ${className}`}>
        {trustBadges.map((badge) => (
          <span
            key={badge.title}
            className="text-[9px] uppercase tracking-wider text-gray-500 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded"
          >
            {badge.title}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 ${className}`}>
      {trustBadges.map((badge, idx) => {
        const Icon = ICONS[idx];
        return (
          <div
            key={badge.title}
            className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-lg p-3.5 hover:border-accent/25 transition-colors group"
          >
            <div className="p-2 rounded bg-white/[0.04] group-hover:bg-accent/10 transition-colors">
              <Icon className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h5 className="text-white text-[11px] font-bold uppercase tracking-wider">
                {badge.title}
              </h5>
              <p className="text-[10px] text-gray-500 leading-snug mt-0.5">{badge.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
