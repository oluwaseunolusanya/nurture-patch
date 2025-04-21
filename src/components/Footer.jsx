import React from 'react';

function Footer() {
  return (
    <footer className='p-4 text-green-600 text-center'>
        &copy; {new Date().getFullYear()} Nurture Patch. All rights reserved.
    </footer>
  );
};

export default Footer;