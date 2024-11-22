import React from 'react';
import AboutShevchenko from './AboutShevchenko';
import AboutUkrainka from './AboutUkrainka';
import AboutFranko from './AboutFranko';
import '../styles/AboutAuthors.css';
import AboutHwylyovyi from './AboutHwylyovyi';
import AboutStus from './AboutStus';
import AboutKostenko from './AboutKostenko';

const AboutAuthors = () => {
  return (
    <div>
      <AboutShevchenko />
      <AboutUkrainka />
      <AboutFranko />
      <AboutKostenko />
      <AboutHwylyovyi />
      <AboutStus />
    </div>
  );
};

export default AboutAuthors;
