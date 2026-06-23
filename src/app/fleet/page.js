// src/app/fleet/page.js
"use client";

import React, { useState, useMemo } from "react";
import { mockVehicles } from "@/data/mockVehicles";
import VehicleCard from "@/components/VehicleCard";
import BookingModal from "@/components/BookingModal";
import { SlidersHorizontal, RefreshCw } from "lucide-react";

export default function Fleet() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSeats, setSelectedSeats] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract unique brands from data
  const brands = useMemo(() => {
    const allBrands = mockVehicles.map((v) => v.brand);
    return ["All", ...Array.from(new Set(allBrands))];
  }, []);

  const categories = ["All", "Sports", "SUV", "Luxury Sedan"];
  const seatOptions = ["All", "2", "4", "5"];
  
  const priceRanges = [
    { label: "All", value: "All" },
    { label: "Under AED 2,500", value: "under-2500" },
    { label: "AED 2,500 - 4,000", value: "2500-4000" },
    { label: "Over AED 4,000", value: "over-4000" }
  ];

  // Perform client-side filtering
  const filteredVehicles = useMemo(() => {
    return mockVehicles.filter((vehicle) => {
      // Brand filter
      if (selectedBrand !== "All" && vehicle.brand !== selectedBrand) return false;
      
      // Category filter
      if (selectedCategory !== "All" && vehicle.category !== selectedCategory) return false;
      
      // Seats filter
      if (selectedSeats !== "All" && vehicle.seats.toString() !== selectedSeats) return false;
      
      // Price filter
      if (selectedPrice !== "All") {
        const price = vehicle.pricing.daily;
        if (selectedPrice === "under-2500" && price >= 2500) return false;
        if (selectedPrice === "2500-4000" && (price < 2500 || price > 4000)) return false;
        if (selectedPrice === "over-4000" && price <= 4000) return false;
      }
      
      return true;
    });
  }, [selectedBrand, selectedCategory, selectedSeats, selectedPrice]);

  const handleBookNow = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const handleResetFilters = () => {
    setSelectedBrand("All");
    setSelectedCategory("All");
    setSelectedSeats("All");
    setSelectedPrice("All");
  };

  return (
    <div className="pt-24 min-h-screen bg-luxury-black pb-20">
      {/* Title Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold block mb-1">
          VIP FLEET SELECTION
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-white uppercase tracking-[0.05em]">
          Explore Our <span className="gold-text-gradient">Supercars</span> & SUVs
        </h1>
        <p className="text-gray-400 text-sm mt-2 max-w-xl">
          Apply filters below to find the exact high-performance sports car, robust luxury SUV, or chauffeur-ready prestige sedan for your Dubai experience.
        </p>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[72px] z-30 bg-[#0a0a0a]/90 backdrop-blur-md border-y border-white/5 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            
            {/* Filter Group */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
              
              {/* Brand Filter */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Brand</label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="bg-[#121212] border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer min-w-[130px]"
                >
                  {brands.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-[#121212] border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer min-w-[130px]"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Seats Filter */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Seats</label>
                <select
                  value={selectedSeats}
                  onChange={(e) => setSelectedSeats(e.target.value)}
                  className="bg-[#121212] border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer min-w-[130px]"
                >
                  {seatOptions.map((s) => (
                    <option key={s} value={s}>{s === "All" ? "All Seats" : `${s} Seats`}</option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Price (AED/Day)</label>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="bg-[#121212] border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer min-w-[130px]"
                >
                  {priceRanges.map((r) => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>

            </div>

            {/* Clear Button / Count */}
            <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 border-white/5 pt-3 lg:pt-0">
              <span className="text-xs text-gray-400">
                Showing <span className="text-gold-500 font-bold">{filteredVehicles.length}</span> of {mockVehicles.length} vehicles
              </span>
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 px-3 py-2 rounded border border-white/5 bg-[#121212] hover:border-gold-500/30 text-xs text-gray-400 hover:text-white transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Vehicles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onBookNow={handleBookNow}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#121212] border border-white/5 rounded-lg max-w-xl mx-auto">
            <SlidersHorizontal className="w-12 h-12 text-gold-500/40 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">No Vehicles Match Criteria</h3>
            <p className="text-sm text-gray-500 max-w-xs mx-auto mt-2">
              Try resetting the active filters or selecting different search terms to view other exotic models.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-6 px-6 py-2.5 rounded bg-gradient-to-r from-gold-600 to-gold-700 text-black text-xs uppercase tracking-widest font-bold hover:opacity-90"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        vehicle={selectedVehicle}
      />
    </div>
  );
}
