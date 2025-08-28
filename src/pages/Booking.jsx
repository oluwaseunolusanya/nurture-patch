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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.parentName || !formData.childName || !formData.bookingDate) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      const res = await fetch('/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if(result.success) {
        setIsSubmitted(true);
        setFormData({
          parentName: '',
          childName: '',
          bookingDate: '',
          notes: '',
        });
        setErrorMessage('');
      } else {
        throw new Error(result.message || 'Failed to send booking. Please try again later.');   
      }
    } catch (error) {
      console.error('Failed to send booking:', error);
      setErrorMessage('Failed to send booking. Please try again later.');
    }
  };

  return (
    <section className="bg-green-50 text-green-600 py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 flex justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 sm:p-10 md:p-12 w-full max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Book a Session</h2>

        {isSubmitted ? (
          <div className="text-center p-6 bg-green-100 border border-green-600 rounded-md">
            <p className="text-lg text-green-700">
              Your booking has been submitted successfully! We’ll get back to you shortly.
            </p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            {errorMessage && (
              <p className="text-red-600 text-center font-medium">{errorMessage}</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="parentName" className="block mb-2 font-semibold">
                  Parent&apos;s Name
                </label>
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
                <label htmlFor="childName" className="block mb-2 font-semibold">
                  Child&apos;s Name
                </label>
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

            <div className="flex flex-col">
              <label htmlFor="bookingDate" className="block mb-2 font-semibold">
                Booking Date
              </label>
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

            <div className="flex flex-col">
              <label htmlFor="notes" className="block mb-2 font-semibold">
                Notes (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special instructions?"
                className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full w-full hover:bg-green-700 transition"
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


  
