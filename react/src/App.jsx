import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/header.jsx'
import Navbar from './components/nav.jsx'
import Footer from './components/footer.jsx'

import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'

function App() {
  return (
    <Router>
      <div>
        <Header title="@WANDERLY" />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home title="Home" />} />
          <Route path="/about" element={<About title="About Us" />} />
          <Route path="/contact" element={<Contact title="Contact Us" />} />
        </Routes>

        <Footer text="© 2025 Wanderly. All rights reserved."/>
      </div>
    </Router>
  )
}

export default App
