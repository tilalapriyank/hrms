import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Step1 = ({ nextStep, handleChange, values }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2 className='text-[20px] font-bold text-heading'>Step 1: Personal Details</h2>
      </div>
      <div className='card-body'>
        <form className="flex gap-10">
          <div className="flex text-sm leading-6 text-gray-600 w-[20%]">
            <label className="relative cursor-pointer bg-white focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2 border-primary-500 p-[10px] rounded-tl-[10px] 2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-full sm:w-full w-full h-[400px] flex justify-center items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                  <path d="M25 12.8501C18.1063 12.8501 12.5 18.4563 12.5 25.3501C12.5 32.2438 18.1063 37.8501 25 37.8501C31.8937 37.8501 37.5 32.2438 37.5 25.3501C37.5 18.4563 31.8937 12.8501 25 12.8501ZM25 35.7668C19.2563 35.7668 14.5833 31.0938 14.5833 25.3501C14.5833 19.6063 19.2563 14.9334 25 14.9334C30.7437 14.9334 35.4167 19.6063 35.4167 25.3501C35.4167 31.0938 30.7437 35.7668 25 35.7668ZM5.20833 48.2668H14.5833V50.3501H5.20833C2.33542 50.3501 0 48.0147 0 45.1418V35.7668H2.08333V45.1418C2.08333 46.8647 3.48542 48.2668 5.20833 48.2668ZM47.9167 35.7668H50V45.1418C50 48.0147 47.6646 50.3501 44.7917 50.3501H35.4167V48.2668H44.7917C46.5146 48.2668 47.9167 46.8647 47.9167 45.1418V35.7668ZM50 5.55843V14.9334H47.9167V5.55843C47.9167 3.83551 46.5146 2.43343 44.7917 2.43343H35.4167V0.350098H44.7917C47.6646 0.350098 50 2.68551 50 5.55843ZM2.08333 14.9334H0V5.55843C0 2.68551 2.33542 0.350098 5.20833 0.350098H14.5833V2.43343H5.20833C3.48542 2.43343 2.08333 3.83551 2.08333 5.55843V14.9334Z" fill="#D1D8D8" />
                </svg>
              </span>
              <input id="file-upload" name="file-upload" type="file" hidden/>
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
      <div className='card-footer'>
        <button onClick={nextStep} className='btn-primary flex items-center gap-2'>Next <FaArrowRightLong className='text-white' /></button>
      </div>
    </div>
  );
};

export default Step1;