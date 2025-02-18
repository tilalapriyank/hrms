import { useState } from "react";
import userprofile from "../assets/user-profile.jpg"
import doc from "../assets/pan-card.webp"


import { FaArrowUpFromBracket } from "react-icons/fa6";

const ViewEmployee = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <>
            <div className="card">
                <div className="flex card-header justify-start">
                    <button
                        className={`tab-btn px-4 py-1 text-text font-medium hover:bg-primary-500 hover:text-white ${activeTab === "tab1" ? "bg-primary-500 text-white" : ""
                            }`}
                        onClick={() => setActiveTab("tab1")}
                    >
                        Personal Details
                    </button>
                    <button
                        className={`tab-btn px-4 py-1 text-text font-medium hover:bg-primary-500 hover:text-white ${activeTab === "tab2" ? "bg-primary-500 text-white" : ""
                            }`}
                        onClick={() => setActiveTab("tab2")}
                    >
                        Add Documents Detail
                    </button>
                    <button
                        className={`tab-btn px-4 py-1 text-text font-medium hover:bg-primary-500 hover:text-white ${activeTab === "tab3" ? "bg-primary-500 text-white" : ""
                            }`}
                        onClick={() => setActiveTab("tab3")}
                    >
                        Bank Account Details
                    </button>
                </div>

                <div className="card-body">
                    {activeTab === "tab1" && (
                        <>
                            <div className='card'>
                                <div className='card-body'>
                                    <form className="flex gap-10">
                                        <div className="flex text-sm leading-6 text-gray-600 w-[15%] flex-col gap-5">
                                            <h3 className='text-heading font-bold text-[1.25rem]'>Employee Profile</h3>
                                            <label className="relative cursor-pointer text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px] h-[205px] flex justify-center items-center">
                                                <span className="w-full h-full">
                                                    <img src={userprofile} alt="John" className="object-cover object-center w-full h-full" />
                                                </span>
                                            </label>
                                        </div>
                                        <div className="flex flex-col gap-5 w-[80%]">
                                            <div className='flex flex-col gap-5'>
                                                <h3 className='text-heading font-bold text-[1.25rem]'>Employee Details</h3>
                                                <div className='grid grid-cols-3 gap-5'>
                                                    <div className="flex flex-col gap-2">
                                                        <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Employee Id</label>
                                                        <span className="text-heading" >08</span>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Employee Name</label>
                                                        <span className="text-heading" >John</span>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Designation</label>
                                                        <span className="text-heading" >Developer</span>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Total Experience</label>
                                                        <span className="text-heading" >5 Years</span>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Joining Date</label>
                                                        <span className="text-heading">05/8/2012</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-5'>
                                                <h3 className='text-heading font-bold text-[1.25rem]'>Personal Details</h3>
                                                <div className='grid grid-cols-3 gap-6'>
                                                    <div className="flex flex-col gap-2">
                                                        <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Date Of Birth</label>
                                                        <span className="text-heading">05/8/2012</span>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Gender</label>
                                                        <span className="text-heading">Male</span>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Marital status</label>
                                                        <span className="text-heading">Single</span>
                                                    </div>
                                                    <div className="flex flex-col gap-2 col-span-3">
                                                        <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">About Me</label>
                                                        <span className="text-heading">I have a 5 years of experience as a developer</span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-5'>
                                                <h3 className='text-heading font-bold text-[1.25rem]'>Contact Details</h3>
                                                <div className='flex flex-col gap-4'>
                                                    <h3 className='text-heading font-bold text-[18px]'>Present address</h3>
                                                    <div className='grid grid-cols-3 gap-6'>
                                                        <div className="flex flex-col gap-2 col-span-3">
                                                            <span className="text-heading">Address Line1</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2 col-span-3">
                                                            <span className="text-heading">Address Line2</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select Country</label>
                                                            <span className="text-heading">India</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select State</label>
                                                            <span className="text-heading">Gujarat</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select City</label>
                                                            <span className="text-heading">Ahemdabad</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Pincode</label>
                                                            <span className="text-heading">3800021</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-4'>
                                                    <div className='flex justify-between items-center'>
                                                        <h3 className='text-heading font-bold text-[18px]'>Permanent address</h3>
                                                        <div className='flex gap-[10px] items-center'>
                                                            <input type="checkbox" className='focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-500 border-[1px] border-primary-500 w-5 h-5 rounded-tl-[5px]' />
                                                            <label className='text-[16px] font-medium text-heading leading-5'>Same as Present address</label>
                                                        </div>
                                                    </div>
                                                    <div className='grid grid-cols-3 gap-6'>
                                                        <div className="flex flex-col gap-2 col-span-3">
                                                            <span className="text-heading">Address Line1</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2 col-span-3">
                                                            <span className="text-heading">Address Line2</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select Country</label>
                                                            <span className="text-heading">India</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select State</label>
                                                            <span className="text-heading">Gujrat</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select City</label>
                                                            <span className="text-heading">Ahemdabad</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Pincode</label>
                                                            <span className="text-heading">3800021</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>
                    )
                    }
                    {
                        activeTab === "tab2" && (
                            <>
                                <div className='card'>
                                    <div className='card-body'>
                                        <form className="flex gap-10">
                                            <div className="flex text-sm leading-6 text-gray-600 w-[20%] flex-col gap-5">
                                                <div className='flex flex-col gap-2'>
                                                    <h3 className='text-heading font-bold text-[1.25rem]'>ID Proof</h3>
                                                    <p className='text-text font-regular text-[1rem]'>Upload any one ID Proof</p>
                                                </div>
                                                <label className="relative cursor-pointer text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px] h-[205px] flex justify-center items-center">
                                                    <span className="w-full h-full">
                                                        <img src={doc} alt="PAN" className="object-cover object-center w-full h-full" />
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="flex flex-col gap-6 w-[80%]">
                                                <div className='flex flex-col gap-5'>
                                                    <h3 className='text-heading font-bold text-[1.25rem]'>Documents Details</h3>
                                                    <div className='grid grid-cols-1 gap-6'>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Adhaar Card Number</label>
                                                            <span className="text-heading">0123-5236-25423</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">PAN Card Number</label>
                                                            <span className="text-heading">CNPQ25Q</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-5'>
                                                    <h3 className='text-heading font-bold text-[1.25rem]'>Resume</h3>
                                                    <div className='grid grid-cols-1 gap-6'>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max mb-2">Upload Resume</label>
                                                            <label className="relative cursor-pointer text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[20px] rounded-[5px] flex justify-center items-center">
                                                                <FaArrowUpFromBracket className='text-text text-[18px] text-primary-100' />
                                                                <input id="file-upload" name="file-upload" type="file" hidden />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    {
                        activeTab === "tab3" && (
                            <>
                                <div className='card'>
                                    <div className='card-body'>
                                        <form>
                                            <div className="flex flex-col gap-6">
                                                <div className='flex flex-col gap-5'>
                                                    <h3 className='text-heading font-bold text-[1.25rem]'>Bank Account Details</h3>
                                                    <div className='grid grid-cols-2 gap-6'>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Bank Name</label>
                                                            <span className="text-heading">Indian Bank</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Branch Name</label>
                                                            <span className="text-heading">Ahemdabad</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2 col-span-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Account Holder Name</label>
                                                            <span className="text-heading">John Walter</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Account Number</label>
                                                            <span className="text-heading">23957845691</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">IFSC Code</label>
                                                            <span className="text-heading">ISFC57Y541</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div >
            </div >
        </>
    );
};

export default ViewEmployee;
