import userprofile from "../assets/user-profile.jpg"
import doc from "../assets/pan-card.webp"

import { FaArrowUpFromBracket } from "react-icons/fa6";

const ViewModal = ({ employee, onClose }) => {
    if (!employee) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

            <div className='card w-full max-w-[1500px] transform scale-95 h-[800px] overflow-y-auto'>
                <div className='card-header'>
                    <h2 className='text-[20px] font-bold text-heading'>Employee Details</h2>
                </div>
                <div className='card-body'>
                    <form className="flex flex-col gap-5">
                        <div className="flex gap-10">
                            <div className="flex text-sm leading-6 text-gray-600 w-[15%] flex-col gap-5">
                                <h3 className='text-heading font-bold text-[1.25rem]'>Employee Profile</h3>
                                <label className="relative cursor-pointer text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px] h-[205px] flex justify-center items-center">
                                    <span className="w-full h-full">
                                        <img src={userprofile} alt="John" className="object-cover object-center w-full h-full" />
                                    </span>
                                </label>
                            </div>
                            <div className="flex flex-col gap-6 w-[80%]">
                                <div className='flex flex-col gap-5'>
                                    <h3 className='text-heading font-bold text-[1.25rem]'>Employee Details</h3>
                                    <div className='grid grid-cols-3 gap-6'>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Employee Id</label>
                                            <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="08" readOnly />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Employee Name</label>
                                            <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="John" readOnly />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Designation</label>
                                            <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Developer" readOnly />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Total Experience</label>
                                            <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="5 years" readOnly />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Joining Date</label>
                                            <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="08/08/2025" readOnly />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <h3 className='text-heading font-bold text-[1.25rem]'>Personal Details</h3>
                                    <div className='grid grid-cols-3 gap-6'>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Date Of Birth</label>
                                            <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="08/08/1998" readOnly />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Gender</label>
                                            <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                                                <option>Select gender</option>
                                                <option selected>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Marital status</label>
                                            <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                                                <option>Select status</option>
                                                <option selected>Single</option>
                                                <option>Married</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-2 col-span-3">
                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">About Me</label>
                                            <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="I have a 5 years of exeperience as a developer" readOnly />
                                        </div>

                                    </div>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <h3 className='text-heading font-bold text-[1.25rem]'>Contact Details</h3>
                                    <div className='flex flex-col gap-4'>
                                        <h3 className='text-heading font-bold text-[18px]'>Present address</h3>
                                        <div className='grid grid-cols-3 gap-6'>
                                            <div className="flex flex-col gap-2 col-span-3">
                                                <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="456 Maple Avenue" readOnly />
                                            </div>
                                            <div className="flex flex-col gap-2 col-span-3">
                                                <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder=" Austin, TX 73301" readOnly />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select Country</label>
                                                <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                                                    <option>Select country</option>
                                                    <option>India</option>
                                                    <option selected>USA</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select State</label>
                                                <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                                                    <option>Select state</option>
                                                    <option>Gujarat</option>
                                                    <option selected>California</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select City</label>
                                                <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                                                    <option>Select city</option>
                                                    <option>Ahemdabad</option>
                                                    <option selected>Los Angeles</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Pincode</label>
                                                <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="90012" readOnly />
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
                                                <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="456 Maple Avenue" readOnly />
                                            </div>
                                            <div className="flex flex-col gap-2 col-span-3">
                                                <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Austin, TX 73301" readOnly />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select Country</label>
                                                <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                                                    <option >Select country</option>
                                                    <option>India</option>
                                                    <option selected>USA</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select State</label>
                                                <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                                                    <option>Select state</option>
                                                    <option>Gujarat</option>
                                                    <option selected>California </option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select City</label>
                                                <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                                                    <option >Select city</option>
                                                    <option>Ahemdabad</option>
                                                    <option selected>Los Angeles</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Pincode</label>
                                                <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder=" 90012" readOnly />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex text-sm leading-6 text-gray-600 w-[15%] flex-col gap-5">
                                <h3 className='text-heading font-bold text-[1.25rem]'>ID Proof</h3>
                                <label className="relative cursor-pointer text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px] h-[205px] flex justify-center items-center">
                                    <span className="w-full h-full">
                                        <img src={doc} alt="Pan" className="object-cover object-center w-full h-full" />
                                    </span>
                                </label>
                            </div>
                            <div className="flex flex-col gap-6 w-[80%]">
                                <div className='flex flex-col gap-5'>
                                    <h3 className='text-heading font-bold text-[1.25rem]'>Documents Details</h3>
                                    <div className='grid grid-cols-1 gap-6'>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Adhaar Card Number</label>
                                            <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Adhaar card number" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">PAN Card Number</label>
                                            <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="PAN card number" />
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
                        </div>
                    </form>
                </div>
                <div className='card-footer flex justify-end'>
                    <button className='btn-primary flex items-center gap-2' onClick={onClose}>Close</button>
                </div>
            </div>

        </div>
    );
};

export default ViewModal;
