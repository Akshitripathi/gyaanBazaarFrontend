import React from "react";
import Header from "../navbar/home_header";
import AboutCard from "./about/AboutCard";
import Hblog from "./event/Hevent";
import HAbout from "./course/HAbout";
import Hero from "./hero/hero";
import Footer from "../footer/Footer";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <AboutCard />
      <HAbout />
      <Hblog />
      <Footer />
    </div>
  );
}

export default Home;
