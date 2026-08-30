import React, { useContext } from "react";
import { ServiceContext } from "../context/ServiceContext";

const About = () => {
  const reasons = [
    {
      number: "01",
      title: "CUSTOM STRATEGY",
      text: "Every brand is different. We build customized marketing strategies around your audience, goals, and business.",
    },
    {
      number: "02",
      title: "SMARTER INVESTMENT",
      text: "Affordable digital marketing solutions designed to give startups and businesses more value from every marketing investment.",
    },
    {
      number: "03",
      title: "TRANSPARENT GROWTH",
      text: "Clear communication, dedicated support, and transparent reporting so you always know where your marketing stands.",
    },
    {
      number: "04",
      title: "CREATIVE × PERFORMANCE",
      text: "We combine creative storytelling with performance-driven campaigns that are designed to attract, engage, and convert.",
    },
    {
      number: "05",
      title: "REAL BUSINESS RESULTS",
      text: "We don't chase vanity metrics. Our focus is meaningful growth, stronger visibility, qualified leads, and measurable outcomes.",
    },
  ];

  const {navigate} = useContext(ServiceContext);

  return (
    <main className="min-h-screen ">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#5b3509] px-5 pb-20 pt-32 sm:px-10 lg:px-16 lg:pb-28 lg:pt-40">

        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#d5a866]/10" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-[#d5a866]/10" />

        <div className="pointer-events-none absolute bottom-[-150px] left-[-100px] h-[350px] w-[350px] rounded-full bg-[#d5a866]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Small label */}
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-[#d5a866]" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d5a866]">
              ABOUT BEING IBAN DIGITAL
            </p>
          </div>

          {/* Main heading */}
          <h1
            className="
              max-w-6xl
              text-5xl
              font-extrabold
              uppercase
              leading-[0.92]
              tracking-[-0.05em]
              text-[#f8f3ee]
              sm:text-6xl
              md:text-7xl
              lg:text-[100px]
            "
          >
            We don't just
            <br />

            <span className="text-[#d5a866]">
              market.
            </span>

            <br />

            We make brands
            <br />

            <span className="text-[#d5a866]">
              matter.
            </span>
          </h1>

          {/* Description */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">

            <p className="max-w-3xl text-base leading-7 text-[#f2e5d5] sm:text-lg lg:text-xl">
              At Being Iban Digital, we transform ideas into impactful
              digital experiences. As a full-service digital marketing
              agency, we help brands grow through innovative strategies,
              creative storytelling, and data-driven marketing solutions.
            </p>

            <div className="border-l border-[#d5a866]/30 pl-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d5a866]">
                OUR APPROACH
              </p>

              <p className="mt-3 text-sm leading-6 text-[#f2e5d5]">
                Strategy. Creativity. Performance. Growth.
              </p>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-14 h-px w-full bg-[#d5a866]/20" />

          <div className="mt-5 flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d5a866]">
              STRATEGY × CREATIVE × PERFORMANCE
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          WHAT WE DO
      ===================================================== */}
      <section className="px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Left */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a98040]">
                WHAT WE DO
              </p>

              <h2
                className="
                  mt-4
                  text-4xl
                  font-extrabold
                  leading-[1]
                  tracking-[-0.04em]
                  text-[#754e17]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Turning
                <br />
                attention
                <br />
                into
                <br />
                <span className="text-[#b45d0a]">
                  action.
                </span>
              </h2>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-end">

              <p className="text-lg font-medium leading-8 text-[#754e17] sm:text-xl">
                From social media management and branding to performance
                marketing and content creation, we build digital systems
                that help businesses connect with the right people.
              </p>

              <p className="mt-6 text-sm leading-7 text-[#a98040] sm:text-base">
                We believe good marketing is more than being visible.
                It is about creating the right message, reaching the right
                audience, and turning attention into meaningful business
                results.
              </p>

              {/* Service tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Digital Strategy",
                  "Performance Marketing",
                  "Social Media",
                  "Branding",
                  "SEO",
                  "Content",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      border
                      border-[#754e17]/15
                      px-4
                      py-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#754e17]
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}
      <section className="bg-[#eee5dc] px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a98040]">
                WHY US
              </p>

              <h2
                className="
                  mt-4
                  max-w-4xl
                  text-4xl
                  font-extrabold
                  uppercase
                  leading-[0.95]
                  tracking-[-0.04em]
                  text-[#754e17]
                  sm:text-5xl
                  lg:text-7xl
                "
              >
                Why choose
                <br />

                <span className="text-[#b45d0a]">
                  Being Iban Digital?
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#a98040]">
              Everything we do is built around one goal:
              helping your business grow in a digital-first world.
            </p>
          </div>

          {/* Reasons */}
          <div className="mt-14 grid gap-px overflow-hidden border border-[#754e17]/10 bg-[#754e17]/10 md:grid-cols-2 lg:grid-cols-3">

            {reasons.map((reason, index) => (
              <div
                key={reason.number}
                className={`
                  group
                  relative
                  bg-[#eee5dc]
                  p-7
                  transition-all
                  duration-300
                  hover:bg-[#754e17]
                  sm:p-9
                  ${index === 4 ? "lg:col-span-1" : ""}
                `}
              >

                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#a98040] transition-colors duration-300 group-hover:text-[#d5a866]">
                    {reason.number}
                  </span>

                  <span className="text-xl text-[#a98040] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#d5a866]">
                    ↗
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-12 text-xl font-extrabold tracking-tight text-[#754e17] transition-colors duration-300 group-hover:text-[#f8f3ee]">
                  {reason.title}
                </h3>

                {/* Text */}
                <p className="mt-4 text-sm leading-6 text-[#a98040] transition-colors duration-300 group-hover:text-[#e5d8c8]">
                  {reason.text}
                </p>

                {/* Bottom line */}
                <div className="mt-8 h-px w-10 bg-[#a98040] transition-all duration-300 group-hover:w-full group-hover:bg-[#d5a866]" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          GROWTH STATEMENT
      ===================================================== */}
      <section className=" px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden bg-[#754e17] px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">

            {/* Decorative elements */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#d5a866]/20" />

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-[#d5a866]/10" />

            <div className="relative z-10">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d5a866]">
                THE BIGGER PICTURE
              </p>

              <h2
                className="
                  mt-5
                  max-w-5xl
                  text-4xl
                  font-extrabold
                  leading-[1]
                  tracking-[-0.04em]
                  text-[#f8f3ee]
                  sm:text-5xl
                  lg:text-7xl
                "
              >
                Your brand deserves
                <br />
                more than
                <span className="text-[#d5a866]">
                  {" "}likes.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#e5d8c8] sm:text-base">
                From building meaningful connections to generating leads
                and driving conversions, we create marketing experiences
                that move people and move businesses forward.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="border border-[#d5a866]/30 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#d5a866]">
                    STRATEGY
                  </p>
                </div>

                <div className="border border-[#d5a866]/30 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#d5a866]">
                    CREATIVITY
                  </p>
                </div>

                <div className="border border-[#d5a866]/30 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#d5a866]">
                    PERFORMANCE
                  </p>
                </div>

                <div className="border border-[#d5a866]/30 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#d5a866]">
                    GROWTH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className=" px-5 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="border-t border-[#754e17]/15 pt-12">

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a98040]">
                  READY TO GROW?
                </p>

                <h2
                  className="
                    mt-3
                    max-w-3xl
                    text-4xl
                    font-extrabold
                    tracking-[-0.04em]
                    text-[#754e17]
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  Let's build something
                  <span className="text-[#b45d0a]">
                    {" "}worth talking about.
                  </span>
                </h2>
              </div>

              <button onClick={()=>navigate('/login')}
                type="button"
                className="
                  group
                  relative
                  inline-flex
                  w-fit
                  items-center
                  gap-4
                  overflow-hidden
                  bg-[#754e17]
                  px-9
                  py-4
                  text-xs
                  font-bold
                  tracking-[0.15em]
                  text-[#f2ede9]
                  shadow-[0_10px_40px_rgba(117,78,23,0.15)]
                  transition-all
                  duration-300
                  hover:shadow-[0_15px_45px_rgba(117,78,23,0.3)]
                  cursor-pointer
                "
              >
                <span className="relative z-10">
                  START YOUR JOURNEY
                </span>


                {/* Shine */}
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

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;