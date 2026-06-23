// src/components/Footer.jsx
import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="U Drive Luxury Logo"
                className="h-10 w-auto object-contain brightness-95"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              Dubai's premier exotic car rental boutique. Experience Sheikh Zayed Road in absolute style with our curated fleet of sports, SUV, and luxury sedan vehicles.
            </p>
            {/* Payment Method Icons */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold block">Accepted Payments</span>
              <div className="flex items-center gap-3">
                <div className="px-2.5 py-1 bg-white/5 rounded border border-white/10 text-[10px] text-white font-bold tracking-wider">VISA</div>
                <div className="px-2.5 py-1 bg-white/5 rounded border border-white/10 text-[10px] text-white font-bold tracking-wider">MASTERCARD</div>
                <div className="px-2.5 py-1 bg-white/5 rounded border border-white/10 text-[10px] text-white font-bold tracking-wider">AMEX</div>
                <div className="px-2.5 py-1 bg-white/5 rounded border border-white/10 text-[10px] text-white font-bold tracking-wider">CRYPTO</div>
              </div>
            </div>
          </div>

          {/* Categories Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold border-b border-gold-500/30 pb-2 inline-block">Our Categories</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/fleet?category=Sports" className="hover:text-gold-500 transition-colors">Supercars & Sports</Link>
              </li>
              <li>
                <Link href="/fleet?category=SUV" className="hover:text-gold-500 transition-colors">Exotic & Premium SUVs</Link>
              </li>
              <li>
                <Link href="/fleet?category=Luxury Sedan" className="hover:text-gold-500 transition-colors">Luxury & Prestige Sedans</Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-gold-500 transition-colors">All Vehicles</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links / Navigation */}
          <div className="space-y-4">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold border-b border-gold-500/30 pb-2 inline-block">Support & Info</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#faq" className="hover:text-gold-500 transition-colors">FAQ & Requirements</Link>
              </li>
              <li>
                <Link href="/#conditions" className="hover:text-gold-500 transition-colors">Rental Conditions</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-500 transition-colors">Contact Support</Link>
              </li>
              <li>
                <span className="text-gray-600 cursor-not-allowed">Terms & Conditions</span>
              </li>
            </ul>
          </div>

          {/* Contact Details & Google Maps Embed Placeholder */}
          <div className="space-y-4">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold border-b border-gold-500/30 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-gray-500 leading-relaxed">
                  Showroom 12, Sheikh Zayed Road, Al Quoz Industrial 1, Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="tel:+971500000000" className="hover:text-white transition-colors">+971 50 000 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="mailto:info@udriveluxury.com" className="hover:text-white transition-colors">info@udriveluxury.com</a>
              </li>
            </ul>

            {/* Micro Map Placeholder */}
            <div className="w-full h-24 mt-4 rounded overflow-hidden border border-white/10 relative group">
              <iframe
                title="U Drive Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115546.68532454649!2d55.15582914389921!3d25.174244243685517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a6ac243%3A0x3f5b84d436cf0e3b!2sSheikh%20Zayed%20Rd%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 bg-transparent pointer-events-none border border-gold-500/10 rounded"></div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} U Drive Luxury Car Rental Dubai. All Rights Reserved. Not affiliated with real booking systems. Visual Demonstration.
          </p>
          {/* Social Icons */}
          <div className="flex items-center space-x-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold-500 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold-500 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold-500 transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a
              href="https://wa.me/971500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold-500 transition-colors"
              aria-label="WhatsApp"
            >
              <Compass className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
