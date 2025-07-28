import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import UploadLessons from './pages/UploadLessons';
import EditProfile from './pages/EditProfile';
import MyStudents from './pages/MyStudents';
import InterestForm from './pages/InterestForm';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
      <div className=" flex flex-col  min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<UploadLessons />} />
            <Route path="/profile" element={<EditProfile />} />
            <Route path="/students" element={<MyStudents />} />
            <Route path="/interest-form" element={<InterestForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />


          </Routes>
         </main>
        <Footer />
      </div>
  );
}

export default App;
