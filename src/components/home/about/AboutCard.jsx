import React from "react";
import "./about.css";
// import Awrapper from "./Awrapper"

const About = () => {
  return (
    <div className="aboutHome">
      <div className="container-about">
        <div className="left">
          <img src="../images/about.webp" alt="About Us" />
        </div>
        <div className="right">
          <div id="heading">
            <h2>Discover Our Unique Approach</h2>
          </div>
          <div className="items ">
            <div className="item shadow">
              <h3>Our Mission</h3>
              <p>
                Our mission is to provide an engaging and collaborative platform for
                students to connect, learn, and grow. We aim to streamline
                communication and enhance the overall educational experience.
              </p>
            </div>
            <div className="item shadow">
              <h3>What We Offer</h3>
              <p>
                We offer a unified communication system, digtal library, and a
                marketplace for students to buy, sell, or rent items, all designed
                to foster a sense of community and support academic success.
              </p>
            </div>
            <div className="item shadow">
              <h3>Join Us</h3>
              <p>
                Join us in creating a vibrant and supportive student community.
                Explore new opportunities, collaborate with peers, and make the
                most of your academic journey.
              </p>
              
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
  
};

export default About;
