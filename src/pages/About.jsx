import React from 'react';

function About() {
  return (
    <section className='bg-green-50 text-green-600 py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12'>
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">About Us</h2>
      <div className="text-center mb-8">
        <p className='text-lg sm:text-xl md:text-2xl mb-6'>
          At Nurture Patch, we believe every child deserves a nurturing and inspiring environment to grow and thrive. We provide care for both early years and school-aged children, offering flexible childcare options including after-school and holiday programs. We are committed to creating a safe, engaging, and inclusive setting where every child can learn, develop, and flourish.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center mb-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Our Values</h3>
          <ul className="text-lg">
            <li>❤️ Care and Compassion</li>
            <li>🧠 Creativity and Growth</li>
            <li>🌱 Positive Relationships</li>
            <li>🎨 Learning Through Play</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="text-lg">
            Our mission is to provide a safe, caring, and stimulating environment for school-aged children, 
            where they can grow, play, and learn — one little step at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
