import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row border border-[#a98040] mx-4 sm:mx-[3vw] md:mx-[5vw] lg:mx-[7vw] mt-[4vw] bg-[#f2ede9]">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-0">
        <div className="text-[#754e17] px-6 sm:px-8">
          <div className="flex items-center gap-2">
            <span className="w-8 md:w-11 h-[2px] bg-[#754e17]"></span>
            <p className="font-medium text-sm md:text-base tracking-wide">
              DIGITAL PARTNERS
            </p>
          </div>

          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl py-3 leading-relaxed">
            Beyond Marketing
          </h1>

          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base tracking-wide">
              WORK WITH US
            </p>
            <span className="w-8 md:w-11 h-[2px] bg-[#754e17]"></span>
          </div>

          <Link to="/login">
            <button
              type="button"
              className="
    group
    relative
    mt-7
    inline-flex
    items-center
    overflow-hidden
    bg-[#754e17]
    px-6
    py-3
    pr-12
    text-sm
    font-medium
    text-[#f2ede9]
    shadow-[0_10px_40px_rgba(117,78,23,0.2)]
    transition-all
    duration-300
    hover:bg-[#754e17]
    hover:shadow-[0_15px_45px_rgba(117,78,23,0.35)]
    
    cursor-pointer
  "
            >
              {/* Button Text */}
              <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
                Get Started
              </span>

              {/* Arrow */}
              <span
                className="
      absolute
      right-4
      top-1/2
      z-10
      -translate-y-1/2
      text-lg
      leading-none
      transition-all
      duration-500
      ease-in-out
      group-hover:translate-x-12
    "
              >
                →
              </span>

              {/* Button Shine */}
              <span
                className="
      pointer-events-none
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
      transition-transform
      duration-700
      group-hover:translate-x-full
    "
              />
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full sm:w-1/2">
        <img
          src={assets.hero_img}
          alt="Digital marketing"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
