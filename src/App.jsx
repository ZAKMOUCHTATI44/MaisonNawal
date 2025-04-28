import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Catalogue from './pages/catalogue';
import Contact from './pages/contact';
import './fonts/fonts.css';
import Blog from './pages/blog';
import BlogDetail from './pages/BlogDetail';

function App() {
  console.log("App component loaded");

  return (
    <Router>
      <div className="font-sans"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
