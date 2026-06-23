"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialCarousel({ testimonials }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [testimonials]);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="absolute -top-16 right-0 hidden sm:flex gap-2">
        <button
          type="button"
          onClick={() => scroll(-1)}
          disabled={!canScrollLeft}
          className="p-2 rounded border border-white/10 text-gray-400 hover:text-white hover:border-accent/40 disabled:opacity-30 transition-colors"
          aria-label="Previous reviews"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          disabled={!canScrollRight}
          className="p-2 rounded border border-white/10 text-gray-400 hover:text-white hover:border-accent/40 disabled:opacity-30 transition-colors"
          aria-label="Next reviews"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth"
      >
        {testimonials.map((t, idx) => (
          <div key={idx} className="w-[300px] sm:w-[340px] shrink-0 snap-start">
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>
    </div>
  );
}
