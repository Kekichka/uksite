import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li className="dropdown">
            <Link to="/about-authors">Біографії</Link>
            <ul className="dropdown-menu">
              <li><Link to="/about-authors/author1">Тарас Шевченко</Link></li>
              <li><Link to="/about-authors/author2">Леся Українка</Link></li>
              <li><Link to="/about-authors/author3">Іван Франко</Link></li>
            </ul>
          </li>
          <li><Link to="/interesting-facts">Цікаві факти</Link></li>
          <li><Link to="/tests">Тести</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
