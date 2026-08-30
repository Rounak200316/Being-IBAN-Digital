import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-16 bg-[#f8f3ee]">
      <div className="w-full max-w-2xl text-center">

        {/* 404 */}
        <p className="text-[120px] sm:text-[160px] font-extrabold leading-none tracking-[-0.08em] text-[#754e17]">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-[-0.04em] text-[#322217]">
          Page not found.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-lg text-sm sm:text-base leading-7 text-[#a98040]">
          Sorry, the page you're looking for doesn't exist or may have been
          moved. Let's get you back to where you need to be.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center bg-[#754e17] px-8 py-4 text-xs font-bold tracking-[0.15em] text-[#f2ede9] transition-all duration-300 hover:bg-[#5b3509] hover:shadow-[0_15px_40px_rgba(117,78,23,0.25)]"
        >
          BACK TO HOME
        </Link>

        {/* Decorative line */}
        <div className="mt-12 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#754e17]/10" />

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a98040]">
            BEING IBAN DIGITAL
          </span>

          <div className="h-px flex-1 bg-[#754e17]/10" />
        </div>

      </div>
    </main>
  );
};

export default NotFound;