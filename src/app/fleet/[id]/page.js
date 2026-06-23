// src/app/fleet/[id]/page.js
"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, ShieldCheck, HelpCircle } from "lucide-react";
import { mockVehicles } from "@/data/mockVehicles";
import SpecsGrid from "@/components/SpecsGrid";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingModal from "@/components/BookingModal";
import TrustBadgeRow from "@/components/TrustBadgeRow";

export default function VehicleDetail({ params }) {
  // Unwrap params using the standard React.use() hook in Next.js 15 client components
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const vehicle = mockVehicles.find((v) => v.id === id);

  if (!vehicle) {
    notFound();
  }

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Math conversions for display
  const weeklyDailyEquivalent = Math.round(vehicle.pricing.weekly / 7);
  const monthlyDailyEquivalent = Math.round(vehicle.pricing.monthly / 30);

  return (
    <div className="pt-24 min-h-screen bg-luxury-black pb-24 text-gray-300">
      {/* Back Button Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/fleet"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-gold-500 font-bold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Fleet Listings</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            {/* Active Display */}
            <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black/40 border border-white/5 shadow-2xl">
              <img
                src={vehicle.images[activeImageIdx]}
                alt={`${vehicle.brand} ${vehicle.name}`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              {vehicle.isOwnFleet && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-gold-600 to-gold-700 text-black text-[9px] uppercase tracking-widest font-black px-2.5 py-1 rounded-sm">
                  Our Fleet Special
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {vehicle.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative aspect-video roundedoverflow-hidden border bg-black/20 ${
                    idx === activeImageIdx
                      ? "border-gold-500 ring-1 ring-gold-500/20"
                      : "border-white/10 hover:border-white/30"
                  } transition-all`}
                >
                  <img
                    src={img}
                    alt={`${vehicle.name} Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="pt-6">
              <TrustBadgeRow />
            </div>
          </div>

          {/* Right Column: Pricing, Specs & Actions */}
          <div className="lg:col-span-5 space-y-8">
            {/* Header info */}
            <div>
              <span className="text-xs uppercase tracking-wider text-gold-500 font-bold block">
                {vehicle.category} CAR
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-1 leading-none">
                {vehicle.brand} <span className="gold-text-gradient">{vehicle.name}</span>
              </h1>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                {vehicle.description}
              </p>
            </div>

            {/* Pricing Table (Daily, Weekly, Monthly) */}
            <div className="bg-[#0c0c0c] border border-white/5 rounded p-6 space-y-4">
              <h4 className="text-white text-xs uppercase tracking-widest font-bold border-b border-white/5 pb-2">
                Rental Rates Breakdown
              </h4>
              <div className="space-y-3.5">
                {/* Daily */}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Daily (1-6 Days)</span>
                  <span className="text-white font-semibold">
                    AED {vehicle.pricing.daily.toLocaleString()}
                    <span className="text-xs font-normal text-gray-500"> /day</span>
                  </span>
                </div>
                
                {/* Weekly */}
                <div className="flex justify-between items-center text-sm border-t border-white/5 pt-3">
                  <div className="flex flex-col">
                    <span className="text-gray-400">Weekly (7+ Days)</span>
                    <span className="text-[10px] text-gray-600">Save equivalent of AED {(vehicle.pricing.daily - weeklyDailyEquivalent).toLocaleString()}/day</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-semibold block">
                      AED {vehicle.pricing.weekly.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-gold-500 font-medium uppercase tracking-wider block">
                      AED {weeklyDailyEquivalent.toLocaleString()} /day
                    </span>
                  </div>
                </div>

                {/* Monthly */}
                <div className="flex justify-between items-center text-sm border-t border-white/5 pt-3 bg-gold-500/5 -mx-6 px-6 py-2">
                  <div className="flex flex-col">
                    <span className="text-gold-500 font-bold uppercase tracking-wider text-xs">Monthly (30+ Days)</span>
                    <span className="text-[10px] text-gold-500/50">Best value pricing package</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gold-500 font-black text-base block">
                      AED {vehicle.pricing.monthly.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider block">
                      AED {monthlyDailyEquivalent.toLocaleString()} /day
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 py-4 rounded bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 text-black text-xs uppercase tracking-widest font-black hover:shadow-lg hover:shadow-gold-500/20 transition-all duration-300 text-center"
              >
                Book Now
              </button>
              <WhatsAppButton
                vehicleName={`${vehicle.brand} ${vehicle.name}`}
                dailyPrice={vehicle.pricing.daily}
                className="flex-1 py-4"
              />
            </div>

            {/* Note */}
            <div className="flex items-start gap-2 bg-white/5 p-4 rounded border border-white/5 text-xs text-gray-500 leading-normal">
              <ShieldCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <span>
                Booking requests are processed offline. Submit a request above, and our VIP support desk will contact you within 15 minutes to arrange free vehicle delivery.
              </span>
            </div>

          </div>
        </div>

        {/* Technical Specifications Grid */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-8">
            Technical Specifications
          </h3>
          <SpecsGrid
            horsepower={vehicle.horsepower}
            acceleration={vehicle.acceleration0to100}
            seats={vehicle.seats}
            specs={vehicle.specs}
          />
        </div>

        {/* Features Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-10 border-t border-white/5">
          <div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-6">
              Included Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {vehicle.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rental terms brief */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-gold-500" />
                <span>Dubai Rental Rules Brief</span>
              </h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li>• A valid driver's license, passport, and visit visa copy are mandatory.</li>
                <li>• Telematics logs speeding above 130 km/h; radar fines are billed separately.</li>
                <li>• Standard mileage limit is 250 km per day. Extra is billed per km.</li>
                <li>• No off-road or racetrack driving allowed under any circumstances.</li>
              </ul>
            </div>
            <Link
              href="/#conditions"
              className="text-gold-500 hover:text-white text-xs uppercase tracking-wider font-bold mt-6 inline-block"
            >
              Read Full Rental Conditions &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        vehicle={vehicle}
      />
    </div>
  );
}
