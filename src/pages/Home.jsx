import React from 'react';
import Hero from '../components/Hero';

function Home() {
  return (
    <section className="text-center text-green-600">
      <Hero />
      
      {/* Tagline Section */}
      <div className="mt-8">
        <p className="text-lg sm:text-xl md:text-2xl mb-6">
          Safe, caring, and fun childcare for school-age children.
        </p>
      </div>

      {/* Unique Selling Points Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-8 md:px-16 mt-12">
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Learning Through Play</h3>
          <p>We prioritize creativity, fun, and learning through play to help children thrive.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Flexible Hours</h3>
          <p>Our after-school and holiday care options are designed to fit your schedule.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Caring Environment</h3>
          <p>We foster a safe, supportive environment where children can grow and explore.</p>
        </div>
      </div>

      {/* Parent Testimonial Section */}
      {/* <div className="mt-16 px-6 sm:px-8 md:px-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">What Parents Are Saying</h3>
        <p className="text-lg sm:text-xl mb-4">“Nurture Patch has been a game-changer for our family! Our child loves the activities and the caring staff.”</p>
        <p className="text-lg sm:text-xl">- Jane & John, Parents</p>
      </div> */}
    </section>
  );
}

export default Home;
