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
      num: "01",
      title: "Choose Your Vehicle",
      desc: "Browse our elite fleet of sport supercars, executive sedans, and high-performance SUVs to find your perfect match."
    },
    {
      num: "02",
      title: "Schedule Your Rental",
      desc: "Select your dates and delivery location. Our VIP concierge team coordinates instant delivery to your doorstep."
    },
    {
      num: "03",
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
    <div className="relative w-full">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source
              src="https://player.vimeo.com/external/435674703.sd.mp4?s=7f26410ec4210d65b706c27447669d06e23631f4&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          {/* Fallback back-blur and gradient */}
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-gold-500 font-bold block animate-fade-in">
            PREMIUM CAR RENTAL DUBAI
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight uppercase leading-tight">
            Unleash the <span className="gold-text-gradient">Ultimate</span> Drive
          </h1>
          <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience Dubai in a fleet that defines excellence. From naturally aspirated V10s to chauffeured ultra-luxury, secure your driving masterpiece today with zero deposits.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/fleet"
              className="w-full sm:w-auto px-8 py-4 rounded-sm bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 text-black text-xs uppercase tracking-widest font-black hover:shadow-xl hover:shadow-gold-500/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore The Fleet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#conditions"
              className="w-full sm:w-auto px-8 py-4 rounded-sm border border-white/20 hover:border-gold-500 text-white text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-all duration-300 text-center"
            >
              Rental Conditions
            </a>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Brand Strip */}
      <section className="relative py-8 bg-[#0b0b0b] border-y border-white/5 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0b0b0b] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0b0b0b] to-transparent z-10 pointer-events-none"></div>
        
        {/* Infinite scrolling marquee wrapper */}
        <div className="flex w-[200%] animate-infinite-scroll">
          {/* First set of brands */}
          <div className="flex justify-around w-1/2 items-center">
            {brandLogos.map((brand, idx) => (
              <div key={idx} className="flex items-center gap-2 select-none grayscale opacity-45 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <span className="text-xl">{brand.logo}</span>
                <span className="text-sm font-bold uppercase tracking-widest text-white">{brand.name}</span>
              </div>
            ))}
          </div>
          {/* Second set of brands for loop */}
          <div className="flex justify-around w-1/2 items-center">
            {brandLogos.map((brand, idx) => (
              <div key={`loop-${idx}`} className="flex items-center gap-2 select-none grayscale opacity-45 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <span className="text-xl">{brand.logo}</span>
                <span className="text-sm font-bold uppercase tracking-widest text-white">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="py-10 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadgeRow />
        </div>
      </section>

      {/* Featured Fleet (Own Fleet) */}
      <section className="py-20 bg-gradient-to-b from-luxury-black via-[#090909] to-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold">
              EXCLUSIVE COLLECTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
              Featured <span className="gold-text-gradient">Owned</span> Fleet
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Directly owned by our boutique. Kept in absolute pristine mechanical order and detailed daily to meet premium standards.
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

          <div className="mt-12 text-center">
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-white font-bold uppercase text-xs tracking-widest transition-colors group"
            >
              <span>View Full Fleet Grid</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Top Choices Carousel */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-500 font-bold">
                TOP CHOICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight mt-1">
                Best Daily Offers
              </h2>
            </div>
            <Link
              href="/fleet"
              className="text-xs text-gray-400 hover:text-gold-500 font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              Browse Category Filters <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Carousel container (Scrollable list with clean cards) */}
          <div className="flex overflow-x-auto gap-6 pb-8 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory">
            {topChoices.map((vehicle) => (
              <div
                key={vehicle.id}
                className="w-[290px] sm:w-[350px] shrink-0 snap-start"
              >
                <VehicleCard vehicle={vehicle} onBookNow={handleBookNow} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Simple Steps Process */}
      <section className="py-20 bg-luxury-black border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              3 Simple Steps to Drive
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative p-6 bg-white/5 border border-white/5 rounded group hover:border-gold-500/20 transition-all duration-300">
                {/* Large stylized step number */}
                <div className="absolute top-4 right-6 text-6xl md:text-7xl font-black text-white/5 group-hover:text-gold-500/5 select-none transition-colors">
                  {step.num}
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-gold-500/10 border border-gold-500/20 rounded w-fit text-gold-500">
                    {idx === 0 && <Key className="w-6 h-6" />}
                    {idx === 1 && <CalendarRange className="w-6 h-6" />}
                    {idx === 2 && <Trophy className="w-6 h-6" />}
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-20 bg-[#090909]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              What Our Clients Say
            </h2>
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
      <section id="faq" className="py-20 bg-luxury-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Car Rental Conditions Section */}
      <section id="conditions" className="py-20 bg-[#0b0b0b] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gold-500/20 bg-gradient-to-r from-[#0d0d0d] to-luxury-black rounded-lg p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-gold-500/5 blur-3xl rounded-full"></div>
            
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="w-8 h-8 text-gold-500 shrink-0" />
              <h3 className="text-2xl font-black text-white uppercase tracking-wider">
                Car Rental Conditions in Dubai
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <BadgeInfo className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white font-bold uppercase tracking-wider text-xs">Age Requirements</h5>
                    <p className="text-gray-400 mt-1 leading-relaxed">
                      Minimum age is 21 for general sports cars and SUVs. For elite models (e.g. Ferrari, Huracán), driver must be at least 25.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BadgeInfo className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white font-bold uppercase tracking-wider text-xs">Security Deposit Policy</h5>
                    <p className="text-gray-400 mt-1 leading-relaxed">
                      We offer select zero-security-deposit options. Regular options require a credit card pre-authorization block released in 15-21 days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <BadgeInfo className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white font-bold uppercase tracking-wider text-xs">Mileage Limits</h5>
                    <p className="text-gray-400 mt-1 leading-relaxed">
                      Standard mileage limit is 250 km per day. Additional distance is charged per km depending on the vehicle class.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BadgeInfo className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white font-bold uppercase tracking-wider text-xs">Speed Limit Notice</h5>
                    <p className="text-gray-400 mt-1 leading-relaxed">
                      Federal radar systems penalize speeding. Maximum highway speed limit is 120-140 km/h. High-speed alerts will be triggered at 130 km/h.
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
