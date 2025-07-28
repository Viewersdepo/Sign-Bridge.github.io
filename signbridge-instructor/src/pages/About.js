import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 sm:px-10 md:px-20 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            About SignBridge
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            SignBridge is a platform designed to bridge the communication gap between the deaf community and the rest of the world through sign language education.
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">🎯 Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To make sign language learning accessible, affordable, and impactful for everyone. We empower learners and instructors to grow through inclusive education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
          <div className="bg-white border-t-4 border-blue-600 rounded-lg p-5 shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold text-blue-700 mb-2">📚 Learn Sign Language</h3>
            <p className="text-gray-600">Interactive lessons and videos to learn at your own pace.</p>
          </div>

          <div className="bg-white border-t-4 border-blue-600 rounded-lg p-5 shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold text-blue-700 mb-2">👩‍🏫 Teach & Earn</h3>
            <p className="text-gray-600">Signers can create courses and earn as learners subscribe.</p>
          </div>

          <div className="bg-white border-t-4 border-blue-600 rounded-lg p-5 shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold text-blue-700 mb-2">🌍 Inclusive Community</h3>
            <p className="text-gray-600">A welcoming space for hearing and non-hearing members.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
