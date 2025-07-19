import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const Dashboard = () => {
  const stats = [
    { label: 'Total Learners', value: 120 },
    { label: 'Total Instructors', value: 15 },
    { label: 'Courses Published', value: 42 },
    { label: 'Views This Week', value: 375 }
  ];

  const lineChartData = [
    { date: 'Jul 12', views: 40 },
    { date: 'Jul 13', views: 80 },
    { date: 'Jul 14', views: 70 },
    { date: 'Jul 15', views: 120 },
    { date: 'Jul 16', views: 100 }
  ];

  const barChartData = [
    { day: 'Mon', new: 10 },
    { day: 'Tue', new: 15 },
    { day: 'Wed', new: 8 },
    { day: 'Thu', new: 18 },
    { day: 'Fri', new: 22 }
  ];

  const pieData = [
    { name: 'Learners', value: 120 },
    { name: 'Instructors', value: 15 }
  ];

  const COLORS = ['#3B82F6', '#1E3A8A'];

  return (
    <div className="p-6 sm:p-8 md:p-12">
      <h2 className="text-2xl font-bold mb-6 text-blue-900 animate-fade-in">Welcome to Your Dashboard</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow hover:shadow-lg transition duration-300 rounded-xl p-6 text-center border-t-4 border-blue-600"
          >
            <p className="text-2xl font-semibold text-blue-800">{item.value}</p>
            <p className="text-gray-600 mt-2 text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Line Chart */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Lesson Views This Week</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="views" stroke="#3B82F6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">New Learners This Week</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="new" fill="#1D4ED8" barSize={30} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">User Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
