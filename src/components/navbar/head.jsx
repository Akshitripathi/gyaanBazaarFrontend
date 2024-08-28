import React from "react";
import './header.css'; 

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container-head'>
          <div className='logo'>
            <h1>GYAANBAZAAR</h1>
            <span>Discover, learn, thrive</span>
          </div>

          {/* <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Head;
