import React from 'react';
import Contact from './Contact';

function Footer() {
  return (
    <>
      <div id='contact' className="mt-8">
        <Contact />
      </div>
      <footer className="p-6 bg-green-100 text-green-700 text-center text-sm mt-10">
        <p>&copy; {new Date().getFullYear()} Nurture Patch. All rights reserved.</p>
      </footer>
    </>
    
  );
};

export default Footer;
