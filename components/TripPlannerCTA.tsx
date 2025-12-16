'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const TripPlannerCTA = () => {
  return (
    // UPDATED: Added max-w-[1600px] and fixed h-[500px] to match your specs
    <section className="relative w-full max-w-[1600px] mx-auto h-[500px] px-4 overflow-hidden flex items-center justify-center">
      
      {/* --- BACKGROUND IMAGE CONTAINER --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/poolside-bg.jpg" // Ensure this path is correct in your project
          alt="Luxury Resort Pool"
          fill 
          className="object-cover object-center"
          priority 
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-teal-900/40 backdrop-blur-[2px]" />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-6">
        
        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1]}}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight drop-shadow-md"
        >
          Dreaming of a Trip? Let <br className="hidden md:block" />
          Us Make It Happen!
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-white/95 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
        >
          From domestic escapes to international adventures, we plan every detail with care
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-4"
        >
          <button className="group bg-white text-teal-900 font-bold text-lg px-8 py-3.5 rounded-full shadow-xl hover:bg-[#EBCB63] hover:text-black transition-all duration-300 transform hover:-translate-y-1">
            <span className="flex items-center gap-2">
              Book Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default TripPlannerCTA;