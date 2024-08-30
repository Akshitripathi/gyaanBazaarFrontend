import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './profile.css';
import Header from '../navbar/header';
import Modal from './Modal';

const Profile = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newMobile, setNewMobile] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to load user data.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, [location.state?.user?.user_name]);

  const handleProfilePictureChange = (e) => {
    setProfilePicture(URL.createObjectURL(e.target.files[0]));
    setNewProfilePicture(e.target.files[0]); 
  };

  const handleEditProfile = () => {
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  const handleSaveChanges = async () => {
    const formData = new FormData();
    if (newUsername !== user.user_name) formData.append('user_name', newUsername);
    if (newEmail !== user.user_email) formData.append('user_email', newEmail);
    if (newMobile !== user.user_mobile) formData.append('user_mobile', newMobile);
    if (newProfilePicture) formData.append('profilePicture', newProfilePicture); 

    try {
      const response = await fetch(`http://localhost:3000/api/users/${user.user_name}`, {
        method: 'PUT',
        body: formData,
      });

      const textResponse = await response.text(); 
      console.log(textResponse);

      if (!response.ok) {
        const data = JSON.parse(textResponse); 
        alert(data.error || 'Error updating profile');
        return;
      }

      alert('Profile updated successfully');
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
        <div className="recent-uploads-card">
          <h2>Recent Uploads</h2>
          {/* Display recent uploads here */}
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
          <button className="btn" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </Modal>
      )}
    </div>
  );
};

export default Profile;
