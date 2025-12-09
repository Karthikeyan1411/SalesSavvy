import React, { useState } from 'react';
import useravatar from '../assets/useravatar.png';
import '../assets/styles.css';

export function ProfileDropdown({ username }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    const role = localStorage.getItem("role");
  
    let url = "http://localhost:9090/api/auth/logout";
  
    if (role === "ADMIN") {
      url = "http://localhost:9090/admin/auth/logout";
    }
  
    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include"
      });
  
      if (response.ok) {
        localStorage.clear();
        window.location.href = '/';
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error(err);
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
