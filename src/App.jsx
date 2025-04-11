import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/home';
import About from './pages/about';
import Catalogue from './pages/catalogue';
import Contact from './pages/contact';


function App() {
  console.log("App component loaded");
  return (
    <Router>
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/catalogue" element={<Catalogue />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
    </Router>
  );
}

export default App;
