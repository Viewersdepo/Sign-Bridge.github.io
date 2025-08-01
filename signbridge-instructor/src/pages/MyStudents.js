import React from 'react';

function MyStudents() {
  // Temporary static data for demo
  const students = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', status: 'Active' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', status: 'Active' },
    { id: 3, name: 'Cynthia Lee', email: 'cynthia@example.com', status: 'Pending' },
  ];

  return (
    <div className="max-w-4xl mx-auto ">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">My Students</h1>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto ">
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold">Name</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Email</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-4 py-2 text-gray-700">{student.name}</td>
                <td className="px-4 py-2 text-gray-700">{student.email}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      student.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyStudents;
