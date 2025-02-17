// import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import user from "../assets/user.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import { RiAddCircleLine } from "react-icons/ri";

const Dashboard = () => {
    ChartJS.register(ArcElement, Tooltip);

    const data = {
        labels: ["Maternity Leave", "Leave Without Pay", "Sick Leave", "Casual Leave", "Earned Leave", "Sabbatical Leave"],
        datasets: [
            {
                data: [9, 9, 9, 9, 9, 9],
                backgroundColor: ["#ff6900", "#f6339a", "#ad46ff", "#2b7fff", "#00bc7d", "#fdc700"],
                hoverBackgroundColor: ["#FF8833", "#F85EB0", "#BC6BFF", "#579AFF", "#00FFAA", "#FFD333"],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
            },
        },
    };

    const [date, setDate] = useState(new Date());
    return (
        <>
            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-3 card">
                    <div className="card-body flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Add notes for Check-in" />
                            <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Add notes for Check-out" />
                        </div>
                        <div className="card-action flex items-center gap-5">
                            <button className="btn-primary flex flex-col bg-green-500 [background-image:unset]">
                                Check-in
                                <span>09:00:00 Hrs</span>
                            </button>
                            <button className="btn-primary flex flex-col bg-red-500 [background-image:unset]">
                                Check-out
                                <span>09:00:00 Hrs</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-[1.125rem] font-medium text-heading">Leave Report</h3>
                        {/* <button className="btn-secondary">View all</button> */}
                    </div>
                    <div className="card-body">
                        <div className="flex items-center">
                            {/* <div className="w-[40%]">
                                <Doughnut data={data} options={options} />
                            </div> */}
                            <div className="grid grid-cols-1 gap-4 w-full">
                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full border-[2px] border-orange-500 text-orange-500 text-[1rem] font-medium w-[40px] h-[40px] flex items-center justify-center">3</span>
                                        <div className="flex flex-col">
                                            <h4 className="text-[1] font-medium text-heading">Maternity Leave</h4>
                                            <p className="text-[1rem] text-text">Available 9 Day(s)</p>
                                        </div>
                                    </div>
                                    <button className="opacity-0 group-hover:opacity-100 transition-opacity"><RiAddCircleLine className="text-emerald-500 text-[20px]" /></button>
                                </div>
                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full border-[2px] border-blue-500 text-blue-500 text-[1rem] font-medium w-[40px] h-[40px] flex items-center justify-center">0</span>
                                        <div className="flex flex-col">
                                            <h4 className="text-[1] font-medium text-heading">Casual Leave</h4>
                                            <p className="text-[1rem] text-text">Available 12 Day(s)</p>
                                        </div>
                                    </div>
                                    <button className="opacity-0 group-hover:opacity-100 transition-opacity"><RiAddCircleLine className="text-emerald-500 text-[20px]" /></button>
                                </div>
                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full border-[2px] border-pink-500 text-pink-500 text-[1rem] font-medium w-[40px] h-[40px] flex items-center justify-center">9</span>
                                        <div className="flex flex-col">
                                            <h4 className="text-[1] font-medium text-heading">Leave Without Pay</h4>
                                            <p className="text-[1rem] text-text">Available 9 Day(s)</p>
                                        </div>
                                    </div>
                                    <button className="opacity-0 group-hover:opacity-100 transition-opacity"><RiAddCircleLine className="text-emerald-500 text-[20px]" /></button>
                                </div>
                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full border-[2px] border-emerald-500 text-emerald-500 text-[1rem] font-medium w-[40px] h-[40px] flex items-center justify-center">9</span>
                                        <div className="flex flex-col">
                                            <h4 className="text-[1] font-medium text-heading">Earned Leave</h4>
                                            <p className="text-[1rem] text-text">Available 9 Day(s)</p>
                                        </div>
                                    </div>
                                    <button className="opacity-0 group-hover:opacity-100 transition-opacity"><RiAddCircleLine className="text-emerald-500 text-[20px]" /></button>
                                </div>
                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full border-[2px] border-purple-500 text-purple-500 text-[1rem] font-medium w-[40px] h-[40px] flex items-center justify-center">9</span>
                                        <div className="flex flex-col">
                                            <h4 className="text-[1] font-medium text-heading">Sick Leave</h4>
                                            <p className="text-[1rem] text-text">Available 9 Day(s)</p>
                                        </div>
                                    </div>
                                    <button className="opacity-0 group-hover:opacity-100 transition-opacity"><RiAddCircleLine className="text-emerald-500 text-[20px]" /></button>
                                </div>
                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full border-[2px] border-yellow-500 text-yellow-500 text-[1rem] font-medium w-[40px] h-[40px] flex items-center justify-center">9</span>
                                        <div className="flex flex-col">
                                            <h4 className="text-[1] font-medium text-heading">Sabbatical Leave</h4>
                                            <p className="text-[1rem] text-text">Available 9 Day(s)</p>
                                        </div>
                                    </div>
                                    <button className="opacity-0 group-hover:opacity-100 transition-opacity"><RiAddCircleLine className="text-emerald-500 text-[20px]" /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-[1.125rem] font-medium text-heading">Calender</h3>
                    </div>
                    <div className="card-body">
                        <Calendar onChange={setDate} value={date} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-[1.125rem] font-medium text-heading">New Hires</h3>
                        <button className="btn-secondary">View all employee</button>
                    </div>
                    <div className="card-body">
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-center  border-l-[5px] border-orange-500 ps-[10px]">
                                <div className="flex items-center gap-3">
                                    <img src={user} alt="user" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[1rem] font-medium text-heading">John Walter</p>
                                        <p className="text-[1rem] text-regular text-text">Sr. Developer</p>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center border-l-[5px] border-purple-500 ps-[10px]">
                                <div className="flex items-center gap-3">
                                    <img src={user2} alt="user" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[1rem] font-medium text-heading">John Walter</p>
                                        <p className="text-[1rem] text-regular text-text">Sr. Designer</p>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center border-l-[5px] border-yellow-500 ps-[10px]">
                                <div className="flex items-center gap-3">
                                    <img src={user3} alt="user" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[1rem] font-medium text-heading">John Walter</p>
                                        <p className="text-[1rem] text-regular text-text">Sr. Designer</p>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center border-l-[5px] border-blue-500 ps-[10px]">
                                <div className="flex items-center gap-3">
                                    <img src={user4} alt="user" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[1rem] font-medium text-heading">John Walter</p>
                                        <p className="text-[1rem] text-regular text-text">Sr. Designer</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-[1.125rem] font-medium text-heading">Celebration Corner</h3>
                        <button className="btn-secondary">View all</button>
                    </div>
                    <div className="card-body">
                        <div className="grid grid-cols-1 gap-5">
                            <div className="flex flex-col gap-3">
                                <h3 className="text-[1.25rem] font-medium text-heading">Birthdays</h3>
                                <ul className="flex flex-col gap-5">
                                    <li className="flex items-center justify-between border-l-[5px] border-orange-500 ps-[10px]">
                                        <div className="flex items-center gap-3">
                                            <img src={user} alt="user" />
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[1rem] font-medium text-heading">John Walter</p>
                                                <p className="text-[1rem] text-regular text-text">Sr. Developer</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1 items-end">
                                            <span className="rounded-[5px] border border-orange-500 bg-orange-200 text-orange-500 text-[1rem] font-medium px-[5px] py-[3px] w-max">Today</span>
                                            <p className="text-[1rem] text-regular text-text">1 Jan</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between border-l-[5px] border-purple-500 ps-[10px]">
                                        <div className="flex items-center gap-3">
                                            <img src={user2} alt="user" />
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[1rem] font-medium text-heading">John Walter</p>
                                                <p className="text-[1rem] text-regular text-text">Sr. Designer</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1 items-end">
                                            <p className="text-[1rem] text-regular text-text">2 Days Left</p>
                                            <p className="text-[1rem] text-regular text-text">1 Jan</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-[1.25rem] font-medium text-heading">Work Anniversary</h3>
                                <ul className="flex flex-col gap-5">
                                    <li className="flex items-center justify-between border-l-[5px] border-pink-500 ps-[10px]">
                                        <div className="flex items-center gap-3">
                                            <img src={user3} alt="user" />
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[1rem] font-medium text-heading">John Walter</p>
                                                <p className="text-[1rem] text-regular text-text">Sr. Developer</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1 items-end">
                                            <span className="rounded-[5px] border border-pink-500 bg-pink-200 text-pink-500 text-[1rem] font-medium px-[5px] py-[3px] w-max">Today</span>
                                            <p className="text-[1rem] text-regular text-text">1 Jan</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between border-l-[5px] border-emerald-500 ps-[10px]">
                                        <div className="flex items-center gap-3">
                                            <img src={user4} alt="user" />
                                            <div className="flex flex-col gap-1">
                                                <p className="text-[1rem] font-medium text-heading">John Walter</p>
                                                <p className="text-[1rem] text-regular text-text">Sr. Designer</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1 items-end">
                                            <p className="text-[1rem] text-regular text-text">2 Days Left</p>
                                            <p className="text-[1rem] text-regular text-text">1 Jan</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 card">
                    <div className="card-header">
                        <h3 className="text-[1.125rem] font-medium text-heading">Announcements</h3>
                        <button className="btn-secondary">View all</button>
                    </div>
                    <div className="card-body grid grid-cols-1 gap-3">
                        <div className="border rounded-[10px] border-primary-50 p-[15px] flex flex-col">
                            <p className="text-[1.125rem] font-medium text-heading">Christmas Celebration</p>
                            <p className="text-[1rem] text-text"><span className="font-medium">By</span> John Walter - Today 2:27 PM</p>
                        </div>
                        <div className="border rounded-[10px] border-primary-50 p-[15px] flex flex-col">
                            <p className="text-[1.125rem] font-medium text-heading">Day Celebration</p>
                            <p className="text-[1rem] text-text"><span className="font-medium">By</span> John Walter - 31 December 2023 ,  9:00 AM</p>
                        </div>
                        <div className="border rounded-[10px] border-primary-50 p-[15px] flex flex-col">
                            <p className="text-[1.125rem] font-medium text-heading">Day Celebration</p>
                            <p className="text-[1rem] text-text"><span className="font-medium">By</span> John Walter - 31 December 2023 ,  9:00 AM</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-[1.125rem] font-medium text-heading">Upcoming Holiday</h3>
                        <button className="btn-secondary">View all</button>
                    </div>
                    <div className="card-body">
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="rounded-[5px] bg-emerald-200 text-emerald-500 text-[1rem] font-medium p-[10px] flex items-center justify-center flex-col w-[60px] h-[60px]">
                                        <h6 className="text-[1.25rem] font-medium text-emerald leading-6">10</h6>
                                        <p className="text-[1] font-regular text-emerald">Jan</p>
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[1rem] font-medium text-heading">Holiday</p>
                                        <p className="text-[1rem] text-regular text-text">Monday</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 items-end">
                                    <p className="text-[1rem] text-regular text-text">1 Day left</p>
                                </div>
                            </li>
                            <li className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="rounded-[5px] bg-purple-200 text-purple-500 text-[1rem] font-medium p-[10px] flex items-center justify-center flex-col w-[60px] h-[60px]">
                                        <h6 className="text-[1.25rem] font-medium text-purple leading-6">15</h6>
                                        <p className="text-[1] font-regular text-purple">Jan</p>
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[1rem] font-medium text-heading">Holiday</p>
                                        <p className="text-[1rem] text-regular text-text">Monday</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 items-end">
                                    <p className="text-[1rem] text-regular text-text">2 Days left</p>
                                </div>
                            </li>
                            <li className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="rounded-[5px] bg-pink-200 text-pink-500 text-[1rem] font-medium p-[10px] flex items-center justify-center flex-col w-[60px] h-[60px]">
                                        <h6 className="text-[1.25rem] font-medium text-pink leading-6">15</h6>
                                        <p className="text-[1] font-regular text-purple">Jan</p>
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[1rem] font-medium text-heading">Holiday</p>
                                        <p className="text-[1rem] text-regular text-text">Monday</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 items-end">
                                    <p className="text-[1rem] text-regular text-text">2 Days left</p>
                                </div>
                            </li>
                            <li className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="rounded-[5px] bg-blue-200 text-blue-500 text-[1rem] font-medium p-[10px] flex items-center justify-center flex-col w-[60px] h-[60px]">
                                        <h6 className="text-[1.25rem] font-medium text-blue leading-6">15</h6>
                                        <p className="text-[1] font-regular text-purple">Jan</p>
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[1rem] font-medium text-heading">Holiday</p>
                                        <p className="text-[1rem] text-regular text-text">Monday</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 items-end">
                                    <p className="text-[1rem] text-regular text-text">2 Days left</p>
                                </div>
                            </li>
                            <li className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="rounded-[5px] bg-orange-200 text-orange-500 text-[1rem] font-medium p-[10px] flex items-center justify-center flex-col w-[60px] h-[60px]">
                                        <h6 className="text-[1.25rem] font-medium text-orange leading-6">15</h6>
                                        <p className="text-[1] font-regular text-purple">Jan</p>
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[1rem] font-medium text-heading">Holiday</p>
                                        <p className="text-[1rem] text-regular text-text">Monday</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 items-end">
                                    <p className="text-[1rem] text-regular text-text">2 Days left</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-[1.125rem] font-medium text-heading">On Leave Today</h3>
                        <button className="btn-secondary">View all employee</button>
                    </div>
                    <div className="card-body">
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-center  border-l-[5px] border-orange-500 ps-[10px]">
                                <div className="flex items-center gap-3">
                                    <img src={user} alt="user" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[1rem] font-medium text-heading">John Walter</p>
                                        <p className="text-[1rem] text-regular text-text">Sr. Developer</p>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center border-l-[5px] border-purple-500 ps-[10px]">
                                <div className="flex items-center gap-3">
                                    <img src={user2} alt="user" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[1rem] font-medium text-heading">John Walter</p>
                                        <p className="text-[1rem] text-regular text-text">Sr. Designer</p>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center border-l-[5px] border-yellow-500 ps-[10px]">
                                <div className="flex items-center gap-3">
                                    <img src={user3} alt="user" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[1rem] font-medium text-heading">John Walter</p>
                                        <p className="text-[1rem] text-regular text-text">Sr. Designer</p>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center border-l-[5px] border-blue-500 ps-[10px]">
                                <div className="flex items-center gap-3">
                                    <img src={user4} alt="user" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[1rem] font-medium text-heading">John Walter</p>
                                        <p className="text-[1rem] text-regular text-text">Sr. Designer</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;