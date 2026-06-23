"use client";

import { useState } from "react";
import { X, Calendar, MapPin, User, Phone, CheckCircle2, ShieldCheck } from "lucide-react";

/** Book Now modal — enquiry only. Does NOT link to WhatsApp. */
export default function BookNowModal({ isOpen, onClose, vehicle }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    startDate: "",
    endDate: "",
    deliveryLocation: "Dubai Marina",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleClose = () => {
    setFormData({
      name: "",
      phone: "",
      startDate: "",
      endDate: "",
      deliveryLocation: "Dubai Marina",
      notes: "",
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-now-title"
    >
      <div className="relative w-full max-w-xl bg-[#0E0E0F] border border-white/10 rounded-lg overflow-hidden shadow-2xl shadow-accent/10">
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/5">
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              Booking Enquiry
            </span>
            <h3 id="book-now-title" className="text-xl font-bold text-white mt-0.5">
              {vehicle ? `Rent ${vehicle.brand} ${vehicle.name}` : "Reserve a Vehicle"}
            </h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-6 flex flex-col items-center">
            <CheckCircle2 className="w-16 h-16 text-accent" />
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-white">Enquiry Submitted</h4>
              <p className="text-sm text-gray-400 max-w-sm mx-auto">
                Your request for the{" "}
                <span className="text-accent font-semibold">
                  {vehicle?.brand} {vehicle?.name}
                </span>{" "}
                has been received. Our team will confirm availability shortly.
              </p>
            </div>
            <div className="bg-white/5 border border-white/5 p-4 rounded text-xs text-gray-500 flex items-start gap-2 max-w-md text-left">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span>
                A concierge specialist will contact you within 15 minutes to finalise dates,
                delivery, and payment. This is not a WhatsApp booking — all confirmations are
                handled by our team directly.
              </span>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="px-8 py-3 rounded bg-accent text-[#0A0A0B] text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {vehicle && (
              <div className="flex items-center gap-4 bg-white/5 p-3 rounded border border-white/5">
                <img
                  src={vehicle.images[0]}
                  alt={vehicle.name}
                  className="w-20 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <span className="text-[10px] uppercase text-gray-400">{vehicle.category}</span>
                  <p className="text-sm font-bold text-white leading-tight">
                    {vehicle.brand} {vehicle.name}
                  </p>
                  <p className="text-xs text-accent mt-0.5">
                    AED {vehicle.pricing.daily.toLocaleString()}/day
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#141415] border border-white/10 rounded px-10 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#141415] border border-white/10 rounded px-10 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="+971 50 000 0000"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                  Start Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full bg-[#141415] border border-white/10 rounded px-10 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                  End Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="date"
                    required
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full bg-[#141415] border border-white/10 rounded px-10 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                Delivery Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <select
                  value={formData.deliveryLocation}
                  onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                  className="w-full bg-[#141415] border border-white/10 rounded px-10 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="Dubai Marina">Dubai Marina</option>
                  <option value="Downtown Dubai">Downtown Dubai</option>
                  <option value="Palm Jumeirah">Palm Jumeirah</option>
                  <option value="DXB Airport">DXB Airport</option>
                  <option value="JBR">JBR</option>
                  <option value="Other">Other (specify in notes)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                Special Requests
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={2}
                className="w-full bg-[#141415] border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Flight number, extra driver, child seat..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded bg-accent text-[#0A0A0B] text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
