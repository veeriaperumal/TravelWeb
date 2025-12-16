"use client"; // Required for interactivity in Next.js (App Router)

import React, { useState } from "react";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";

const HeroSearch = () => {
  // We use state to track which input is currently focused.
  // This allows us to highlight the specific section the user is interacting with.
  const [activeField, setActiveField] = useState("");

  return (
    // Outer wrapper to center the component on the page
    <div className="w-full max-w-6xl mx-auto px-4 py-12 flex justify-center">
      
      {/* MAIN SEARCH CONTAINER 
        - flex-col md:flex-row: Stacks vertically on mobile, becomes a row on desktop.
        - shadow-2xl: Gives it a deep "floating" effect.
        - rounded-3xl: Large rounded corners for a modern, friendly look.
      */}
      <div className="
        bg-white 
        w-full 
        max-w-4xl 
        p-3 
        rounded-[2rem] md:rounded-full 
        shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
        border border-gray-100 
        flex flex-col md:flex-row items-center 
        gap-2 
        transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
      ">

        {/* --- INPUT GROUP 1: DESTINATION --- */}
        <div 
          className={`
            relative flex items-center w-full md:w-[35%] px-6 py-4 rounded-3xl transition-all duration-300
            ${activeField === 'location' ? 'bg-gray-50 ring-2 ring-yellow-400/20' : 'hover:bg-gray-50/50'}
          `}
        >
          {/* Icon Wrapper */}
          <div className="mr-4 p-2 bg-yellow-50 rounded-full text-yellow-600">
            <MapPin size={20} />
          </div>
          
          <div className="flex flex-col w-full">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              Destination
            </label>
            <input 
              type="text" 
              placeholder="Type of Venue?" 
              className="w-full bg-transparent outline-none text-gray-700 font-semibold placeholder-gray-400 text-sm md:text-base"
              onFocus={() => setActiveField('location')}
              onBlur={() => setActiveField('')}
            />
          </div>
        </div>

        {/* Divider Line (Visible only on Desktop) */}
        <div className="hidden md:block w-px h-10 bg-gray-200 mx-2"></div>

        {/* --- INPUT GROUP 2: DATE --- */}
        <div 
          className={`
            relative flex items-center w-full md:w-[25%] px-6 py-4 rounded-3xl transition-all duration-300
            ${activeField === 'date' ? 'bg-gray-50 ring-2 ring-yellow-400/20' : 'hover:bg-gray-50/50'}
          `}
        >
          <div className="mr-4 p-2 bg-yellow-50 rounded-full text-yellow-600">
            <Calendar size={20} />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              Date
            </label>
            {/* Using type='date' allows native browser date pickers */}
            <input 
              type="date" 
              className="w-full bg-transparent outline-none text-gray-700 font-semibold text-sm md:text-base cursor-pointer"
              onFocus={() => setActiveField('date')}
              onBlur={() => setActiveField('')}
            />
          </div>
        </div>

        {/* Divider Line */}
        <div className="hidden md:block w-px h-10 bg-gray-200 mx-2"></div>

        {/* --- INPUT GROUP 3: TRAVELLERS --- */}
        <div 
          className={`
            relative flex items-center w-full md:w-[25%] px-6 py-4 rounded-3xl transition-all duration-300
            ${activeField === 'travellers' ? 'bg-gray-50 ring-2 ring-yellow-400/20' : 'hover:bg-gray-50/50'}
          `}
        >
          <div className="mr-4 p-2 bg-yellow-50 rounded-full text-yellow-600">
            <Users size={20} />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              Travellers
            </label>
            <select 
              className="w-full bg-transparent outline-none text-gray-700 font-semibold text-sm md:text-base cursor-pointer appearance-none"
              onFocus={() => setActiveField('travellers')}
              onBlur={() => setActiveField('')}
            >
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3-5 Guests</option>
              <option>5+ Guests</option>
            </select>
          </div>
        </div>

        {/* --- SEARCH BUTTON --- */}
        <div className="w-full md:w-auto p-2">
          <button className="
            group
            w-full md:w-auto
            flex items-center justify-center gap-2 
            bg-[#F2C94C] hover:bg-[#E6B838] 
            text-white font-bold 
            py-4 md:py-4 md:px-8 
            rounded-full 
            shadow-lg shadow-yellow-400/30 
            transition-all duration-300 
            transform active:scale-95 hover:-translate-y-1
          ">
            <span>Search</span>
            {/* Arrow icon moves to the right on hover */}
            <ArrowRight 
              size={18} 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            />
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroSearch;