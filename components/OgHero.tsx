'use client';

import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

// --- REMOVED IMPORT ---
// We do not need to import the image when using the public folder.
// Just ensure the file is at: /public/assets/bg.png

const OgHero = () => {
  
  // --- ANIMATION SETTINGS (Framer Motion) ---
  
  // 1. Container Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  // 2. Item Animation
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number]} 
    }
  };

  return (
    <section className="relative w-full bg-white px-6 md:px-12 py-8 md:py-20 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
      
      {/* =========================================
          BACKGROUND LAYER
         ========================================= */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none z-0"
        style={{
          width: '1600px',
          height: '766px',
          top: '75.5px',
          opacity: 0.04, 
          // FIX: Use the direct string path to the public folder
          backgroundImage: "url('/assets/bg.png')", 
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
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
          style={{ fontFamily: 'cursive' }}
        >
          Relax & Enjoy the Vacation
        </motion.p>

        {/* Main Headline */}
        <motion.h1 
          variants={itemVariants} 
          className="text-4xl md:text-6xl font-extrabold text-black leading-tight"
        >
          Explore The Most <br className="hidden md:block"/> Stunning Destinations <br className="hidden md:block"/> With <span className="">OG Holidays</span>
        </motion.h1>

        {/* Descriptive Subtext */}
        <motion.p 
          variants={itemVariants} 
          className="text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0"
        >
          Find your dream trip with OG Holidays. We offer personalised plans, 
          expert guidance, and easy, hassle-free travel.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div variants={itemVariants}>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg shadow-md hover:bg-yellow-500 transition transform hover:-translate-y-1 active:scale-95">
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
        <div className="flex flex-col md:flex-row gap-4 md:h-[550px]">
          
          {/* COLUMN 1: Left side (2 stacked images) */}
          <div className="flex flex-col gap-4 items-center md:items-end">
            
            {/* Image 1 */}
            <div className="w-full md:w-[255px] h-64 md:h-[305px] rounded-3xl overflow-hidden relative shadow-lg">
               <motion.img 
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.4 }}
                 src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=600&auto=format&fit=crop" 
                 alt="Snow Travel" 
                 className="object-cover w-full h-full"
               />
            </div>

            {/* Image 2 */}
            <div className="w-full md:w-[255px] h-48 md:h-[231px] rounded-3xl overflow-hidden relative shadow-lg">
              <motion.img 
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.4 }}
                 src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop" 
                 alt="Friends Group" 
                 className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* COLUMN 2: Right side (1 tall image) */}
          <div className="flex flex-col md:justify-center">
            
            {/* Image 3 */}
            <div className="w-full md:w-[255px] h-80 md:h-[404px] rounded-3xl overflow-hidden relative shadow-lg mt-0 md:mt-20">
               <motion.img 
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.4 }}
                 src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop" 
                 alt="Happy Traveler" 
                 className="object-cover w-full h-full"
               />
            </div>
          </div>


          {/* --- FLOATING CENTER BADGE --- */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
          >
            {/* The Badge Circle */}
            <div className="relative w-24 h-24 md:w-28 md:h-28 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-white shadow-xl pointer-events-auto">
              
              {/* Spinning dashed ring animation */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity,ease: [0, 0, 1, 1] as [number, number, number, number]
}}
                className="absolute w-full h-full rounded-full border-2 border-dashed border-white opacity-60"
              />
              
              {/* Center Paper Plane Icon */}
              <div className="bg-white p-3 rounded-full text-yellow-500">
                <FaPaperPlane size={20} className="transform translate-x-0.5 translate-y-0.5" />
              </div>

              {/* Curved Text Effect */}
              <span className="absolute text-[10px] font-bold text-white tracking-widest uppercase transform -rotate-12 -translate-y-8 drop-shadow-md">
                Join Now
              </span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default OgHero;