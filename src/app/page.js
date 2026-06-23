// src/app/page.js
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Key, CalendarRange, Trophy, Star, ShieldAlert, BadgeInfo } from "lucide-react";
import { mockVehicles, brandLogos } from "@/data/mockVehicles";
import TrustBadgeRow from "@/components/TrustBadgeRow";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import VehicleCard from "@/components/VehicleCard";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter owned fleet vs other choices
  const featuredFleet = mockVehicles.filter((v) => v.isOwnFleet);
  const topChoices = mockVehicles.filter((v) => !v.isOwnFleet);

  const handleBookNow = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const steps = [
    {
      num: "I",
      title: "Choose Your Vehicle",
      desc: "Browse our elite fleet of sport supercars, executive sedans, and high-performance SUVs to find your perfect match."
    },
    {
      num: "II",
      title: "Schedule Your Rental",
      desc: "Select your dates and delivery location. Our VIP concierge team coordinates instant delivery to your doorstep."
    },
    {
      num: "III",
      title: "Enjoy The Drive",
      desc: "Receive the keys, experience the unmatched power, and cruise the iconic Dubai highways in style."
    }
  ];

  const testimonials = [
    {
      name: "Alexander Novak",
      rating: 5,
      text: "Exceptional service from start to finish. The Rolls-Royce Cullinan was delivered directly to my hotel in Palm Jumeirah in absolute pristine condition. No deposit option made the process stress-free. Truly a 7-star VIP experience.",
      date: "June 2026"
    },
    {
      name: "Sarah Al-Mansoori",
      rating: 5,
      text: "Renting the Ferrari F8 Tributo for my weekend drive was a dream. The booking process took 10 minutes and the car was a beast. Very professional team. Will definitely rent again next month.",
      date: "May 2026"
    },
    {
      name: "Marcus Vance",
      rating: 5,
      text: "The best luxury car rental in Dubai, hands down. I rented the AMG G63 for a week. Transparent pricing with no hidden insurance fees, free delivery to DXB airport, and the team was available 24/7. Highly recommended!",
      date: "April 2026"
    },
    {
      name: "Elena Rostova",
      rating: 5,
      text: "Incredible Continental GT W12. Inside felt like a bespoke lounge. The dual pricing details were very clear, and they delivered exactly what they promised with a full tank of fuel. 10/10 service.",
      date: "June 2026"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-luxury-black">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-45 scale-[1.02] filter brightness-75"
          >
            <source
              src="https://player.vimeo.com/external/435674703.sd.mp4?s=7f26410ec4210d65b706c27447669d06e23631f4&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          {/* Subtle Grid Overlay on top of video */}
          <div className="absolute inset-0 luxury-grid-lines opacity-20 pointer-events-none"></div>
          {/* Fallback back-blur and gradient */}
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-ping"></span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
              Premium Fleet Dubai
            </span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-[0.05em] uppercase leading-none">
            Unleash the <br/>
            <span className="gold-text-gradient font-bold tracking-[0.02em]">Ultimate</span> Drive
          </h1>
          
          <p className="text-gray-300 text-xs sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            Experience Dubai in a fleet that defines excellence. From naturally aspirated V10s to chauffeured luxury, secure your driving masterpiece today with zero security deposits.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <Link
              href="/fleet"
              className="w-full px-8 py-4 rounded-sm bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 text-black text-xs uppercase tracking-[0.2em] font-black hover:shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 flex items-center justify-center gap-2 border border-gold-500/10"
            >
              <span>Rent Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#conditions"
              className="w-full px-8 py-4 rounded-sm border border-white/15 hover:border-gold-500 text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-white/5 transition-all duration-300 text-center"
            >
              View Conditions
            </a>
          </div>
        </div>

        {/* Mouse Wheel Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-gray-500 z-10 select-none pointer-events-none">
          <span className="text-[8px] uppercase tracking-[0.35em] text-gray-500">Scroll Down</span>
          <div className="w-[18px] h-[30px] rounded-full border border-white/20 flex justify-center p-[4px]">
            <div className="w-[2px] h-[6px] bg-gold-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Typographic Scrolling Brand Strip */}
      <section className="relative py-10 bg-[#090909] border-y border-white/5 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#090909] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#090909] to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling marquee */}
        <div className="flex w-[200%] animate-infinite-scroll">
          {/* First set of brand logos */}
          <div className="flex justify-around w-1/2 items-center gap-12">
            {brandLogos.map((brand, idx) => (
              <div key={idx} className="flex items-center select-none opacity-30 hover:opacity-100 transition-opacity duration-300 shrink-0">
                <span className={`${brand.fontClass} text-white tracking-[0.25em] uppercase`}>
                  {brand.logo}
                </span>
              </div>
            ))}
          </div>
          {/* Second set of brand logos for looping */}
          <div className="flex justify-around w-1/2 items-center gap-12">
            {brandLogos.map((brand, idx) => (
              <div key={`loop-${idx}`} className="flex items-center select-none opacity-30 hover:opacity-100 transition-opacity duration-300 shrink-0">
                <span className={`${brand.fontClass} text-white tracking-[0.25em] uppercase`}>
                  {brand.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="py-12 bg-luxury-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadgeRow />
        </div>
      </section>

      {/* Featured Fleet (Directly Owned Fleet) */}
      <section className="py-24 bg-gradient-to-b from-[#070707] via-[#0b0b0b] to-[#070707] relative">
        <div className="absolute inset-0 luxury-grid-lines opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-extrabold block">
              EXCLUSIVE COLLECTION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white uppercase tracking-[0.05em]">
              Featured <span className="gold-text-gradient">Owned</span> Fleet
            </h2>
            <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-2"></div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed">
              Directly owned by our boutique. Kept in absolute pristine mechanical order and detailed daily to meet premium concierge standards.
            </p>
          </div>

          {/* Grid of 3 Own Fleet Vehicles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredFleet.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onBookNow={handleBookNow}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-white font-extrabold uppercase text-[10px] tracking-[0.3em] transition-colors group"
            >
              <span>View Full Fleet Inventory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Top Choices Carousel */}
      <section className="py-24 bg-[#090909] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-extrabold block">
                SPECIAL OFFERS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-black text-white uppercase tracking-[0.05em] mt-1">
                Top Daily Choices
              </h2>
            </div>
            <Link
              href="/fleet"
              className="text-[10px] text-gray-400 hover:text-gold-500 font-bold uppercase tracking-[0.2em] flex items-center gap-1.5 transition-colors border-b border-white/10 pb-1 hover:border-gold-500"
            >
              Browse Categories <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Carousel container (Scrollable list with clean cards) */}
          <div className="flex overflow-x-auto gap-8 pb-8 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory">
            {topChoices.map((vehicle) => (
              <div
                key={vehicle.id}
                className="w-[290px] sm:w-[360px] shrink-0 snap-start"
              >
                <VehicleCard vehicle={vehicle} onBookNow={handleBookNow} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Simple Steps Process */}
      <section className="py-24 bg-luxury-black relative">
        <div className="absolute inset-0 luxury-grid-lines opacity-15 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-extrabold block">
              HOW IT WORKS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white uppercase tracking-[0.05em]">
              Three Simple Steps to Drive
            </h2>
            <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-8 bg-gradient-to-b from-[#121212] to-[#0d0d0d] border border-white/5 rounded-sm group hover:border-gold-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Large hollow gold-outlined step number in Cinzel */}
                <div className="absolute top-4 right-6 text-7xl font-serif font-black text-stroke-gold select-none group-hover:text-gold-500/10 transition-colors">
                  {step.num}
                </div>
                <div className="space-y-5">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded w-fit text-gold-500 group-hover:bg-gold-500/10 group-hover:border-gold-500/20 transition-all">
                    {idx === 0 && <Key className="w-6 h-6" />}
                    {idx === 1 && <CalendarRange className="w-6 h-6" />}
                    {idx === 2 && <Trophy className="w-6 h-6" />}
                  </div>
                  <h3 className="text-base font-bold text-white uppercase tracking-[0.15em]">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-24 bg-[#090909] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-extrabold block">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white uppercase tracking-[0.05em]">
              Verified Client Reviews
            </h2>
            <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, idx) => (
              <TestimonialCard
                key={idx}
                name={t.name}
                rating={t.rating}
                text={t.text}
                date={t.date}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-24 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-extrabold block">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white uppercase tracking-[0.05em]">
              FAQ & Guidelines
            </h2>
            <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-2"></div>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Car Rental Conditions Section */}
      <section id="conditions" className="py-24 bg-[#0a0a0a] border-t border-white/5 relative">
        <div className="absolute inset-0 luxury-grid-lines opacity-10 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="border border-gold-500/25 bg-[#0f0f0f] rounded p-8 sm:p-14 relative overflow-hidden shadow-2xl shadow-gold-500/[0.03]">
            <div className="absolute right-0 top-0 w-48 h-48 bg-gold-500/[0.03] blur-3xl rounded-full"></div>
            
            <div className="flex items-center gap-3.5 mb-8">
              <ShieldAlert className="w-8 h-8 text-gold-500 shrink-0" />
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-white uppercase tracking-wider">
                Luxury Rental Conditions
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-xs sm:text-sm">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <BadgeInfo className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white font-extrabold uppercase tracking-wider text-xs">Minimum Age Limits</h5>
                    <p className="text-gray-400 mt-1.5 font-light leading-relaxed">
                      Minimum age is 21 for general sports cars and luxury SUVs. For elite models (e.g. Ferrari, Huracán), drivers must be at least 25 years old.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <BadgeInfo className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white font-extrabold uppercase tracking-wider text-xs">Deposit Policy</h5>
                    <p className="text-gray-400 mt-1.5 font-light leading-relaxed">
                      We offer select zero-security-deposit options on prestige sedans. Regular options require a credit card block released in 15-21 days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <BadgeInfo className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white font-extrabold uppercase tracking-wider text-xs">Mileage Boundaries</h5>
                    <p className="text-gray-400 mt-1.5 font-light leading-relaxed">
                      Standard mileage allowance is 250 km per day. Additional distance is charged per km depending on the vehicle specification.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <BadgeInfo className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white font-extrabold uppercase tracking-wider text-xs">Federal Speed Regulations</h5>
                    <p className="text-gray-400 mt-1.5 font-light leading-relaxed">
                      Speeding is monitored via telemetry. In-car speed alerts will trigger at 130 km/h. Fines are direct client liabilities billed at return.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        vehicle={selectedVehicle}
      />
    </div>
  );
}
