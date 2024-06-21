"use client";
import React from "react";
import AboutPageBanner from "@/Components/AboutPageBanner";
import Footer from "@/Components/Footer";

const About = () => {
  return (
    <div className="absolute">
      <AboutPageBanner />
      <div className="shadow-inner"><Footer /></div>
      
    </div>
  );
};

export default About;
