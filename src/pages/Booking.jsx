import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.parentName || !formData.childName || !formData.bookingDate) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitted(true);
    setErrorMessage('');
    // Here you could send the form data to an email or backend
  };

  return (
    <section className="w-full text-green-600 py-12 px-6 sm:px-8 md:px-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Book a Session</h2>
      
      {isSubmitted ? (
        <div className="text-center p-4 bg-green-100 border-green-600 border rounded">
          <p className="text-lg text-green-600">Your booking has been submitted successfully! We will get back to you shortly.</p>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}

          {/* Parent and Child Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="parentName" className="block mb-2">Parent's Name</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Enter Parent's Name"
                className="border p-3 w-full"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="childName" className="block mb-2">Child's Name</label>
              <input
                type="text"
                id="childName"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                placeholder="Enter Child's Name"
                className="border p-3 w-full"
                required
              />
            </div>
          </div>

          {/* Booking Date */}
          <div className="flex flex-col">
            <label htmlFor="bookingDate" className="block mb-2">Booking Date</label>
            <input
              type="date"
              id="bookingDate"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
              className="border p-3 w-full"
              required
            />
          </div>

          {/* Notes */}
          <div className="flex flex-col">
            <label htmlFor="notes" className="block mb-2">Notes (optional)</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special instructions?"
              className="border p-3 w-full"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            id="booking"
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded w-full sm:w-auto mx-auto block mt-6 hover:bg-green-700 transition"
          >
            Submit Booking
          </button>
        </form>
      )}
    </section>
  );
};

export default Booking;
