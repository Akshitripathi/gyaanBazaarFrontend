import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faStore, faCalendarAlt, faBullseye } from '@fortawesome/free-solid-svg-icons';
import Footer from "../footer/Footer";
import Header from '../navbar/header';
import libraryImage from "../about/library.jpg";
import event_manager from "../about/event_manager.jpg";
import unimart from "../about/unimart.jpg";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleEventPageClick = () => {
    navigate('/event');
  };

  const handleBookClick = () => {
    navigate('/book');
  };

  const handleUnimartClick = () => {
    navigate('/unimart');
  };

  return (
    <div>
      <Header />
      <div className="about-container">
        <h1>About GyaanBazaar</h1>
        <p>Welcome to GyaanBazaar, your one-stop solution for all your academic and college needs.</p>

        <div className="about-section" onClick={handleEventPageClick}>
          <h2><FontAwesomeIcon icon={faCalendarAlt} /> Event Manager</h2>
          <img src={event_manager} alt="Event Manager" className="about-image" />
          <p>Stay updated with the latest events happening in your college with our Event Manager.</p>
        </div>

        <div className="about-section" onClick={handleBookClick}>
          <h2><FontAwesomeIcon icon={faBook} /> Book Nest</h2>
          <img src={libraryImage} alt="Library" className="about-image" />
          <p>Book Nest is our online library designed to provide you with a vast collection of books and resources.</p>
        </div>

        <div className="about-section" onClick={handleUnimartClick}>
          <h2><FontAwesomeIcon icon={faStore} /> Unimart</h2>
          <img src={unimart} alt="Unimart" className="about-image" />
          <p>Unimart is our marketplace where you can buy and sell items with ease.</p>
        </div>

        <div className="about-section">
          <h2><FontAwesomeIcon icon={faBullseye} /> Our Mission</h2>
          <p>At GyaanBazaar, our mission is to provide a comprehensive platform that caters to the diverse needs of students.</p>
        </div>

        <div className="about-section">
          <h2>Contact Us</h2>
          <p>Have any questions or feedback? Feel free to reach out to us at contact@gyaanbazaar.com.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;