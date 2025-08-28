import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll'; // install react-scroll if not already
import Hero from '../components/Hero';
import Contact from '../components/Contact';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      scroller.scrollTo(id, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80, // optional: adjust if you have a sticky navbar
      });
    }
  }, [location]);

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

    </section>
  );
}

export default Home;
