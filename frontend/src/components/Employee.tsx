import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteModal from './DeleteModal';

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
  const [rowsPerPage] = useState(12);
  const [filterText, setFilterText] = useState('');
  const [deletedEmployee, deleteSelectedEmployee] = useState(null);

  const handleSort = (column) => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setSortBy(column);
  };

  const handleDelete = (index) => {
    setData(prevData => prevData.filter((_, i) => i !== index));
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(filterText.toLowerCase()) ||
    item.email.toLowerCase().includes(filterText.toLowerCase()) ||
    item.role.toLowerCase().includes(filterText.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    return sortOrder === 'asc'
      ? a[sortBy].localeCompare(b[sortBy])
      : b[sortBy].localeCompare(a[sortBy]);
  });

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + rowsPerPage);

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
              <th className="px-6 py-3 text-left text-[1rem] font-medium cursor-pointer bg-primary-500 text-white" onClick={() => handleSort('name')}>
                Name {sortBy === 'name' && (sortOrder === 'asc' ? ' ▲' : ' ▼')}
              </th>
              <th className="px-6 py-3 text-left text-[1rem] font-medium cursor-pointer bg-primary-500 text-white" onClick={() => handleSort('email')}>
                Email {sortBy === 'email' && (sortOrder === 'asc' ? ' ▲' : ' ▼')}
              </th>
              <th className="px-6 py-3 text-left text-[1rem] font-medium cursor-pointer bg-primary-500 text-white" onClick={() => handleSort('role')}>
                Role {sortBy === 'role' && (sortOrder === 'asc' ? ' ▲' : ' ▼')}
              </th>
              <th className="px-6 py-3 text-left text-[1rem] font-medium bg-primary-500 text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.role}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button onClick={() => setSelectedEmployee(item)} className="p-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"><FiEye className='text-primary' /></button>
                  <button className="p-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"><FiEdit2 className='text-primary' /></button>
                  <button onClick={() => deleteSelectedEmployee(index + 1)} className="p-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"><RiDeleteBinLine className='text-primary' /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-5 card-footer">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-gray-300 rounded disabled:opacity-50">
          <IoIosArrowBack />
        </button>
        <div className="flex items-center">
          Page {currentPage} of {Math.ceil(filteredData.length / rowsPerPage)}
        </div>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredData.length / rowsPerPage)}
          className="p-2 bg-gray-300 rounded disabled:opacity-50">
          <IoIosArrowForward />
        </button>
      </div>

      {deletedEmployee && <DeleteModal employee={deleteSelectedEmployee} onClose={() => deleteSelectedEmployee(null)} />}
    </div>
  );
};

export default Employee;
