'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt, FaUserFriends, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

const OgAbout = () => {
  
  // =========================================
  // ANIMATION VARIANTS
  // =========================================
  
  // 1. Text Slide Up
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // 2. Container Stagger (Triggers children one by one)
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // 3. Image Zoom In
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full bg-pink-50 pb-20 pt-12 md:pt-32 overflow-hidden">
      
      {/* =========================================
          BACKGROUND DECORATION
         ========================================= */}
      
      {/* Yellow Shape (Left) */}
      <div 
        className="absolute top-[20%] left-0 w-[40%] h-[120%] bg-yellow-400/20 -z-10"
        style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}
      />
      
      {/* Dotted Pattern (Right - Desktop only) */}
      <div className="absolute top-1/2 right-0 w-1/2 h-full opacity-10 pointer-events-none -z-10 hidden md:block">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-none stroke-black stroke-1 stroke-dasharray-2">
            <path d="M10,10 Q50,100 150,50 T300,150" />
         </svg>
      </div>


      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* =========================================
            1. RESPONSIVE FLOATING SEARCH BAR
           ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // Negative margin pulls it up. Responsive padding ensures it fits mobile.
          className="bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-4 md:p-4 mb-20 -mt-24 relative z-30 mx-auto max-w-6xl border border-gray-50"
        >
          {/* Layout: Flex Column on Mobile (gap-4), Flex Row on Desktop 
             This fixes the responsiveness issue.
          */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            
            {/* --- INPUT 1: DESTINATION --- */}
            <motion.div 
              whileHover={{ backgroundColor: "#fdfdfd" }}
              className="flex items-center gap-3 px-4 md:px-6 py-2 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-100 transition-colors rounded-xl"
            >
              <div className="text-yellow-500 bg-yellow-50 p-3 rounded-full shadow-sm"><FaMapMarkerAlt /></div>
              <div className="flex flex-col w-full">
                <label className="text-[10px] md:text-xs font-bold text-gray-800 uppercase tracking-wide">Type Of Venue</label>
                <input 
                  type="text" 
                  placeholder="Choose Destination" 
                  className="text-sm font-medium text-gray-600 placeholder-gray-400 focus:outline-none w-full bg-transparent" 
                />
              </div>
            </motion.div>

            {/* --- INPUT 2: DATE --- */}
            <motion.div 
              whileHover={{ backgroundColor: "#fdfdfd" }}
              className="flex items-center gap-3 px-4 md:px-6 py-2 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-100 transition-colors rounded-xl"
            >
              <div className="text-yellow-500 bg-yellow-50 p-3 rounded-full shadow-sm"><FaCalendarAlt /></div>
              <div className="flex flex-col w-full">
                <label className="text-[10px] md:text-xs font-bold text-gray-800 uppercase tracking-wide">Select Date</label>
                <input 
                  type="date" 
                  className="text-sm font-medium text-gray-600 focus:outline-none w-full bg-transparent" 
                />
              </div>
            </motion.div>

            {/* --- INPUT 3: TRAVELLERS --- */}
            <motion.div 
              whileHover={{ backgroundColor: "#fdfdfd" }}
              className="flex items-center gap-3 px-4 md:px-6 py-2 w-full md:w-1/3 transition-colors rounded-xl"
            >
              <div className="text-yellow-500 bg-yellow-50 p-3 rounded-full shadow-sm"><FaUserFriends /></div>
              <div className="flex flex-col w-full">
                <label className="text-[10px] md:text-xs font-bold text-gray-800 uppercase tracking-wide">Select Travellers</label>
                <select className="text-sm font-medium text-gray-600 focus:outline-none w-full bg-transparent cursor-pointer">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>Family</option>
                  <option>Group</option>
                </select>
              </div>
            </motion.div>

            {/* --- SEARCH BUTTON --- */}
            <div className="w-full md:w-auto pl-0 md:pl-2">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#eab308" }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-white font-bold py-3 md:py-4 px-8 rounded-full shadow-lg hover:shadow-yellow-400/50 transition-all w-full flex items-center justify-center gap-2"
              >
                Search <FaArrowRight size={14} />
              </motion.button>
            </div>

          </div>
        </motion.div>


        {/* =========================================
            2. MAIN CONTENT AREA
           ========================================= */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT COLUMN: IMAGES & STATS --- */}
          <motion.div 
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // Setting a minimum height to ensure absolute items fit
            style={{ minHeight: '400px' }} 
          >
            
            {/* IMAGE 1: MAIN IMAGE 
               Requested Size: 305px * 355px
            */}
            <motion.div 
              variants={imageVariant} 
              whileHover={{ scale: 1.02 }}
              className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white"
              // Tailwind Arbitrary values for exact desktop size, max-w-full for responsive mobile
              className="w-[80%] md:w-[305px] h-auto md:h-[355px] relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white"
            >
               <img 
                 src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop" 
                 alt="OG Holidays Team" 
                 className="w-full h-full object-cover"
               />
            </motion.div>

            {/* IMAGE 2: SECONDARY IMAGE (Overlapping)
               Requested Size: 217px * 236px
               Position: Absolute bottom right relative to container
            */}
            <motion.div 
              variants={imageVariant} 
              whileHover={{ y: -10, zIndex: 20 }}
              className="absolute -bottom-6 -right-2 md:right-0 lg:right-10 z-20 rounded-[1.5rem] overflow-hidden shadow-2xl border-[6px] border-white"
              // Exact size for desktop
              className="absolute -bottom-6 right-0 md:left-[220px] w-[160px] md:w-[217px] h-[180px] md:h-[236px] z-20 rounded-[1.5rem] overflow-hidden shadow-2xl border-[6px] border-white"
            >
               <img 
                 src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=400&auto=format&fit=crop" 
                 alt="Travellers Group" 
                 className="w-full h-full object-cover"
               />
            </motion.div>

            {/* IMAGE 3: FLOATING STATS CARD
               Requested Size: 192px * 234px
               Position: Absolute top right
            */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              animate={{ y: [0, -12, 0] }} // Floating animation
              // @ts-ignore
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.05 }}
              // Exact size: 192px width, 234px height
              className="absolute -top-10 right-0 md:-right-4 lg:-right-12 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-30 border border-gray-100 flex flex-col justify-center px-5"
              style={{ width: '192px', height: '234px' }} // Inline style for strict adherence to request
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl font-extrabold text-gray-900">1000+</span>
                <span className="text-green-500 text-xl bg-green-100 p-1.5 rounded-full"><FaArrowUp size={12}/></span>
              </div>
              
              <p className="text-xs text-gray-500 font-semibold leading-relaxed mb-6">
                Trusted by happy travellers who love our curated holiday experiences
              </p>
              
              {/* User Avatars */}
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <img src={`https://i.pravatar.cc/100?img=${i + 25}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-white bg-yellow-400 flex items-center justify-center text-[10px] font-bold text-white">
                    +
                </div>
              </div>
            </motion.div>
          </motion.div>


          {/* --- RIGHT COLUMN: TEXT CONTENT --- */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left pt-12 lg:pt-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Tagline */}
            <motion.div variants={fadeInUp}>
               <span className="text-blue-400 text-2xl font-medium" style={{ fontFamily: 'cursive' }}>
                 Get About Us
               </span>
            </motion.div>

            {/* Headline */}
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              More About <br/><span className="text-gray-900">OG Holidays</span>
            </motion.h2>

            {/* Description */}
            <motion.div variants={fadeInUp} className="space-y-4 text-gray-500 text-base md:text-lg leading-relaxed">
              <p>
                OG Holidays is your trusted travel partner, offering personalised holiday plans, 
                expert guidance, and exclusive deals to make every trip smooth and memorable. 
              </p>
              <p>
                We create tailored itineraries based on your interests, budget, and travel style, 
                ensuring a hassle-free experience from planning to return. With dedicated support 
                and curated destination insights, we're here to turn your dream vacations into 
                unforgettable journeys.
              </p>
            </motion.div>

            {/* Button */}
            <motion.div variants={fadeInUp} className="pt-4">
              <motion.button 
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                Read More <FaArrowRight />
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OgAbout;