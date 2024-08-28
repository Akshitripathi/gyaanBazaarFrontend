import React from "react";
import Header from "../navbar/header";
import AboutCard from "./about/AboutCard";
import Hblog from "./event/Hevent";
import HAbout from "./course/HAbout";
import Hero from "./hero/hero";
import "./home.css";

const Home = () => {
  return (
    <>
    <Header />
      <Hero />
      <AboutCard />
      <HAbout />
      <Hblog />
    </>
  )
}

export default Home
