import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // optional icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 text-green-600 flex justify-between items-center relative">
      <h1 className="font-bold text-xl">Nurture Patch</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 items-center">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/booking">Booking</RouterLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="text-green-600 font-semibold cursor-pointer"
        >
          Contact
        </ScrollLink>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 md:hidden z-20">
          <RouterLink onClick={toggleMenu} to="/">Home</RouterLink>
          <RouterLink onClick={toggleMenu} to="/about">About</RouterLink>
          <RouterLink onClick={toggleMenu} to="/#booking-form">
            Booking
          </RouterLink>
          <ScrollLink
            onClick={toggleMenu}
            to="contact"
            smooth={true}
            duration={500}
            className="text-green-600 font-semibold cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
