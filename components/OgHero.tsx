'use client';

import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { motion, easeOut} from 'framer-motion';

const OgHero = () => {
  // =========================================
  // ANIMATION SETTINGS
  // =========================================
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut },
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
          width: '1600px',
          height: '766px',
          top: '75.5px',
          opacity: 0.04,
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
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-800"
          style={{ fontFamily: 'cursive' }}
        >
          Relax & Enjoy the Vacation
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold text-black leading-tight"
        >
          Explore The Most <br className="hidden md:block" />
          Stunning Destinations <br className="hidden md:block" />
          With <span className="text-yellow-500">OG Holidays</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0 text-lg"
        >
          Find your dream trip with OG Holidays. We offer personalised plans,
          expert guidance, and easy, hassle-free travel.
        </motion.p>

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
        <div className="relative flex flex-col md:flex-row gap-4 md:h-[550px]">
          
          {/* COLUMN 1: Left side (2 stacked images) */}
          <div className="flex flex-col gap-4 items-center md:items-end">
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
              FLOATING CIRCULAR BADGE
              ========================================= */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
          >
            {/* 1. Yellow Background Circle */}
            <div className="relative w-40 h-40 md:w-44 md:h-44 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-2xl border-4 border-white">
              
              {/* 2. Rotating Text (SVG) */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  <path
                    id="textPath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="transparent"
                  />
                  <text className="text-[11px] font-bold fill-white tracking-widest uppercase">
                    <textPath href="#textPath" startOffset="0%">
                      • Join Now • Join Now • Join Now
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* 3. Static Center White Circle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner">
                  {/* 4. Telegram/Paper Plane Icon */}
                  <FaPaperPlane className="text-yellow-500 text-2xl translate-x-0.5 translate-y-0.5" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default OgHero;