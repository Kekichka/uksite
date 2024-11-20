import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#">Find Author</a></li>
        <li><a href="#">Author 1</a></li>
        <li><a href="#">Author 2</a></li>
        <li><a href="#">Author 3</a></li>
        <li><a href="#">Author 4</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
