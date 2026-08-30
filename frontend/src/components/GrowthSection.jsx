import React, { useState } from "react";

const growthData = {
  build: {
    stage: "STAGE 01",
    title: "Build",
    description: "Build your digital foundation.",
    items: [
      "Google Business Profile Setup (if needed)",
      "Social Media Management (2 Platforms)",
      "Monthly Performance Report",
      "Consultations for marketing",
      "8 Creative Posts + 2 Reels",
      "Basic SEO Optimization",
    ],
  },

  improve: {
    stage: "STAGE 02",
    title: "Improve",
    description: "Improve your digital performance.",
    items: [
      "Social Media Management (2 Platforms)",
      "Google Ads Campaign Management",
      "Lead Generation Funnel Setup",
      "18 Creative Posts + 8 Reels",
      "GMB Maintain",
      "Monthly Strategy Consultation & Report",
      "Meta Ads Campaign Management",
      "Consultations for marketing",
      "Advanced SEO + Local SEO",
    ],
  },

  dominate: {
    stage: "STAGE 03",
    title: "Dominate",
    description: "Dominate your digital market.",
    items: [
      "Creative Designs (Reel + Post)",
      "Social Media Management (3 Platforms + Shoot 2 Visit)",
      "Advanced Analytics (Monthly Performance Report) & Scaling Strategy",
      "Complete Digital Marketing Management",
      "Performance Marketing + CRO",
      "Influencer & YouTube Marketing",
      "Website Maintenance & SEO",
      "Dedicated Account Manager",
      "Consultations for marketing",
      "GMB Maintain",
    ],
  },
};

