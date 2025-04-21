import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='p-4 text-green-600 flex justify-between items-center' >
        <h1 className='font-bold'>Nurture Patch</h1>
        <div className='space-x-4'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/booking'>Booking</Link>
            <Link to='/contact'>Contact</Link>            
        </div>
    </nav>
  );
};

export default Navbar;