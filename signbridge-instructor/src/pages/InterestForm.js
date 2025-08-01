import React, { useState } from 'react';

function InterestForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Interest form data:', { fullName, email, experience, bio });
    alert('Thank you! We’ll review your application soon. (demo)');
    // Reset form
    setFullName('');
    setEmail('');
    setExperience('');
    setBio('');
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Instructor Interest Form</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Teaching Experience</label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
            placeholder="e.g., 3 years teaching ASL"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Short Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default InterestForm;
