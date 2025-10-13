import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/header.jsx'
import Navbar from './components/nav.jsx'
import Footer from './components/footer.jsx'

import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'

import './index.css';
import videoBg from './assets/bgvideo.mp4'; 

function App() {
  return (
    <Router>

      <video autoPlay loop muted playsInline className="background-video">
        <source src={videoBg} type="video/mp4" />
      </video>

      <div>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home title="@WANDERLY" />} />
          <Route path="/about" element={<About title="About Us" />} />
          <Route path="/contact" element={<Contact title="Contact Us" />} />
        </Routes>

        <Footer text="© 2025 Wanderly. All rights reserved."/>
      </div>
    </Router>
  )
}

export default App
