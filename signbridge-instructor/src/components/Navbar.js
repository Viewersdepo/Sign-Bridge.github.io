import logo from '../assets/logo.png';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 fixed top-0 w-full z-50">
  <div className="max-w-6xl mx-auto flex items-center justify-between w-full">
    {/* Logo + text */}
    <div className="flex items-center space-x-2 text-xl font-semibold">
      <img src={logo} alt="Logo" className="h-8 w-auto" />
      <Link to="/">SignBridge</Link>
    </div>

    {/* Hamburger (mobile) */}
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>
    </div>

    {/* Links (desktop) */}
    <div className="hidden md:flex space-x-4">
      <Link to="/" className="hover:text-gray-200 transition">Dashboard</Link>
      <Link to="/upload" className="hover:text-gray-200 transition">Upload Lessons</Link>
      <Link to="/students" className="hover:text-gray-200 transition">My Students</Link>
      <Link to="/profile" className="hover:text-gray-200 transition">Profile</Link>
      <Link to="/interest-form" className="hover:text-gray-200 transition">Apply as Instructor</Link>
      <Link to="/about" className="hover:text-gray-200 transition">About</Link>
      <Link to="/contact" className="block hover:text-blue-200">Contact</Link>

    </div>
  </div>

  {/* Mobile menu */}
  <div
  className={`md:hidden overflow-hidden transition-all duration-500 ease-in mt-2 space-y-2 ${
    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
  }`}
>
  <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block hover:text-gray-200 transition">Dashboard</Link>
  <Link to="/upload" onClick={() => setIsOpen(false)} className="block hover:text-gray-200 transition">Upload Lessons</Link>
  <Link to="/students" onClick={() => setIsOpen(false)} className="block hover:text-gray-200 transition">My Students</Link>
  <Link to="/profile" onClick={() => setIsOpen(false)} className="block hover:text-gray-200 transition">Profile</Link>
  <Link to="/interest-form" onClick={() => setIsOpen(false)} className="block hover:text-gray-200 transition">Apply as Instructor</Link>
  <Link to="/about" className="hover:text-gray-200 transition">About</Link>
  <Link to="/contact" className="text-white hover:text-blue-200 transition">Contact</Link>


</div>

</nav>
  );
}

export default Navbar;

