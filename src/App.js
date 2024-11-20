import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutAuthors from './components/AboutAuthors';
import InterestingFacts from './components/InterestingFacts';
import HearTheVoices from './components/HearTheVoices';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-authors" element={<AboutAuthors />} />
          <Route path="/interesting-facts" element={<InterestingFacts />} />
          <Route path="/hear-the-voices" element={<HearTheVoices />} />
        </Routes>
      </div>
  );
}

export default App;