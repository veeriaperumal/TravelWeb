"use client";

import React, { useState } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
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
    text: "We explored the Swiss Alps with OG Holidays and it was breathtaking. The guides were knowledgeable, the hotels were cozy, and everything ran like clockwork. Can't wait to book our next adventure!",
  },
];

// --- Sub-Component: Navigation Button ---
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
      backgroundColor: "#fbbf24",
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

  const slideVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0, 0, 0.2, 1] as [number, number, number, number],
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 1, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden"
      style={{
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
              {/* Decorative Background Quotes - Fixed positioning and size */}
              {/* <div className="absolute -top-8 -left-6 z-0 opacity-30">
                <Image
                  src="/assets/left-quotes.png"
                  alt="Opening quote"
                  width={120}
                  height={120}
                  className="md:w-[150px] md:h-[150px]"
                /> */}
              {/* </div> */}

              {/* <div className="absolute -bottom-8 -right-6 z-0 opacity-30">
                <Image
                  src="/assets/right-quotes.png"
                  alt="Closing quote"
                  width={120}
                  height={120}
                  className="md:w-[150px] md:h-[150px]"
                />
              </div> */}

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
                  <div className="md:col-span-4 flex flex-col items-center justify-center">
                    {/* Image Container - Smaller as per design */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-yellow-200 rounded-full blur-xl opacity-40"
                      />
                      <motion.div
                        className="w-full h-full rounded-full overflow-hidden border-[5px] border-white shadow-xl relative z-10"
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

                    {/* Name and Role - Better typography as per design */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-center"
                    >
                      <h4 className="text-gray-900 text-lg md:text-xl font-bold mb-2">
                        {testimonials[currentIndex].name}
                      </h4>
                      <div className="inline-flex items-center gap-2">
                        {/* Stars - Now aligned horizontally and properly sized */}
                        <div className="flex gap-1 text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 + i * 0.05 }}
                            >
                              <FaStar size={16} />
                            </motion.span>
                          ))}
                        </div>
                        <span className="text-gray-600 text-sm font-medium">
                          Happy Travellers
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* --- Right Column: Text Content --- */}
                  <div className="md:col-span-8 flex flex-col">
                    {/* Review Text - Better typography and spacing */}
                    <div className="relative pl-4 md:pl-6">
                      {/* Inline quote mark at the start */}
                      <div className="absolute -left-6 -top-4 text-yellow-400 opacity-95">
                        <Image
                          src="/assets/left-quotes.png"
                          alt="Opening quote"
                          width={40}
                          height={40}
                          className="opacity-80"
                        />
                      </div>
                      
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium mb-4">
                        {testimonials[currentIndex].text}
                      </p>
                      
                      {/* Inline quote mark at the end */}
                      <div className="absolute -right-1.25 -bottom-4 text-yellow-400 opacity-95">
                        <Image
                          src="/assets/right-quotes.png"
                          alt="Closing quote"
                          width={40}
                          height={40}
                          className="opacity-80"
                        />
                      </div>
                    </div>

                    {/* Additional rating info - Like in the design */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <div className="text-yellow-600 font-bold text-lg">
                            5.0
                          </div>
                          <div className="text-gray-500 text-sm">
                            Overall Rating
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-900 font-semibold">
                            Excellent Service
                          </div>
                          <div className="text-gray-500 text-sm">
                            Verified Review
                          </div>
                        </div>
                      </div>
                    </div>
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

        {/* --- Dots Indicator --- */}
        <div className="flex gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-yellow-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OgTestimonials;