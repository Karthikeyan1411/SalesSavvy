import React, { useState } from 'react';
import useravatar from '../assets/useravatar.png';
import '../assets/styles.css';

export function ProfileDropdown({ username }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:9090/api/auth/logout', {
        method: 'POST', // Use POST as logout often involves session clearing
        credentials: 'include', // Include credentials like cookies for authentication
        headers: {
          'Content-Type' : 'application/json',
        }
      });

      if (response.ok) {
        console.log('User successfully logged out');
        window.location.href = '/';
        // navigator('/'); // Redirect to login page
      } else {
        console.error('Failed to log out');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="profile-dropdown">
      <button
        type="button"
        className="profile-dropdown-trigger"
        onClick={toggleDropdown}
      >
        <img
          src={useravatar}
          alt="User Avatar"
          className="profile-avatar-image"
        />
        <span className="profile-username">{username || 'Guest'}</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <a href="#" className="dropdown-item">
            Profile
          </a>
          <a href="#" className="dropdown-item">
            Orders
          </a>
          <button
            type="button"
            className="dropdown-item dropdown-logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
