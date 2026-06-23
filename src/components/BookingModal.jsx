// src/components/BookingModal.jsx
"use client";

import React, { useState } from "react";
import { X, Calendar, MapPin, User, Phone, CheckCircle2, ShieldCheck } from "lucide-react";

export default function BookingModal({ isOpen, onClose, vehicle }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    startDate: "",
    endDate: "",
    deliveryLocation: "Dubai Marina",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request to future CMS database
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      startDate: "",
      endDate: "",
      deliveryLocation: "Dubai Marina",
      notes: ""
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#0d0d0d] border border-white/10 rounded-lg overflow-hidden shadow-2xl shadow-gold-500/10">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/5">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">Concierge Booking Request</span>
            <h3 className="text-xl font-bold text-white mt-0.5">
              {vehicle ? `Rent ${vehicle.brand} ${vehicle.name}` : "Book Luxury Vehicle"}
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success State */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-6 flex flex-col items-center justify-center">
            <CheckCircle2 className="w-16 h-16 text-gold-500 animate-bounce" />
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-white">Booking Request Received</h4>
              <p className="text-sm text-gray-400 max-w-sm mx-auto">
                Your reservation request for the <span className="text-gold-500 font-semibold">{vehicle?.brand} {vehicle?.name}</span> has been securely logged in our system.
              </p>
            </div>
            <div className="bg-white/5 border border-white/5 p-4 rounded text-xs text-gray-500 flex items-center gap-2 max-w-md">
              <ShieldCheck className="w-5 h-5 text-gold-500 shrink-0" />
              <span>
                Our 24/7 VIP Concierge team will call or message your phone number (+{formData.phone || "provided number"}) within 15 minutes to finalize dates and free delivery options.
              </span>
            </div>
            <button
              onClick={handleReset}
              className="px-8 py-3 rounded bg-gradient-to-r from-gold-600 to-gold-700 text-black text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Short specs card */}
            {vehicle && (
              <div className="flex items-center gap-4 bg-white/5 p-3 rounded border border-white/5">
                <img
                  src={vehicle.images[0]}
                  alt={vehicle.name}
                  className="w-20 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <span className="text-[10px] uppercase text-gray-400">{vehicle.category}</span>
                  <p className="text-sm font-bold text-white leading-tight">{vehicle.brand} {vehicle.name}</p>
                  <p className="text-xs text-gold-500 mt-0.5">AED {vehicle.pricing.daily.toLocaleString()}/Day</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded px-10 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">Phone Number / WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded px-10 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="+971 50 000 0000"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Start Date */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">Rental Start Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded px-10 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
              </div>

              {/* End Date */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">Rental End Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="date"
                    required
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded px-10 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Location */}
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">Delivery Location (Free in Dubai)</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <select
                  value={formData.deliveryLocation}
                  onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                  className="w-full bg-[#121212] border border-white/10 rounded px-10 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                >
                  <option value="Dubai Marina">Dubai Marina</option>
                  <option value="Downtown Dubai / Burj Khalifa">Downtown Dubai / Burj Khalifa</option>
                  <option value="Palm Jumeirah">Palm Jumeirah</option>
                  <option value="Dubai International Airport (DXB)">Dubai International Airport (DXB)</option>
                  <option value="Jumeirah Beach Residence (JBR)">Jumeirah Beach Residence (JBR)</option>
                  <option value="Other Location (Specify in notes)">Other Location (Specify in notes)</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">Special Requests / Requirements</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={2}
                className="w-full bg-[#121212] border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
                placeholder="e.g. Airport flight number, extra driver, child seat..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 mt-2 rounded bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 text-black text-xs uppercase tracking-widest font-bold hover:shadow-lg hover:shadow-gold-500/10 transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Registering Lead..." : "Submit Booking Request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
