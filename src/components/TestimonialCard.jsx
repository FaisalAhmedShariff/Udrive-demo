// src/components/TestimonialCard.jsx
import React from "react";
import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ name, rating, text, date }) {
  return (
    <div className="bg-[#121212] border border-white/5 p-6 rounded relative hover:border-gold-500/20 transition-all duration-300 group flex flex-col justify-between h-full">
      <Quote className="absolute right-6 top-6 w-8 h-8 text-white/5 group-hover:text-gold-500/5 transition-colors" />
      
      <div className="space-y-4">
        {/* Star Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              className={`w-4 h-4 ${
                idx < rating
                  ? "text-gold-500 fill-gold-500"
                  : "text-gray-600"
              }`}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-sm text-gray-300 italic leading-relaxed">
          "{text}"
        </p>
      </div>

      {/* Customer Info */}
      <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
        <div>
          <h5 className="text-white text-sm font-bold">{name}</h5>
          <span className="text-[10px] text-gold-500 uppercase tracking-widest font-medium">Verified Customer</span>
        </div>
        {date && <span className="text-[10px] text-gray-600">{date}</span>}
      </div>
    </div>
  );
}
