import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./hero.css";
// import login from "../../login/Login"

const Hero = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/login"); // Replace with your actual sign-up page route
  };

  return (
    <>
      <section className='hero'>
        <div className='container-hero'>
          <div className='row'>
            <h1>WELCOME TO GYAAN BAZAAR</h1>
            <h3>Your path to knowledge, expertly crafted.</h3>
            <p>Where the ordinary becomes extraordinary, and the future is shaped by the extraordinary.</p>
            <div>
              <button className='primary-btn' onClick={handleSignUpClick}>
                GET STARTED NOW <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
};

export default Hero;
