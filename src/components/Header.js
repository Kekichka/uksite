import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <Link to="/about-authors">About Authors</Link>
            <ul className="dropdown-menu">
              <li><Link to="/about-authors/author1">Author 1</Link></li>
              <li><Link to="/about-authors/author2">Author 2</Link></li>
              <li><Link to="/about-authors/author3">Author 3</Link></li>
            </ul>
          </li>
          <li><Link to="/interesting-facts">Interesting Facts</Link></li>
          <li><Link to="/hear-the-voices">Hear the Voices</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
