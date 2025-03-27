// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Music from './pages/Music.jsx';
import Sports from './pages/Sports';
import News from './pages/News.jsx';
import Discover from './pages/Discover.jsx';
import ShopPlanes from './pages/ShopPlanes.jsx';
import Store from './pages/Store.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {

  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/News" element={<News />} />
          <Route path="/Discover" element={<Discover />} />
          <Route path="/ShopPlanes" element={<ShopPlanes />} />
          <Route path="/Store" element={<Store />} />
        </Routes>
        <Footer/>
      </Router>
  )
}

export default App
