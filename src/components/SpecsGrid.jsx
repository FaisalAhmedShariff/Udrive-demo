import { Gauge, Zap, Flame, Users, Sliders, Fuel } from "lucide-react";

export default function SpecsGrid({ horsepower, acceleration, topSpeed, seats, specs, className = "" }) {
  const specItems = [
    { icon: Gauge, label: "Top Speed", value: topSpeed || specs?.topSpeed || "N/A" },
    { icon: Zap, label: "0–100 km/h", value: acceleration },
    { icon: Flame, label: "Horsepower", value: `${horsepower} HP` },
    { icon: Users, label: "Seats", value: `${seats}` },
    { icon: Sliders, label: "Transmission", value: specs?.transmission || "Automatic" },
    { icon: Fuel, label: "Fuel Type", value: specs?.fuelType || "Super (98)" },
  ];

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 ${className}`}>
      {specItems.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-4 hover:border-accent/15 transition-colors"
        >
          <Icon className="w-5 h-5 text-accent mb-3" />
          <span className="text-[10px] uppercase text-gray-600 block tracking-wider">{label}</span>
          <span className="text-sm font-bold text-white mt-1 block">{value}</span>
        </div>
      ))}
    </div>
  );
}
