import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Employee = () => {
  const initialData = [
    { name: "John Doe", email: "john@example.com", role: "Admin" },
    { name: "Jane Smith", email: "jane@example.com", role: "User" },
    { name: "Bob Brown", email: "bob@example.com", role: "Editor" },
    { name: "Alice Green", email: "alice@example.com", role: "User" },
    { name: "Charlie Blue", email: "charlie@example.com", role: "Admin" },
    { name: "David White", email: "david@example.com", role: "Editor" },
  ];

  const [data, setData] = useState(initialData);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(3);
  const [filterText, setFilterText] = useState('');

  const handleSort = (column) => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    setSortBy(column);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(filterText.toLowerCase()) ||
    item.email.toLowerCase().includes(filterText.toLowerCase()) ||
    item.role.toLowerCase().includes(filterText.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === 'name') {
      return sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortBy === 'email') {
      return sortOrder === 'asc'
        ? a.email.localeCompare(b.email)
        : b.email.localeCompare(a.email);
    } else {
      return sortOrder === 'asc'
        ? a.role.localeCompare(b.role)
        : b.role.localeCompare(a.role);
    }
  });

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='card'>
      <div className="card-header">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded"
          placeholder="Search Employee"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto card-body">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-[1rem] font-bold text-heading cursor-pointer" onClick={() => handleSort('name')}>
                Name
                {sortBy === 'name' && (sortOrder === 'asc' ? ' ▲' : ' ▼')}
              </th>
              <th className="px-6 py-3 text-left text-[1rem] font-bold text-heading cursor-pointer" onClick={() => handleSort('email')}>
                Email
                {sortBy === 'email' && (sortOrder === 'asc' ? ' ▲' : ' ▼')}
              </th>
              <th className="px-6 py-3 text-left text-[1rem] font-bold text-heading cursor-pointer" onClick={() => handleSort('role')}>
                Role
                {sortBy === 'role' && (sortOrder === 'asc' ? ' ▲' : ' ▼')}
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-6 py-4 text-[1rem] text-text">{item.name}</td>
                <td className="px-6 py-4 text-[1rem] text-text">{item.email}</td>
                <td className="px-6 py-4 text-[1rem] text-text">{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-5 card-footer">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-primary-500 text-gray-700 rounded disabled:opacity-50">
          <IoIosArrowBack className='text-white' />

        </button>
        <div className="flex items-center">
          Page {currentPage} of {Math.ceil(filteredData.length / rowsPerPage)}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredData.length / rowsPerPage)}
          className="p-2 bg-primary-500 text-gray-700 rounded disabled:opacity-50">
          <IoIosArrowForward className='text-white' />

        </button>
      </div >
    </div >
  );
};

export default Employee;
