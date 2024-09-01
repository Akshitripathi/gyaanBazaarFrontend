import React from 'react';
import './ContactUs.css'; // Ensure this path is correct
import Header from '../../components/navbar/header'; // Ensure this path is correct

function ContactUs() {
  return (
    <div>
      <Header />
      <div className="contact-wrapper">
        <div className="contact-details">
          <div className="contact-box">
            <p><i className="fas fa-phone"></i> +1 234 567 8910</p>
          </div>
          <div className="contact-box">
            <p><i className="fas fa-envelope"></i> Morinfa@gyanbazaar.com</p>
          </div>
          <div className="contact-box">
            <p><i className="fas fa-map-marker-alt"></i> 55 Prospect Street, 7th Fl Mars</p>
          </div>
        </div>
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>LET'S TALK ABOUT WHAT WE CAN MAKE, BUILD, SCALE TOGETHER</p>
          <div className="connect-with-us">
            <p>Connect with us</p>
            <div className="social-media">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-dribbble"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-skype"></i></a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form action="#" method="post">
            <label htmlFor="subject">Select Subject *</label>
            <select id="subject" name="subject" required>
              <option value="">Select Subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
            </select>
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="phone">Phone Number </label>
            <input type="tel" id="phone" name="phone" required />
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
