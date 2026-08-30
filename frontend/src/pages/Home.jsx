import React from "react";
import Hero from "../components/Hero";
import Policy from "../components/Policy";
import NewsLetterBox from "../components/NewsLetterBox";
import OurServices from "../components/OurServices";
import GrowthSection from "../components/GrowthSection";

const Home = () => {
  return <div>
    <Hero/>
    <OurServices/>
    <GrowthSection/>
    <Policy/>
    <NewsLetterBox/>
  </div>;
};

export default Home;
