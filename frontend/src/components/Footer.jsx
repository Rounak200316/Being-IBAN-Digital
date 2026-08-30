import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className=" bg-[#f2ede9] text-[#754e17]">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-14 py-16 sm:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <img
              className="mb-5 w-32"
              src={assets.logo}
              alt="Being IBAN Digital"
            />

            <p className="w-full text-sm leading-7 text-[#754e17] md:w-2/3">
              We help ambitious brands grow through strategic digital
              marketing, creative solutions, and innovative technology. At
              Being IBAN Digital, we go beyond marketing to create digital
              experiences that drive lasting impact.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="mb-5 text-xl font-bold tracking-tight text-[#754e17]">
              COMPANY
            </p>

            <ul className="flex flex-col gap-2 text-sm text-[#a98040]">
              <li className="cursor-pointer transition-colors hover:text-[#754e17]">
                Home
              </li>
              <li className="cursor-pointer transition-colors hover:text-[#754e17]">
                About Us
              </li>
              <li className="cursor-pointer transition-colors hover:text-[#754e17]">
                Resource
              </li>
              <li className="cursor-pointer transition-colors hover:text-[#754e17]">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-xl font-bold tracking-tight text-[#754e17]">
              GET IN TOUCH
            </p>

            <ul className="flex flex-col gap-2 text-sm text-[#a98040]">
              <li>+1-123-456-7890</li>
              <li>digitalbeingiban@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* =========================================================
          MEGA BRAND FOOTER
          ========================================================= */}
      <div className="relative overflow-hidden px-4 pt-10 sm:px-8 lg:px-12">

        {/* Subtle glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-80
            w-[70%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            blur-[100px]
          "
        />

        {/* Brand Text */}
        <div className="relative flex justify-center">
          <h2
            className="
              select-none
              whitespace-nowrap
              text-center
              text-[12vw]
              font-extrabold
              leading-[0.8]
              tracking-[-0.07em]
              text-[#754e17]/10
              sm:text-[11vw]
              lg:text-[10.5vw]
            "
          >
            BEING IBAN DIGITAL
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-5 text-xs text-[#a98040] sm:flex-row">
          <p>
            Copyright 2024 @ digitalbeingiban.com
          </p>

          <p>
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

