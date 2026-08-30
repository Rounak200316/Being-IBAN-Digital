import React, { useState } from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const policies = [
  {
    id: 1,
    title: "TRANSPARENT PRICING",
    shortTitle: "TRANSPARENT",
    description: "No hidden costs or surprises",
    longDescription:
      "No hidden costs or surprises. Every investment is clearly communicated so you always know exactly what you're paying for.",
    icon: assets.pricing_icon,
  },
  {
    id: 2,
    title: "RESULTS-DRIVEN STRATEGY",
    shortTitle: "RESULTS-DRIVEN",
    description: "Focused on measurable growth",
    longDescription:
      "Focused on measurable growth and meaningful business outcomes through data-driven strategies.",
    icon: assets.result_icon,
  },
  {
    id: 3,
    title: "24/7 CUSTOMER SUPPORT",
    shortTitle: "24/7 CUSTOMER",
    description: "Always here when you need us",
    longDescription:
      "Always here when you need us, whenever you need assistance or guidance.",
    icon: assets.support_img,
  },
];

const Policy = () => {
  const [activePolicy, setActivePolicy] = useState(1);

  const dominantPolicy = policies.find(
    (policy) => policy.id === activePolicy
  );

  const secondaryPolicies = policies.filter(
    (policy) => policy.id !== activePolicy
  );

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-20">
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          -z-20
          bg-[linear-gradient(
            135deg,
            #f8f1e7_0%,
            #efe1cf_40%,
            #e5cdaa_70%,
            #f8f1e7_100%
          )]
        "
      />

      {/* Left glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          -z-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#c9a66b]/15
          blur-[120px]
        "
      />

      {/* Right glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          -z-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#a98040]/10
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="text-center text-3xl">
          <Title text1="OUR" text2=" POLICIES" />

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#a98040]">
            Simple principles that keep our work transparent, focused, and
            client-first.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {/* =========================
              DOMINANT CARD
          ========================== */}
          <div
            key={`dominant-${dominantPolicy.id}`}
            className="
              group
              relative
              min-h-[400px]
              overflow-hidden
              rounded-[28px]
              border
              border-[#b8945b]/40
              bg-[#fffaf2]/55
              p-7
              shadow-[0_15px_50px_rgba(117,78,23,0.10)]
              backdrop-blur-xl
              transition-all
              duration-500
              animate-[policyFade_0.4s_ease-out]
              hover:border-[#a98040]/70
              hover:shadow-[0_25px_65px_rgba(117,78,23,0.17)]
              lg:col-span-2
              lg:row-span-2
            "
          >
            {/* Main glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-80
                w-80
                rounded-full
                bg-[#d0a264]/20
                blur-[90px]
                transition-all
                duration-700
                group-hover:scale-125
              "
            />

            {/* Decorative circle */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-28
                -right-28
                h-72
                w-72
                rounded-full
                border
                border-[#b8945b]/15
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

            <div className="relative z-10 flex h-full flex-col justify-between">
              {/* Top */}
              <div className="flex items-start justify-between">
                <span
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#b8945b]/30
                    bg-[#e5cdaa]/40
                    text-sm
                    font-bold
                    text-[#754e17]
                  "
                >
                  0{dominantPolicy.id}
                </span>

                <span
                  className="
                    text-xs
                    font-semibold
                    tracking-[0.25em]
                    text-[#b8945b]
                  "
                >
                  POLICY
                </span>
              </div>

              {/* Icon */}
              <div className="mt-10">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#754e17]/10
                    transition-transform
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                >
                  <img
                    className="h-8 w-8 object-contain"
                    src={dominantPolicy.icon}
                    alt=""
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-[#754e17]
                    sm:text-3xl
                  "
                >
                  {dominantPolicy.id === 1 ? (
                    <>
                      TRANSPARENT
                      <br />
                      PRICING
                    </>
                  ) : dominantPolicy.id === 2 ? (
                    <>
                      RESULTS-DRIVEN
                      <br />
                      STRATEGY
                    </>
                  ) : (
                    <>
                      24/7 CUSTOMER
                      <br />
                      SUPPORT
                    </>
                  )}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#a98040]">
                  {dominantPolicy.longDescription}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="mt-8 flex items-center gap-2">
                <span className="h-1 w-12 rounded-full bg-[#b77b38]" />
                <span className="h-1 w-4 rounded-full bg-[#d0a264]" />
                <span className="h-1 w-1.5 rounded-full bg-[#ead0a4]" />
              </div>
            </div>
          </div>

          {/* =========================
              SECONDARY CARDS
          ========================== */}
          {secondaryPolicies.map((policy) => (
            <button
              key={policy.id}
              type="button"
              onClick={() => setActivePolicy(policy.id)}
              className="
                group
                relative
                min-h-[280px]
                overflow-hidden
                rounded-[28px]
                border
                border-[#b8945b]/40
                bg-[#fffaf2]/55
                p-7
                text-left
                shadow-[0_15px_50px_rgba(117,78,23,0.10)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#a98040]/70
                hover:bg-[#fffaf2]/70
                hover:shadow-[0_25px_65px_rgba(117,78,23,0.17)]
                focus:outline-none
                focus:ring-2
                focus:ring-[#b8945b]/40
                animate-[policyFade_0.4s_ease-out]
              "
            >
              {/* Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-[#c9a66b]/20
                  blur-[60px]
                  transition-transform
                  duration-500
                  group-hover:scale-125
                "
              />

              <div className="relative z-10 flex h-full flex-col">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#e5cdaa]/50
                      text-xs
                      font-bold
                      text-[#754e17]
                    "
                  >
                    0{policy.id}
                  </span>

                  <img
                    className="
                      h-8
                      w-8
                      object-contain
                      transition-transform
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                    src={policy.icon}
                    alt=""
                  />
                </div>

                {/* Content */}
                <div className="mt-auto pt-10">
                  <h3 className="text-xl font-bold text-[#754e17]">
                    {policy.id === 1 ? (
                      <>
                        TRANSPARENT
                        <br />
                        PRICING
                      </>
                    ) : policy.id === 2 ? (
                      <>
                        RESULTS-DRIVEN
                        <br />
                        STRATEGY
                      </>
                    ) : (
                      <>
                        24/7 CUSTOMER
                        <br />
                        SUPPORT
                      </>
                    )}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#a98040]">
                    {policy.description}
                  </p>

                  {/* Click indicator */}
                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#b8945b]">
                    <span>Explore</span>

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes policyFade {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Policy;

