```jsx
const GrowthSection = () => {
  const [activeTab, setActiveTab] = useState("build");

  const activeContent = growthData[activeTab];

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

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

      <div className="absolute inset-0 -z-30 bg-[#1c1008]" />

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
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#a56b2c]/20
          blur-[100px]
          sm:h-[600px]
          sm:w-[600px]
          sm:blur-[130px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          -bottom-48
          -right-48
          -z-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#c28b45]/20
          blur-[100px]
          sm:h-[650px]
          sm:w-[650px]
          sm:blur-[140px]
        "
      />

      {/* Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[350px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#f0d8ad]/[0.05]
          blur-[100px]
          sm:h-[500px]
          sm:w-[700px]
          sm:blur-[120px]
        "
      />

      {/* Decorative dots */}
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

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="py-6 text-center sm:py-8">

          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d5a866] sm:text-xs sm:tracking-[0.3em]">
            OUR APPROACH
          </p>

          <h2
            className="
              text-3xl
              font-extrabold
              leading-tight
              tracking-[-0.04em]
              text-[#f7f0e6]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Your Growth{" "}
            <span className="text-[#d5b98f]">
              Our Strategy
            </span>
          </h2>

          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#d5a866] to-transparent sm:mt-5 sm:w-20" />

          <p className="mx-auto mt-4 max-w-xl px-2 text-xs leading-5 text-[#cbbba6] sm:mt-5 sm:text-base sm:leading-6">
            Build your presence. Improve your performance. Dominate your
            market.
          </p>
        </div>

        {/* =====================================================
            LAYOUT
        ===================================================== */}

        <div className="grid w-full gap-4 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-5">

          {/* =================================================
              TABS
          ================================================= */}

          <div
            className="
              min-w-0
              rounded-2xl
              border
              border-[#f3ddba]/15
              bg-[#fff7e8]/[0.07]
              p-2
              shadow-[0_25px_80px_rgba(0,0,0,0.3)]
              backdrop-blur-2xl
              sm:rounded-[24px]
              sm:p-3
            "
          >

            {/* Mobile: horizontal scroll */}
            <div
              className="
                flex
                w-full
                gap-2
                overflow-x-auto
                pb-1
                scrollbar-hide
                lg:flex-col
                lg:gap-3
                lg:overflow-visible
                lg:pb-0
              "
            >

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
                      min-w-[110px]
                      flex-1
                      shrink-0
                      items-center
                      gap-2
                      rounded-xl
                      border
                      p-2.5
                      text-left
                      transition-all
                      duration-300
                      sm:min-w-[140px]
                      sm:gap-3
                      sm:rounded-2xl
                      sm:p-3
                      lg:min-w-0
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
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        text-[10px]
                        font-bold
                        transition-all
                        duration-300
                        sm:h-9
                        sm:w-9
                        sm:rounded-xl
                        sm:text-xs

                        ${
                          isActive
                            ? "bg-white/15 text-[#fff5e5]"
                            : "bg-[#d5a866]/10 text-[#cda66d]"
                        }
                      `}
                    >
                      0{index + 1}
                    </span>

                    {/* Text */}

                    <span className="min-w-0 flex-1">

                      <span
                        className={`
                          block
                          truncate
                          text-xs
                          font-bold
                          sm:text-sm

                          ${
                            isActive
                              ? "text-white"
                              : "text-[#f0e4d2]"
                          }
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

                          ${
                            isActive
                              ? "text-white/65"
                              : "text-[#b9a58c]"
                          }
                        `}
                      >
                        {tab.description}
                      </span>

                    </span>

                    {/* Desktop arrow */}

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

          {/* =================================================
              CONTENT CARD
          ================================================= */}

          <div
            className="
              relative
              min-w-0
              overflow-hidden
              rounded-2xl
              border
              border-[#f3ddba]/15
              bg-[#fff7e8]/[0.075]
              p-5
              shadow-[0_25px_80px_rgba(0,0,0,0.3)]
              backdrop-blur-2xl
              sm:min-h-[390px]
              sm:rounded-[24px]
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
                h-64
                w-64
                rounded-full
                bg-[#d09a51]/10
                blur-[80px]
                sm:h-80
                sm:w-80
                sm:blur-[100px]
              "
            />

            {/* =================================================
                ACTIVE CONTENT
            ================================================= */}

            <div
              key={activeTab}
              className="relative animate-[growthFade_0.35s_ease-out]"
            >

              {/* Stage */}

              <div
                className="
                  mb-3
                  inline-flex
                  max-w-full
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
                    text-[9px]
                    font-bold
                    tracking-[0.18em]
                    text-[#d6b27b]
                    sm:text-xs
                    sm:tracking-[0.2em]
                  "
                >
                  {activeContent.stage}
                </span>
              </div>

              {/* Title */}

              <h3
                className="
                  break-words
                  text-2xl
                  font-bold
                  leading-tight
                  text-[#f2ede9]
                  sm:text-3xl
                "
              >
                {activeContent.title}
              </h3>

              {/* Description */}

              <p className="mt-2 text-xs font-medium text-[#d4b98f] sm:text-sm">
                {activeContent.description}
              </p>

              {/* Divider */}

              <div
                className="
                  my-5
                  h-px
                  w-full
                  bg-gradient-to-r
                  from-[#c79554]/40
                  via-[#c79554]/15
                  to-transparent
                  sm:my-6
                "
              />

              {/* =================================================
                  SERVICES
              ================================================= */}

              <div className="grid min-w-0 gap-1.5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2">

                {activeContent.items.map((item, index) => (

                  <div
                    key={`${activeTab}-${index}`}
                    className="
                      group
                      flex
                      min-w-0
                      items-start
                      gap-2.5
                      rounded-lg
                      border
                      border-transparent
                      p-2
                      transition-all
                      duration-200
                      hover:border-[#d4a76a]/15
                      hover:bg-white/[0.035]
                      sm:gap-3
                      sm:rounded-xl
                    "
                  >

                    {/* Check */}

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
                        min-w-0
                        break-words
                        text-xs
                        font-medium
                        leading-5
                        text-[#e4d5bf]
                        sm:text-sm
                      "
                    >
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              {/* Bottom Accent */}

              <div className="mt-6 flex items-center gap-2 sm:mt-7">
                <span className="h-1 w-8 rounded-full bg-[#b77b38] sm:w-10" />
                <span className="h-1 w-2.5 rounded-full bg-[#d0a264] sm:w-3" />
                <span className="h-1 w-1.5 rounded-full bg-[#ead0a4]" />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATION
      ===================================================== */}

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

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default GrowthSection;
```
