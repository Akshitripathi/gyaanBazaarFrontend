import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './LogSign.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUpClick = () => {
    setIsSignUp(true); // Show Sign Up form
  };

  const handleSignInClick = () => {
    setIsSignUp(false); // Show Sign In form
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const endpoint = isSignUp ? 'http://localhost:3000/api/users/register' : 'http://localhost:3000/api/users/login';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      const data = await response.json(); 

      if (response.ok) {
        console.log(data.message); 
        alert('Login successfull');

        navigate('/profile', { state: { user: { username: formData.username, email: formData.email } } });
      } else {
        
        setErrors(data.error); 
        alert(console.error(data.error)); 
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
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.username && <div className="error">{errors.username}</div>}
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.password && <div className="error">{errors.password}</div>}
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="https://www.facebook.com" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.google.com" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="https://www.linkedin.com" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
    
            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className={`sign-up-form ${isSignUp ? '' : 'hidden'}`}>
              <h2 className="title">Sign up</h2>
              {errors.general && <div className="error">{errors.general}</div>}
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.username && <div className="error">{errors.username}</div>}
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.email && <div className="error">{errors.email}</div>}
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.password && <div className="error">{errors.password}</div>}
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
            <img src="/login.png" className="image" alt="login" />
          </div>
    
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>If you already have an account, just sign in!</p>
              <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                Sign in
              </button>
            </div>
            <img src="/login.png" className="image" alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;