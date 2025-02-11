// import hrms from "../assets/hrms.png";
import { RiApps2AddLine } from "react-icons/ri";
import { RiCalendarLine } from "react-icons/ri";
import { RiMegaphoneLine } from "react-icons/ri";
import { RiUser2Line } from "react-icons/ri";
import { RiMedal2Line } from "react-icons/ri";
import { RiLayoutHorizontalLine } from "react-icons/ri";
import { RiParentLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebar bg-primary-500 w-[15%]">
        <div className="sidebar-menu flex flex-col gap-3">
          <div className="side-menu-logo flex items-center justify-between p-3">
            <div className="logo flex items-center gap-3">
              {/* <img src={hrms} alt="Welcome" width={50} height={50} /> */}
              <h1 className="text-h3 text-white font-medium">HRMS</h1>
            </div>
            <span className="toggle-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_575_1653)">
                  <path d="M12.7071 6.98155C13.0976 6.61128 13.0976 6.01094 12.7071 5.64067C12.3166 5.27039 11.6834 5.27039 11.2929 5.64067L5.29289 11.3296C4.91431 11.6885 4.90107 12.2665 5.26285 12.6407L10.7628 18.3296C11.136 18.7156 11.7686 18.7417 12.1757 18.3878C12.5828 18.034 12.6103 17.4342 12.2372 17.0482L7.38414 12.0285L12.7071 6.98155Z" fill="white" />
                  <path opacity="0.3" d="M19.7071 6.98155C20.0976 6.61128 20.0976 6.01094 19.7071 5.64067C19.3166 5.27039 18.6834 5.27039 18.2929 5.64067L12.2929 11.3296C11.9143 11.6885 11.9011 12.2665 12.2628 12.6407L17.7628 18.3296C18.136 18.7156 18.7686 18.7417 19.1757 18.3878C19.5828 18.034 19.6103 17.4342 19.2372 17.0482L14.3841 12.0285L19.7071 6.98155Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_575_1653">
                    <rect width="24" height="22.7556" fill="white" transform="translate(0 0.622223)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <ul className="sidebar-menu flex flex-col">
            <li className="flex items-center gap-2 active:bg-primary-500 bg-secondary-500 hover:bg-secondary-500 p-4">
              <RiApps2AddLine
                className="text-white text-[20px]" />
              <NavLink to="/dashboard" className="w-full text-white font-regular text-[16px]">Dashboard</NavLink>
            </li>
            <li className="flex items-center gap-2 hover:bg-secondary-500 p-4">
              <RiCalendarLine
                className="text-white text-[20px]" />
              <NavLink to="/leave" className="w-full text-white font-regular text-[16px]">Leave Tracker</NavLink>
            </li>
            <li className="flex items-center gap-2 hover:bg-secondary-500 p-4">
              <RiMegaphoneLine
                className="text-white text-[20px]" />
              <NavLink to="/announcements" className="w-full text-white font-regular text-[16px]">Announcements</NavLink>
            </li>
            <li className="flex items-center gap-2 hover:bg-secondary-500 p-4">
              <RiUser2Line
                className="text-white text-[20px]" />
              <NavLink to="/empolyess" className="w-full text-white font-regular text-[16px]">Employees</NavLink>
            </li>
            <li className="flex items-center gap-2 hover:bg-secondary-500 p-4">
              <RiMedal2Line
                className="text-white text-[20px]" />
              <NavLink to="/perfromance" className="w-full text-white font-regular text-[16px]">Performance Management</NavLink>
            </li>
            <li className="flex items-center gap-2 hover:bg-secondary-500 p-4">
              <RiParentLine
                className="text-white text-[20px]" />
              <NavLink to="/recruiment" className="w-full text-white font-regular text-[16px]">Recruitment Management</NavLink>
            </li>
            <li className="flex items-center gap-2 hover:bg-secondary-500 p-4">
              <RiLayoutHorizontalLine
                className="text-white text-[20px]" />
              <NavLink to="/report" className="w-full text-white font-regular text-[16px]">Reports & Analytics</NavLink>
            </li>
            <li className="flex items-center gap-2 hover:bg-secondary-500 p-4">
              <RiMoneyRupeeCircleLine
                className="text-white text-[20px]" />
              <NavLink to="/payroll-management" className="w-full text-white font-regular text-[16px]">Payroll Management</NavLink>
            </li>
            <li className="flex items-center gap-2 hover:bg-secondary-500 p-4">
              <RiTeamLine
                className="text-white text-[20px]" />
              <NavLink to="/empoyee-review" className="w-full text-white font-regular text-[16px]">Employee Reviews</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
