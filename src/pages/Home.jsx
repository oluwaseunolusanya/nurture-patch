import React from 'react';
import Hero from '../components/Hero';


function Home() {
  return (
    <section className="text-center text-green-600">
      {/* <h2 className="text-2xl font-bold">Welcome to Nurture Patch!</h2> */}
      <Hero />
      <p className="mt-4">Safe, caring, and fun childcare for school-age children.</p>
    </section>
  );
};

export default Home;