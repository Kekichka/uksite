import React from 'react';
import Sidebar from './Sidebar';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <div className="main-content">
        <h1>Welcome to Ukrainian Authors</h1>
        <p>This website is dedicated to exploring Ukrainian authors and their works.
        </p>
      </div>
    </div>
  );
};

export default Home;
