import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../userContext';
import './profile.css';
import Header from '../navbar/header';
import Modal from './Modal';
import Footer from '../footer/Footer';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user: contextUser, setUser: setContextUser } = useContext(UserContext);
  const [user, setUser] = useState(contextUser || null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newMobile, setNewMobile] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newDOB, setNewDOB] = useState(''); // New state for DOB
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      const username = location.state?.user?.user_name;
      const response = await fetch(`http://localhost:3000/api/users/${username}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok. Status: ${response.status}. Response: ${errorText}`);
      }

      const data = await response.json();
      setUser(data);
      setNewUsername(data.user_name);
      setNewEmail(data.user_email);
      setNewMobile(data.user_mobile);
      setNewDOB(data.user_dob); // Initialize new DOB state
      setContextUser(data);  // Set context user data
      localStorage.setItem('user', JSON.stringify(data));  // Save to localStorage
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Failed to load user data.');
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser) {
      setUser(storedUser);
      setNewUsername(storedUser.user_name);
      setNewEmail(storedUser.user_email);
      setNewMobile(storedUser.user_mobile);
      setNewDOB(storedUser.user_dob); // Initialize new DOB state
      setLoading(false);
    } else if (location.state?.user?.user_name) {
      fetchUserData();
    } else {
      setError('No user data available');
      setLoading(false);
    }
  }, []);

  const handleProfilePictureChange = (e) => {
    setProfilePicture(URL.createObjectURL(e.target.files[0]));
  };

  const handleEditProfile = () => {
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  const handleSaveChanges = async () => {
    const formData = {
      user_name: newUsername,
      user_email: newEmail,
      user_mobile: newMobile,
      user_dob: newDOB, // Include new DOB state
    };

    try {
      const response = await fetch(`http://localhost:3000/api/users/${user.user_name}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'Error updating profile');
        return;
      }

      alert('Profile updated successfully');
      setUser(data.data);
      setContextUser(data.data);  // Update context
      localStorage.setItem('user', JSON.stringify(data.data));  // Update localStorage
      setShowModal(false); 
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating the profile');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="profile">
      <Header />
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-picture" onClick={() => document.getElementById('profile-picture-input').click()}>
            {profilePicture ? (
              <img src={profilePicture} alt="Profile" />
            ) : (
              <div className="default-picture">
                {user.user_name?.charAt(0).toUpperCase()}
              </div>
            )}
            <input
              type="file"
              id="profile-picture-input"
              accept="image/*"
              onChange={handleProfilePictureChange}
              style={{ display: 'none' }} // Hide the file input
            />
          </div>
          <div className="profile-info">
            <h2>Hello, {user.user_name}</h2>
            <h4>Email: {user.user_email || 'Not available'}</h4>
            <h4>Mobile: {user.user_mobile || 'Not available'}</h4>
            <h4>DOB: {user.user_dob ? new Date(user.user_dob).toLocaleDateString() : 'Not available'}</h4>
          </div>
          <button className="btn edit-btn" onClick={handleEditProfile}>
            Edit Profile
          </button>
        </div>
        
      </div>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h2>Edit Profile</h2>
          <div className="form-group">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              id="username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number:</label>
            <input
              type="text"
              id="mobile"
              value={newMobile}
              onChange={(e) => setNewMobile(e.target.value)}
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              value={newDOB}
              onChange={(e) => setNewDOB(e.target.value)}
            />
          </div>
          <button className="btn" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </Modal>
      )}
      <Footer/>
    </div>
  );
};

export default Profile;
