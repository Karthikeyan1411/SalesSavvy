import React, { useState } from 'react';
import useravatar from '../assets/useravatar.png';
import '../assets/styles.css';

export function ProfileDropdown({ username }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    console.log('User logged out');
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
