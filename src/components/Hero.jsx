import React from 'react';
import heroImage from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className="relative bg-green-600 text-white h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <img 
        src={heroImage} 
        alt="Children playing" 
        className="absolute w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Nurturing Little Steps Toward Big Futures</h1>
        <p className="text-lg md:text-2xl mb-6">Before and after-school care designed to inspire and support.</p>
        <a href="/booking" className="bg-white text-green-600 font-semibold py-3 px-6 rounded-full hover:bg-green-100 transition">
          Book a Visit
        </a>
      </div>
    </div>
  );
};

export default Hero;