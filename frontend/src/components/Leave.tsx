import { useState } from "react";
import { LuCalendar1 } from "react-icons/lu";
import { FaSunPlantWilt } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiCreativeCommonsNcLine } from "react-icons/ri";
import { LuBaby } from "react-icons/lu";
import { LuTimerReset } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { RiStethoscopeLine } from "react-icons/ri";

const Leave = () => {

  const initialData = [
    { leave_type: "Sick Leave", from: "15/02/2025", to: "17/02/2025", reason: "Personal", status: "Approved" },
    { leave_type: "Casual Leave", from: "15/02/2025", to: "17/02/2025", reason: "Personal", status: "Pending" },
    { leave_type: "Earned Leave", from: "15/02/2025", to: "17/02/2025", reason: "Personal", status: "Canceled" },
    { leave_type: "Sick Leave", from: "15/02/2025", to: "17/02/2025", reason: "Personal", status: "Approved" },
    { leave_type: "Casual Leave", from: "15/02/2025", to: "17/02/2025", reason: "Personal", status: "Pending" },
  ];

  const [data, setData] = useState(initialData);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('leave_type');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(12);
  const [filterText, setFilterText] = useState('');
  const [deletedEmployee, deleteSelectedEmployee] = useState(null);
  const [seletedEmployee, setSelectedEmployee] = useState(null);




  const handleSort = (column) => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setSortBy(column);
  };

  const handleDelete = (index) => {
    setData(prevData => prevData.filter((_, i) => i !== index));
  };

  const filteredData = data.filter(item =>
    item.leave_type.toLowerCase().includes(filterText.toLowerCase()) ||
    item.from.toLowerCase().includes(filterText.toLowerCase()) ||
    item.to.toLowerCase().includes(filterText.toLowerCase()) ||
    item.reason.toLowerCase().includes(filterText.toLowerCase()) ||
    item.status.toLowerCase().includes(filterText.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    const valA = a[sortBy] || "";
    const valB = b[sortBy] || "";

    return sortOrder === 'asc'
      ? valA.localeCompare(valB)
      : valB.localeCompare(valA);
  });


  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + rowsPerPage);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-50 text-green-500 text-1 font-medium";
      case "Pending":
        return "bg-orange-50 text-orange-500 text-1 font-medium";
      case "Canceled":
        return "bg-red-50 text-red-500 text-1 font-medium";
      default:
        return "bg-gray-50 text-gray-500 text-1 font-medium";
    }
  };

  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <span className="text-text text-1 font-regular">
            Leave used this month :
          </span>
          <p className="text-heading text-1 font-regular">02 day(s)</p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="btn-primary p-1 flex items center"><LuCalendar1 className="text-white" /></button>
          <p className="text-heading text-1 font-medium">01-Feb-2025 - 31-Feb-2025</p>
        </div>
        <button type="button" className="btn-secondary">Apply Leave</button>
      </div>
      <div className="card">
        <div className="flex card-header justify-start">
          <button
            className={`tab-btn px-4 py-1 text-text font-medium hover:bg-primary-500 hover:text-white ${activeTab === "tab1" ? "bg-primary-500 text-white" : ""
              }`}
            onClick={() => setActiveTab("tab1")}
          >
            Leave Summary
          </button>
          <button
            className={`tab-btn px-4 py-1 text-text font-medium hover:bg-primary-500 hover:text-white ${activeTab === "tab2" ? "bg-primary-500 text-white" : ""
              }`}
            onClick={() => setActiveTab("tab2")}
          >
            Leave Balance
          </button>
          <button
            className={`tab-btn px-4 py-1 text-text font-medium hover:bg-primary-500 hover:text-white ${activeTab === "tab3" ? "bg-primary-500 text-white" : ""
              }`}
            onClick={() => setActiveTab("tab3")}
          >
            Leave Request
          </button>
        </div>

        <div className="card-body flex flex-col gap-5">
          {activeTab === "tab1" && (
            <>
              <div className="grid grid-cols-6 gap-5">
                <div className="card shadow-header">
                  <div className="card-header flex-col justify-center items-center gap-5">
                    <h6 className="text-heading font-medium text-[18px]">Casual Leave</h6>
                    <span className="w-[40px] h-[40px] flex items-center justify-center rounded bg-blue-50">
                      <FaSunPlantWilt className="text-blue-500 text-[1.25rem]" />
                    </span>
                  </div>
                  <div className="card-body">
                    <ul className="flex flex-col items-start gap-2">
                      <li className="flex items-center justify-between w-full">
                        <span className="text-heading text-1">Available : </span>
                        <p className="text-heading text-1 font-medium">12</p>
                      </li>
                      <li className="flex items-center justify-between w-full">
                        <span className="text-heading text-1">Used</span>
                        <p className="text-heading text-1 font-medium">0</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card shadow-header">
                  <div className="card-header flex-col justify-center items-center gap-5">
                    <h6 className="text-heading font-medium text-[18px]">Earned Leave</h6>
                    <span className="w-[40px] h-[40px] flex items-center justify-center rounded bg-emerald-50">
                      <RiMoneyDollarCircleLine className="text-emerald-500 text-[1.25rem]" />
                    </span>
                  </div>
                  <div className="card-body">
                    <ul className="flex flex-col items-start gap-2">
                      <li className="flex items-center justify-between w-full">
                        <span className="text-heading text-1">Available : </span>
                        <p className="text-heading text-1 font-medium">12</p>
                      </li>
                      <li className="flex items-center justify-between w-full">
                        <span className="text-heading text-1">Used</span>
                        <p className="text-heading text-1 font-medium">0</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card shadow-header">
                  <div className="card-header flex-col justify-center items-center gap-5">
                    <h6 className="text-heading font-medium text-[18px]">Maternity Leave</h6>
                    <span className="w-[40px] h-[40px] flex items-center justify-center rounded bg-orange-50">
                      <LuBaby className="text-orange-500 text-[1.25rem]" />
                    </span>
                  </div>
                  <div className="card-body">
                    <ul className="flex flex-col items-start gap-2">
                      <li className="flex items-center justify-between w-full">
                        <span className="text-heading text-1">Available : </span>
                        <p className="text-heading text-1 font-medium">12</p>
                      </li>
                      <li className="flex items-center justify-between w-full">
                        <span className="text-heading text-1">Used</span>
                        <p className="text-heading text-1 font-medium">0</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card shadow-header">
                  <div className="card-header flex-col justify-center items-center gap-5">
                    <h6 className="text-heading font-medium text-[18px]">Leave Without Pay</h6>
                    <span className="w-[40px] h-[40px] flex items-center justify-center rounded bg-pink-50">
                      <RiCreativeCommonsNcLine className="text-pink-500 text-[1.25rem]" />
                    </span>
                  </div>
                  <div className="card-body">
                    <ul className="flex flex-col items-start gap-2">
                      <li className="flex items-center justify-between w-full">
                        <span className="text-heading text-1">Available : </span>
                        <p className="text-heading text-1 font-medium">12</p>
                      </li>
                      <li className="flex items-center justify-between w-full">
                        <span className="text-heading text-1">Used</span>
                        <p className="text-heading text-1 font-medium">0</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card shadow-header">
                  <div className="card-header flex-col justify-center items-center gap-5">
                    <h6 className="text-heading font-medium text-[18px]">Sabbatical Leave</h6>
                    <span className="w-[40px] h-[40px] flex items-center justify-center rounded bg-yellow-50">
                      <LuTimerReset className="text-yellow-500 text-[1.25rem]" />
                    </span>
                  </div>
                  <div className="card-body">
                    <ul className="flex flex-col items-start gap-2">
                      <li className="flex items-center justify-between w-full">
                        <span className="text-heading text-1">Available : </span>
                        <p className="text-heading text-1 font-medium">12</p>
                      </li>
                      <li className="flex items-center justify-between w-full">
                        <span className="text-heading text-1">Used</span>
                        <p className="text-heading text-1 font-medium">0</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card shadow-header">
                  <div className="card-header flex-col justify-center items-center gap-5">
                    <h6 className="text-heading font-medium text-[18px]">Sick Leave</h6>
                    <span className="w-[40px] h-[40px] flex items-center justify-center rounded bg-purple-50">
                      <RiStethoscopeLine className="text-purple-500 text-[1.25rem]" />
                    </span>
                  </div>
                  <div className="card-body">
                    <ul className="flex flex-col items-start gap-2">
                      <li className="flex items-center justify-between w-full">
                        <span className="text-heading text-1">Available : </span>
                        <p className="text-heading text-1 font-medium">12</p>
                      </li>
                      <li className="flex items-center justify-between w-full">
                        <span className="text-heading text-1">Used</span>
                        <p className="text-heading text-1 font-medium">0</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="card">
                  <div className="card-header">
                    <h3 className="text-heading font-medium text-[1.125rem]">Upcoming Leaves</h3>
                    <input type="date" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 bg-primary-50 bg-opacity-[0.2] border-[1px] border-primary-100 p-[10px] rounded-[5px]" />
                  </div>
                  <div className="card-body p-0">
                    <div className="overflow-x-auto">
                      <table className="min-w-full table-auto border-collapse">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 text-left text-[1rem] font-medium cursor-pointer bg-primary-500 text-white" onClick={() => handleSort('leave_type')}>
                              Leave Type
                            </th>
                            <th className="px-6 py-3 text-left text-[1rem] font-medium cursor-pointer bg-primary-500 text-white" onClick={() => handleSort('from')}>
                              From
                            </th>
                            <th className="px-6 py-3 text-left text-[1rem] font-medium cursor-pointer bg-primary-500 text-white" onClick={() => handleSort('to')}>
                              To
                            </th>
                            <th className="px-6 py-3 text-left text-[1rem] font-medium cursor-pointer bg-primary-500 text-white" onClick={() => handleSort('reason')}>
                              Reason for leave
                            </th>
                            <th className="px-6 py-3 text-left text-[1rem] font-medium cursor-pointer bg-primary-500 text-white" onClick={() => handleSort('status')}>
                              Status
                            </th>
                            <th className="px-6 py-3 text-left text-[1rem] font-medium bg-primary-500 text-white">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {paginatedData.map((item, index) => (
                            <tr key={index} className="border-t border-gray-200">
                              <td className="px-6 py-4">{item.leave_type}</td>
                              <td className="px-6 py-4">{item.from}</td>
                              <td className="px-6 py-4">{item.to}</td>
                              <td className="px-6 py-4">{item.reason}</td>
                              <td className="px-6 py-4"><span className={`px-4 py-1 rounded ${getStatusStyle(item.status)}`}>
                                {item.status}
                              </span></td>
                              <td className="px-6 py-4 flex gap-2">
                                <button onClick={() => setSelectedEmployee(item)} className="p-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"><FiEye className='text-primary' /></button>
                                {/* <button className="p-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"><FiEdit2 className='text-primary' /></button>
                                <button onClick={() => deleteSelectedEmployee(index + 1)} className="p-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"><RiDeleteBinLine className='text-primary' /></button> */}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
          }
          {
            activeTab === "tab2" && (
              <>

              </>
            )
          }
          {
            activeTab === "tab3" && (
              <>

              </>
            )
          }
        </div >
      </div >
    </>
  );
};

export default Leave;
