import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <main className='p-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  )
};

export default App;