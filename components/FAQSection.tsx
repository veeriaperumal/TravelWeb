"use client";

import React, { useState } from "react";
import Image from "next/image";

// INTERFACE: Defines the structure for our FAQ data items
interface FAQItem {
  id: number;
  number: string;
  question: string;
  answer: string;
}

// DATA: Content extracted from the provided image
const faqData: FAQItem[] = [
  {
    id: 1,
    number: "01",
    question: "What services does OG Holidays offer?",
    answer:
      "OG Holidays provides customised holiday packages, hotel bookings, flight arrangements, travel itineraries, visa assistance, and full travel support. We help you plan and enjoy a complete, stress-free vacation",
  },
  {
    id: 2,
    number: "02",
    question: "How do I book a holiday package?",
    answer:
      "You can book a package by contacting our support team via our website form, calling our hotline, or visiting one of our local branch offices.",
  },
  {
    id: 3,
    number: "03",
    question: "Are the holiday packages customisable?",
    answer:
      "Yes, absolutely. We specialize in tailoring itineraries to match your specific interests, budget, and travel dates.",
  },
  {
    id: 4,
    number: "04",
    question: "Do you offer international travel packages?",
    answer:
      "Yes, we offer a wide range of international destinations covering Europe, Asia, the Americas, and more, complete with visa guidance.",
  },
];

const FAQSection = () => {
  // STATE: Tracks which FAQ item is currently open. 
  // Defaulting to 0 (the first item) to match the image.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // HANDLER: Toggles the accordion state
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen bg-white py-16 px-4 flex flex-col items-center justify-start overflow-hidden">
      
      {/* BACKGROUND DECORATION: The yellow diagonal shape seen on the right */}
      <div className="absolute top-40 right-0 w-1/3 h-full bg-[#FCEEB5] -skew-x-12 translate-x-20 -z-10 rounded-tl-[100px]" />

      {/* HEADING */}
      <h2 className="text-3xl font-bold text-black mb-10">
        Frequently Asked Questions
      </h2>

      {/* CARD CONTAINER */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 z-10">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.id}
              className={`border-b border-gray-100 last:border-none transition-all duration-300 ${
                isOpen ? "pb-6" : ""
              }`}
            >
              {/* HEADER: Clickable area to toggle */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 focus:outline-none group"
              >
                <div className="flex items-center gap-6 text-left">
                  {/* NUMBER */}
                  <span className="text-3xl font-bold text-gray-400">
                    {item.number}
                  </span>
                  
                  {/* QUESTION */}
                  <span className="text-lg font-bold text-black group-hover:text-yellow-500 transition-colors">
                    {item.question}
                  </span>
                </div>

                {/* ICON: Toggles between Plus and Cross */}
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                    isOpen ? "bg-[#EBCB66]" : "bg-gray-100"
                  }`}
                >
                  {isOpen ? (
                     // CLOSE ICON (Yellow background state)
                     // TODO: Replace src below with your asset: src="/assets/close.svg"
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  ) : (
                    // PLUS ICON (Grey background state)
                    // TODO: Replace src below with your asset: src="/assets/plus.svg"
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1f2937"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  )}
                </div>
              </button>

              {/* ANSWER CONTENT: Shown only when open */}
              {/* We use a simple conditional render here, but you can add Framer Motion for smoother height animation */}
              {isOpen && (
                <div className="pl-20 pr-12">
                  <p className="text-[#FBBF24] text-base leading-relaxed font-medium">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;