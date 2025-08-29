import React, { useState } from 'react';

function Booking() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    childName: '',
    bookingDate: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.email || !formData.childName || !formData.bookingDate) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ parentName: '', email: '', childName: '', bookingDate: '', notes: '' });
        setErrorMessage('');
      } else {
        throw new Error(result.message || 'Failed to send booking.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to send booking. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-green-50 flex items-center justify-center text-green-600 px-4 sm:px-8 md:px-12">
      <div className="w-full max-w-[95vw]"> {/* Always spans most of viewport width */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Book a Visit</h2>
        <p className="text-center text-lg sm:text-xl md:text-2xl mb-8">
          At Nurture Patch, we believe every child deserves a nurturing and inspiring environment.
          We provide care for school-aged children with flexible after-school and holiday options.
        </p>

        {isSubmitted ? (
          <div className="text-center p-6 bg-green-100 border border-green-600 rounded-xl shadow-md">
            ✅ Your booking has been submitted successfully! We will get back to you shortly.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border mx-auto w-full"
          >
            {errorMessage && (
              <p className="text-red-600 text-center font-medium">{errorMessage}</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="parentName" className="mb-2 font-semibold">Parent&apos;s Name</label>
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
                <label htmlFor="email" className="mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="childName" className="mb-2 font-semibold">Child&apos;s Name</label>
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

              <div className="flex flex-col">
                <label htmlFor="bookingDate" className="mb-2 font-semibold">Scheduled Date</label>
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
            </div>

            <div className="flex flex-col">
              <label htmlFor="notes" className="mb-2 font-semibold">Notes (optional)</label>
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
              disabled={isLoading}
              className={`!bg-green-600 !text-white font-semibold px-6 py-3 rounded-full w-full sm:w-auto mx-auto block mt-6 transition
                ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}
              `}
            >
              {isLoading ? 'Submitting…' : 'Submit Booking'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Booking;
