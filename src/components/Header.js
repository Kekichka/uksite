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
              <li><Link to="/about-authors/taras-shevchenko">Тарас Шевченко</Link></li>
              <li><Link to="/about-authors/lesya-ukrainka">Леся Українка</Link></li>
              <li><Link to="/about-authors/ivan-franko">Іван Франко</Link></li>
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
