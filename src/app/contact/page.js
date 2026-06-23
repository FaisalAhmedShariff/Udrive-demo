// src/app/contact/page.js
"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
    preferredContact: "WhatsApp"
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate lead capture for future CMS
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: "",
      preferredContact: "WhatsApp"
    });
    setIsSubmitted(false);
  };

  return (
    <div className="pt-24 min-h-screen bg-luxury-black pb-24 text-gray-300">
      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center sm:text-left">
        <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold block mb-1">
          GET IN TOUCH
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-white uppercase tracking-[0.05em]">
          Contact Our <span className="gold-text-gradient">VIP Desk</span>
        </h1>
        <p className="text-gray-400 text-sm mt-2 max-w-xl">
          Have a question about security deposits, licensing, or custom long-term leases? Get in touch with our concierge team.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Cards */}
            <div className="bg-[#0c0c0c] border border-white/5 rounded p-6 space-y-6">
              <h3 className="text-white text-xs uppercase tracking-widest font-bold border-b border-white/5 pb-2">
                Concierge Contact Information
              </h3>
              
              <div className="space-y-4">
                {/* Phone Call Link */}
                <a
                  href="tel:+971500000000"
                  className="flex items-start gap-4 p-3 rounded bg-white/5 border border-white/5 hover:border-gold-500/30 hover:bg-white/[0.08] transition-all group"
                >
                  <Phone className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white text-xs font-bold uppercase tracking-wider">Direct Hotline</h5>
                    <p className="text-sm font-semibold text-gold-500 mt-0.5 group-hover:text-white transition-colors">+971 50 000 0000</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Click to make a direct call</p>
                  </div>
                </a>

                {/* Email Address */}
                <a
                  href="mailto:info@udriveluxury.com"
                  className="flex items-start gap-4 p-3 rounded bg-white/5 border border-white/5 hover:border-gold-500/30 hover:bg-white/[0.08] transition-all group"
                >
                  <Mail className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white text-xs font-bold uppercase tracking-wider">Email Inquiry</h5>
                    <p className="text-sm font-semibold text-gray-300 mt-0.5 group-hover:text-gold-500 transition-colors">info@udriveluxury.com</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Response within 30 minutes</p>
                  </div>
                </a>

                {/* Showroom Location */}
                <div className="flex items-start gap-4 p-3 rounded bg-white/5 border border-white/5">
                  <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white text-xs font-bold uppercase tracking-wider">Our Showroom</h5>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                      Showroom 12, Sheikh Zayed Road, Al Quoz Industrial 1, Dubai, UAE
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4 p-3 rounded bg-white/5 border border-white/5">
                  <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white text-xs font-bold uppercase tracking-wider">Leasing Hours</h5>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Showroom: 9:00 AM - 10:00 PM Daily
                    </p>
                    <p className="text-xs text-gold-500 font-medium mt-0.5">
                      VIP Hotline & Vehicle Delivery: 24/7 Active
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] uppercase text-gray-500 block mb-3 font-semibold tracking-wider">Follow Us</span>
                <div className="flex gap-4">
                  <a href="#" className="p-2 rounded bg-white/5 hover:bg-gold-500/10 text-gray-400 hover:text-gold-500 transition-all" aria-label="Instagram">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="p-2 rounded bg-white/5 hover:bg-gold-500/10 text-gray-400 hover:text-gold-500 transition-all" aria-label="Facebook">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="p-2 rounded bg-white/5 hover:bg-gold-500/10 text-gray-400 hover:text-gold-500 transition-all" aria-label="YouTube">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-64 rounded-lg overflow-hidden border border-white/10 relative">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115546.68532454649!2d55.15582914389921!3d25.174244243685517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a6ac243%3A0x3f5b84d436cf0e3b!2sSheikh%20Zayed%20Rd%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-70"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0c0c0c] border border-white/5 rounded-lg p-6 sm:p-8 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6 max-w-md mx-auto flex flex-col items-center">
                  <CheckCircle2 className="w-16 h-16 text-gold-500 animate-bounce" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Inquiry Submitted</h3>
                    <p className="text-sm text-gray-400">
                      Thank you for contacting U Drive Luxury. Your lead query has been recorded.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-4 rounded text-xs text-gray-500 leading-relaxed text-left">
                    Our luxury concierge team is reviewing your message. We will reach out to you via <span className="text-gold-500 font-bold">{formData.preferredContact}</span> within 15 minutes to answer your questions.
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded bg-gradient-to-r from-gold-600 to-gold-700 text-black text-xs uppercase tracking-widest font-bold hover:opacity-90"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                    Online Enquiry Form
                  </h3>
                  <p className="text-xs text-gray-500">
                    Fill out the form below. Leads are catalogued in our future CRM administrative panel.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase text-gray-400 font-medium tracking-wider">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#121212] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase text-gray-400 font-medium tracking-wider">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#121212] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase text-gray-400 font-medium tracking-wider">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#121212] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                        placeholder="+971 50 000 0000"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase text-gray-400 font-medium tracking-wider">Inquiry Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#121212] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Booking Questions">Booking Questions</option>
                        <option value="Monthly Long-Term Leases">Monthly Long-Term Leases</option>
                        <option value="Chauffeur Services">Chauffeur Services</option>
                        <option value="Corporate Fleet Rental">Corporate Fleet Rental</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase text-gray-400 font-medium tracking-wider">Preferred Contact Method</label>
                    <div className="flex gap-4">
                      {["WhatsApp", "Phone Call", "Email"].map((method) => (
                        <label
                          key={method}
                          className={`flex-1 flex items-center justify-center py-2.5 rounded border text-xs uppercase font-bold tracking-wider cursor-pointer transition-colors ${
                            formData.preferredContact === method
                              ? "bg-gold-500/10 border-gold-500 text-gold-500"
                              : "bg-[#121212] border-white/10 text-gray-400 hover:border-white/20"
                          }`}
                        >
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={() => setFormData({ ...formData, preferredContact: method })}
                            className="sr-only"
                          />
                          {method}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase text-gray-400 font-medium tracking-wider">Your Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full bg-[#121212] border border-white/10 rounded p-4 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
                      placeholder="Specify dates, vehicle models, airport delivery details or special requests..."
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 text-black text-xs uppercase tracking-widest font-black hover:shadow-lg hover:shadow-gold-500/20 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Sending..." : "Send Secure Enquiry"}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
