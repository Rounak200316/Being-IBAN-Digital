import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const services = [
  {
    title: "CREATION AND DEVELOPMENT",
    items: [
      "Website Development",
      "E-Commerce Solutions",
      "App Development",
      "Graphics Designing",
      "Branding and Design",
      "Photography and Videography",
    ],
  },
  {
    title: "PERFORMANCE AND ADVERTISING",
    items: [
      "Conversion Rate Optimization",
      "Performance Marketing",
      "Funnel Marketing",
      "Lead Generation",
      "Google Ads",
      "Meta Ads",
    ],
  },
  {
    title: "SEO AND OPTIMISATION",
    items: [
      "Generative Engine Optimisation",
      "Search Engine Optimisation",
      "Local SEO",
    ],
  },
  {
    title: "CONTENT AND BRANDING",
    items: [
      "Online Reputation Management",
      "Strategy Consulting",
      "Content Marketing",
    ],
  },
  {
    title: "MARKETING CHANNELS",
    items: [
      "Social Media Marketing",
      "Email Marketing",
      "WhatsApp Marketing",
      "Truecaller Marketing",
      "Influencer Marketing",
    ],
  },
  {
    title: "SOCIAL AND PLATFORM MARKETING",
    items: [
      "Social Media Management",
      "Linkedin Marketing",
      "YouTube Marketing",
      "TikTok Marketing",
      "Reddit Ads",
      "X Ads",
    ],
  },
];

const OurServices = () => {
  return (
    <div className="relative mt-10 mb-0">
      {/* Our Services */}
      <div className="relative z-10 bg-[#EFE1CF] py-8 text-center text-3xl">
        <Title text1={"OUR"} text2={" SERVICES"} />

        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  flex
                  min-h-[220px]
                  flex-col
                  items-start
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#b8945b]/50
                  bg-[#f3e6d3]/60
                  p-7
                  text-left
                  shadow-[0_8px_30px_rgba(117,78,23,0.08)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  ease-out
                  hover:scale-[1.03]
                  hover:border-[#a98040]
                  hover:bg-[#f7ead8]/80
                  hover:shadow-[0_15px_40px_rgba(117,78,23,0.16)]
                "
              >
                {/* Hover Gradient */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/40
                    via-transparent
                    to-[#c9a66b]/10
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10 w-full">
                  <p className="mb-5 text-sm font-semibold text-[#754e17] sm:text-base">
                    {service.title}
                  </p>

                  <ul className="flex flex-col gap-2 text-sm text-[#a98040]">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2"
                      >
                        <img
                          className="mt-0.5 h-4 w-4 shrink-0"
                          src={assets.check_icon}
                          alt=""
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

