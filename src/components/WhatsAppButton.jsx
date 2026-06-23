import { MessageCircle } from "lucide-react";
import { siteContact } from "@/data/mockVehicles";

/** Standalone WhatsApp link — separate from Book Now flow. */
export default function WhatsAppButton({ vehicleName, dailyPrice, className = "", variant = "default" }) {
  const message = `Hi, I am interested in renting the ${vehicleName} at AED ${dailyPrice.toLocaleString()}/day. Please share availability.`;
  const waUrl = `https://wa.me/${siteContact.whatsapp}?text=${encodeURIComponent(message)}`;

  const styles =
    variant === "outline"
      ? "border border-emerald-600/50 bg-emerald-950/30 text-emerald-400 hover:bg-emerald-600 hover:text-white"
      : "bg-emerald-600 hover:bg-emerald-500 text-white";

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded text-xs uppercase tracking-widest font-bold transition-all duration-300 ${styles} ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      <span>WhatsApp Enquiry</span>
    </a>
  );
}
