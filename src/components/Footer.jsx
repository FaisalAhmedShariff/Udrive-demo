"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Logo from "@/components/Logo";
import { siteContact, vehicleCategories } from "@/data/mockVehicles";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer className="bg-[#070708] border-t border-white/[0.06] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          <div className="lg:col-span-4 space-y-6">
            <Logo />
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              Dubai&apos;s boutique exotic car rental. Curated sports cars, luxury SUVs, and
              executive sedans — delivered to your door with transparent AED pricing.
            </p>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-semibold block mb-2">
                Payment Methods
              </span>
              <div className="flex flex-wrap gap-2">
                {["Visa", "Mastercard", "Amex"].map((card) => (
                  <span
                    key={card}
                    className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] rounded text-[10px] text-gray-400 font-bold tracking-wider"
                  >
                    {card}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold">
              Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              {vehicleCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/fleet?category=${encodeURIComponent(cat)}`}
                    className="hover:text-accent transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/fleet" className="hover:text-accent transition-colors">
                  Full Fleet
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li>
                <Link href="/#faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#conditions" className="hover:text-accent transition-colors">
                  Rental Conditions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{siteContact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={`tel:${siteContact.phoneTel}`} className="hover:text-white transition-colors">
                  {siteContact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href={`mailto:${siteContact.email}`} className="hover:text-white transition-colors">
                  {siteContact.email}
                </a>
              </li>
            </ul>

            <div className="w-full h-28 rounded-lg overflow-hidden border border-white/[0.08]">
              <iframe
                title="U Drive location"
                src={siteContact.mapEmbed}
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-60 hover:opacity-80 transition-opacity"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} U Drive Dubai. Visual demo — no live bookings.
          </p>

          <form onSubmit={handleNewsletter} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2">
            {subscribed ? (
              <span className="text-sm text-accent font-medium">You&apos;re subscribed. Thank you!</span>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email for offers & news"
                  className="bg-[#121214] border border-white/[0.08] rounded px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 min-w-[220px]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded bg-accent text-[#0A0A0B] text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:opacity-90"
                >
                  <Send className="w-3.5 h-3.5" />
                  Subscribe
                </button>
              </>
            )}
          </form>

          <div className="flex items-center gap-4">
            {[
              { label: "Instagram", href: "https://instagram.com" },
              { label: "Facebook", href: "https://facebook.com" },
              { label: "YouTube", href: "https://youtube.com" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-wider text-gray-600 hover:text-accent transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
