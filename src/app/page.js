// src/app/page.js
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Key, CalendarRange, Trophy, Star, ShieldAlert, BadgeInfo, CheckCircle, Car, Shield, Award, Users2, MapPin, Compass } from "lucide-react";
import { mockVehicles, brandLogos } from "@/data/mockVehicles";
import TrustBadgeRow from "@/components/TrustBadgeRow";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import VehicleCard from "@/components/VehicleCard";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // States for Quick Filter Widget
  const [quickBrand, setQuickBrand] = useState("All");
  const [quickCategory, setQuickCategory] = useState("All");

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

  const bespokeServices = [
    {
      title: "Self-Drive Supercars",
      desc: "Experience pure adrenaline behind the wheel of a Ferrari, Lamborghini, or Porsche on Dubai's open highways.",
      icon: <Car className="w-6 h-6 text-gold-500" />
    },
    {
      title: "VIP Chauffeur Services",
      desc: "Sit back and travel in absolute luxury with our professionally trained, multilingual private chauffeurs.",
      icon: <Users2 className="w-6 h-6 text-gold-500" />
    },
    {
      title: "Long-Term Monthly Rentals",
      desc: "Flexible monthly subscriptions tailored for executives, featuring significant savings and full maintenance support.",
      icon: <CalendarRange className="w-6 h-6 text-gold-500" />
    },
    {
      title: "VIP Airport Concierge",
      desc: "Free delivery and pick-up directly from Dubai International Airport (DXB) Terminals 1, 2, and 3 upon arrival.",
      icon: <Key className="w-6 h-6 text-gold-500" />
    },
    {
      title: "Corporate Fleet Hire",
      desc: "Prestige fleets and tailored rental packages for corporate events, VIP delegates, and luxury business transits.",
      icon: <Award className="w-6 h-6 text-gold-500" />
    },
    {
      title: "Luxury Event Support",
      desc: "Bespoke transport solutions for weddings, red carpets, and VIP media shoots with pristine-condition showpieces.",
      icon: <Trophy className="w-6 h-6 text-gold-500" />
    }
  ];

  const iconicDrives = [
    {
      title: "Palm Jumeirah Boardwalk",
      location: "Palm Jumeirah",
      desc: "Cruise down the outer crescent of the world's most famous artificial archipelago. Experience open-air driving with the iconic Atlantis Resort as your backdrop."
    },
    {
      title: "Sheikh Zayed Road",
      location: "Downtown Dubai",
      desc: "Command the multi-lane highway flanked by Dubai's futuristic skyscrapers. The ultimate urban cruise to experience the raw horsepower of our V8 and V12 engines."
    },
    {
      title: "Jumeirah Beach Road",
      location: "Jumeirah",
      desc: "A relaxed, stylish beachfront boulevard. Perfect for low-speed cruising in a Rolls-Royce or a Bentley Continental to soak in the vibrant seaside atmosphere."
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
      {/* Cinematic Hero Section - Bugatti Chiron Background & Search Widget */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-20 pb-16">
        {/* Background Image (Bugatti) */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600706432502-75a0e2b8b913?auto=format&fit=crop&q=80&w=1920"
            alt="Bugatti Chiron Luxury Car Rental Dubai"
            className="w-full h-full object-cover opacity-45 scale-[1.01] filter brightness-[0.35] contrast-[1.15]"
          />
          {/* Subtle Grid Overlay on top of image */}
          <div className="absolute inset-0 luxury-grid-lines opacity-20 pointer-events-none"></div>
          {/* Fallback back-blur and gradient */}
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center space-y-8 mt-10">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-ping"></span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
              PREMIUM SHOWROOM SHOWPIECES
            </span>
          </div>
          
          <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-[0.05em] uppercase leading-none">
            ROYAL <br/>
            <span className="gold-text-gradient font-bold tracking-[0.02em]">SUPERCAR</span> <br/>
            RENTALS
          </h1>
          
          <p className="text-gray-300 text-xs sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            Indulge in absolute performance. Command the streets of Dubai behind the wheel of our directly-owned showroom collection. Zero security deposits on selected models.
          </p>

          {/* Quick Booking Finder Widget (New Interactive Element) */}
          <div className="max-w-4xl mx-auto bg-luxury-gray/70 backdrop-blur-md border border-white/10 p-5 rounded grid grid-cols-1 sm:grid-cols-4 gap-4 items-end shadow-2xl text-left mt-10">
            {/* Brand Filter */}
            <div className="space-y-1.5">
              <label className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Select Brand</label>
              <select
                value={quickBrand}
                onChange={(e) => setQuickBrand(e.target.value)}
                className="w-full bg-[#0d0d0d] border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500 cursor-pointer"
              >
                <option value="All">All Brands</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Rolls-Royce">Rolls-Royce</option>
                <option value="Porsche">Porsche</option>
                <option value="Bentley">Bentley</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="McLaren">McLaren</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="space-y-1.5">
              <label className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Category</label>
              <select
                value={quickCategory}
                onChange={(e) => setQuickCategory(e.target.value)}
                className="w-full bg-[#0d0d0d] border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500 cursor-pointer"
              >
                <option value="All">All Categories</option>
                <option value="Sports">Sports Cars</option>
                <option value="SUV">Exotic SUVs</option>
                <option value="Luxury Sedan">Prestige Sedans</option>
              </select>
            </div>

            {/* Rental Type */}
            <div className="space-y-1.5">
              <label className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Rental Plan</label>
              <select className="w-full bg-[#0d0d0d] border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500 cursor-pointer">
                <option>Daily Hire (250km/day)</option>
                <option>Monthly Subscription (Free Delivery)</option>
                <option>VIP Chauffeur Driven</option>
              </select>
            </div>

            {/* Search Action */}
            <Link
              href={`/fleet?brand=${quickBrand}&category=${quickCategory}`}
              className="w-full py-3.5 rounded bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 hover:opacity-90 text-black text-xs uppercase tracking-widest font-black transition-all text-center flex items-center justify-center gap-1.5 shadow-lg shadow-gold-500/10"
            >
              <span>Find Vehicle</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 z-10 select-none pointer-events-none">
          <span className="text-[8px] uppercase tracking-[0.35em] text-gray-500">Scroll</span>
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
          {/* First set */}
          <div className="flex justify-around w-1/2 items-center gap-12">
            {brandLogos.map((brand, idx) => (
              <div key={idx} className="flex items-center select-none opacity-35 hover:opacity-100 transition-opacity duration-300 shrink-0">
                <span className={`${brand.fontClass} text-white tracking-[0.25em] uppercase`}>
                  {brand.logo}
                </span>
              </div>
            ))}
          </div>
          {/* Second set */}
          <div className="flex justify-around w-1/2 items-center gap-12">
            {brandLogos.map((brand, idx) => (
              <div key={`loop-${idx}`} className="flex items-center select-none opacity-35 hover:opacity-100 transition-opacity duration-300 shrink-0">
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

      {/* About Us / Showroom Showcase */}
      <section className="py-24 bg-[#0a0a0a] relative border-b border-white/5">
        <div className="absolute inset-0 luxury-grid-lines opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Showroom Image */}
            <div className="lg:col-span-6 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-600 to-gold-700 rounded-sm blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded overflow-hidden border border-white/10 aspect-[4/3] bg-black">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800"
                  alt="U Drive Luxury Showroom Al Quoz Dubai"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* About Info */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-extrabold block">
                WELCOME TO U DRIVE LUXURY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-black text-white uppercase tracking-[0.05em] leading-tight">
                Dubai's Elite <br/>
                <span className="gold-text-gradient font-bold">Showroom</span> Experience
              </h2>
              <div className="w-16 h-[1px] bg-gold-500"></div>
              
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Based in the prestigious Al Quoz industrial district along Sheikh Zayed Road, U Drive Luxury represents the pinnacle of premium vehicle rentals. Over the last decade, we have catered to royalties, global business leaders, and elite tourists seeking to experience Dubai's roads.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                Every vehicle in our direct showroom inventory goes through rigid multi-point engineering inspections and detailed aesthetic handovers. We guarantee transparent daily rates, comprehensive insurance inclusions, and dedicated 24/7 concierge delivery services anywhere in the UAE.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-black text-gold-500 block">50+</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium mt-1 block">Supercars Owned</span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-black text-gold-500 block">10k+</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium mt-1 block">Sq. Ft Showroom</span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-black text-gold-500 block">100%</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium mt-1 block">Direct Fleet</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Fleet (Directly Owned Fleet) */}
      <section className="py-24 bg-[#070707] relative border-b border-white/5">
        <div className="absolute inset-0 luxury-grid-lines opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-extrabold block">
              EXCLUSIVE COLLECTION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white uppercase tracking-[0.05em]">
              Featured <span className="gold-text-gradient font-bold">Owned</span> Fleet
            </h2>
            <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-2"></div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed">
              Directly owned by our boutique showroom. Kept in absolute pristine mechanical order and detailed daily to meet premium concierge standards.
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

      {/* Bespoke Services Showcase */}
      <section className="py-24 bg-[#0b0b0b] relative border-b border-white/5">
        <div className="absolute inset-0 luxury-grid-lines opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-extrabold block">
              SERVICES WE OFFER
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white uppercase tracking-[0.05em]">
              Our Bespoke <span className="gold-text-gradient font-bold">Services</span>
            </h2>
            <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-2"></div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed">
              We go beyond vehicle handovers to deliver comprehensive automotive luxury solutions across the United Arab Emirates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bespokeServices.map((service, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#121212] border border-white/5 hover:border-gold-500/20 rounded transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded w-fit group-hover:bg-gold-500/10 group-hover:border-gold-500/20 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">{service.desc}</p>
                </div>
                <div className="pt-6">
                  <Link href="/fleet" className="text-[10px] text-gold-500 uppercase tracking-widest font-bold group-hover:text-white transition-colors">
                    Explore Options &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iconic Dubai Locations (New Section from Reference) */}
      <section className="py-24 bg-[#0a0a0a] relative border-b border-white/5">
        <div className="absolute inset-0 luxury-grid-lines opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-extrabold block">
              PLACES TO EXPLORE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white uppercase tracking-[0.05em]">
              Iconic <span className="gold-text-gradient font-bold">Dubai</span> Routes
            </h2>
            <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-2"></div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed">
              We recommend these curated landmarks to fully appreciate your supercar's dynamics and styling presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {iconicDrives.map((drive, idx) => (
              <div
                key={idx}
                className="bg-[#121212] border border-white/5 p-8 rounded flex flex-col justify-between hover:border-gold-500/10 transition-colors group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gold-500">
                    <MapPin className="w-5 h-5" />
                    <span className="text-[10px] uppercase font-extrabold tracking-widest">{drive.location}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider font-serif mt-2">{drive.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">{drive.desc}</p>
                </div>
                <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-1.5 text-xs text-gray-500 group-hover:text-gold-500 transition-colors">
                  <Compass className="w-4 h-4 animate-spin-slow" />
                  <span>Interactive Route Guide available offline</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Choices Carousel */}
      <section className="py-24 bg-[#090909] border-b border-white/5">
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

          {/* Carousel container */}
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
      <section className="py-24 bg-luxury-black relative border-b border-white/5">
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
      <section className="py-24 bg-[#090909] border-b border-white/5">
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
