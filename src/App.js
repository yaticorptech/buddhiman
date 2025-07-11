import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Register from './pages/Register'; // Import the Register page
import Quiz from './pages/Quiz'; // Import the Quiz page
import Dance from './pages/Dance';
import Singing from './pages/Singing';
import Drawing from './pages/Drawing';
import FancyDress from './pages/Fancydress';
import Media from './pages/Media'; // Import the Media page
import ArticlePage from './pages/Article';
import Ind from './pages/Independence';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/singing" element={<Singing />} />
          <Route path="/drawing" element={<Drawing />} />
          <Route path="/fancydress" element={<FancyDress />} />
          <Route path="/media" element={<Media />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/Ind" element={<Ind />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
