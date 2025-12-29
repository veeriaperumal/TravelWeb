'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Packages', id: 'packages' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact Us', id: 'contact' },
    { name: 'Destinations', id: 'destinations' },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: '#' },
    { icon: <Twitter size={18} />, href: '#' },
    { icon: <Youtube size={18} />, href: '#' },
    { icon: <Instagram size={18} />, href: '#' },
  ];

  const instaImages = [
    '/footer/footer-1.png',
    '/footer/footer-2.png',
    '/footer/footer-3.png',
    '/footer/footer-4.png',
    '/footer/footer-5.png',
    '/footer/footer-6.png',
  ];

  const handleScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, // Elements appear one after another
        delayChildren: 0.1 
      }
    }
  };

  const socialIconHover = {
    hover: { y: -4, scale: 1.1, transition: { type: "spring", stiffness: 400 } },
    tap: { scale: 0.9 }
  };

  return (
    <footer className="w-full relative bg-[#FDFBF7] text-gray-600 font-sans mt-8 overflow-hidden border-t border-gray-100">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-20 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* COLUMN 1: Brand */}
          <motion.div variants={fadeInUp} className="flex flex-col space-y-5">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center text-3xl font-bold tracking-tight cursor-pointer origin-left"
              onClick={(e) => handleScroll(e, 'home')}
            >
              <span className="text-[#EBCB66]">OG</span>
              <span className="text-[#1A1A1A] ml-1">Holidays</span>
            </motion.div>
            <p className="text-gray-500 leading-relaxed text-m font-bold max-w-[240px]">
              Delivering perfect holidays with comfort, safety, and <br /> great value
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <motion.div 
                  key={idx} 
                  variants={socialIconHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    href={social.href}
                    className="w-9 h-9 bg-[#EBCB66] text-white rounded-full flex items-center justify-center hover:bg-[#d4b04d] transition-colors shadow-sm"
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2: Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[#1A1A1A] font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <motion.a
                    whileHover={{ x: 6, color: '#EBCB66' }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    href={`#${item.id}`}
                    onClick={(e) => handleScroll(e, item.id)}
                    className="text-gray-500 transition-colors text-[16px] cursor-pointer inline-block"
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3: Contact Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[#1A1A1A] font-bold text-xl mb-6">Get In Touch</h3>
            <ul className="space-y-6">
              {[
                { icon: 'phone', val: '+1 12345 67890' },
                { icon: 'mail', val: 'example@gmail.com' },
                { icon: 'loc', val: <>1014 N Main St, Miami, <br /> Oklahoma, 74354, USA</> }
              ].map((contact, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#EBCB66] flex items-center justify-center flex-shrink-0 text-white shadow-sm transition-transform duration-300 group-hover:rotate-12">
                    {contact.icon === 'phone' && <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>}
                    {contact.icon === 'mail' && <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>}
                    {contact.icon === 'loc' && <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" /></svg>}
                  </div>
                  <span className="text-gray-600 text-[15px] font-medium">{contact.val}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 4: Instagram Grid */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[#1A1A1A] font-bold text-xl mb-6">Follow Us</h3>
            <div className="grid grid-cols-3 gap-2 max-w-[260px]">
              {instaImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
                  className="relative aspect-square bg-gray-100 rounded-md overflow-hidden border border-gray-100 shadow-sm cursor-pointer"
                >
                  <Image src={src} alt="Instagram" fill className="object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* COPYRIGHT BAR */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full bg-[#EBCB66] py-5 text-center"
      >
        <p className="text-white text-sm font-semibold tracking-wide">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;