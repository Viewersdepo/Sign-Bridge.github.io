import React from 'react';
import { FaHandPeace, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">About SignBridge</h1>
        <p className="text-lg text-gray-700 mb-10 text-center">
          SignBridge is a platform where sign language meets technology — empowering communication for all.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <FaUsers className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">For Learners</h3>
            <p className="text-gray-600">Learn sign language at your pace with video lessons from skilled instructors.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <FaChalkboardTeacher className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">For Instructors</h3>
            <p className="text-gray-600">Upload and manage your sign language classes. Reach learners globally.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <FaHandPeace className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">To break communication barriers and build an inclusive digital world.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
