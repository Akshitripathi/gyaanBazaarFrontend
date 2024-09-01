import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaCalendarAlt, FaBook, FaStore, FaPhone, FaUser } from "react-icons/fa";
import Head from "./head";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowToggle(true);
      } else {
        setShowToggle(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* <Head /> */}
      <header>
        <nav className="navbar">
          {showToggle && (
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
          <ul
            className={isOpen ? "nav-links open" : "nav-links"}
            onClick={handleLinkClick}
          >
            <li>
              <Link to="/">
                <FaHome className="nav-icon" /> Home
              </Link>
            </li>
            <li>
              <Link to="/courses">
                <FaInfoCircle className="nav-icon" /> About
              </Link>
            </li>
            <li>
              <Link to="/event">
                <FaCalendarAlt className="nav-icon" /> Events
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <FaBook className="nav-icon" /> Book Nest
              </Link>
            </li>
            <li>
              <Link to="/allcourses">
                <FaStore className="nav-icon" /> Unimart
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FaPhone className="nav-icon" /> Contact
              </Link>
            </li>
            <li className="profile-item">
              <Link to="/profile">
                <FaUser className="nav-icon" /> Profile
              </Link>
            </li>
          </ul>
          <div className={isOpen ? "sidebar open" : "sidebar"}>
            <ul>
              <li>
                <Link to="/" onClick={handleLinkClick}>
                  <FaHome className="nav-icon" /> Home
                </Link>
              </li>
              <li>
                <Link to="/courses" onClick={handleLinkClick}>
                  <FaInfoCircle className="nav-icon" /> About
                </Link>
              </li>
              <li>
                <Link to="/event" onClick={handleLinkClick}>
                  <FaCalendarAlt className="nav-icon" /> Events
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={handleLinkClick}>
                  <FaBook className="nav-icon" /> Book Nest
                </Link>
              </li>
              <li>
                <Link to="/allcourses" onClick={handleLinkClick}>
                  <FaStore className="nav-icon" /> Unimart
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick}>
                  <FaPhone className="nav-icon" /> Contact
                </Link>
              </li>
              <li>
                <Link to="/profile" onClick={handleLinkClick}>
                  <FaUser className="nav-icon" /> Profile
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
