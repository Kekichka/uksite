import React from 'react';
import Sidebar from './Sidebar';
import '../styles/InterestingFacts.css';

const InterestingFacts = () => {
  return (
    <div className="interesting-facts-page">
      <Sidebar />
      <div className="main-content">
        <h1>А ви знали таку цікавинку??????</h1>
        <div className="facts-section">
          <h3 className="author-facts-title">Interesting Facts about Taras Shevchenko</h3>
          <ul className="facts-list">
            <li>Shevchenko was not only a poet but also an accomplished painter and illustrator.</li>
            <li>He was born into serfdom and had to fight for his freedom, which fuelled much of his literary work.</li>
            <li>His most famous work, "Kobzar," was banned at different times due to its political content.</li>
            <li>Shevchenko’s poetry significantly influenced Ukrainian national identity and culture.</li>
            <li>He spent years in exile due to his political views and actions against the Russian authorities.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InterestingFacts;