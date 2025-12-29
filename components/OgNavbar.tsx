'use client';

import React, { useState } from 'react';
import { FiSearch, FiPhone, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import TopBar from './layout/TopBar'

const OgNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Packages', id: 'packages' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLElement>,
    id: string,
    name: string
  ) => {
    e.preventDefault();
    setActiveLink(name);
    setIsOpen(false);

    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header height (approx 80px)
      const headerOffset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
     <>
     <TopBar />
      
    <motion.nav
        
     initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
      // CHANGE 1: Changed 'fixed' to 'sticky'. 
      // This ensures it sits BELOW the TopBar initially, then sticks to top on scroll.
      className="sticky top-0 w-full bg-white/90 backdrop-blur-md py-4 px-6 md:px-12 z-50 shadow-sm"
    >
      
      <div className="flex justify-between items-center font-sans max-w-7xl mx-auto">

        {/* LOGO */}
        <div
          className="text-2xl font-bold text-black tracking-tight cursor-pointer z-50"
          onClick={(e) => handleScroll(e, 'home', 'Home')}
        >
          <span className="text-yellow-400">Og</span> Holidays
        </div>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id, item.name)}
                className={`relative transition-colors duration-300 flex flex-col items-center ${
                  activeLink === item.name
                    ? 'text-yellow-500'
                    : 'hover:text-yellow-500'
                }`}
              >
                {item.name}
                {activeLink === item.name && (
                  <motion.span
                    layoutId="active-dot"
                    className="absolute -bottom-2 w-1.5 h-1.5 bg-yellow-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="w-10 h-10 border border-yellow-200 rounded-full flex items-center justify-center text-yellow-500 hover:bg-yellow-50 transition">
            <FiSearch size={18} />
          </button>

          <button
            onClick={(e) => handleScroll(e, 'contact', 'Contact Us')}
            className="flex items-center gap-2 bg-yellow-400 text-white px-6 py-2.5 rounded-full font-medium hover:bg-yellow-500 transition shadow-sm hover:shadow-md active:scale-95"
          >
            Contact Us
            <FiPhone />
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden flex flex-col items-center py-6 space-y-6 font-medium text-gray-700 border-t"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id, item.name)}
                className={
                  activeLink === item.name
                    ? 'text-yellow-500'
                    : 'hover:text-yellow-500'
                }
              >
                {item.name}
              </a>
            ))}

            <div className="flex gap-4 mt-2">
              <button className="w-10 h-10 border border-yellow-200 rounded-full flex items-center justify-center text-yellow-500">
                <FiSearch size={18} />
              </button>
              <button
                onClick={(e) => handleScroll(e, 'contact', 'Contact Us')}
                className="bg-yellow-400 text-white px-6 py-2 rounded-full font-medium"
              >
                Call Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>

    </>
  );
};

export default OgNavbar;