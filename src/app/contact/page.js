"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { siteContact } from "@/data/mockVehicles";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
    preferredContact: "WhatsApp",
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
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
      preferredContact: "WhatsApp",
    });
    setIsSubmitted(false);
  };

  return (
    <div className="pt-24 min-h-screen bg-luxury-black pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ScrollReveal>
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold block mb-1">
            Get in Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white uppercase tracking-wide">
            Contact <span className="accent-text-gradient">Concierge</span>
          </h1>
          <p className="text-gray-500 text-sm mt-3 max-w-xl">
            Questions about deposits, licensing, or long-term leases? Our team responds within 30
            minutes.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <ScrollReveal className="lg:col-span-5 space-y-6" direction="left">
            <div className="bg-[#121214] border border-white/[0.06] rounded-lg p-6 space-y-5">
              <h2 className="text-xs uppercase tracking-widest font-bold text-white border-b border-white/[0.06] pb-3">
                Direct Contact
              </h2>

              <a
                href={`tel:${siteContact.phoneTel}`}
                className="flex items-start gap-4 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-accent/30 transition-colors group"
              >
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    Click to Call
                  </h3>
                  <p className="text-sm font-semibold text-accent mt-0.5 group-hover:text-white transition-colors">
                    {siteContact.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteContact.email}`}
                className="flex items-start gap-4 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-accent/30 transition-colors"
              >
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">Email</h3>
                  <p className="text-sm text-gray-400 mt-0.5">{siteContact.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    Showroom
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{siteContact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">Hours</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{siteContact.hours}</p>
                  <p className="text-xs text-accent mt-0.5">{siteContact.hotline}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex gap-3">
                {["Instagram", "Facebook", "YouTube"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-[10px] uppercase tracking-wider text-gray-600 hover:text-accent transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full h-56 rounded-lg overflow-hidden border border-white/[0.08]">
              <iframe
                title="U Drive showroom map"
                src={siteContact.mapEmbed}
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-65"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" direction="right">
            <div className="bg-[#121214] border border-white/[0.06] rounded-lg p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6 max-w-md mx-auto">
                  <CheckCircle2 className="w-14 h-14 text-accent mx-auto" />
                  <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
                    Message Sent
                  </h2>
                  <p className="text-sm text-gray-500">
                    We&apos;ll reach you via{" "}
                    <span className="text-accent font-semibold">{formData.preferredContact}</span>{" "}
                    within 15 minutes.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded bg-accent text-[#0A0A0B] text-xs uppercase tracking-widest font-bold"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-lg font-bold text-white uppercase tracking-wider">
                    Enquiry Form
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase text-gray-500 tracking-wider">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0A0A0B] border border-white/[0.08] rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-accent"
                        placeholder="Full name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase text-gray-500 tracking-wider">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0A0A0B] border border-white/[0.08] rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-accent"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase text-gray-500 tracking-wider">Phone</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0A0A0B] border border-white/[0.08] rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-accent"
                        placeholder={siteContact.phone}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase text-gray-500 tracking-wider">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#0A0A0B] border border-white/[0.08] rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-accent"
                      >
                        <option>General Inquiry</option>
                        <option>Booking Questions</option>
                        <option>Monthly Leases</option>
                        <option>Chauffeur Services</option>
                        <option>Corporate Rental</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase text-gray-500 tracking-wider">
                      Preferred Contact
                    </label>
                    <div className="flex gap-2">
                      {["WhatsApp", "Phone Call", "Email"].map((method) => (
                        <label
                          key={method}
                          className={`flex-1 text-center py-2.5 rounded border text-[10px] uppercase font-bold tracking-wider cursor-pointer transition-colors ${
                            formData.preferredContact === method
                              ? "bg-accent/10 border-accent text-accent"
                              : "border-white/[0.08] text-gray-500 hover:border-white/15"
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

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase text-gray-500 tracking-wider">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0A0A0B] border border-white/[0.08] rounded p-4 text-sm text-white focus:outline-none focus:border-accent resize-none"
                      placeholder="Dates, vehicle preferences, delivery location..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded bg-accent text-[#0A0A0B] text-xs uppercase tracking-widest font-black flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
