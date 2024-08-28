import React from "react"
import AboutCard from "./about/AboutCard"
import Hblog from "./event/Hevent"
import HAbout from "./course/HAbout"
import Hero from "./hero/hero"
import "./home.css"
// import Hprice from "./Hprice"
// import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      {/* <Testimonal /> */}
      <Hblog />
      {/* <Hprice /> */}
    </>
  )
}

export default Home
