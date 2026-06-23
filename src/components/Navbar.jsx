// src/components/Navbar.jsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        isScrolled || setIsScrolled(true);
      } else {
        !isScrolled || setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Fleet", href: "/fleet" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-luxury-black/90 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Using img for direct loading and styling flexibility */}
            <img
              src="/logo.png"
              alt="U Drive Luxury Logo"
              className="h-10 w-auto object-contain cursor-pointer"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm uppercase tracking-widest font-medium transition-colors ${
                    isActive
                      ? "text-gold-500 font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+971500000000"
              className="flex items-center gap-2 text-gray-300 hover:text-gold-500 text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-500" />
              <span>+971 50 000 0000</span>
            </a>
            <Link
              href="/fleet"
              className="px-5 py-2.5 rounded-sm bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 text-black text-xs uppercase tracking-widest font-bold hover:shadow-lg hover:shadow-gold-500/20 transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100 py-4 border-b border-white/10 bg-luxury-black/95" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded text-base uppercase tracking-wider font-medium ${
                  isActive
                    ? "text-gold-500 bg-white/5 font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-white/10 space-y-4 px-3">
            <a
              href="tel:+971500000000"
              className="flex items-center gap-2 text-gray-300 hover:text-gold-500 text-base font-medium"
            >
              <Phone className="w-5 h-5 text-gold-500" />
              <span>+971 50 000 0000</span>
            </a>
            <Link
              href="/fleet"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-sm bg-gradient-to-r from-gold-600 to-gold-700 text-black text-sm uppercase tracking-widest font-bold"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
