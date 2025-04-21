import React from 'react';

function Footer() {
  return (
    <footer className='p-4 bg-green-100 text-center'>
        &copy; {new Date().getFullYear()} Nurture Patch. All rights reserved.
    </footer>
  );
};

export default Footer;