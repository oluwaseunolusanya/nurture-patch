import React, { useState } from 'react';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../config';
import emailjs from '@emailjs/browser';

function Booking() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    bookingDate: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.parentName || !formData.childName || !formData.bookingDate) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          parent_name: formData.parentName,
          child_name: formData.childName,
          booking_date: formData.bookingDate,
          notes: formData.notes,
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({
        parentName: '',
        childName: '',
        bookingDate: '',
        notes: '',
      });
      setErrorMessage('');
    } catch (error) {
      console.error('Failed to send booking:', error);
      setErrorMessage('Failed to send booking. Please try again later.');
    }
  };

  return (
    <section className="w-full bg-green-50 py-8">
      {/* Set container to take up full width on larger screens */}
      <div className='px-4 sm:px-6 lg:px-12 max-w-screen-xl mx-auto text-green-600'>
        <h2 className="w-full text-2xl sm:text-3xl font-bold mb-6 text-center">Book a Session</h2>

        {isSubmitted ? (
          <div className="text-center p-6 bg-green-100 border border-green-600 rounded-md">
            <p className="text-lg text-green-700">Your booking has been submitted successfully! We will get back to you shortly.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            {errorMessage && (
              <p className="text-red-600 text-center font-medium">{errorMessage}</p>
            )}

            {/* Grid layout for form fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="parentName" className="block mb-2 font-semibold">Parent's Name</label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Enter Parent's Name"
                  className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="childName" className="block mb-2 font-semibold">Child's Name</label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  placeholder="Enter Child's Name"
                  className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
                  required
                />
              </div>
            </div>

            {/* Booking Date */}
            <div className="flex flex-col">
              <label htmlFor="bookingDate" className="block mb-2 font-semibold">Booking Date</label>
              <input
                type="date"
                id="bookingDate"
                name="bookingDate"
                value={formData.bookingDate}
                onChange={handleChange}
                className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
                required
              />
            </div>

            {/* Notes */}
            <div className="flex flex-col">
              <label htmlFor="notes" className="block mb-2 font-semibold">Notes (optional)</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special instructions?"
                className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              id="booking"
              type="submit"
              className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full w-full sm:w-auto mx-auto block mt-6 hover:bg-green-700 transition"
            >
              Submit Booking
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Booking;


  
