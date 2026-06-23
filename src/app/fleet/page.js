"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { mockVehicles } from "@/data/mockVehicles";
import VehicleCard from "@/components/VehicleCard";
import ScrollReveal from "@/components/ScrollReveal";
import { SlidersHorizontal, RefreshCw } from "lucide-react";

function FleetContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "All");
  const [selectedSeats, setSelectedSeats] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const brands = useMemo(() => {
    const allBrands = mockVehicles.map((v) => v.brand);
    return ["All", ...Array.from(new Set(allBrands))];
  }, []);

  const categories = ["All", "Sports", "SUV", "Luxury Sedan"];
  const seatOptions = ["All", "2", "4", "5"];
  const priceRanges = [
    { label: "All Prices", value: "All" },
    { label: "Under AED 2,500", value: "under-2500" },
    { label: "AED 2,500 – 4,000", value: "2500-4000" },
    { label: "Over AED 4,000", value: "over-4000" },
  ];

  const filteredVehicles = useMemo(() => {
    return mockVehicles.filter((vehicle) => {
      if (selectedBrand !== "All" && vehicle.brand !== selectedBrand) return false;
      if (selectedCategory !== "All" && vehicle.category !== selectedCategory) return false;
      if (selectedSeats !== "All" && vehicle.seats.toString() !== selectedSeats) return false;
      if (selectedPrice !== "All") {
        const price = vehicle.pricing.daily;
        if (selectedPrice === "under-2500" && price >= 2500) return false;
        if (selectedPrice === "2500-4000" && (price < 2500 || price > 4000)) return false;
        if (selectedPrice === "over-4000" && price <= 4000) return false;
      }
      return true;
    });
  }, [selectedBrand, selectedCategory, selectedSeats, selectedPrice]);

  const resetFilters = () => {
    setSelectedBrand("All");
    setSelectedCategory("All");
    setSelectedSeats("All");
    setSelectedPrice("All");
  };

  return (
    <div className="pt-24 min-h-screen bg-luxury-black pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ScrollReveal>
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold block mb-1">
            Full Inventory
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white uppercase tracking-wide">
            Our <span className="accent-text-gradient">Fleet</span>
          </h1>
          <p className="text-gray-500 text-sm mt-3 max-w-xl">
            Filter by brand, category, seats, or daily rate. All prices in AED.
          </p>
        </ScrollReveal>
      </div>

      <div className="sticky top-[68px] z-30 bg-[#0A0A0B]/95 backdrop-blur-lg border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-end">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase tracking-wider text-gray-600 font-medium">
                  Brand
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="bg-[#121214] border border-white/[0.08] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-accent cursor-pointer"
                >
                  {brands.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase tracking-wider text-gray-600 font-medium">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-[#121214] border border-white/[0.08] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-accent cursor-pointer"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase tracking-wider text-gray-600 font-medium">
                  Seats
                </label>
                <select
                  value={selectedSeats}
                  onChange={(e) => setSelectedSeats(e.target.value)}
                  className="bg-[#121214] border border-white/[0.08] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-accent cursor-pointer"
                >
                  {seatOptions.map((s) => (
                    <option key={s} value={s}>
                      {s === "All" ? "All Seats" : `${s} Seats`}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase tracking-wider text-gray-600 font-medium">
                  Price / Day
                </label>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="bg-[#121214] border border-white/[0.08] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-accent cursor-pointer"
                >
                  {priceRanges.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto justify-between">
              <span className="text-xs text-gray-500">
                <span className="text-accent font-bold">{filteredVehicles.length}</span> of{" "}
                {mockVehicles.length} vehicles
              </span>
              <button
                type="button"
                onClick={resetFilters}
                className="flex items-center gap-1.5 px-3 py-2 rounded border border-white/[0.08] text-xs text-gray-500 hover:text-white hover:border-accent/30 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle, i) => (
              <ScrollReveal key={vehicle.id} delay={(i % 3) * 60}>
                <VehicleCard vehicle={vehicle} variant="fleet" />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#121214] border border-white/[0.06] rounded-lg max-w-lg mx-auto">
            <SlidersHorizontal className="w-10 h-10 text-accent/40 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">
              No Matches Found
            </h3>
            <p className="text-sm text-gray-500 mt-2">Try adjusting your filters.</p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 px-6 py-2.5 rounded bg-accent text-[#0A0A0B] text-xs uppercase tracking-widest font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function FleetPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-gray-500">Loading fleet...</div>}>
      <FleetContent />
    </Suspense>
  );
}
