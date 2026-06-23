"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/data/mockVehicles";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-lg overflow-hidden transition-colors duration-300 ${
              isOpen ? "border-accent/30 bg-[#121214]" : "border-white/[0.06] bg-[#0E0E0F]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex justify-between items-center gap-4 px-5 sm:px-6 py-4 text-left text-white focus:outline-none group"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-medium group-hover:text-accent/90 transition-colors">
                  {faq.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-accent" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 sm:px-6 pb-5 pt-0 text-sm text-gray-400 leading-relaxed border-t border-white/[0.04] ml-8 sm:ml-11">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
