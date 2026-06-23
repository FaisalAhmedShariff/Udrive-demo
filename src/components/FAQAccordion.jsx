// src/components/FAQAccordion.jsx
"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the documents required to rent a luxury car in Dubai?",
      answer: "For tourists, we require a valid passport, visitor visa (entry stamp), and your home country's driver's license. If your license is not in English/Arabic, an International Driving Permit (IDP) is required. For UAE residents, we require a valid Emirates ID and a UAE driving license (minimum 1 year old)."
    },
    {
      question: "What is the minimum age requirement for renting?",
      answer: "The general minimum age to rent vehicles in our fleet is 21 years old. However, for elite sports supercars (e.g., Ferrari F8, Lamborghini Huracán, Porsche GT3), drivers must be at least 25 years of age and hold a valid license for over 2 years."
    },
    {
      question: "How does the no-deposit policy work?",
      answer: "Unlike traditional rental firms that freeze large amounts on your credit card, we offer a Zero Security Deposit option on select premium SUVs and luxury sedans for qualified drivers. Standard insurance and credit authorization are processed upon delivery, and no security deposit is held."
    },
    {
      question: "Is comprehensive insurance included in the pricing?",
      answer: "Yes, all rentals in our fleet include Comprehensive Motor Insurance as standard. In the event of an accident, a police report is strictly mandatory. If a police report indicates you are not at fault, you have zero liability. If you are at fault, excess fee terms apply per vehicle class."
    },
    {
      question: "Are off-road driving or track use permitted?",
      answer: "No. Driving our vehicles off-road (including desert safaris) or on racing tracks (like Dubai Autodrome) is strictly prohibited. Our fleet is equipped with advanced telematics. Violations will void insurance coverage and result in a AED 10,000 penalty plus vehicle recovery fees."
    },
    {
      question: "What are the mileage limits and speed limit warnings?",
      answer: "Each daily rental includes 250 km of mileage. Additional distance is charged per km depending on the vehicle class (typically AED 5-15/km). In the UAE, the maximum speed limit is 120-140 km/h depending on the highway. Telematics will issue an in-car warning at 130 km/h, and repeated violations will be flagged."
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-white/5 bg-[#121212] rounded transition-all duration-300 overflow-hidden"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center px-6 py-5 text-left text-white focus:outline-none group hover:bg-white/[0.02]"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-sm md:text-base font-medium group-hover:text-gold-400 transition-colors">
                  {faq.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180 text-gold-500" : ""
                }`}
              />
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 border-t border-white/5 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="px-6 py-5 text-sm text-gray-400 leading-relaxed bg-[#0c0c0c]">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
