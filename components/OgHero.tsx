"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const OgHero = () => {
  // =========================================
  // ANIMATION SETTINGS
  // =========================================
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.3 
      },
    },
  };

  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative w-full bg-white px-6 md:px-12 py-8 md:py-20 flex flex-col md:flex-row items-center gap-12 overflow-hidden min-h-[90vh]">
      {/* =========================================
          BACKGROUND LAYER
          ========================================= */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none z-0"
        style={{
          width: "1600px",
          height: "766px",
          top: "75.5px",
          opacity: 0.04,
          backgroundImage: "url('/assets/bg.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      {/* =========================================
          LEFT CONTENT: TEXT & CTA
          ========================================= */}
      <motion.div
        className="relative z-10 w-full md:w-1/2 space-y-6 text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Cursive Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-800"
          style={{ fontFamily: "cursive" }}
        >
          Relax & Enjoy the Vacation
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold text-black leading-tight"
        >
          Explore The Most <br className="hidden md:block" /> 
          Stunning Destinations <br className="hidden md:block" /> 
          With{" "}
          <span className="text-yellow-500">OG Holidays</span>
        </motion.h1>

        {/* Descriptive Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0 text-lg"
        >
          Find your dream trip with OG Holidays. We offer personalised plans,
          expert guidance, and easy, hassle-free travel.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div variants={itemVariants} className="pt-4">
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:scale-95">
            Call Now
          </button>
        </motion.div>
      </motion.div>

      {/* =========================================
          RIGHT CONTENT: IMAGE COMPOSITION
          ========================================= */}
      <motion.div
        className="relative z-10 w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* --- GRID LAYOUT --- */}
        <div className="relative flex flex-col md:flex-row gap-4 md:h-[550px]">
          {/* COLUMN 1: Left side (2 stacked images) */}
          <div className="flex flex-col gap-4 items-center md:items-end">
            {/* Image 1 - Top */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-[255px] h-64 md:h-[305px] rounded-3xl overflow-hidden relative shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=600&auto=format&fit=crop"
                alt="Snow Travel"
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Image 2 - Bottom */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-[255px] h-48 md:h-[231px] rounded-3xl overflow-hidden relative shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop"
                alt="Friends Group Travel"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>

          {/* COLUMN 2: Right side (1 tall image) */}
          <div className="flex flex-col md:justify-center">
            {/* Image 3 - Tall */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-[255px] h-80 md:h-[404px] rounded-3xl overflow-hidden relative shadow-xl mt-0 md:mt-20"
            >
              <img
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop"
                alt="Happy Traveler"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>

          {/* =========================================
              FLOATING CENTER BADGE WITH ASSET IMAGES
              ========================================= */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: 0.8, 
              type: "spring", 
              stiffness: 200,
              damping: 15 
            }}
            whileHover={{ scale: 1.1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
          >
            {/* Main Badge Container */}
            <div className="relative w-40 h-40 md:w-44 md:h-44">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"></div>
              
              {/* Rotating Circular Text - Using Image Asset */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                whileHover={{ rotate: 180, scale: 1.05 }}
                className="absolute inset-4 md:inset-5"
              >
                {/* Option 1: If you have a circular text image */}
                <div className="relative w-full h-full">
                  {/* Inner circle with "Join Now" text twice */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image
                      src="/assets/join-now-circle.png"
                      alt="Join Now Circular Text"
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Alternative: If you don't have the image, use SVG text */}
              {/* Uncomment this section if you don't have the image asset */}
              {/*
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                whileHover={{ rotate: 180, scale: 1.05 }}
                className="absolute inset-0"
              >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Outer path for text *\/}
                  <path
                    id="textPath"
                    d="M10,50 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                    fill="transparent"
                  />
                  {/* White text following the path *\/}
                  <text
                    fill="white"
                    fontSize="7"
                    fontWeight="bold"
                    letterSpacing="1.5"
                    textAnchor="middle"
                    className="uppercase"
                  >
                    <textPath href="#textPath" startOffset="0%">
                      JOIN NOW • JOIN NOW • 
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              */}

              {/* Spinning Dashed Ring - Outer Animation */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-8px] rounded-full border-3 border-dashed border-white/60 group-hover:border-white/80 transition-all duration-300"
              />

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="relative bg-white p-4 md:p-5 rounded-full text-yellow-500 shadow-xl group-hover:shadow-2xl transition-all duration-300"
                >
                  {/* Paper Plane Icon */}
                  <FaPaperPlane
                    size={24}
                    className="transform translate-x-0.5 translate-y-0.5"
                  />
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </motion.div>
              </div>

              {/* Optional: Add a second rotating element for more depth */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-4px] rounded-full border-2 border-solid border-white/30"
              />
            </div>

            {/* Hover Tooltip */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/80 text-white text-xs font-bold px-3 py-2 rounded-full whitespace-nowrap">
                Start Your Journey
              </div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-black/80"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default OgHero;