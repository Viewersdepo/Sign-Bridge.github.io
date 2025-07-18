import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';


const Dashboard = () => {
  const dummyLessons = [
    { title: 'Introduction to Sign Language', uploaded: '2025-07-15', views: 120 },
    { title: 'Fingerspelling Basics', uploaded: '2025-07-13', views: 87 },
    { title: 'Common Signs for Daily Use', uploaded: '2025-07-10', views: 102 },
  ];

  const totalStudents = 34;
  const totalLessons = dummyLessons.length;

  const chartData = [
    { date: 'Jul 12', views: 40 },
    { date: 'Jul 13', views: 80 },
    { date: 'Jul 14', views: 70 },
    { date: 'Jul 15', views: 120 },
    { date: 'Jul 16', views: 100 },
  ];
  

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Instructor Dashboard</h2>

      {/* Stats Section */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        <div className="bg-white shadow-md p-6 rounded-xl border-t-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-700">Total Students</h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">{totalStudents}</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl border-t-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-700">Lessons Uploaded</h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">{totalLessons}</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl border-t-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-700">Active This Week</h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">12</p>
        </div>
      </div>
      
      {/* Chart Section */}
<div className="bg-white shadow-md rounded-xl p-6 mb-10">
  <h3 className="text-lg font-semibold mb-4 text-gray-800">Lesson Views This Week</h3>
  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="views" stroke="#3B82F6" strokeWidth={3} />
    </LineChart>
  </ResponsiveContainer>
</div>

      

      {/* Recent Lessons Table */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <h3 className="text-xl font-semibold text-gray-800 px-6 py-4 border-b">Recent Lessons</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-blue-100 text-gray-700 uppercase">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Uploaded</th>
                <th className="px-6 py-3">Views</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {dummyLessons.map((lesson, index) => (
                <tr key={index} className="hover:bg-gray-100 transition duration-150">
                  <td className="px-6 py-4">{lesson.title}</td>
                  <td className="px-6 py-4">{lesson.uploaded}</td>
                  <td className="px-6 py-4">{lesson.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
