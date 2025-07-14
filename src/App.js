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
import Krishna from './pages/KrishnaJanmastami';
import Media from './pages/Media'; // Import the Media page
import ArticlePage from './pages/Article';
import Ind from './pages/Independence';
import Ganesha from './pages/Ganesha'



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
          <Route path="/media" element={<Media />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/ind" element={<Ind />} />
          <Route path="/Krishna" element={<Krishna />} />
          <Route path="/Ganesha" element={<Ganesha />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
