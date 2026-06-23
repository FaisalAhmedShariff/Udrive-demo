// src/components/WhatsAppButton.jsx
import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({ vehicleName, dailyPrice, className = "" }) {
  const phoneNumber = "971500000000"; // Mock number
  const message = `Hi, I am interested in renting the ${vehicleName} at AED ${dailyPrice.toLocaleString()}/day. Please share availability.`;
  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase tracking-widest font-bold transition-all duration-300 ${className}`}
    >
      <MessageCircle className="w-4 h-4 text-white fill-white" />
      <span>WhatsApp Enquiry</span>
    </a>
  );
}
