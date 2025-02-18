import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { TbImageInPicture } from "react-icons/tb";

const Step1 = ({ nextStep, handleChange, values }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2 className='text-[20px] font-bold text-heading'>Step 1: Personal Details</h2>
      </div>
      <div className='card-body'>
        <form className="flex gap-10">
          <div className="flex text-sm leading-6 text-gray-600 w-[20%] flex-col gap-5">
            <h3 className='text-heading font-bold text-[1.25rem]'>Employee Profile</h3>
            <label className="relative cursor-pointer text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px] h-[300px] flex justify-center items-center">
              <span>
                <TbImageInPicture className='text-[50px] text-primary-100' />
              </span>
              <input id="file-upload" name="file-upload" type="file" hidden />
            </label>
          </div>
          <div className="flex flex-col gap-6 w-[80%]">
            <div className='flex flex-col gap-5'>
              <h3 className='text-heading font-bold text-[1.25rem]'>Employee Details</h3>
              <div className='grid grid-cols-3 gap-6'>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Employee Id</label>
                  <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="employee id" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Employee Name</label>
                  <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="employee name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Designation</label>
                  <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="designation" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Total Experience</label>
                  <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="total experience" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Joining Date</label>
                  <input type="date" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="joining date" />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <h3 className='text-heading font-bold text-[1.25rem]'>Personal Details</h3>
              <div className='grid grid-cols-3 gap-6'>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Date Of Birth</label>
                  <input type="date" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="select" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Gender</label>
                  <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                    <option selected>Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Marital status</label>
                  <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                    <option selected>Select status</option>
                    <option>Single</option>
                    <option>Married</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 col-span-3">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">About Me</label>
                  <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="About Me" />
                </div>

              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <h3 className='text-heading font-bold text-[1.25rem]'>Contact Details</h3>
              <div className='flex flex-col gap-4'>
                <h3 className='text-heading font-bold text-[18px]'>Present address</h3>
                <div className='grid grid-cols-3 gap-6'>
                  <div className="flex flex-col gap-2 col-span-3">
                    <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Address line1" />
                  </div>
                  <div className="flex flex-col gap-2 col-span-3">
                    <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Address line2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select Country</label>
                    <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                      <option selected>Select country</option>
                      <option>India</option>
                      <option>USA</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select State</label>
                    <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                      <option selected>Select state</option>
                      <option>Gujarat</option>
                      <option>USA</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select City</label>
                    <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                      <option selected>Select city</option>
                      <option>Ahemdabad</option>
                      <option>USA</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Pincode</label>
                    <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Pincode" />
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
                    <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Address line1" />
                  </div>
                  <div className="flex flex-col gap-2 col-span-3">
                    <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Address line2" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select Country</label>
                    <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                      <option selected>Select country</option>
                      <option>India</option>
                      <option>USA</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select State</label>
                    <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                      <option selected>Select state</option>
                      <option>Gujarat</option>
                      <option>USA</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Select City</label>
                    <select className="text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]">
                      <option selected>Select city</option>
                      <option>Ahemdabad</option>
                      <option>USA</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Pincode</label>
                    <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Pincode" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='card-footer flex justify-end'>
        <button onClick={nextStep} className='btn-primary flex items-center gap-2'>Next <FaArrowRightLong className='text-white' /></button>
      </div>
    </div>
  );
};

export default Step1;