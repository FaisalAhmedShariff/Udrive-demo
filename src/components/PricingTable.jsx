export default function PricingTable({ pricing, className = "" }) {
  const weeklyDaily = Math.round(pricing.weekly / 7);
  const monthlyDaily = Math.round(pricing.monthly / 30);
  const weeklySave = pricing.daily - weeklyDaily;
  const monthlySavePct = Math.round(((pricing.daily - monthlyDaily) / pricing.daily) * 100);

  return (
    <div className={`bg-[#0E0E0F] border border-white/5 rounded-lg p-6 space-y-4 ${className}`}>
      <h4 className="text-white text-xs uppercase tracking-widest font-bold border-b border-white/5 pb-2">
        Rental Rates (AED)
      </h4>
      <div className="space-y-3.5">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-400">Daily (1–6 days)</span>
          <span className="text-white font-semibold">
            AED {pricing.daily.toLocaleString()}
            <span className="text-xs font-normal text-gray-500"> /day</span>
          </span>
        </div>

        <div className="flex justify-between items-center text-sm border-t border-white/5 pt-3">
          <div className="flex flex-col">
            <span className="text-gray-400">Weekly (7+ days)</span>
            {weeklySave > 0 && (
              <span className="text-[10px] text-gray-600">
                Save AED {weeklySave.toLocaleString()}/day vs daily
              </span>
            )}
          </div>
          <div className="text-right">
            <span className="text-white font-semibold block">
              AED {pricing.weekly.toLocaleString()}
            </span>
            <span className="text-[10px] text-accent font-medium uppercase tracking-wider block">
              AED {weeklyDaily.toLocaleString()} /day
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm border border-accent/20 bg-accent/[0.06] -mx-6 px-6 py-3 rounded-sm">
          <div className="flex flex-col">
            <span className="text-accent font-bold uppercase tracking-wider text-xs">
              Monthly — Best Value
            </span>
            <span className="text-[10px] text-accent/60">Save {monthlySavePct}% vs daily rate</span>
          </div>
          <div className="text-right">
            <span className="text-accent font-black text-base block">
              AED {pricing.monthly.toLocaleString()}
            </span>
            <span className="text-[10px] text-accent/80 font-bold uppercase tracking-wider block">
              AED {monthlyDaily.toLocaleString()} /day
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
