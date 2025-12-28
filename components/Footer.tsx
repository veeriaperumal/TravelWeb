"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * NEWSLETTER COMPONENT
 * ------------------------------------------------------------------
 * This component is designed to "float" above the footer.
 * It uses a golden/yellow background (#EBCB66) and white text.
 */
const Newsletter = () => {
  return (
    <div
      className="
        relative 
        w-full 
        max-w-[1110px] 
        mx-auto 
        bg-[#EBCB66] 
        rounded-[20px] 
        shadow-lg 
        flex 
        flex-col 
        lg:flex-row 
        items-center 
        justify-between 
        p-8 
        lg:px-16 
        lg:py-12
      "
    >
      {/* LEFT SIDE: Heading */}
      <div className="text-center lg:text-left mb-6 lg:mb-0">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Subscribe for <br className="hidden lg:block" />
          Latest Newsletter
        </h2>
      </div>

      {/* RIGHT SIDE: Input Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
      >
        <input
          type="email"
          placeholder="Your Email Address"
          className="
            w-full 
            sm:w-80 
            h-[55px] 
            px-6 
            rounded-full 
            text-gray-700 
            placeholder-[#EBCB66] 
            focus:outline-none 
            focus:ring-4 
            focus:ring-yellow-200
            transition-all
          "
        />
        <button
          className="
            h-[55px] 
            px-8 
            rounded-full 
            bg-white 
            text-[#EBCB66] 
            font-bold 
            text-lg 
            hover:bg-gray-100 
            transition-colors 
            shadow-md
          "
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

/**
 * FOOTER COMPONENT
 * ------------------------------------------------------------------
 * This is the main container. It includes:
 * 1. The floating Newsletter (positioned absolutely).
 * 2. The 4-column link grid.
 * 3. The copyright bar.
 */
const Footer = () => {
  // CONFIG: Social Media Links
  // Note: Ensure these icons exist in your public/assets folder.
  const socialLinks = [
    { icon: "/assets/facebook.png", alt: "Facebook" },
    { icon: "/assets/twitter.png", alt: "Twitter" },
    { icon: "/assets/youtube.png", alt: "YouTube" },
    { icon: "/assets/instagram.png", alt: "Instagram" },
  ];

  // CONFIG: Instagram Feed Images
  // Note: Check if your files are .jpg or .png and update extension below to match.
  const instaImages = [
    "/footer/footer-1.png",
    "/footer/footer-2.png",
    "/footer/footer-3.png",
    "/footer/footer-4.png",
    "/footer/footer-5.png",
    "/footer/footer-6.png",
  ];

  return (
    <footer className="w-full relative bg-[#FDFBF7] text-gray-600 font-sans mt-32">
      
      {/* 1. OVERLAPPING NEWSLETTER WRAPPER
        - absolute: Takes it out of normal flow to sit on top.
        - -top-32: Pulls the box UPWARDS by 8rem (approx 128px) so it overlaps the section above.
        - left-0 right-0: Ensures it stays centered.
      */}
      <div className="absolute -top-32 left-0 right-0 px-4 w-full z-20">
        <Newsletter />
      </div>

      {/* 2. MAIN CONTENT AREA
        - pt-48: Adds large top padding (12rem) to prevent the Newsletter 
          from covering the "OG Holidays" logo and text.
      */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 pt-48 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* COLUMN 1: Brand & Description */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[#EBCB66] text-4xl font-bold">OG</span>
              <span className="text-black text-4xl font-bold">Holidays</span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm lg:text-base max-w-xs">
              Delivering perfect holidays with comfort, safety, and great value
            </p>
            
            {/* Social Icons (Mapped) */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-[#EBCB66] rounded-full flex items-center justify-center hover:bg-[#d4b04d] transition-colors relative"
                >
                  {/* Icon Image with white filter */}
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={20}
                    height={20}
                    // 'brightness-0 invert' turns black icons into white icons
                    className="filter brightness-0 invert"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h3 className="text-black font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["About Us", "Services", "Packages", "Testimonials", "Contact Us", "Destinations"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-[#EBCB66] transition-colors text-sm lg:text-base"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* COLUMN 3: Contact Info */}
          <div>
            <h3 className="text-black font-bold text-lg mb-6">Get In Touch</h3>
            <ul className="space-y-6">
              {/* Item: Phone */}
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#EBCB66] flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/assets/phone.png" // Make sure this SVG exists!
                    alt="phone"
                    width={16}
                    height={16}
                    className="brightness-0 invert"
                  />
                </div>
                <span className="text-gray-500 text-sm lg:text-base">
                  +1 12345 67890
                </span>
              </li>

              {/* Item: Email */}
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#EBCB66] flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/assets/email.png" // Make sure this SVG exists!
                    alt="email"
                    width={16}
                    height={16}
                    className="brightness-0 invert"
                  />
                </div>
                <span className="text-gray-500 text-sm lg:text-base">
                  example@gmail.com
                </span>
              </li>

              {/* Item: Address */}
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#EBCB66] flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/assets/location.png" // Make sure this SVG exists!
                    alt="location"
                    width={16}
                    height={16}
                    className="brightness-0 invert"
                  />
                </div>
                <span className="text-gray-500 text-sm lg:text-base">
                  1014 N Main St, Miami, <br /> Oklahoma, 74354, United States
                </span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Instagram Feed */}
          <div>
            <h3 className="text-black font-bold text-lg mb-6">
              Follow Us On @instagram
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {instaImages.map((src, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden group"
                >
                  <Image
                    src={src}
                    alt={`Instagram shot ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT BAR */}
      <div className="w-full bg-[#EBCB66] py-4 text-center">
        <p className="text-white text-sm font-medium">
          © 2023 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;