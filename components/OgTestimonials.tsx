"use client";

import React, { useState } from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// --- Data Configuration ---
const testimonials = [
  {
    id: 1,
    name: "Rahul & Priya",
    image:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=600&auto=format&fit=crop",
    text: "OG Holidays made our honeymoon absolutely perfect. Every arrangement—from hotels to activities—was smooth and stress-free. The personalised touches and beautiful itinerary helped us enjoy every moment together. We felt completely taken care of throughout the journey. Truly a memorable experience that we will always cherish.",
  },
  {
    id: 2,
    name: "Amit & Sarah",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop",
    text: "Our family trip to Bali was incredible! The kids loved every moment, and the resorts were super family-friendly. The entire process from booking to the final day was seamless. Highly recommend OG Holidays for a hassle-free vacation.",
  },
  {
    id: 3,
    name: "Jason & Mike",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    text: "We explored the Swiss Alps with OG Holidays and it was breathtaking. The guides were knowledgeable, the hotels were cozy, and everything ran like clockwork. Can’t wait to book our next adventure!",
  },
];

// --- Sub-Component: Navigation Button ---
// Reusable button with hover scaling and color transition
const NavButton = ({
  onClick,
  icon,
  className = "",
}: {
  onClick: () => void;
  icon: React.ReactNode;
  className?: string;
}) => (
  <motion.button
    onClick={onClick}
    whileHover={{
      scale: 1.15,
      backgroundColor: "#fbbf24", // yellow-400
      color: "#ffffff",
      borderColor: "#fbbf24",
      boxShadow: "0px 8px 15px rgba(251, 191, 36, 0.3)",
    }}
    whileTap={{ scale: 0.9 }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className={`p-4 bg-white border border-gray-100 text-gray-400 rounded-full shadow-lg backdrop-blur-sm transition-colors ${className}`}
  >
    {icon}
  </motion.button>
);

// --- Main Component ---
const OgTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // We track direction to animate slide-in from left or right
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Animation variants for the card content
  const slideVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as [number, number, number, number]},
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.3,  ease: [0.4, 0.0, 1, 1] as [number, number, number, number]},
    }),
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden"
      style={{
        // Applied specific linear gradient from requirements
        background:
          "linear-gradient(180deg, rgba(239, 195, 86, 0.1) 0%, rgba(239, 195, 86, 0) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col items-center">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3
            className="text-yellow-600 font-cursive text-2xl md:text-3xl mb-2"
            style={{ fontFamily: "cursive" }}
          >
            Testimonials
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 relative inline-block">
            What Our Travellers Say
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-1 left-0 h-3 bg-yellow-400/30 -z-10 rounded-sm"
            />
          </h2>
        </motion.div>

        {/* --- Carousel Wrapper --- */}
        <div className="relative w-full flex justify-center items-center">
          
          {/* Desktop Navigation: Prev Button */}
          <div className="hidden md:block absolute left-0 right-10 lg:left-8 z-20">
            <NavButton onClick={handlePrev} icon={<FaArrowLeft size={18} />} />
          </div>

          {/* --- Main Card Container --- */}
          <div className="w-full max-w-5xl mx-auto relative perspective-1000">
            <motion.div
              className="w-full bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative border border-white/50 backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Decorative Background Quotes */}
              <FaQuoteLeft className="absolute top-8 left-8 text-yellow-50 text-6xl md:text-8xl -z-0" />
              <FaQuoteRight className="absolute bottom-8 right-8 text-yellow-50 text-6xl md:text-8xl -z-0" />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
                >
                  
                  {/* --- Left Column: Image & Profile Info --- */}
                  <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
                    
                    {/* Image Container with pulsing effect */}
                    <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6">
                      <motion.div 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-yellow-200 rounded-full blur-xl opacity-40" 
                      />
                      <motion.div
                        className="w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-xl relative z-10"
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>

                    {/* Name and Role (Moved below image as requested) */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="text-gray-900 text-xl md:text-2xl font-bold mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-wider rounded-full">
                        Happy Travellers
                      </div>
                    </motion.div>
                  </div>

                  {/* --- Right Column: Text Content --- */}
                  <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left">
                    {/* Star Ratings with stagger animation */}
                    <div className="flex gap-1 text-yellow-400 mb-6 text-xl">
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                        >
                          <FaStar />
                        </motion.span>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium italic relative">
                      {testimonials[currentIndex].text}
                    </p>
                  </div>

                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Desktop Navigation: Next Button */}
          <div className="hidden md:block absolute right-0 lg:right-8 z-20">
            <NavButton onClick={handleNext} icon={<FaArrowRight size={18} />} />
          </div>

        </div>

        {/* --- Mobile Navigation --- */}
        <div className="flex md:hidden gap-6 mt-8">
          <NavButton onClick={handlePrev} icon={<FaArrowLeft />} />
          <NavButton onClick={handleNext} icon={<FaArrowRight />} />
        </div>

      </div>
    </section>
  );
};

export default OgTestimonials;