const tabs = [
  {
    id: "build",
    title: "Build",
    description: "Lay the foundation",
  },
  {
    id: "improve",
    title: "Improve",
    description: "Optimize performance",
  },
  {
    id: "dominate",
    title: "Dominate",
    description: "Lead the market",
  },
];

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-4 w-4"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12 2.3 2.3 4.7-5" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-4 w-4"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const GrowthSection = () => {
  const [activeTab, setActiveTab] = useState("build");

  const activeContent = growthData[activeTab];

  return (
    <section className="relative overflow-hidden py-10 sm:py-12 lg:py-16">
      {/* Very subtle transition from Our Services */}
      <div
        className="
    pointer-events-none
    absolute
    left-0
    top-0
    z-10
    h-16
    w-full
    bg-gradient-to-b
    from-[#EFE1CF]/35
    via-[#EFE1CF]/10
    to-transparent
  "
      />

      {/* Base Background */}
      <div className="absolute inset-0 -z-30 bg-[#1c1008]" />

      {/* Main Gradient */}
      <div
        className="
          absolute
          inset-0
          -z-20
          bg-[linear-gradient(120deg,#180d06_0%,#321b0c_25%,#563216_52%,#3c220f_75%,#180c05_100%)]
        "
      />

      {/* Left Glow */}
      <div
        className="
          absolute
          -left-48
          -top-48
          -z-10
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#a56b2c]/20
          blur-[130px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          -bottom-48
          -right-48
          -z-10
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#c28b45]/20
          blur-[140px]
        "
      />

      {/* Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#f0d8ad]/[0.05]
          blur-[120px]
        "
      />

      {/* Decorative Dots */}
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 opacity-20 lg:block">
        <div className="grid grid-cols-5 gap-3">
          {Array.from({ length: 35 }).map((_, index) => (
            <span
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-[#e1c08b]"
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="py-8 text-center text-3xl">
          {/* Heading */}
          <div className="py-8 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d5a866]">
              OUR APPROACH
            </p>

            <h2
              className="
      text-4xl
      font-extrabold
      tracking-[-0.04em]
      text-[#f7f0e6]
      sm:text-5xl
      lg:text-6xl
    "
            >
              Your Growth <span className="text-[#d5b98f]">Our Strategy</span>
            </h2>

            <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-[#d5a866] to-transparent" />

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#cbbba6] sm:text-base">
              Build your presence. Improve your performance. Dominate your
              market.
            </p>
          </div>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#d8c5aa]">
            Build your presence. Improve your performance. Dominate your market.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
          {/* Tabs */}
          <div
            className="
              rounded-[24px]
              border
              border-[#f3ddba]/15
              bg-[#fff7e8]/[0.07]
              p-3
              shadow-[0_25px_80px_rgba(0,0,0,0.3)]
              backdrop-blur-2xl
            "
          >
            <div className="flex gap-2 lg:flex-col lg:gap-3">
              {tabs.map((tab, index) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      relative
                      flex
                      flex-1
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      p-3
                      text-left
                      transition-all
                      duration-300
                      lg:p-4

                      ${
                        isActive
                          ? `
                            border-[#d3a15c]/60
                            bg-gradient-to-r
                            from-[#704316]
                            to-[#9a652b]
                            shadow-[0_12px_35px_rgba(0,0,0,0.28)]
                          `
                          : `
                            border-transparent
                            bg-white/[0.025]
                            hover:border-[#d0a265]/20
                            hover:bg-white/[0.07]
                          `
                      }
                    `}
                  >
                    {/* Number */}
                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        text-xs
                        font-bold
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "bg-white/15 text-[#fff5e5]"
                            : "bg-[#d5a866]/10 text-[#cda66d]"
                        }
                      `}
                    >
                      0{index + 1}
                    </span>

                    {/* Tab Text */}
                    <span className="min-w-0">
                      <span
                        className={`
                          block
                          text-sm
                          font-bold
                          ${isActive ? "text-white" : "text-[#f0e4d2]"}
                        `}
                      >
                        {tab.title}
                      </span>

                      <span
                        className={`
                          mt-0.5
                          hidden
                          text-xs
                          sm:block
                          ${isActive ? "text-white/65" : "text-[#b9a58c]"}
                        `}
                      >
                        {tab.description}
                      </span>
                    </span>

                    {/* Arrow */}
                    <span
                      className={`
                        ml-auto
                        hidden
                        transition-all
                        duration-300
                        lg:block

                        ${
                          isActive
                            ? "translate-x-1 text-[#fff2d9]"
                            : "text-[#9e896f] opacity-40"
                        }
                      `}
                    >
                      <ArrowIcon />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div
            className="
              relative
              min-h-[390px]
              overflow-hidden
              rounded-[24px]
              border
              border-[#f3ddba]/15
              bg-[#fff7e8]/[0.075]
              p-6
              shadow-[0_25px_80px_rgba(0,0,0,0.3)]
              backdrop-blur-2xl
              sm:p-8
              lg:p-9
            "
          >
            {/* Top Line */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#f5dbaf]/30
                to-transparent
              "
            />

            {/* Content Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-80
                w-80
                rounded-full
                bg-[#d09a51]/10
                blur-[100px]
              "
            />

            <div
              key={activeTab}
              className="relative animate-[growthFade_0.35s_ease-out]"
            >
              {/* Stage */}
              <div
                className="
                  mb-4
                  inline-flex
                  rounded-full
                  border
                  border-[#d1a66d]/30
                  bg-[#d0a064]/10
                  px-3
                  py-1
                "
              >
                <span
                  className="
                    text-xs
                    font-bold
                    tracking-[0.2em]
                    text-[#d6b27b]
                  "
                >
                  {activeContent.stage}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-[#f2ede9]">
                {activeContent.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm font-medium text-[#d4b98f]">
                {activeContent.description}
              </p>

              {/* Divider */}
              <div
                className="
                  my-6
                  h-px
                  w-full
                  bg-gradient-to-r
                  from-[#c79554]/40
                  via-[#c79554]/15
                  to-transparent
                "
              />

              {/* Services */}
              <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {activeContent.items.map((item, index) => (
                  <div
                    key={`${activeTab}-${index}`}
                    className="
                      group
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      border
                      border-transparent
                      p-2
                      transition-all
                      duration-200
                      hover:border-[#d4a76a]/15
                      hover:bg-white/[0.035]
                    "
                  >
                    {/* Check Icon */}
                    <span
                      className="
                        mt-0.5
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        text-[#d5a866]
                      "
                    >
                      <CheckIcon />
                    </span>

                    {/* Service */}
                    <span
                      className="
                        text-sm
                        font-medium
                        leading-5
                        text-[#e4d5bf]
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Accent */}
              <div className="mt-7 flex items-center gap-2">
                <span className="h-1 w-10 rounded-full bg-[#b77b38]" />
                <span className="h-1 w-3 rounded-full bg-[#d0a264]" />
                <span className="h-1 w-1.5 rounded-full bg-[#ead0a4]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes growthFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default GrowthSection;
