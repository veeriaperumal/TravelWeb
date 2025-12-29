"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Dancing_Script } from "next/font/google";

const scriptFont = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

const OgAbout = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: IMAGE COLLAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative pt-5"
          >
            {/* Collage Container */}
            <div className="relative w-full max-w-[600px] h-[500px] md:h-[600px] mx-auto lg:mx-0">
              
              {/* 1. MAIN IMAGE (Large Left) */}
              <div className="relative z-10 rounded-[2rem] overflow-hidden w-[70%] h-[80%] shadow-2xl">
                <Image
                  src="/images/main-image.png" 
                  alt="OG Holidays Team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* 2. TOP RIGHT IMAGE (The one that wasn't working) */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute top-0 right-0 z-30 w-[45%] h-[40%] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white"
              >
                <Image
                  src="/images/right-up-image.png" 
                  alt="OG Holidays Feature"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* 3. BOTTOM RIGHT IMAGE */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute bottom-[-5%] right-[5%] z-20 rounded-[2rem] overflow-hidden shadow-2xl w-[50%] h-[45%] border-4 border-white"
              >
                <Image
                  src="/images/right-bottom-image.png"
                  alt="Travel Group"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: TEXT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:pl-12"
          >
            <div className="relative z-10">
              <h3 className={`${scriptFont.className} text-[#4A90E2] text-3xl mb-1`}>
                Get About Us
              </h3>

              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                More About Travelsy
              </h2>

              <p className="text-gray-600 text-lg font-medium leading-relaxed mb-10 max-w-xl">
                OG Holidays is your trusted travel partner, offering personalised
                holiday plans, expert guidance, and exclusive deals to make every
                trip smooth and memorable. We create tailored itineraries based on
                your interests, budget, and travel style.
              </p>

              <button className="group flex items-center gap-4 bg-[#F2C94C] hover:bg-[#E0B02C] text-white font-extrabold px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-lg">Read More</span>
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </button>
            </div>

            {/* SVG Flight Path */}
            <div className="absolute -right-10 bottom-0 w-72 h-72 pointer-events-none opacity-20">
               <svg viewBox="0 0 200 200" className="w-full h-full text-[#F2C94C]">
                 <path 
                    d="M10,180 Q50,200 100,100 T190,40" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeDasharray="8,8" 
                 />
                 <path d="M185,35 L195,40 L188,48 Z" fill="currentColor" />
               </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OgAbout;