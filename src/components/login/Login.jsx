import React, { useState, useContext } from "react";
import {
  FaUser, FaLock, FaFacebook, FaTwitter, FaGoogle, FaLinkedinIn, FaEnvelope, FaPhone, FaCalendarAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../userContext"; // Ensure this is correctly imported
import './LogSig.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
    user_mobile: "",
    user_dob: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setErrors({});
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
    setErrors({});
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = isSignUp
        ? 'http://localhost:3000/api/users/register'
        : 'http://localhost:3000/api/users/login';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type");

      let data;
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (response.ok) {
        setUser(data.data || formData); // Set user in context
        localStorage.setItem('user', JSON.stringify(data.data || formData)); // Store in localStorage
        console.log(data.message || data);
        alert('Login successful');
        navigate('/profile', { state: { user: data.data || formData } });
      } else {
        setErrors({ general: data.error || data });
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ general: 'An error occurred. Please try again later.' });
    }
  };

  return (
    <div className="login">
      <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            {/* Sign In Form */}
            <form onSubmit={handleSubmit} className={`sign-in-form ${isSignUp ? 'hidden' : ''}`}>
              <h2 className="title">Sign in</h2>
              {errors.general && <div className="error">{errors.general}</div>}
              <div className="input-field">
                <i className="fas fa-user"><FaUser /></i>
                <input
                  type="text"
                  placeholder="Username"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"><FaLock /></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="user_password"
                  value={formData.user_password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="https://www.facebook.com" className="social-icon">
                  <i className="fab fa-facebook"><FaFacebook /></i>
                </a>
                <a href="https://www.twitter.com" className="social-icon">
                  <i className="fab fa-twitter"><FaTwitter /></i>
                </a>
                <a href="https://www.google.com" className="social-icon">
                  <i className="fab fa-google"><FaGoogle /></i>
                </a>
                <a href="https://www.linkedin.com" className="social-icon">
                  <i className="fab fa-linkedin-in"><FaLinkedinIn /></i>
                </a>
              </div>
            </form>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className={`sign-up-form ${isSignUp ? '' : 'hidden'}`}>
              <h2 className="title">Sign up</h2>
              {errors.general && <div className="error">{errors.general}</div>}
              <div className="input-field">
                <i className="fas fa-user"><FaUser /></i>
                <input
                  type="text"
                  placeholder="Username"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"><FaEnvelope /></i>
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-phone"><FaPhone /></i>
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="user_mobile"
                  value={formData.user_mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"><FaLock /></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="user_password"
                  value={formData.user_password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-calendar-alt"><FaCalendarAlt /></i>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  name="user_dob"
                  value={formData.user_dob}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input type="submit" value="Sign up" className="btn solid" />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here?</h3>
              <p>Come let us help you enter your details!</p>
              <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                Sign up
              </button>
            </div>
            <img src="./images/login.png" className="image" alt="login" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>If you already have an account, just sign in!</p>
              <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                Sign in
              </button>
            </div>
            <img src="./images/login.png" className="image" alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
