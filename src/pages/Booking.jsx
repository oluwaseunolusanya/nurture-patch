import React from 'react';

function Booking() {
  return (
    <section>
        <h2 className="text-2xl font-bold mb-4">Book a Session</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Parent's Name" className="border p-2 w-full" />
        <input type="text" placeholder="Child's Name" className="border p-2 w-full" />
        <input type="date" className="border p-2 w-full" />
        <textarea placeholder="Notes" className="border p-2 w-full"></textarea>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit Booking</button>
      </form>
      <div className="mt-6">
        <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded inline-block">Pay Now</a>
      </div>
    </section>
  );
};

export default Booking;