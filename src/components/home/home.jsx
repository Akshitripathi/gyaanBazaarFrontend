import React, { useEffect } from "react";
import AboutCard from "./about/AboutCard";
import Hblog from "./event/Hevent";
import HAbout from "./course/HAbout";
import Hero from "./hero/hero";
import Mart from "./mart/Mart";
import "./home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />    
      <Hblog />
      <Mart />
    </>
  );
};

export default Home;
