import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Contact Form Submitted:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 sm:px-10 md:px-20 py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-blue-900 text-center">Contact Us</h1>
        <p className="text-center text-gray-600">
          We'd love to hear from you. Whether you're a learner, instructor, or just curious — send us a message!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-blue-50 p-6 rounded-xl shadow">
          <div>
            <label className="block text-sm font-medium mb-1 text-blue-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-blue-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-blue-700">Message</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Send Message
          </button>

          {submitted && (
            <div className="text-green-600 text-sm mt-4">Message sent successfully!</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
