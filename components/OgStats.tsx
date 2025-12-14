'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { FaUmbrellaBeach } from 'react-icons/fa'; // Example icon

// Helper Component for counting number animation
const Counter = ({ from, to, suffix = '' }: { from: number, to: number, suffix?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const spring = useSpring(from, { mass: 0.8, stiffness: 75, damping: 15 });
  const displayValue = useTransform(spring, (current) => Math.round(current).toLocaleString() + suffix);

  useEffect(() => {
    if (isInView) {
      spring.set(to);
    }
  }, [isInView, spring, to]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const StatCard = ({ icon, number, suffix, title, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center w-full md:w-1/3 max-w-sm"
    >
      <div className="bg-yellow-100 text-yellow-500 p-6 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-4xl font-extrabold text-black mb-2">
        <Counter from={0} to={number} suffix={suffix} />
      </h3>
      <p className="text-gray-500 font-medium">{title}</p>
    </motion.div>
  );
};

const OgStats = () => {
  return (
    <section className="relative w-full pb-20 overflow-hidden">
      {/* Continuation of the yellow background theme */}
      <div 
        className="absolute bottom-0 right-0 h-full w-2/3 bg-yellow-400/20 -z-10"
        style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}
      />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-8 justify-center items-center">
        <StatCard 
          index={0}
          icon={<FaUmbrellaBeach size={40} />} 
          number={10} 
          suffix="+" 
          title="Dream Destinations Across the Globe" 
        />
        <StatCard 
          index={1}
          icon={<FaUmbrellaBeach size={40} />} 
          number={1000} 
          suffix="+" 
          title="Happy Travellers and Counting" 
        />
        <StatCard 
          index={2}
          icon={<FaUmbrellaBeach size={40} />} 
          number={98} 
          suffix="%" 
          title="Customer Satisfaction Rate" 
        />
      </div>
    </section>
  );
};

export default OgStats;