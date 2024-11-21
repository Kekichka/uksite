import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutAuthors from './components/AboutAuthors';
import InterestingFacts from './components/InterestingFacts';
import TestChooser from './components/TestChooser';
import Taras from './components/Taras';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-authors" element={<AboutAuthors />} />
          <Route path="/interesting-facts" element={<InterestingFacts />} />
          <Route path="/tests" element={<TestChooser />} />
          <Route path="/about-authors/taras-shevchenko" component={Taras} />
        </Routes>
      </div>
  );
}

export default App;