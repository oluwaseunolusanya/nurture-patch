import React from 'react';

function Contact() {
  return (
    <section className="w-full px-4 md:px-6 max-w-screen-xl mx-auto text-green-600">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <p className="text-lg mb-4 text-center">
        We'd love to hear from you! Whether you have questions, want to book a visit, or just learn more.
      </p>
      <div className="space-y-2 text-center">
        <p className="text-lg">
          <strong>Email:</strong> <a href="mailto:childcare@nurturepatch.co.uk" className="underline hover:text-green-800">childcare@nurturepatch.co.uk</a>
        </p>
        <p className="text-lg">
          <strong>Phone:</strong> <a href="tel:+447868831627" className="underline hover:text-green-800">+44 7868 831627</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
