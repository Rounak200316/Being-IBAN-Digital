import React from "react";
import { Link } from "react-router-dom";

const NewsLetterBox = () => {
  return (
    <section className="relative overflow-hidden bg-[#1c1008] py-24 sm:py-28 lg:py-32">
      {/* Background Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_0%,#704316_0%,#321b0c_35%,#1c1008_75%)]
          opacity-80
        "
      />

      {/* Left Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/2
          h-80
          w-80
          -translate-y-1/2
          rounded-full
          bg-[#c28b45]/10
          blur-[120px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-[#a56b2c]/10
          blur-[120px]
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-10">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#cda66d]/50" />

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d5a866]">
            LET'S GROW TOGETHER
          </p>

          <span className="h-px w-8 bg-[#cda66d]/50" />
        </div>

        {/* Main Heading */}
        <h2
          className="
            mx-auto
            max-w-4xl
            text-4xl
            font-extrabold
            leading-[1.05]
            tracking-[-0.04em]
            text-[#f7f0e6]
            sm:text-5xl
            lg:text-7xl
          "
        >
          Ready to take your
          <br />
          <span className="text-[#d5b98f]">digital presence</span> further?
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-sm
            leading-7
            text-[#cbbba6]
            sm:text-base
          "
        >
          Let's build a digital strategy that turns attention into engagement,
          engagement into leads, and leads into lasting growth.
        </p>

        {/* CTA */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/login">
            <button
              className="
                group
                relative
                overflow-hidden
                bg-[#d5a866]
                px-9
                py-4
                text-xs
                font-bold
                tracking-[0.15em]
                text-[#241307]
                shadow-[0_10px_40px_rgba(213,168,102,0.2)]
                transition-all
                duration-300
                hover:bg-[#e2bd7c]
                hover:shadow-[0_15px_45px_rgba(213,168,102,0.3)]
                cursor-pointer
              "
              type="button"
            >
              <span className="relative z-10">START YOUR JOURNEY</span>

              {/* Button Shine */}
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />
            </button>
          </Link>

          <span className="text-xs text-[#9f8c76]">
            No complicated process. Just real growth.
          </span>
        </div>

        {/* Bottom Stats */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 border-y border-[#d5a866]/10 sm:grid-cols-3">
          <div className="px-5 py-5">
            <p className="text-xl font-extrabold text-[#f0e4d2]">STRATEGY</p>
            <p className="mt-1 text-xs text-[#9f8c76]">
              Built around your goals
            </p>
          </div>

          <div className="border-y border-[#d5a866]/10 px-5 py-5 sm:border-x sm:border-y-0">
            <p className="text-xl font-extrabold text-[#f0e4d2]">CREATIVITY</p>
            <p className="mt-1 text-xs text-[#9f8c76]">Designed to stand out</p>
          </div>

          <div className="px-5 py-5">
            <p className="text-xl font-extrabold text-[#f0e4d2]">GROWTH</p>
            <p className="mt-1 text-xs text-[#9f8c76]">Focused on results</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterBox;
