'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ShieldCheck, Globe, ArrowRight } from 'lucide-react';
// 1. Import the Google Font
import { Plus_Jakarta_Sans } from 'next/font/google';

// 2. Configure the font with the specific weights you need
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['500', '600'], // 500 for Description, 600 for Title
});

const features = [
  {
    title: 'Customer Support',
    description: 'Get 24/7 assistance for all your travel needs with quick and reliable support',
    icon: Phone,
  },
  {
    title: 'Best Price Guarantee',
    description: 'Enjoy the best deals with competitive prices and exclusive travel offers',
    icon: ShieldCheck,
  },
  {
    title: 'Wide Destination Choice',
    description: 'Choose from a wide range of stunning global destinations tailored to your travel style',
    icon: Globe,
  },
];

const OgContact = () => {
  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden font-sans text-slate-800"
      style={{
        background: 'linear-gradient(180deg, rgba(239, 195, 86, 0.1) 0%, rgba(239, 195, 86, 0) 100%)',
        backgroundColor: '#ffffff'
      }}
    >
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* --- LEFT COLUMN: PHONE MOCKUP --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden ring-1 ring-slate-900/50">
            <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 w-1/2 mx-auto rounded-b-xl z-20"></div>
            <div className="w-full h-full bg-[#EBCB63] flex items-center justify-center relative">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="w-40 h-40 bg-black rounded-full flex flex-col items-center justify-center text-[#EBCB63] p-4 shadow-xl z-10"
              >
                <h1 className="text-4xl font-black tracking-tighter leading-none">OG</h1>
                <span className="text-[10px] font-bold tracking-widest mt-1">HOLIDAYS</span>
              </motion.div>
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent pointer-events-none" />
            </div>
            <div className="absolute top-24 -left-3 w-1 h-10 bg-slate-800 rounded-l-md"></div>
            <div className="absolute top-40 -left-3 w-1 h-16 bg-slate-800 rounded-l-md"></div>
            <div className="absolute top-32 -right-3 w-1 h-16 bg-slate-800 rounded-r-md"></div>
          </div>
        </motion.div>


        {/* --- RIGHT COLUMN: CONTENT --- */}
        <div className="flex flex-col space-y-8">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-black"
          >
            Contact Us
          </motion.h2>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                viewport={{ once: true }}
                className="group flex gap-5 items-start"
              >
                {/* Icon Box */}
                <div className="flex-shrink-0 relative pt-1">
                  <div className="w-12 h-12 rounded-xl border-2 border-[#EBCB63]/30 bg-white flex items-center justify-center text-[#EBCB63] shadow-sm transition-all duration-300 group-hover:border-[#EBCB63] group-hover:scale-110 group-hover:shadow-md">
                    <feature.icon size={20} strokeWidth={2.5} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  {/* TITLE STYLE:
                      font-family: Jakarta
                      font-weight: 600 (semibold)
                      font-size: 24px (text-2xl)
                      line-height: 100% (leading-none)
                      letter-spacing: 0px (tracking-normal)
                  */}
                  <h3 className={`${jakarta.className} font-semibold text-2xl leading-none tracking-normal text-slate-900 group-hover:text-[#D4AF37] transition-colors`}>
                    {feature.title}
                  </h3>

                  {/* DESCRIPTION STYLE:
                      font-family: Jakarta
                      font-weight: 500 (medium)
                      font-size: 20px (text-xl)
                      line-height: 100% (leading-none)
                      letter-spacing: 0px (tracking-normal)
                  */}
                  <p className={`${jakarta.className} font-medium text-xl leading-none tracking-normal text-slate-500 max-w-lg`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button className="group relative overflow-hidden bg-[#EBCB63] text-black font-bold text-lg px-10 py-4 rounded-lg shadow-lg shadow-[#EBCB63]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#EBCB63]/50 hover:-translate-y-1 active:translate-y-0">
              <span className="relative z-10 flex items-center gap-2">
                Contact Now
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
            </button>
          </motion.div>
        </div>

      </div>
      
      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default OgContact;