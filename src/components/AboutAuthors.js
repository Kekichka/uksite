import React from 'react';
import Sidebar from './Sidebar'; // Ensure Sidebar is in the correct path
import '../styles/AboutAuthors.css'; // Correct path for your CSS file

const AboutAuthors = () => {
  return (
    <div className="about-authors-page">
      <div className="main-content">
        <h1>About Ukrainian Authors</h1>

        {/* First author section */}
        <div className="author-section1">
          <h2 className="author-name1">Taras Shevchenko</h2>
          <div className="content1">
            <img
              className="author-image1"
              src={require('../images/taras1.jpg')} 
              alt="Taras Shevchenko"
            />
            <p className="author-info1">
              Тарас Шевченко (1814–1861) — український поет, художник, громадський діяч, один з основоположників нової української літератури...
            </p>
          </div>
        </div>

        {/* Second author section */}
        <div className="author-section2">
          <h3 className="author-name2">Taras Shevchenko</h3>
          <div className="content2">
            <p className="author-info2">
              Тарас Шевченко (1814–1861) — український поет, художник, громадський діяч, один з основоположників нової української літератури...
            </p>
            <img
              className="author-image2"
              src={require('../images/taras1.jpg')} 
              alt="Taras Shevchenko"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAuthors;
