"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { siteContact } from "@/data/mockVehicles";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Fleet", href: "/fleet" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-[#0A0A0B]/92 backdrop-blur-lg border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-11">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors ${
                    isActive ? "text-accent" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-5">
            <a
              href={`tel:${siteContact.phoneTel}`}
              className="flex items-center gap-2 text-gray-400 hover:text-accent text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>{siteContact.phone}</span>
            </a>
            <Link
              href="/fleet"
              className="px-5 py-2.5 rounded-sm bg-accent text-[#0A0A0B] text-[10px] uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity"
            >
              Rent Now
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100 py-4 border-b border-white/[0.06] bg-[#0A0A0B]/98" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded text-sm uppercase tracking-wider font-medium ${
                pathname === link.href
                  ? "text-accent bg-white/[0.04]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/[0.06] space-y-3 px-3">
            <a href={`tel:${siteContact.phoneTel}`} className="flex items-center gap-2 text-gray-400">
              <Phone className="w-4 h-4 text-accent" />
              {siteContact.phone}
            </a>
            <Link
              href="/fleet"
              onClick={() => setIsOpen(false)}
              className="block text-center py-3 rounded-sm bg-accent text-[#0A0A0B] text-xs uppercase tracking-widest font-bold"
            >
              Rent Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
