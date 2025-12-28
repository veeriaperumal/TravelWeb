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
      
      {/* Decorative Left Edge */}
      <div className="absolute left-0 top-0 bottom-0 w-4 md:w-12 bg-[#1a1a1a] z-10 hidden xl:block" />

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* ================= LEFT COLUMN: 3 IMAGE COLLAGE ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Yellow Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#F2C94C]/20 rounded-full blur-3xl -z-10" />

            {/* Collage Container: Size roughly based on main image + offsets */}
            <div className="relative w-fit">
              
              {/* 1. MAIN IMAGE (305x355) */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="/images/main-image.png" // Put your image in public/assets
                  alt="Main Feature"
                  width={305}
                  height={355}
                  className="object-fill"
                  
                />
              </div>

              {/* 2. RIGHT UP IMAGE (217x236) 
                  Positioned absolute to the top-right of the main image
              */}
              <motion.div 
                animate={{ y: [0, -8, 0] }} // Gentle float animation
                transition={{ duration: 5, repeat: Infinity, ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number] }}
                className="absolute -top-12 -right-12 md:-right-24 z-20 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
              >
                 <Image 
                  src="/images/right-up-image.png" 
                  alt="Detail Upper"
                  width={217}
                  height={236}
                  className="object-cover"
                />
              </motion.div>

              {/* 3. RIGHT BOTTOM IMAGE (192x234) 
                  Positioned absolute to the bottom-right of the main image
              */}
              <motion.div 
                 animate={{ y: [0, 8, 0] }} // Gentle float animation (reverse phase)
                 transition={{ duration: 6, repeat: Infinity, ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number], delay: 1 }}
                 className="absolute -bottom-12 -right-8 md:-right-20 z-30 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
              >
                 <Image 
                  src="/images/right-bottom-image.png" 
                  alt="Detail Lower"
                  width={192}
                  height={234}
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
             className="relative mt-12 lg:mt-0"
          >
            {/* Background Dotted Path SVG */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20 z-0">
               <svg viewBox="0 0 400 400" className="w-full h-full">
                 <path 
                   d="M 50 300 Q 150 350 250 200 T 350 50" 
                   fill="none" 
                   stroke="#F2C94C" 
                   strokeWidth="2" 
                   strokeDasharray="8,8"
                 />
                 <path d="M 340 60 L 360 40 L 340 50 Z" fill="#F2C94C" />
               </svg>
            </div>

            <div className="relative z-10">
              <h3 className={`${scriptFont.className} text-[#4A90E2] text-3xl mb-2`}>
                Get About Us
              </h3>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                More About <span className="text-gray-900">Travelsy</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                OG Holidays is your trusted travel partner, offering personalised holiday plans, expert guidance, and exclusive deals to make every trip smooth and memorable. 
                <br /><br />
                We create tailored itineraries based on your interests, budget, and travel style, ensuring a hassle-free experience from planning to return. With dedicated support and curated destination insights, we're here to turn your dream vacations into unforgettable journeys.
              </p>

              <button className="
                group relative flex items-center gap-3
                bg-[#F2C94C] hover:bg-[#E0B02C]
                text-white font-bold px-8 py-4 rounded-full
                shadow-lg hover:shadow-xl hover:shadow-yellow-400/30
                transition-all duration-300 transform hover:-translate-y-1
              ">
                <span>Read More</span>
                <ArrowRight 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OgAbout;