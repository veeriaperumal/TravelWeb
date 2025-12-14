'use client'; // Required for animations and state

import React, { useState } from 'react';
import { FiSearch, FiPhone, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const OgNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white py-4 px-6 md:px-12 relative z-50 shadow-sm md:shadow-none"
    >
      <div className="flex justify-between items-center font-sans">
        
        {/* LOGO */}
        <div className="text-2xl font-bold text-black tracking-tight z-50">
          <span className="text-yellow-400">Og</span> Holidays
        </div>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium items-center">
          {['Home', 'Services', 'Packages', 'Contact Us'].map((item, index) => (
            <li key={index} className={`cursor-pointer transition hover:text-yellow-500 ${item === 'Home' ? 'text-yellow-500 flex flex-col items-center' : ''}`}>
              {item}
              {item === 'Home' && <motion.span layoutId="dot" className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1" />}
            </li>
          ))}
        </ul>

        {/* RIGHT ACTIONS (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="w-10 h-10 border border-yellow-200 rounded-full flex items-center justify-center text-yellow-500 hover:bg-yellow-50 transition">
            <FiSearch size={18} />
          </button>
          <button className="flex items-center gap-2 bg-yellow-400 text-white px-6 py-2.5 rounded-full font-medium hover:bg-yellow-500 transition shadow-sm hover:shadow-md active:scale-95 transform">
            Contact Us
            <FiPhone className="fill-current" />
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden z-50 flex items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden flex flex-col items-center py-4 space-y-4 font-medium text-gray-700"
          >
            <a href="#" className="hover:text-yellow-500">Home</a>
            <a href="#" className="hover:text-yellow-500">Services</a>
            <a href="#" className="hover:text-yellow-500">Packages</a>
            <a href="#" className="hover:text-yellow-500">Contact Us</a>
            <div className="flex gap-4 mt-2">
               <button className="w-10 h-10 border border-yellow-200 rounded-full flex items-center justify-center text-yellow-500">
                <FiSearch size={18} />
              </button>
               <button className="bg-yellow-400 text-white px-6 py-2 rounded-full font-medium">
                Call Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default OgNavbar;