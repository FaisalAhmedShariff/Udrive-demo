"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, ShieldCheck, HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { mockVehicles } from "@/data/mockVehicles";
import SpecsGrid from "@/components/SpecsGrid";
import PricingTable from "@/components/PricingTable";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookNowModal from "@/components/BookNowModal";
import TrustBadgeRow from "@/components/TrustBadgeRow";
import ScrollReveal from "@/components/ScrollReveal";

export default function VehicleDetail({ params }) {
  const { id } = use(params);
  const vehicle = mockVehicles.find((v) => v.id === id);

  if (!vehicle) notFound();

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prevImage = () =>
    setActiveImageIdx((i) => (i === 0 ? vehicle.images.length - 1 : i - 1));
  const nextImage = () =>
    setActiveImageIdx((i) => (i === vehicle.images.length - 1 ? 0 : i + 1));

  return (
    <div className="pt-24 min-h-screen bg-luxury-black pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/fleet"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-gray-500 hover:text-accent font-bold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Fleet
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <ScrollReveal className="lg:col-span-7 space-y-4" direction="left">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black/40 border border-white/[0.06] group">
              <img
                src={vehicle.images[activeImageIdx]}
                alt={`${vehicle.brand} ${vehicle.name}`}
                className="w-full h-full object-cover"
              />
              {vehicle.isOwnFleet && (
                <div className="absolute top-4 left-4 bg-accent text-[#0A0A0B] text-[9px] uppercase tracking-widest font-black px-2.5 py-1 rounded-sm">
                  Our Fleet
                </div>
              )}
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {vehicle.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative aspect-video rounded overflow-hidden border transition-all ${
                    idx === activeImageIdx
                      ? "border-accent ring-1 ring-accent/30"
                      : "border-white/[0.08] hover:border-white/20"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <TrustBadgeRow className="pt-4" />
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-5 space-y-6" direction="right">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold">
                {vehicle.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-black text-white uppercase mt-1 leading-tight">
                {vehicle.brand}{" "}
                <span className="accent-text-gradient">{vehicle.name}</span>
              </h1>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">{vehicle.description}</p>
            </div>

            <PricingTable pricing={vehicle.pricing} />

            {/* Book Now — opens modal ONLY, no WhatsApp */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 rounded-lg bg-accent text-[#0A0A0B] text-xs uppercase tracking-[0.2em] font-black hover:opacity-90 transition-opacity"
              >
                Book Now
              </button>
              <WhatsAppButton
                vehicleName={`${vehicle.brand} ${vehicle.name}`}
                dailyPrice={vehicle.pricing.daily}
                variant="outline"
                className="w-full py-4"
              />
            </div>

            <div className="flex items-start gap-2 bg-white/[0.03] p-4 rounded-lg border border-white/[0.06] text-xs text-gray-500">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
              <span>
                <strong className="text-gray-400">Book Now</strong> submits an enquiry to our
                team — it does not open WhatsApp. Use the green WhatsApp button for instant chat.
              </span>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-20 pt-10 border-t border-white/[0.06]">
          <h2 className="font-serif text-xl font-black text-white uppercase tracking-wide mb-8">
            Specifications
          </h2>
          <SpecsGrid
            horsepower={vehicle.horsepower}
            acceleration={vehicle.acceleration0to100}
            topSpeed={vehicle.topSpeed}
            seats={vehicle.seats}
            specs={vehicle.specs}
          />
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 pt-10 border-t border-white/[0.06]" delay={100}>
          <div>
            <h2 className="font-serif text-xl font-black text-white uppercase tracking-wide mb-6">
              Features
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {vehicle.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#121214] border border-white/[0.06] rounded-lg p-6">
            <h3 className="text-xs uppercase tracking-widest font-bold text-white mb-4 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-accent" />
              Quick Rental Notes
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-500 leading-relaxed">
              <li>• Valid licence, passport, and visa required at handover.</li>
              <li>• 250 km/day included; excess billed per km.</li>
              <li>• No off-road or track use permitted.</li>
              <li>• Comprehensive insurance included; police report mandatory for claims.</li>
            </ul>
            <Link href="/#conditions" className="text-accent text-xs uppercase tracking-wider font-bold mt-5 inline-block hover:text-white transition-colors">
              Full conditions →
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <BookNowModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        vehicle={vehicle}
      />
    </div>
  );
}
