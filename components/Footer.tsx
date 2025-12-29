'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants, easeOut } from 'framer-motion';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  /* ----------------------------------
     Data
  ----------------------------------- */
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

  /* ----------------------------------
     Smooth Scroll Handler
  ----------------------------------- */
  const handleScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const offset = 80;
    const top =
      target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  /* ----------------------------------
     Framer Motion Variants (STRICT)
  ----------------------------------- */
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const socialIconVariants: Variants = {
    hover: {
      y: -4,
      scale: 1.1,
      transition: {
        type: 'spring',
        stiffness: 400,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  /* ----------------------------------
     JSX
  ----------------------------------- */
  return (
    <footer className="relative w-full bg-[#FDFBF7] border-t border-gray-100 overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-20 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div variants={fadeInUp} className="space-y-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={(e) => handleScroll(e, 'home')}
              className="flex items-center text-3xl font-bold cursor-pointer"
            >
              <span className="text-[#EBCB66]">OG</span>
              <span className="ml-1 text-[#1A1A1A]">Holidays</span>
            </motion.div>

            <p className="text-gray-500 text-sm font-semibold max-w-[240px] leading-relaxed">
              Delivering perfect holidays with comfort, safety,
              <br /> and great value.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((item, i) => (
                <motion.div
                  key={i}
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    href={item.href}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#EBCB66] text-white shadow-sm hover:bg-[#d4b04d]"
                  >
                    {item.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <motion.a
                    href={`#${item.id}`}
                    onClick={(e) => handleScroll(e, item.id)}
                    whileHover={{ x: 6, color: '#EBCB66' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="inline-block text-gray-500 text-sm font-medium"
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-6 text-sm font-medium text-gray-600">
              <li>+1 12345 67890</li>
              <li>example@gmail.com</li>
              <li>
                1014 N Main St, Miami,
                <br />
                Oklahoma, 74354, USA
              </li>
            </ul>
          </motion.div>

          {/* Instagram */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">
              Follow Us
            </h3>
            <div className="grid grid-cols-3 gap-2 max-w-[260px]">
              {instaImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square rounded-md overflow-hidden border bg-gray-100"
                >
                  <Image
                    src={src}
                    alt="Instagram image"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#EBCB66] py-5 text-center"
      >
        <p className="text-white text-sm font-semibold tracking-wide">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
