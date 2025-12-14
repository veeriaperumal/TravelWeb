import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="relative w-full h-10 md:h-12 bg-black flex items-center overflow-hidden font-sans">
      
      {/* Background Shape: The Yellow Diagonal Polygon */}
      {/* Responsive Width: 85% on mobile, 70% on medium screens and up */}
      <div 
        className="absolute top-0 left-0 h-full w-[85%] md:w-[70%] bg-yellow-500 z-0 transition-all duration-300 ease-in-out"
        style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0% 100%)' }} 
      />

      <div className="container mx-auto px-2 md:px-4 flex justify-between items-center relative z-10 w-full h-full">
        
        {/* LEFT SECTION (On Yellow Background) */}
        <div className="flex items-center space-x-4 md:space-x-6 text-white text-[11px] md:text-sm font-medium pl-1 md:pl-2">
          
          {/* Phone: Always Visible */}
          <div className="flex items-center gap-1 md:gap-2">
            <FaPhoneAlt className="text-white text-xs md:text-sm" />
            <span>+1 1234567890</span>
          </div>

          {/* Email: Hidden on Mobile, Visible on Desktop (md:flex) */}
          <div className="hidden md:flex items-center gap-2">
            <FaEnvelope className="text-white" />
            <span>example@gmail.com</span>
          </div>
        </div>

        {/* RIGHT SECTION (On Black Background) */}
        <div className="flex items-center gap-2 md:gap-3 pr-1 md:pr-2">
          <SocialIcon icon={<FaFacebookF />} />
          <SocialIcon icon={<FaTwitter />} />
          <SocialIcon icon={<FaYoutube />} />
          <SocialIcon icon={<FaInstagram />} />
        </div>
      </div>
    </div>
  );
};

// Helper component for the round social icons
const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <a 
      href="#" 
      // Responsive size: smaller on mobile (w-6 h-6), standard on desktop (md:w-7 md:h-7)
      className="w-6 h-6 md:w-7 md:h-7 bg-white rounded-full flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors duration-300"
    >
      <span className="text-[10px] md:text-xs">{icon}</span>
    </a>
  );
};

export default TopBar;