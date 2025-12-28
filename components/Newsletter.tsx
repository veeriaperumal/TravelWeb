"use client";

import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full flex justify-center px-4 md:px-8 py-12">
      <div
        className="
          relative
          w-full
          max-w-[1110px]
          bg-[#F4C550]
          rounded-[20px]
          shadow-lg
          overflow-hidden
          
          /* RESPONSIVE LAYOUT: Column on mobile, Row on large screens */
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          
          /* SPACING: Smaller padding on mobile, larger on desktop */
          p-8
          lg:px-16
          lg:py-12
          gap-8
          lg:gap-0
        "
      >
        {/* DECORATIVE CIRCLES (Optional - adds polish) */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

        {/* LEFT SIDE: Text Content */}
        <div className="z-10 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-wide leading-tight">
            Subscribe for <br className="hidden lg:block" />
            Latest Newsletter
          </h2>
        </div>

        {/* RIGHT SIDE: Input Form */}
        <div className="z-10 w-full lg:w-auto">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="
              flex 
              flex-col 
              sm:flex-row 
              items-center 
              gap-4 
              w-full
            "
          >
            {/* EMAIL INPUT */}
            <div className="relative w-full sm:w-80 lg:w-96">
              {/* Optional Icon Placeholder */}
              {/* <Image src="/assets/mail.svg" width={20} height={20} className="absolute left-4 top-1/2 -translate-y-1/2" /> */}
              
              <input
                type="email"
                placeholder="Your Email Address"
                className="
                  w-full
                  h-[50px]
                  sm:h-[60px]
                  pl-6
                  pr-4
                  rounded-full
                  bg-white
                  text-gray-700
                  placeholder-[#F4C550]
                  text-sm
                  sm:text-base
                  focus:outline-none
                  focus:ring-4
                  focus:ring-yellow-400/50
                  transition-all
                "
              />
            </div>

            {/* SUBSCRIBE BUTTON */}
            <button
              type="submit"
              className="
                w-full
                sm:w-auto
                h-[50px]
                sm:h-[60px]
                px-8
                rounded-full
                bg-[#262626] /* Dark variant for contrast or White as per design */
                bg-white
                text-[#F4C550]
                font-bold
                text-base
                sm:text-lg
                hover:bg-gray-100
                active:scale-95
                transition-all
                duration-200
                whitespace-nowrap
                shadow-md
              "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;