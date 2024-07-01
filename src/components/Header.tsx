import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import profilePic from '../assets/images/profile-pic.jpg'; // Import the image

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M12 2a10 10 0 00-7.58 16.64l-.82 3.94a1 1 0 001.22 1.22l3.94-.82A10 10 0 1012 2zm4.95 10.95l-5 5a1 1 0 01-1.41 0l-2.5-2.5a1 1 0 011.41-1.41l2.09 2.09 4.59-4.59a1 1 0 011.41 1.41z"></path>
          </svg>
        </div>
        <h1 className="header-title">blogTan</h1>
      </div>
      <div className="header-right">
        <div className="nav-links">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/blog">Blog</Link>
          <Link className="nav-link" to="/sheet-music">Sheet Music</Link>
        </div>
        <div className="profile-pic" style={{ backgroundImage: `url(${profilePic})` }}></div>
      </div>
    </header>
  );
};

export default Header;
